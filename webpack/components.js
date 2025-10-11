const fs = require('fs')
const path = require('path')
const base = require('./base')

const { NODE_ENV = 'development' } = process.env
const components = {
  app: path.resolve(__dirname, '../test/app.ts'),
}

const extensions = ['.tsx', '.vue']

fs
  .readdirSync(path.resolve(__dirname, '../test/components'))
  .forEach((name) => {
    if (extensions.some((n) => name.endsWith(n))) {
      const [ext] = name.split('.').slice(-1)
      components[name.split(`.${ext}`)[0]] = path.resolve(__dirname, '../test/components', name)
    }
  })

if (NODE_ENV === 'development') {
  components.index = path.resolve(__dirname, '../src/core')
}

const config = {
  ...base,
  // watch components change
  watch: NODE_ENV === 'development',
  mode: NODE_ENV,
  entry: components,
  output: {
    path: path.resolve(__dirname, '../docs/dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    libraryTarget: 'amd',
  },
}

module.exports = config
