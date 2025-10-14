const fs = require('fs')
const path = require('path')
const base = require('./base')

const { NODE_ENV = 'development' } = process.env
const components = {
  app: path.resolve(__dirname, '../test/app/index.ts'),
}

const extensions = ['.tsx', '.vue', '.ts']
const basePath = path.resolve(__dirname, '../test/components')

fs
  .readdirSync(basePath)
  .forEach((name) => {
    const currentPath = path.join(basePath, name)
    if (!fs.lstatSync(currentPath).isDirectory()) {
      return
    }

    fs
      .readdirSync(currentPath)
      .forEach((filename) => {
        if (extensions.some((n) => filename.endsWith(n))) {
          const [ext] = filename.split('.').slice(-1)
          const key = `${name}/${filename.split(`.${ext}`)[0]}`
          components[key] = path.join(currentPath, filename)
        }
      })
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
