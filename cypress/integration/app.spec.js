/// <reference types="cypress" />

describe('app', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false)
  })

  it('test', () => {
    // app loading error
    cy.visit('/app/error.html')
    cy.contains('p', '[APP_ERROR] Script error for "app"').should('exist')

    // app default config
    cy.visit('/app/default-config.html')
    cy.contains('div', 'App Container is not defined').should('exist')

    // app container error
    cy.visit('/app/container-error.html')
    cy.contains('div', '[APP_ERROR] A is not defined').should('exist')

    // react version error
    cy.readFile('./docs/libs/react.production.min.js').then((res) => {
      cy.intercept('react.production.min.js', res.replace('18.3.1', '17'))
      cy.visit('/app/react-version-error.html')
      cy.contains('p', 'React/ReactDOM Version Requirement').should('exist')
    })
  })

  it('vue version error test', () => {
    cy.readFile('./docs/libs/vue.js').then((res) => {
      cy.intercept('vue.js', res.replace('"3.5.21', '"2'))
      cy.visit('/app/vue-version.html')
      cy.contains('div', '[SCRIPT_ERROR] Vue 3+ required, detected an incompatible version').should('exist')
    })
  })
})
