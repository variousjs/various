const { resolve, join } = require('path')

const { ENTRY, LIBRARY } = process.env

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

if (!LIBRARY) {
  config.output.path = resolve(__dirname, './dist')
  config.output.filename = 'index.js'
  config.module.rules[0].use.options.presets[1][1].targets = ['defaults']
}

if (LIBRARY) {
  const map = {
    entry: '$entry_component',
    a: 'a',
    b: 'b',
    c: 'c',
    d: 'd',
    e: 'e',
    f: 'f',
  }

  config.externals.antd = { root: 'antd', amd: 'antd' }
  config.externals['rc-table'] = { root: 'rcTable', amd: 'rc-table' }
  config.externals.table = { root: 'Tb', amd: 'table' }

  config.output = {
    path: resolve(__dirname, './docs/dist'),
    filename: `${LIBRARY}.js`,
    library: map[LIBRARY],
    libraryTarget: 'amd',
    libraryExport: 'default',
  }
}

module.exports = config
