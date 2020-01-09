import { DEFAULT_PACKAGES, SCRIPT_SRC } from './config'

window.Humpback = class {
  constructor(config = {}) {
    const { packages } = config
    const paths = { ...DEFAULT_PACKAGES, ...packages }

    paths.humpback = SCRIPT_SRC
      .split('/')
      .slice(0, -1)
      .concat(['humpback.js'])
      .join('/')

    Object.keys(paths).forEach((name) => {
      paths[name] = paths[name].slice(0, -3)
    })

    window.requirejs.config({ paths, waitSeconds: 30 })

    this.config = config
    this.paths = paths
  }

  start() {
    const requires = this.paths.global ? ['humpback', 'global'] : ['humpback']
    window.requirejs(requires, (initiator, global = {}) => {
      initiator({ ...this.config, ...global })
    }, (e) => {
      document.write(e.message || 'Initialization error')
    })
  }

  require(...args) {
    window.requirejs(...args)
    return this
  }
}
