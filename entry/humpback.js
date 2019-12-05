const packages = {
  react: 'https://unpkg.com/react@16.12.0/umd/react.production.min',
  'react-dom': 'https://unpkg.com/react-dom@16.12.0/umd/react-dom.production.min',
  'react-router-dom': 'https://unpkg.com/react-router-dom@5.1.2/umd/react-router-dom.min',
  'nycticorax': 'https://unpkg.com/nycticorax@1.1.0/lib/index',
  humpback: './components/index'
}

window.humpback = (config) => {
  const { routers } = config
  let paths = {}

  routers.forEach(({ components }) => {
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
