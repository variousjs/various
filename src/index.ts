import 'core-js-pure/stable'
import 'regenerator-runtime/runtime'
import { Config } from '@variousjs/various'
import { DEFAULT_PACKAGES } from './config'
import getVarious from './core'
import { Entry, Dependency } from './types'

class Various {
  private errorFn: Dependency.RequireJsError

  private config: Config

  private paths: { [key: string]: string }

  constructor(config: Config) {
    const { dependencies, components, entry } = config || {}
    const paths = {
      ...DEFAULT_PACKAGES,
      ...dependencies,
      ...components,
      $entry_component: entry,
    } as { [key: string]: string }

    Object.keys(paths).forEach((name, i) => {
      paths[name] = `${paths[name]}#${i}`
    })

    window.requirejs.config({
      paths,
      waitSeconds: 20,
      onNodeCreated(node) {
        node.setAttribute('crossorigin', 'anonymous')
      },
    })

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
      const various = getVarious(React, ReactDOM, ReactRouterDOM, Nycticorax)
      various({ ...this.config, ...entry }, this)
    }, this.errorFn)
  }

  public set onError(fn: Dependency.RequireJsError) {
    this.errorFn = fn
  }
}

declare global {
  interface Window { Various: typeof Various }
}

window.Various = Various
