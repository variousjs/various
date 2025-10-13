const { NODE_ENV } = process.env
const plugins = ['@babel/plugin-transform-runtime']

if (NODE_ENV !== 'production') {
  plugins.push('babel-plugin-istanbul')
}

module.exports = {
  presets: [
    [
      '@babel/env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
        targets: {
          browsers: '> 1%',
        },
        // debug: true,
      },
    ],
    '@babel/preset-react',
    [
      '@babel/preset-typescript',
      {
        allExtensions: true,
        isTSX: true,
      },
    ],
  ],
  plugins,
}
