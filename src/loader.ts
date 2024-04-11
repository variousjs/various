import '@variousjs/requirejs'
import { App, Config } from '@variousjs/various'
import { DEFAULT_PACKAGES } from './config'
import { Various, AppWithDefault } from './types'

declare global {
  interface Require { s: any }
  interface Window { VARIOUS_CONFIG: Config }
}

const { currentScript } = document
const { src } = currentScript as HTMLScriptElement
const corePath = src.replace('loader.js', 'index.js')

function loader(config: Config) {
  const {
    dependencies,
    timeout,
    earlyParallelComponents = [],
  } = config
  const paths: Config['dependencies'] = {
    ...DEFAULT_PACKAGES,
    ...dependencies,
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
      'app',
      'react',
      'react-dom',
      ...parallels,
    ],
    (various: Various, entry: { default: App | AppWithDefault }) => {
      const app = (entry.default || entry) as App
      const loadEnd = +new Date()

      app.middlewares?.load?.({
        name: 'app',
        loadStart,
        loadEnd,
        duration: loadEnd - loadStart,
        beenLoaded: false,
      })

      various.default({ ...config, ...app })
    },
  )
}

loader(window.VARIOUS_CONFIG)
