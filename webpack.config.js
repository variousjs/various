const { resolve, join } = require('path')

const { ENTRY } = process.env

const config = {
  entry: join(__dirname, ENTRY),
  output: {},
  externals: {
    react: {
      root: 'React',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      amd: 'react-dom',
    },
    'react-router-dom': {
      root: 'ReactRouterDOM',
      amd: 'react-router-dom',
    },
    nycticorax: {
      root: 'Nycticorax',
      amd: 'nycticorax',
    },
  },
  mode: 'production',
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-typescript',
              ['@babel/preset-env', {
                targets: { esmodules: true },
                modules: false,
              }],
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
}

if (ENTRY === 'src/index.ts') {
  config.output.path = resolve(__dirname, './dist')
  config.output.filename = 'index.js'
  config.module.rules[0].use.options.presets[1][1].targets = ['defaults']
} else {
  config.externals.antd = { root: 'antd', amd: 'antd' }
  config.externals['rc-table'] = { root: 'rcTable', amd: 'rc-table' }
  config.externals.table = { root: 'Tb', amd: 'table' }

  const name = ENTRY.split('/').slice(-1)[0].split('.')[0]

  config.output = {
    path: resolve(__dirname, './docs/dist'),
    filename: `${name}.js`,
    libraryTarget: 'amd',
  }
}

module.exports = config
