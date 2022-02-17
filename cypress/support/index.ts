beforeEach(() => {
  cy.intercept({ url: '/dist/*.js', middleware: true }, (req) => {
    if (/.*\/[a-z]\.js/.test(req.url)) {
      req.on('response', (res) => {
        res.delay = Math.random() * 1000
      })
    }
  })
})
