import { DEFAULT_PACKAGES } from './config'
import { Entry, Various, Config } from './types'

declare global {
  interface Require { s: any }
  interface Window { VARIOUS_CONFIG: Config }
}

const { currentScript } = document
const { src } = currentScript as HTMLScriptElement
const corePath = src.replace('index.js', 'core.js')

function loader(config: Config) {
  const { dependencies, components, entry: entryPath, timeout } = config
  const paths = {
    ...DEFAULT_PACKAGES,
    ...dependencies,
    ...components,
    'various-entry': entryPath,
    '@variousjs/various': corePath,
  } as Record<string, string>

  Object.keys(paths).forEach((name, i) => {
    paths[name] = `${paths[name]}#${i}`
  })

  window.requirejs.config({
    paths,
    waitSeconds: timeout || 10,
    onNodeCreated(node) {
      node.setAttribute('crossorigin', 'anonymous')
    },
  })

  window.requirejs(['@variousjs/various', 'various-entry'], (various: Various, entry: Entry) => {
    various.default({ ...config, ...entry })
  })
}

loader(window.VARIOUS_CONFIG)
