/* eslint-disable global-require */
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  allowCypressEnv: false,
  e2e: {
    baseUrl: 'http://127.0.0.1:2333',
    fixturesFolder: false,
    supportFile: 'cypress/support/e2e.cjs',
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      return config
    },
  },
})
