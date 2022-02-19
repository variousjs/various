const path = require('path')

const { NODE_ENV } = process.env

const config = {
  stats: 'minimal',
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
    '@variousjs/various': {
      root: 'various',
      amd: '@variousjs/various',
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
    moment: {
      root: 'moment',
      amd: 'moment',
    },
    moment_zhCN: {
      root: 'moment_zhCN',
      amd: 'moment_zhCN',
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
            babelrc: NODE_ENV !== 'production',
            configFile: NODE_ENV !== 'production',
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
