/// <reference types="cypress" />

describe('logger', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false)
    cy.visit('#/logger', {
      onBeforeLoad(win) {
        cy.spy(win.console, 'warn').as('console.warn')
        cy.spy(win.console, 'error').as('console.error')
        cy.spy(win.console, 'info').as('console.info')
      },
    })
  })

  it('test', () => {
    // info
    cy.contains('h3', 'Logger').next().contains('button', 'info').click()
    cy.get('@console.info').should(
      'be.calledWith',
      '%c logger ',
      Cypress.sinon.match.any,
      'this is info',
    )

    // warn
    cy.contains('h3', 'Vue Component').next().contains('button', 'warn').click()
    cy.get('@console.warn').should(
      'be.calledWith',
      ' %c logger-v %c warn type %c',
      Cypress.sinon.match.any,
      Cypress.sinon.match.any,
      Cypress.sinon.match.any,
      'vue warn',
    )

    // error
    cy.contains('h3', 'Logger').next().contains('button', 'error').click()
    cy.get('@console.error').should(
      'be.calledWith',
      ' %c logger %c error type %c',
      Cypress.sinon.match.any,
      Cypress.sinon.match.any,
      Cypress.sinon.match.any,
      'an error message',
    )

    // create logger
    cy.contains('h3', 'Vue Component').next().contains('button', 'from createLogger').click()
    cy.get('@console.info').should(
      'be.calledWith',
      '%c custom %c greet %c',
      Cypress.sinon.match.any,
      Cypress.sinon.match.any,
      Cypress.sinon.match.any,
      'hello',
    )
  })
})
