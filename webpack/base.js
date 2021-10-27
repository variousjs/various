const path = require('path')
const fs = require('fs')

const components = {
  entry: path.resolve(__dirname, '../demo/entry.ts'),
}

fs
  .readdirSync(path.resolve(__dirname, '../demo/components'))
  .filter((name) => name.includes('.tsx'))
  .forEach((name) => {
    components[name.split('.tsx')[0]] = path.resolve(__dirname, '../demo/components', name)
  })

const config = {
  entry: {
    ...components,
    index: path.resolve(__dirname, '../src/index.ts'),
  },
  output: {
    path: path.resolve(__dirname, '../docs/dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    libraryTarget: 'amd',
  },
  target: ['web', 'es5'],
  externals: {
    // default
    react: {
      root: 'React',
      amd: 'react',
    },
    'react-dom': {
      root: 'ReactDOM',
      amd: 'react-dom',
    },
    'react-router-dom': {
      root: 'ReactRouterDOM',
      amd: 'react-router-dom',
    },
    nycticorax: {
      root: 'Nycticorax',
      amd: 'nycticorax',
    },

    antd: {
      root: 'antd',
      amd: 'antd',
    },
    'rc-table': {
      root: 'rcTable',
      amd: 'rc-table',
    },
    table: {
      root: 'Tb',
      amd: 'table',
    },
  },
  devtool: 'source-map',
  resolve: {
    // includes .js, for webpack dev server
    extensions: ['.js', '.ts', '.tsx'],
  },
  devServer: {
    allowedHosts: 'all',
    port: 2333,
    host: '0.0.0.0',
    https: true,
    static: {
      directory: path.join(__dirname, '../docs'),
    },
    watchFiles: ['../docs'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-typescript',
              ['@babel/preset-env', {
                targets: ['defaults'],
                modules: false,
              }],
              '@babel/preset-react',
            ],
          },
        },
      },
    ],
  },
}

module.exports = config
