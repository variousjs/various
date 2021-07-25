const { resolve, join } = require('path')

const { ENTRY, LIBRARY } = process.env

const config = {
  entry: join(__dirname, ENTRY),
  output: {
    filename: '[name].js',
  },
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
      name: 'react-router-dom',
      root: 'ReactRouterDOM',
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

// antd: {
//   root: 'antd',
//   amd: 'antd',
// },
// 'rc-table': {
//   root: 'rcTable',
//   amd: 'rc-table',
// },
// table: {
//   root: 'Tb',
//   amd: 'table',
// },

// output: {
//   path: resolve(__dirname, './docs/dist'),
//   filename: '[name].js',
//   library: LIBRARY,
//   libraryTarget: 'amd',
//   libraryExport: 'default',
// },

if (!LIBRARY) {
  config.output.path = resolve(__dirname, './dist')
  config.output.filename = 'index.js'
  config.module.rules[0].use.options.presets[1][1].targets = ['defaults']
}

module.exports = config
