import type { App, Config } from '@variousjs/various'

const DEFAULT_PACKAGES = {
  react: 'https://esm.sh/react@19.2.0',
  'react-dom': 'https://esm.sh/react-dom@19.2.0?deps=react@19.2.0',
  'react-dom/client': 'https://esm.sh/react-dom@19.2.0/client?deps=react@19.2.0',
  '@variousjs/various': 'https://esm.sh/@variousjs/various',
}
const ROOT = '#root'
const REACT_REQUIREMENT_VERSION = '18|19'

// Libraries that should be in the import map for component bare specifier resolution
const BASE_LIBRARIES = new Set([
  'react', 'react-dom', 'react-dom/client', 'react-router-dom', 'vue',
])

const { currentScript } = document
const { src } = currentScript as HTMLScriptElement
const corePath = src.replace(/\/loader(\.dev)?\.js$/, '/index$1.js')

// Resolve relative URLs against document base URL.
// In IIFE scripts, import() resolves relative to the script's URL (e.g. /dist/loader.js),
// not the document base URL. This fixes paths like './dist/app.js' -> '/dist/app.js'.
function resolveUrl(url: string): string {
  if (url.startsWith('http') || url.startsWith('/') || url.startsWith('blob:')) return url
  return new URL(url, document.baseURI).href
}

const onError = (error: Error) => {
  window.console.error(error)
  document.body.innerHTML = `<P style="white-space:pre-wrap">[APP_ERROR] ${error.message}</P>`
}

// Global registry - shared with core via window.__various
type Registry = {
  modules: Map<string, any>
  urls: Map<string, string>
  loaded: Map<string, any>
}

function getRegistry(): Registry {
  // eslint-disable-next-line no-underscore-dangle
  if (!window.__various) {
    // eslint-disable-next-line no-underscore-dangle
    window.__various = {
      modules: new Map(),
      urls: new Map(),
      loaded: new Map(),
    } as Registry
  }
  // eslint-disable-next-line no-underscore-dangle
  return window.__various as Registry
}

function setModule(name: string, mod: any): void {
  const { modules } = getRegistry()
  if (mod && typeof mod === 'object' && !('default' in mod)) {
    modules.set(name, { default: mod, ...mod })
  } else {
    modules.set(name, mod)
  }
}

// Generate import map from dependencies and inject into document.
// Must be called before any import() to ensure bare specifiers resolve.
function createImportMap(deps: Record<string, string>): void {
  const script = document.createElement('script')
  script.type = 'importmap'
  script.textContent = JSON.stringify({ imports: deps })
  document.head.appendChild(script)
}

// ---- Loader ----
async function loader(config: Config) {
  const {
    dependencies,
    earlyParallelDependencies = [],
  } = config

  const allDeps: Record<string, string> = {
    ...DEFAULT_PACKAGES,
    '@variousjs/various': corePath,
    ...dependencies,
  }

  // Resolve relative URLs to absolute.
  // In IIFE scripts, import() resolves relative to the script's URL (e.g. /dist/loader.js),
  // not the document base URL. Resolving upfront ensures correct paths.
  Object.keys(allDeps).forEach((key) => {
    allDeps[key] = resolveUrl(allDeps[key])
  })

  // Generate import map before any import() calls.
  // This allows components to use bare specifiers like `import 'react'`.
  createImportMap(allDeps)

  // Provide require() shim for CJS dependencies (e.g. nycticorax) that call
  // require('react') internally. Resolves from the module registry.
  const { modules: regModules, urls: regUrls } = getRegistry()
  const requireShim = (name: string) => {
    if (regModules.has(name)) {
      const mod = regModules.get(name)
      return mod && typeof mod === 'object' && 'default' in mod ? mod.default : mod
    }
    return undefined
  }
  // eslint-disable-next-line semi-style
  ;(window as any).require = requireShim

  const dependencieNames = Object.keys(dependencies)
  const parallels = earlyParallelDependencies
    .filter((name) => dependencieNames.includes(name))

  const loadStart = +new Date()

  // Step 1: Load base libraries via native import()
  const libNames = Array.from(BASE_LIBRARIES)
  const libEntries = libNames.filter((name) => allDeps[name])

  const libMods = await Promise.all(
    libEntries.map((name) => import(/* @vite-ignore */ allDeps[name])),
  )
  libEntries.forEach((name, i) => {
    setModule(name, libMods[i])
  })

  // Step 2: Load parallel component deps
  await Promise.all(
    parallels.map((name) => {
      const url = allDeps[name]
      if (url && !BASE_LIBRARIES.has(name)) {
        // Register URL before loading so defineDependencies can detect
        // same URL and skip deletion (keeps preloaded modules in registry)
        regUrls.set(name, url)
        return import(/* @vite-ignore */ url).then((mod) => {
          setModule(name, mod)
        })
      }
      return Promise.resolve()
    }),
  )

  // Step 3: Load core
  const variousMod = await import(/* @vite-ignore */ corePath) as any
  setModule('@variousjs/various', variousMod)

  // Step 4: Load app entry
  const entryMod = await import(/* @vite-ignore */ allDeps.app) as any

  const various = variousMod.default || variousMod
  const entry = entryMod.default || entryMod

  const React = (libMods[libEntries.indexOf('react')] as any)?.default
  const ReactDOM = (libMods[libEntries.indexOf('react-dom')] as any)?.default
  const reactDomClientIdx = libEntries.indexOf('react-dom/client')
  const ReactDOMClient = reactDomClientIdx >= 0
    ? (libMods[reactDomClientIdx] as any)?.default
    : ReactDOM

  const versionRegex = new RegExp(`^${REACT_REQUIREMENT_VERSION}\\.`)
  if (!React || !ReactDOM
    || !versionRegex.test(React.version)
    || !versionRegex.test(ReactDOM.version)) {
    const error = new Error(`

React/ReactDOM Version Requirement

Current: React v${React?.version} / ReactDOM v${ReactDOM?.version}

Important: This application only works with React/ReactDOM ${REACT_REQUIREMENT_VERSION}`)
    onError(error)
    return
  }

  const app = (entry.default || entry) as App
  const loadEnd = +new Date()

  // Register dependency URLs for component modules.
  // Base libraries are already in the registry via setModule.
  const componentDeps: Record<string, string> = {}
  Object.entries(allDeps).forEach(([key, url]) => {
    if (!BASE_LIBRARIES.has(key)
      && key !== '@variousjs/various' && key !== 'app') {
      componentDeps[key] = url
    }
  })
  various.defineDependencies?.(componentDeps)

  app.middlewares?.onLoad?.({
    module: 'app',
    loadStart,
    loadEnd,
    beenLoaded: false,
  })

  const VariousApp = various.getApp({ ...config, ...app })
  ReactDOMClient.createRoot(document.querySelector(config.root || ROOT) as Element)
    .render(React.createElement(VariousApp))
}

loader(window.VARIOUS_CONFIG).catch(onError)
