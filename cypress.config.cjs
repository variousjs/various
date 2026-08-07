/* eslint-disable global-require */
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  allowCypressEnv: false,
  e2e: {
    baseUrl: 'http://127.0.0.1:2333',
    fixturesFolder: false,
    supportFile: 'cypress/support/e2e.cjs',
    // CDN dependencies (react, vue, etc via esm.sh) may be slow on first load.
    // Increase timeouts to avoid flaky test failures.
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 30000,
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      return config
    },
  },
})
