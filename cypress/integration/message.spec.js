/// <reference types="cypress" />

describe('message', () => {
  beforeEach(() => {
    cy.visit('/#/message')
  })

  it('f', () => {
    cy.get('[data-g="component"]').then(() => {
      cy.get('[data-gg="component"]').then(() => {
        cy.get('[data-f="action"]').click()

        cy.get('[data-g="component"]').should('have.text', 'message-f')
        cy.get('[data-g="event"]').should('have.text', 'c-event')
        cy.get('[data-g="value"]').should('have.text', 'c')

        cy.get('[data-gg="component"]').should('have.text', 'message-f')
        cy.get('[data-gg="event"]').should('have.text', 'c-event')
        cy.get('[data-gg="value"]').should('have.text', 'c')
      })
    })
  })

  it('g', () => {
    cy.get('[data-f="component"]').then(() => {
      cy.get('[data-gg="component"]').then(() => {
        cy.get('[data-g="action"]').click()

        cy.get('[data-f="component"]').should('have.text', 'message-g')
        cy.get('[data-f="event"]').should('have.text', 'xyz')

        cy.get('[data-gg="component"]').should('have.text', 'message-g')
        cy.get('[data-gg="event"]').should('have.text', 'xyz')
      })
    })
  })
})
