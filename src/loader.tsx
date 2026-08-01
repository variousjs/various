/* global System */
import 'systemjs/dist/system.js'
import { App, Config } from '@variousjs/various'

// Map bare specifiers (like 'react', 'vue') to valid URLs so SystemJS
// doesn't log W3 warnings when calling System.set/get/has/delete.
// URLs (absolute with protocol or relative starting with ./ or /) pass through.
function registryKey(id: string): string {
  if (id.includes('://') || id.startsWith('./') || id.startsWith('/')) return id
  return `variousjs://${id}`
}
const {
  set, get, has, delete: del,
} = System
System.set = (id: string, mod: any) => set.call(System, registryKey(id), mod)
System.get = ((id: string) => get.call(System, registryKey(id))) as typeof System.get
System.has = (id: string) => has.call(System, registryKey(id))
System.delete = (id: string) => del.call(System, registryKey(id))

const DEFAULT_PACKAGES = {
  react: 'https://esm.sh/react@19.2.0',
  'react-dom': 'https://esm.sh/react-dom@19.2.0?deps=react@19.2.0',
  'react-dom/client': 'https://esm.sh/react-dom@19.2.0/client?deps=react@19.2.0',
  '@variousjs/various': 'https://esm.sh/@variousjs/various',
}
const ROOT = '#root'
const REACT_REQUIREMENT_VERSION = '18|19'

const { currentScript } = document
const { src } = currentScript as HTMLScriptElement
const corePath = src.replace(/\/loader(\.dev)?\.js$/, '/index$1.js')

const onError = (error: Error) => {
  window.console.error(error)
  document.body.innerHTML = `<P style="white-space:pre-wrap">[APP_ERROR] ${error.message}</P>`
}

// Libraries loaded via native ESM import() — no AMD shim needed
const ESM_LIBRARIES = new Set([
  'react', 'react-dom', 'react-dom/client', 'react-router-dom', 'vue',
])

function registerModule(name: string, mod: any): void {
  if (!mod) return
  const ns: Record<string, any> = { default: mod }
  if (typeof mod === 'object') {
    Object.keys(mod).forEach((k) => { ns[k] = mod[k] })
  }
  System.set(name, ns)
}

// Load ESM module via dynamic <script type="module"> with blob URL.
// This avoids Vite transforming import() in IIFE format and uses native ESM loading.
let esmCounter = 0

function loadESM(url: string, moduleName: string): Promise<any> {
  const key = `__esm_${esmCounter}`
  const code = `import * as m from ${JSON.stringify(url)}; window.${key} = m;`
  const blob = new Blob([code], { type: 'text/javascript' })
  const blobUrl = URL.createObjectURL(blob)
  const script = document.createElement('script')
  script.type = 'module'
  script.src = blobUrl

  return new Promise((resolve, reject) => {
    const cleanup = () => {
      URL.revokeObjectURL(blobUrl)
      delete (window as any)[key]
    }
    script.onload = () => {
      const mod = (window as any)[key]
      cleanup()
      if (!mod) {
        reject(new Error(`Failed to load ESM: ${url}`))
        return
      }
      registerModule(moduleName, mod.default || mod)
      resolve(mod.default || mod)
    }
    script.onerror = () => {
      cleanup()
      reject(new Error(`Failed to load ESM: ${url}`))
    }
    document.head.appendChild(script)
    esmCounter += 1
  })
}

// ---- Loader ----
function loader(config: Config) {
  const {
    dependencies,
    earlyParallelDependencies = [],
  } = config

  const allDeps: Config['dependencies'] = {
    ...DEFAULT_PACKAGES,
    '@variousjs/various': corePath,
    ...dependencies,
  }

  const dependencieNames = Object.keys(dependencies)
  const parallels = earlyParallelDependencies
    .filter((name) => dependencieNames.includes(name))

  const loadStart = +new Date()

  // Step 1: Load all ESM libraries in parallel (browser resolves deps via import map)
  const libPromises: Promise<any>[] = []
  ESM_LIBRARIES.forEach((name) => {
    if (allDeps[name]) {
      libPromises.push(loadESM(allDeps[name], name))
    }
  })

  Promise.all(libPromises)
    .then(() => {
      // Step 2: Load parallel component deps via SystemJS
      const parallelPromises: Promise<any>[] = []
      parallels.forEach((name) => {
        const url = allDeps[name]
        if (url && !ESM_LIBRARIES.has(name)) {
          parallelPromises.push(
            System.import(url).then((mod: any) => {
              System.set(name, mod)
              return mod
            }),
          )
        }
      })
      return Promise.all(parallelPromises)
    })
    .then(() => System.import(corePath))
    .then((variousMod: any) => {
      System.set('@variousjs/various', variousMod)
      return System.import(allDeps.app).then((entryMod: any) => [variousMod, entryMod])
    })
    .then(([variousMod, entryMod]: any) => {
      const various = variousMod.default || variousMod
      const entry = entryMod.default || entryMod
      const React = System.get('react') as any
      const ReactDOM = System.get('react-dom') as any
      const ReactDOMClient = (System.get('react-dom/client') || ReactDOM) as any

      const versionRegex = new RegExp(`^${REACT_REQUIREMENT_VERSION}\\.`)
      if (!versionRegex.test(React.version) || !versionRegex.test(ReactDOM.version)) {
        const error = new Error(`

React/ReactDOM Version Requirement

Current: React v${React.version} / ReactDOM v${ReactDOM.version}

Important: This application only works with React/ReactDOM ${REACT_REQUIREMENT_VERSION}`)
        onError(error)
        return
      }

      const app = (entry.default || entry) as App
      const loadEnd = +new Date()

      // Register dependency URLs for component modules only.
      // ESM libraries are already in the SystemJS registry via System.set.
      const componentDeps: Record<string, string> = {}
      Object.entries(allDeps).forEach(([key, url]) => {
        if (!ESM_LIBRARIES.has(key)
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
        .render(<VariousApp />)
    })
    .catch(onError)
}

loader(window.VARIOUS_CONFIG)
