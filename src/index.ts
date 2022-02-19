import { DEFAULT_PACKAGES } from './config'
import { Entry, Various, Config } from './types'

const { currentScript } = document
const { src } = currentScript as HTMLScriptElement
const corePath = src.replace('index.js', 'core.js')

function loader(config: Config) {
  const { dependencies, components, entry: entryPath } = config
  const paths = {
    ...DEFAULT_PACKAGES,
    ...dependencies,
    ...components,
    'various-entry': entryPath,
    '@variousjs/various': corePath,
  } as { [key: string]: string }

  Object.keys(paths).forEach((name, i) => {
    paths[name] = `${paths[name]}#${i}`
  })

  window.requirejs.config({
    paths,
    waitSeconds: 20,
    onNodeCreated(node) {
      node.setAttribute('crossorigin', 'anonymous')
    },
  })

  window.requirejs(['@variousjs/various', 'various-entry'], (various: Various, entry: Entry) => {
    various.default({ ...config, ...entry })
  })
}

loader(window.VARIOUS_CONFIG)
