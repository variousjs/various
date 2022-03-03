import '@cypress/code-coverage/support'

beforeEach(() => {
  cy.intercept({ url: '/dist/*.js', middleware: true }, (req) => {
    if (req.url.includes('timeout')) {
      req.on('response', (res) => {
        res.delay = 1001
      })
    }
    if (/.*\/[a-z]\.js/.test(req.url)) {
      req.on('response', (res) => {
        res.delay = Math.random() * 1000
      })
    }
  })
})
