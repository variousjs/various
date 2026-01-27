import '@variousjs/requirejs'
import { App, Config } from '@variousjs/various'
import {
  Various,
  AppWithDefault,
  ReactType,
  ReactDOMType,
} from './types'

const DEFAULT_PACKAGES = {
  react: 'https://unpkg.com/@variousjs/registry@0.1.9/dist/react/19.2.0/index.js',
  'react-dom': 'https://unpkg.com/@variousjs/registry@0.1.9/dist/react-dom/19.2.0/index.js',
  '@variousjs/various': 'https://unpkg.com/@variousjs/various/dist/index.js',
}
const ROOT = '#root'
const REACT_REQUIREMENT_VERSION = '18|19'

const { currentScript } = document
const { src } = currentScript as HTMLScriptElement
const corePath = src.replace(/\/loader(\.dev)?\.js$/, '/index$1.js') // loader.js => index.js / loader.dev.js => index.dev.js

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
    shim: {
      vue: {
        exports: 'Vue',
      },
    },
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
      React: ReactType,
      ReactDOM: ReactDOMType,
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
        module: 'app',
        loadStart,
        loadEnd,
        beenLoaded: false,
      })

      const VariousApp = various.getApp({ ...config, ...app })
      ReactDOM.createRoot(document.querySelector(config.root || ROOT) as Element)
        .render(<VariousApp />)
    },
    onError,
  )
}

loader(window.VARIOUS_CONFIG)
