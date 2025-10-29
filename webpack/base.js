const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const package = require('../package.json')

const { NODE_ENV = 'development' } = process.env

const config = {
  stats: 'minimal',
  target: ['web', 'es5'],
  mode: NODE_ENV,
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
