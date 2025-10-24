const fs = require('fs')
const path = require('path')
const base = require('./base')

const { NODE_ENV = 'development' } = process.env
const components = {
  app: path.resolve(__dirname, '../test/app/index.ts'),

  // i18n
  'i18n-async': path.resolve(__dirname, '../test/app/i18n/async/index.tsx'),
  'i18n-async-error': path.resolve(__dirname, '../test/app/i18n/async-error/index.tsx'),
  'i18n-global': path.resolve(__dirname, '../test/app/i18n/global.tsx'),

  // app config
  'default-config': path.resolve(__dirname, '../test/app/default-config.ts'),
  'container-error': path.resolve(__dirname, '../test/app/container-error.tsx'),
  'vue-version': path.resolve(__dirname, '../test/app/vue-version.tsx'),

  // create component props slient
  'create-slient': path.resolve(__dirname, '../test/app/create-component-slient.tsx'),
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
  entry: components,
  output: {
    path: path.resolve(__dirname, '../docs/dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    libraryTarget: 'amd',
  },
}

module.exports = config
