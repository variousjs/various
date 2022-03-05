const fs = require('fs')
const path = require('path')
const base = require('./base')

const { NODE_ENV = 'development' } = process.env
const components = {
  entry: path.resolve(__dirname, '../examples/entry.ts'),
  default: path.resolve(__dirname, '../examples/default.ts'),
  'container-error': path.resolve(__dirname, '../examples/container-error.tsx'),
  'component-error': path.resolve(__dirname, '../examples/component-error.tsx'),
}

fs
  .readdirSync(path.resolve(__dirname, '../examples/components'))
  .filter((name) => name.includes('.tsx'))
  .forEach((name) => {
    components[name.split('.tsx')[0]] = path.resolve(__dirname, '../examples/components', name)
  })

if (NODE_ENV === 'development') {
  components.core = path.resolve(__dirname, '../src/core')
}

const config = {
  ...base,
  // watch components change
  watch: NODE_ENV === 'development',
  mode: NODE_ENV,
  entry: components,
  output: {
    path: path.resolve(__dirname, '../demo/dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    libraryTarget: 'amd',
  },
}

module.exports = config
