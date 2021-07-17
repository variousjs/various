import { DEFAULT_PACKAGES } from './config'
import { version } from '../package.json'
import getHumpback from './humpback'

window.Humpback = class {
  constructor(config = {}) {
    const { dependencies, components } = config
    const paths = { ...DEFAULT_PACKAGES, ...dependencies, ...components }

    Object.keys(paths).forEach((name) => {
      paths[name] = `${paths[name]}#`
    })

    window.requirejs.config({ paths, waitSeconds: 30 })

    this.config = config
    this.paths = paths
    this.version = version
    this.errorFn = (e) => document.write(e.message)
  }

  start() {
    const requires = ['react', 'react-dom', 'react-router-dom', 'nycticorax']
    if (this.paths.global) {
      requires.push('global')
    }
    window.requirejs(requires, (React, ReactDom, ReactRouterDom, Nycticorax, global = {}) => {
      const humpback = getHumpback(React, ReactDom, ReactRouterDom, Nycticorax)
      humpback({ ...this.config, ...global }, this)
    }, (e) => this.errorFn(e))
  }

  set onError(fn) {
    this.errorFn = fn
  }

  require(...args) {
    window.requirejs(...args)
    return this
  }
}
