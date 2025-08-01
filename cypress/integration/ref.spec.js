/// <reference types="cypress" />

describe('i18n', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false)
  })

  it('create ref', () => {
    cy.visit('/')
    cy.get('[data-input="ref"]').should('have.value', '')
    cy.get('[data-refbutton="ref"]').click()
    cy.get('[data-input="ref"]').should('have.value', 'ref')
  })

  it('render ref', () => {
    cy.visit('/#/render')
    cy.get('[data-k="action"]').click()
    cy.get('[data-ref="ref"]').should('have.text', 'from ref txt')
  })
})
