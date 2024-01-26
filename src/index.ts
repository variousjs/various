import { Entry, Config } from '@variousjs/various'
import { DEFAULT_PACKAGES } from './config'
import { Various, EntryWithDefault } from './types'

declare global {
  interface Require { s: any }
  interface Window { VARIOUS_CONFIG: Config }
}

const { currentScript } = document
const { src } = currentScript as HTMLScriptElement
const corePath = src.replace('index.js', 'core.js')

function loader(config: Config) {
  const { dependencies, entry: entryPath, timeout } = config
  const paths: Config['dependencies'] = {
    ...DEFAULT_PACKAGES,
    ...dependencies,
    VARIOUS_ENTRY: entryPath,
    '@variousjs/various': corePath,
  }

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

  window.requirejs(
    ['@variousjs/various', 'VARIOUS_ENTRY'],
    (various: Various, entry: { default: Entry | EntryWithDefault }) => {
      const entryCtx = (entry.default || entry) as Entry
      various.default({ ...config, ...entryCtx })
    },
  )
}

loader(window.VARIOUS_CONFIG)
