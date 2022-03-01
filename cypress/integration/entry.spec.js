/// <reference types="cypress" />

describe('entry test', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false)
  })

  it('container error', () => {
    cy.visit('/container-error.html')
    cy.contains('[CONTAINER_ERROR]entry is not defined').should('exist')
  })

  it('default', () => {
    cy.visit('/default.html')
    cy.contains('Container not defined').should('exist')
  })

  it('component error', () => {
    cy.visit('/component-error.html')
    cy.contains('[SCRIPT_ERROR]noexist is not defined').should('exist')
  })
})
