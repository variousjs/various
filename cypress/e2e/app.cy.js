/// <reference types="cypress" />

describe('app', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false)
  })

  it('test', () => {
    // app loading error - SystemJS produces a different error message than RequireJS
    cy.visit('/app/error.html')
    cy.contains('p', '[APP_ERROR]').should('exist')

    // ESM library loading error - loadESM script.onerror path
    cy.visit('/app/esm-error.html')
    cy.contains('p', '[APP_ERROR]').should('exist')

    // app default config
    cy.visit('/app/default-config.html')
    cy.contains('div', 'App Container is not defined').should('exist')

    // app container error
    cy.visit('/app/container-error.html')
    cy.contains('h3', 'APP_ERROR').should('exist')
    cy.contains('p', 'A is not defined').should('exist')
  })
})
