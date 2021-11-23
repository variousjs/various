const path = require('path')
const base = require('./base')

const { NODE_ENV = 'development' } = process.env

const configs = [{
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
}]

if (NODE_ENV === 'production') {
  configs[0].output = {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
  }
  configs.push({
    ...base,
    entry: {
      core: path.resolve(__dirname, '../src/core'),
    },
    mode: 'production',
    output: {
      path: path.join(__dirname, '../dist'),
      filename: '[name].js',
      libraryTarget: 'amd',
    },
  })
}

module.exports = configs
