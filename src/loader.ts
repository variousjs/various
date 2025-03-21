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
    earlyParallelDependencies = [],
  } = config
  const paths: Config['dependencies'] = {
    ...DEFAULT_PACKAGES,
    '@variousjs/various': corePath,
    ...dependencies,
  }

  const dependencieNames = Object.keys(dependencies)
  const parallels = earlyParallelDependencies
    .filter((name) => dependencieNames.includes(name))

  Object.keys(paths).forEach((name) => {
    paths[name] = `${paths[name]}#${name}`
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

      app.middlewares?.onLoad?.({
        name: 'app',
        loadStart,
        loadEnd,
        beenLoaded: false,
      })

      various.default({ ...config, ...app })
    },
    (error: Error) => {
      window.console.error(error)
      document.body.innerHTML = `[APP_ERROR] ${error.message}`
    },
  )
}

loader(window.VARIOUS_CONFIG)
