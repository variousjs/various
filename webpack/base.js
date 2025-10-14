const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const package = require('../package.json')

const config = {
  stats: 'minimal',
  target: ['web', 'es5'],
  externals: [
    // default
    'react',
    'react-dom/client',
    'react-router-dom',
    '@variousjs/various',
    'vue',

    // create-module test
    'sub-m',
    'stack-exceeded',
  ],
  devtool: 'source-map',
  resolve: {
    // includes .js, for webpack dev server
    extensions: ['.js', '.ts', '.tsx'],
  },
  plugins: [
    new webpack.DefinePlugin({
      VERSION: JSON.stringify(package.version),
    }),
    new VueLoaderPlugin(),
  ],
  devServer: {
    allowedHosts: 'all',
    port: 2333,
    host: '0.0.0.0',
    static: {
      directory: path.join(__dirname, '../docs'),
    },
    watchFiles: ['../docs'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
    ],
  },
}

module.exports = config
