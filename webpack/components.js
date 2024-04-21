const fs = require('fs')
const path = require('path')
const base = require('./base')

const { NODE_ENV = 'development' } = process.env
const components = {
  entry: path.resolve(__dirname, '../test/entry.ts'),
  default: path.resolve(__dirname, '../test/default.ts'),
  'container-error': path.resolve(__dirname, '../test/container-error.tsx'),
  'component-error': path.resolve(__dirname, '../test/component-error.tsx'),
}

fs
  .readdirSync(path.resolve(__dirname, '../test/components'))
  .filter((name) => name.includes('.tsx'))
  .forEach((name) => {
    components[name.split('.tsx')[0]] = path.resolve(__dirname, '../test/components', name)
  })

components.helper = path.resolve(__dirname, '../test/components/helper.ts')

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
    path: path.resolve(__dirname, '../public/dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    libraryTarget: 'amd',
  },
}

module.exports = config
