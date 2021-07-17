const { NODE_ENV } = process.env
const output = { filename: `${NODE_ENV}.js` }

let targets = ['defaults']

if (NODE_ENV !== 'index') {
  output.library = NODE_ENV
  output.libraryTarget = 'amd'
  output.libraryExport = 'default'

  targets = { esmodules: true }
}

if (NODE_ENV === 'global') {
  output.library = '$entry_component'
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
    {
      name: 'rc-table',
      amd: 'rc-table',
      root: 'rcTable',
    },
    {
      name: 'table',
      amd: 'table',
      root: 'Tb',
    },
  ],
  targets,
  // report: true,
}
