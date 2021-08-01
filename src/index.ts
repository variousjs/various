import 'core-js-pure/stable'
import 'regenerator-runtime/runtime'
import { DEFAULT_PACKAGES } from './config'
import getHumpback from './humpback'
import {
  HumpbackConfig, Entry, Dependency,
} from './types'

class Humpback {
  private errorFn: Dependency.RequireJsError

  private config: HumpbackConfig

  private paths: { [key: string]: string }

  constructor(config: HumpbackConfig) {
    const { dependencies, components, entry } = config || {}
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
      React: Dependency.React,
      ReactDOM: Dependency.ReactDOM,
      ReactRouterDOM: Dependency.ReactRouterDOM,
      Nycticorax: Dependency.Nycticorax,
      entry: Entry,
    ) => {
      const humpback = getHumpback(React, ReactDOM, ReactRouterDOM, Nycticorax)
      humpback({ ...this.config, ...entry }, this)
    }, this.errorFn)
  }

  public set onError(fn: Dependency.RequireJsError) {
    this.errorFn = fn
  }
}

declare global {
  interface Window { Humpback: typeof Humpback }
}

window.Humpback = Humpback
