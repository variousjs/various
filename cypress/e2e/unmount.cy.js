/// <reference types="cypress" />

describe('unmount during loading', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false)
  })

  it('react component unmounted while loading', () => {
    // Delay the create-component response so it's still loading when we navigate away
    cy.intercept('GET', '/dist/create-component/index.js', (req) => {
      req.continue((res) => {
        res.delay = 3000
      })
    })

    cy.visit('/#/')
    cy.get('#root').should('not.be.empty')

    // Navigate to create-component page (component starts loading with 3s delay)
    cy.window().then((win) => {
      const loc = win.location
      loc.hash = '/create-component'
    })
    cy.location('hash').should('eq', '#/create-component')
    // Wait for route change to trigger component loading
    cy.wait(500)

    // Navigate away - React component still loading -> unmount guard triggered
    cy.window().then((win) => {
      const loc = win.location
      loc.hash = '/'
    })
    cy.location('hash').should('eq', '#/')

    // Wait for the delayed import() to resolve so the guard is actually executed
    cy.wait(3000)

    // App should not crash from unmounted component
    cy.get('#root').should('not.be.empty')
    cy.get('body').should('not.contain', '[APP_ERROR]')
  })

  it('vue component unmounted while loading', () => {
    // Delay the i18n Vue component so it's still loading when we navigate away
    cy.intercept('GET', '/dist/i18n/i.js', (req) => {
      req.continue((res) => {
        res.delay = 3000
      })
    })

    // Visit logger page first to cache Vue library
    cy.visit('/#/logger')
    // Wait for logger page to fully load (Vue library cached)
    cy.contains('h3', 'Logger').should('exist')

    // Navigate to i18n page (Vue component starts loading with 3s delay)
    cy.window().then((win) => {
      const loc = win.location
      loc.hash = '/i18n'
    })
    cy.location('hash').should('eq', '#/i18n')
    cy.wait(500)

    // Navigate away - Vue component still loading -> unmount guard triggered
    cy.window().then((win) => {
      const loc = win.location
      loc.hash = '/'
    })
    cy.location('hash').should('eq', '#/')

    // Wait for the delayed import() to resolve so the guard is actually executed
    cy.wait(3000)

    // App should not crash from unmounted component
    cy.get('#root').should('not.be.empty')
    cy.get('body').should('not.contain', '[APP_ERROR]')
  })
})
