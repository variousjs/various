const path = require('path')
const base = require('./base')

const { NODE_ENV = 'development' } = process.env

const config = {
  ...base,
  devServer: {
    allowedHosts: 'all',
    port: 2333,
    host: '0.0.0.0',
    static: {
      directory: path.join(__dirname, '../docs'),
    },
    watchFiles: ['../docs'],
  },
  entry: {
    loader: path.resolve(__dirname, '../src/loader.ts'),
  },
  output: {
    path: path.resolve(__dirname, '../docs/dist'),
    publicPath: '/dist/',
    filename: '[name].js',
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
        'loader-dev': path.resolve(__dirname, '../src/loader.ts'),
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
