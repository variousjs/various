const packages = {
  react: 'https://unpkg.com/react@16.12.0/umd/react.production.min',
  'react-dom': 'https://unpkg.com/react-dom@16.12.0/umd/react-dom.production.min',
  'react-router-dom': 'https://unpkg.com/react-router-dom@5.1.2/umd/react-router-dom.min',
  'nycticorax': 'https://unpkg.com/nycticorax@1.1.0/lib/index',
  antd: 'https://unpkg.com/antd@3.26.0/dist/antd-with-locales.min',
  moment: 'https://unpkg.com/moment@2.24.0/moment',
  humpback: './components/index'
}

window.humpback = (config) => {
  const { routes } = config
  let paths = {}

  routes.forEach(({ components }) => {
    paths = { ...paths, ...components }
  })

  Object.keys(paths).forEach((name) => {
    paths[name] = paths[name].slice(0, -3)
  })

  window.requirejs.config({
    paths: { ...paths, ...packages }
  })

  require(['humpback'], (humpback) => humpback(config))
}
