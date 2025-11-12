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
      directory: path.join(__dirname, '../docs'),
    },
    watchFiles: ['../docs'],
  },
  entry: {
    loader: path.resolve(__dirname, '../src/loader.ts'),
  },
  output: {
    path: path.resolve(__dirname, '../docs/dist'),
    publicPath: '/dist/',
    filename: '[name].js',
  },
}
const configs = [config]

// standalone
configs.push({
  ...config,
  externals: NODE_ENV === 'development' ? undefined : base.externals,
  devServer: undefined,
  entry: {
    standalone: path.resolve(__dirname, '../test/standalone/index.tsx'),
  },
})

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
        'loader-dev': path.resolve(__dirname, '../src/loader.ts'),
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
      output: {
        ...config.output,
        path: path.join(__dirname, '../dist'),
        libraryTarget: 'commonjs2',
      },
    },
    {
      ...config,
      entry: {
        'standalone-dev': path.resolve(__dirname, '../src/standalone/index.tsx'),
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
