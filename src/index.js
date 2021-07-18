import { DEFAULT_PACKAGES } from './config'
import getHumpback from './humpback'

window.Humpback = class {
  constructor(config = {}) {
    const { dependencies, components, entry } = config
    const paths = {
      ...DEFAULT_PACKAGES,
      ...dependencies,
      ...components,
      $entry_component: entry,
    }

    Object.keys(paths).forEach((name) => {
      paths[name] = `${paths[name]}#`
    })

    window.requirejs.config({ paths, waitSeconds: 20 })

    this.config = config
    this.paths = paths
    this.errorFn = (e) => document.write(e.message)
  }

  start() {
    const requires = ['react', 'react-dom', 'react-router-dom', 'nycticorax']
    if (this.paths.$entry_component) {
      requires.push('$entry_component')
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
