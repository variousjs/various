import { DEFAULT_PACKAGES } from './config'

const { src } = document.currentScript

window.humpback = (config) => {
  const { routes, packages } = config

  let paths = {}

  routes.forEach(({ components }) => {
    paths = { ...paths, ...components }
  })

  paths = { ...DEFAULT_PACKAGES, ...packages, ...paths }

  paths.humpback = src
    .split('/')
    .slice(0, -1)
    .concat(['humpback.js'])
    .join('/')

  Object.keys(paths).forEach((name) => {
    paths[name] = paths[name].slice(0, -3)
  })

  window.requirejs.config({ paths })

  window.require(['humpback', 'base'], (humpback, base) => {
    humpback({ ...config, ...base })
  })
}
