import 'core-js/stable'
import 'regenerator-runtime/runtime'

const DEFAULT_PACKAGES = {
  react: 'https://unpkg.com/react@16.12.0/umd/react.production.min.js',
  'react-dom': 'https://unpkg.com/react-dom@16.12.0/umd/react-dom.production.min.js',
  'react-router-dom': 'https://unpkg.com/react-router-dom@5.1.2/umd/react-router-dom.min.js',
  'nycticorax': 'https://unpkg.com/nycticorax@1.1.0/lib/index.js',
}

const { src } = document.currentScript

window.humpback = (config) => {
  const { packages } = config
  const paths = { ...DEFAULT_PACKAGES, ...packages }

  paths.humpback = src
    .split('/')
    .slice(0, -1)
    .concat(['humpback.js'])
    .join('/')

  Object.keys(paths).forEach((name) => {
    paths[name] = paths[name].slice(0, -3)
  })

  window.requirejs.config({ paths, waitSeconds: 30 })

  window.require(['humpback', 'base'], (humpback, base) => {
    humpback({ ...config, ...base })
  })
}
