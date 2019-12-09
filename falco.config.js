const { NODE_ENV } = process.env
const output = {
  filename: `${NODE_ENV}.js`,
}

if (NODE_ENV !== 'index' && NODE_ENV !== 'config') {
  output.library = NODE_ENV
  output.libraryTarget = 'amd'
  output.libraryExport = 'default'
}

module.exports = {
  output,
  externals: [
    {
      name: 'react',
      root: 'React',
      amd: 'react',
    },
    {
      name: 'react-dom',
      root: 'ReactDOM',
      amd: 'react-dom',
    },
    {
      name: 'react-router-dom',
      root: 'ReactRouterDOM',
      amd: 'react-router-dom',
    },
    {
      name: 'nycticorax',
      root: 'nycticorax',
      amd: 'nycticorax',
    },
    {
      name: 'antd',
      root: 'antd',
      amd: 'antd',
    },
  ],
}
