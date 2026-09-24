/// <reference types="cypress" />

describe('auth service', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false)
    cy.visit('#/auth')
  })

  it('pulls initial state and receives push updates', () => {
    // initial snapshot pulled from the headless service after it mounts
    cy.contains('#auth-name', 'guest')
    cy.contains('#auth-token', '-')

    // dispatch setUser -> service broadcasts user-changed -> consumer updates
    cy.contains('button', 'login').click()
    cy.contains('#auth-name', 'various')
    cy.contains('#auth-token', 'token-various')

    // logout restores the guest state through the same push channel
    cy.contains('button', 'logout').click()
    cy.contains('#auth-name', 'guest')
    cy.contains('#auth-token', '-')
  })
})
