const path = require('path')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const base = require('./base')

const { NODE_ENV = 'development' } = process.env

const configs = [{
  ...base,
  entry: {
    index: path.resolve(__dirname, '../src/index.ts'),
  },
  mode: NODE_ENV,
  // plugins: [new BundleAnalyzerPlugin()],
  output: {
    path: path.resolve(__dirname, '../demo/dist'),
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
    plugins: [new BundleAnalyzerPlugin()],
    output: {
      path: path.join(__dirname, '../dist'),
      filename: '[name].js',
      libraryTarget: 'amd',
    },
  })
}

module.exports = configs
