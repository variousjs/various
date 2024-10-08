/// <reference types="cypress" />

describe('dispatch', () => {
  beforeEach(() => {
    cy.visit('/#/dispatch', {
      onBeforeLoad(win) {
        cy.spy(win.console, 'warn').as('console.warn')
      },
    })
    Cypress.on('uncaught:exception', () => false)
  })

  it('a', () => {
    cy.get('[data-a="store-name"]').should('have.text', 'humpback')
    cy.get('[data-a="value"]').should('have.text', '-')
    cy.get('[data-a="trigger"]').should('have.text', '-')
    cy.get('[data-a="b-value"]').should('have.text', '-')
    cy.get('[data-a="error"]').should('have.text', '-')

    cy.get('[data-b="error"]').then(() => {
      cy.get('[data-a="action-b"]').click()
      cy.get('[data-a="b-value"]').should('have.text', 'b')

      cy.get('[data-a="action-b-nonexist"]').click()
      cy.get('[data-a="error"]').should('have.text', 'Component is not ready')

      cy.get('[data-a="action-store-nonexist"]').click()
      cy.get('[data-a="error"]').should('have.text', 'Action "no-exist" is not present')
    })
  })

  it('b', () => {
    cy.get('[data-b="error"]').should('have.text', '-')

    cy.get('[data-a="error"]').then(() => {
      cy.get('[data-b="action-a"]').click()
      cy.get('[data-a="value"]').should('have.text', 'changed by middleware')
      cy.get('[data-a="trigger"]').should('have.text', 'dispatch-b.')

      cy.get('[data-b="action-nonexist"]').click()
      cy.get('[data-b="error"]').should('have.text', 'Component is not ready')

      cy.get('[data-b="action-store"]').click()
      cy.get('[data-a="store-name"]').should('have.text', 'various')
      cy.get('[data-store="name"]').should('have.text', 'various')

      cy.get('[data-b="action-a-nonexist"]').click()
      cy.get('[data-b="error"]').should('have.text', 'Action "nonexist" is not present')

      cy.get('[data-b="action-a-block"]').click()
      cy.get('@console.warn').should('be.calledWith', 'block')
    })
  })
})
