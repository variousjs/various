import '@variousjs/requirejs'
import { App, Config } from '@variousjs/various'
import { DEFAULT_PACKAGES, REACT_REQUIREMENT_VERSION } from './config'
import { Various, AppWithDefault, ReactWithVersion } from './types'

declare global {
  interface Window { VARIOUS_CONFIG: Config }
}

const { currentScript } = document
const { src } = currentScript as HTMLScriptElement
const corePath = src.replace('loader.js', 'index.js')

const onError = (error: Error) => {
  window.console.error(error)
  document.body.innerHTML = `<P style="white-space:pre-wrap">[APP_ERROR] ${error.message}</P>`
}

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
    (
      various: Various,
      entry: { default: App | AppWithDefault },
      React: ReactWithVersion,
      ReactDOM: ReactWithVersion,
    ) => {
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

      app.middlewares?.onLoad?.({
        name: 'app',
        loadStart,
        loadEnd,
        beenLoaded: false,
      })

      various.default({ ...config, ...app })
    },
    onError,
  )
}

loader(window.VARIOUS_CONFIG)
