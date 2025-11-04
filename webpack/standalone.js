const path = require('path')
const base = require('./base')

module.exports = {
  ...base,
  externals: undefined,
  entry: {
    index: path.resolve(__dirname, '../test/standalone/index.tsx'),
  },
  devServer: {
    allowedHosts: 'all',
    port: 3332,
    host: '0.0.0.0',
    static: {
      directory: path.join(__dirname, '../docs/standalone'),
    },
  },
  output: {
    path: path.resolve(__dirname, '../docs/standalone'),
    filename: '[name].js',
  },
}
