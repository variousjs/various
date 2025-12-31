/* eslint-disable global-require */
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://127.0.0.1:2333',
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      on('file:preprocessor', require('@cypress/code-coverage/use-babelrc'))
      return config
    },
  },
})
