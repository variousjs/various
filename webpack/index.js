const path = require('path')
const base = require('./base')

const { NODE_ENV = 'development' } = process.env

const { index } = base.entry
const config = {
  ...base,
  entry: { index },
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
