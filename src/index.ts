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
  const {
    dependencies,
    entry: entryPath,
    timeout,
    earlyParallelComponents = [],
  } = config
  const paths: Config['dependencies'] = {
    ...DEFAULT_PACKAGES,
    ...dependencies,
    VARIOUS_ENTRY: entryPath,
  }

  if (corePath) {
    paths['@variousjs/various'] = corePath
  }

  const dependencieNames = Object.keys(dependencies)
  const parallels = earlyParallelComponents
    .filter((name) => dependencieNames.includes(name))

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

  const loadStart = +new Date()

  window.requirejs(
    [
      '@variousjs/various',
      'VARIOUS_ENTRY',
      'react',
      'react-dom',
      ...parallels,
    ],
    (various: Various, entry: { default: Entry | EntryWithDefault }) => {
      const entryCtx = (entry.default || entry) as Entry
      const loadEnd = +new Date()

      entryCtx.middlewares?.performance?.({
        component: 'entry',
        loadStart,
        loadEnd,
        duration: loadEnd - loadStart,
      })

      various.default({ ...config, ...entryCtx })
    },
  )
}

loader(window.VARIOUS_CONFIG)
