require('@cypress/code-coverage/support')

beforeEach(() => {
  cy.intercept({ url: '/dist/**/*.js', middleware: true }, (req) => {
    if (req.url.includes('timeout')) {
      req.reply({ statusCode: 404, body: 'Not Found' })
    } else if (/.*\/*\.js/.test(req.url)) {
      req.on('response', (res) => {
        res.delay = Math.random() * 500
      })
    }
  })
})
