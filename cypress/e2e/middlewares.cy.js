/// <reference types="cypress" />

describe('logger', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false)
    cy.visit('#/middlewares', {
      onBeforeLoad(win) {
        cy.spy(win.console, 'warn').as('console.warn')
        cy.spy(win.console, 'error').as('console.error')
        cy.spy(win.console, 'info').as('console.info')
        cy.spy(win.console, 'log').as('console.log')
      },
    })
  })

  it('test', () => {
    // onLog
    cy.contains('button', 'logger block').click()
    cy.get('@console.log').should(
      'be.calledWith',
      'block by onLog middleware',
    )

    // onLoad
    cy.contains('button', 'render component').click()
    cy.get('@console.log').should(
      'be.calledWith',
      'middlewares',
      'A',
      true,
    )

    // onMessage
    cy.contains('button', 'postMessage block').click()
    cy.get('@console.warn').should(
      'be.calledWith',
      ' %c middlewares %c POST_MESSAGE %c',
      Cypress.sinon.match.any,
      Cypress.sinon.match.any,
      Cypress.sinon.match.any,
      'blocked by middleware',
    )
    cy.contains('button', 'postMessage changed').click()
    cy.get('@console.log').should(
      'be.calledWith',
      'postMessage event changed',
    )

    // onDispatch
    cy.contains('button', 'dispatch block').click()
    cy.get('@console.warn').should(
      'be.calledWith',
      ' %c middlewares %c DISPATCH %c',
      Cypress.sinon.match.any,
      Cypress.sinon.match.any,
      Cypress.sinon.match.any,
      'blocked by middleware',
    )
    cy.contains('button', 'dispatch changed').click()
    cy.get('@console.log').should(
      'be.calledWith',
      'dispatch action changed',
    )

    // onError
    cy.contains('button', 'render component error').click()
    cy.get('@console.log').should(
      'be.calledWith',
      'SCRIPT_ERROR',
      Cypress.sinon.match(/Minified React error #299/),
    )

    // Logger Error
    cy.contains('button', 'logger error').click()
    cy.get('@console.log').should(
      'be.calledWith',
      'unknow',
      'error',
    )
  })
})
