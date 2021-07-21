import N from 'nycticorax'
import { DEFAULT_PACKAGES } from './config'
// import getHumpback from './humpback'

type E = typeof window.requirejs.onError
type Config = {
  dependencies?: { [key: string]: string },
  components?: { [key: string]: string },
  entry?: string,
}

class Humpback {
  private errorFn: E

  private config: Config

  private paths: { [key: string]: string }

  constructor(config: Config = {}) {
    const { dependencies, components, entry } = config
    const paths = {
      ...DEFAULT_PACKAGES,
      ...dependencies,
      ...components,
      $entry_component: entry,
    } as { [key: string]: string }

    Object.keys(paths).forEach((name) => {
      paths[name] = `${paths[name]}#`
    })

    window.requirejs.config({ paths, waitSeconds: 20 })

    this.config = config
    this.paths = paths
    this.errorFn = (e) => document.write(e.message)
  }

  public start() {
    const requires = ['react', 'react-dom', 'react-router-dom', 'nycticorax']
    if (this.paths.$entry_component) {
      requires.push('$entry_component')
    }
    window.requirejs(requires, (
      React: typeof window.React,
      ReactDom: typeof window.ReactDOM,
      ReactRouterDom: unknown,
      Nycticorax: typeof N,
      global = {},
    ) => {
      console.log(global)
      // const humpback = getHumpback(React, ReactDom, ReactRouterDom, Nycticorax)
      // humpback({ ...this.config, ...global }, this)
    }, this.errorFn)
  }

  public set onError(fn: E) {
    this.errorFn = fn
  }
}

declare global {
  interface Window { Humpback: typeof Humpback }
}

window.Humpback = Humpback
