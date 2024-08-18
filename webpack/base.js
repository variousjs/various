const path = require('path')

const config = {
  stats: 'minimal',
  target: ['web', 'es5'],
  externals: [
    // default
    'react',
    'react-dom/client',
    'react-router-dom',
    '@variousjs/various',

    'antd',
    'rc-table',
    'rc-table2',
    'table',
    'moment',
    'moment_zhCN',
    'helper',
    'module-error',
    'module-error2',
  ],
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
      directory: path.join(__dirname, '../public'),
    },
    watchFiles: ['../public'],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
}

module.exports = config
