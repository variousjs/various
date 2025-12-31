/// <reference types="cypress" />

describe('dispatch', () => {
  beforeEach(() => {
    cy.visit('/#/dispatch')
    Cypress.on('uncaught:exception', () => false)
  })

  it('test', () => {
    // dispatch app
    cy.contains('h3', 'Dispatch').next().children().eq(0)
      .should('have.text', 'store: humpback')
    cy.contains('h3', 'Vue Component').next().children().eq(0)
      .should('have.text', 'store: humpback')
    cy.contains('button', 'dispatch app').click()
    cy.contains('h3', 'Dispatch').next().children().eq(0)
      .should('have.text', 'store: various')
    cy.contains('h3', 'Vue Component').next().children().eq(0)
      .should('have.text', 'store: various')

    // dispatch component
    cy.contains('button', 'dispatch vue').click()
    cy.contains('p', 'Trigger: dispatch').should('exist')
    cy.contains('button', 'dispatch react').click()
    cy.contains('p', 'trigger: dispatch-v').should('exist')

    // dispatch error
    cy.contains('button', 'dispatch-app').click()
    cy.contains('p', 'error: action "not exist" is not present').should('exist')
    cy.contains('button', 'dispatch-component').click()
    cy.contains('p', 'error: component is not ready').should('exist')
    cy.contains('button', 'dispatch-action').click()
    cy.contains('p', 'error: action "not-exist" is not present').should('exist')
  })
})
