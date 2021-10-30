const path = require('path')
const base = require('./base')

const { NODE_ENV = 'development' } = process.env

const config = {
  ...base,
  entry: {
    index: [
      'core-js-pure/stable',
      'regenerator-runtime/runtime',
      path.resolve(__dirname, '../src/index.ts'),
    ],
  },
  mode: NODE_ENV,
  output: {
    path: path.resolve(__dirname, '../docs/dist'),
    publicPath: '/dist/',
    filename: '[name].js',
  },
}

if (NODE_ENV === 'production') {
  config.output = {
    path: path.join(__dirname, '../dist'),
    filename: 'index.js',
  }
}

module.exports = config
