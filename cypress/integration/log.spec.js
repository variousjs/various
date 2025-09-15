/// <reference types="cypress" />

describe('i18n', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false)
  })

  it('log', () => {
    cy.visit('#/logger', {
      onBeforeLoad(win) {
        cy.spy(win.console, 'log').as('console.log')
      },
    })
    cy.get('[data-log="info"]').click()
    cy.get('@console.log').should('be.calledWith', 'info')
  })

  it('log2', () => {
    cy.visit('#/logger2', {
      onBeforeLoad(win) {
        cy.spy(win.console, 'warn').as('console.warn')
        cy.spy(win.console, 'error').as('console.error')
        cy.spy(win.console, 'info').as('console.info')
      },
    })

    cy.get('[data-log="warn"]').click()
    cy.get('@console.warn').should(
      'be.calledWith',
      ' %c log ',
      Cypress.sinon.match.any,
      'warn',
    )

    cy.get('[data-log="error"]').click()
    cy.get('@console.error').should(
      'be.calledWith',
      ' %c log %c E-T %c',
      Cypress.sinon.match.any,
      Cypress.sinon.match.any,
      Cypress.sinon.match.any,
    )

    cy.get('[data-log="error2"]').click()
    cy.get('@console.error').should((spy) => {
      expect(spy.lastCall.args[0]).to.include('%c log')
    })

    cy.get('[data-log="info"]').click()
    cy.get('@console.info').should((spy) => {
      expect(spy.lastCall.args[0]).to.include('log')
    })
  })
})
