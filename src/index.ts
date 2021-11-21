import { Config } from '@variousjs/various'
import { DEFAULT_PACKAGES } from './config'
import { Entry, RequireJsError, Various } from './types'

class Loader {
  private errorFn: RequireJsError

  private config: Config

  private paths: { [key: string]: string }

  constructor(config: Config) {
    const { dependencies, components, entry } = config || {}
    const paths = {
      ...DEFAULT_PACKAGES,
      ...dependencies,
      ...components,
      'various-entry': entry,
      'various-core': 'path/to/core',
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
    const requires = ['various-core']
    if (this.paths['various-entry']) {
      requires.push('various-entry')
    }
    window.requirejs(requires, (various: Various, entry: Entry) => {
      various({ ...this.config, ...entry }, this)
    }, this.errorFn)
  }

  public set onError(fn: RequireJsError) {
    this.errorFn = fn
  }
}

declare global {
  interface Window { Various: typeof Loader }
}

window.Various = Loader
