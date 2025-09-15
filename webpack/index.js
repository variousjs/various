const path = require('path')
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const base = require('./base')

const { NODE_ENV = 'development' } = process.env

const configs = [{
  ...base,
  entry: {
    loader: path.resolve(__dirname, '../src/loader.ts'),
  },
  mode: NODE_ENV,
  // plugins: [new BundleAnalyzerPlugin()],
  output: {
    path: path.resolve(__dirname, '../public/dist'),
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
      index: path.resolve(__dirname, '../src/core'),
    },
    mode: 'production',
    // plugins: [new BundleAnalyzerPlugin()],
    output: {
      path: path.join(__dirname, '../dist'),
      filename: '[name].js',
      libraryTarget: 'amd',
    },
  })
}

module.exports = configs
