import { DEFAULT_PACKAGES } from './config'
import getHumpback from './humpback'
import {
  Config, Ny, Hr, Br, Sw, Entry, OnError,
} from './types'

class Humpback {
  private errorFn: OnError

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
      ReactDOM: typeof window.ReactDOM,
      ReactRouterDOM: { HashRouter: Hr, BrowserRouter: Br, Switch: Sw },
      Nycticorax: Ny,
      entry: Entry,
    ) => {
      const humpback = getHumpback(React, ReactDOM, ReactRouterDOM, Nycticorax)
      humpback({ ...this.config, ...entry }, this)
    }, this.errorFn)
  }

  public set onError(fn: OnError) {
    this.errorFn = fn
  }
}

declare global {
  interface Window { Humpback: typeof Humpback }
}

window.Humpback = Humpback
