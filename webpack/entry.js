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
      directory: path.join(__dirname, '../public'),
    },
    watchFiles: ['../public'],
  },
  entry: {
    loader: path.resolve(__dirname, '../src/loader.tsx'),
  },
  output: {
    path: path.resolve(__dirname, '../public/dist'),
    publicPath: '/dist/',
    filename: '[name].js',
  },
}
const configs = [config]

// standalone
if (NODE_ENV === 'development') {
  configs.push({
    ...config,
    externals: undefined,
    devServer: undefined,
    entry: {
      standalone: path.resolve(__dirname, '../test/standalone/index.tsx'),
    },
  })
}

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
        'loader-dev': path.resolve(__dirname, '../src/loader.tsx'),
      },
      mode: 'development',
      output: {
        ...config.output,
        path: path.join(__dirname, '../dist'),
      },
    },

    // standalone
    {
      ...config,
      entry: {
        standalone: path.resolve(__dirname, '../src/standalone/index.tsx'),
      },
      mode: 'development',
      output: {
        ...config.output,
        path: path.join(__dirname, '../dist'),
        libraryTarget: 'commonjs2',
      },
    },
  )
}

module.exports = configs
