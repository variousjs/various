const path = require('path')
const base = require('./base')

const { NODE_ENV = 'development' } = process.env

const config = {
  ...base,
  entry: {
    index: path.resolve(__dirname, '../src/core'),
  },
  watch: NODE_ENV === 'development',
  output: {
    path: path.resolve(__dirname, '../docs/dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    libraryTarget: 'amd',
  },
}
const configs = [config]

if (NODE_ENV === 'production') {
  configs.push(
    {
      ...config,
      output: {
        ...config.output,
        path: path.join(__dirname, '../dist'),
      },
    },
    {
      ...config,
      entry: {
        'index.dev': path.resolve(__dirname, '../src/core'),
      },
      mode: 'development',
      output: {
        ...config.output,
        path: path.join(__dirname, '../dist'),
      },
    },
  )
}

module.exports = configs
