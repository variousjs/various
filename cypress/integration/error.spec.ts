/// <reference types="cypress" />

describe('component error test', () => {
  beforeEach(() => {
    cy.visit('/#/error')
    Cypress.on('uncaught:exception', () => false)
  })

  it('error type', () => {
    cy.contains('[INVALID_COMPONENT]:Cannot load component named `store`').should('exist')
    cy.contains('[LOADING_ERROR]:Script error for "link"')
      .should('exist').parent().next()
      .should('have.attr', 'type', 'button')
    cy.contains('[DEPENDENCIES_LOADING_ERROR]')
      .should('exist').parent().next()
      .should('have.attr', 'type', 'button')
    cy.contains('[SCRIPT_ERROR]:noexist is not defined')
      .should('exist').parent().next()
      .should('have.attr', 'type', 'button')
    cy.contains('[NOT_DEFINED]:Component not defined').should('exist')
    cy.contains('[INVALID_COMPONENT]:Not content').should('exist')
    cy.contains('[INVALID_COMPONENT]:Component cannot be executed').should('exist')
    cy.contains('[INVALID_COMPONENT]:Module not defined').should('exist')
  })

  it('reload', () => {
    cy.intercept('GET', '/link.js').as('getJs')
    cy.contains('[LOADING_ERROR]:Script error for "link"').parent().next().click()
    cy.wait('@getJs').its('response.statusCode').should('be.oneOf', [404])
  })
})
