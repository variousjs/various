const path = require('path')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const base = require('./base')

const { NODE_ENV = 'development' } = process.env

const configs = [{
  ...base,
  entry: {
    loader: path.resolve(__dirname, '../src/loader.ts'),
  },
  // plugins: [new BundleAnalyzerPlugin()],
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

  const coreConfig = {
    ...base,
    entry: {
      index: path.resolve(__dirname, '../src/core'),
    },
    // plugins: [new BundleAnalyzerPlugin()],
    output: {
      path: path.join(__dirname, '../dist'),
      filename: '[name].js',
      libraryTarget: 'amd',
    },
  }

  configs.push(
    coreConfig,
    {
      ...coreConfig,
      entry: {
        'index.dev': path.resolve(__dirname, '../src/core'),
      },
      mode: 'development',
    },
    {
      ...configs[0],
      entry: {
        'loader.dev': path.resolve(__dirname, '../src/loader.ts'),
      },
      mode: 'development',
    },
  )
}

module.exports = configs
