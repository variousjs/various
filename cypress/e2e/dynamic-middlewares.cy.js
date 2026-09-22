/// <reference types="cypress" />

describe('dynamic middlewares', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false)
    cy.visit('#/dynamic-middlewares', {
      onBeforeLoad(win) {
        cy.spy(win.console, 'log').as('console.log')
        cy.spy(win.console, 'warn').as('console.warn')
      },
    })
  })

  it('hot updates middlewares without app reload', () => {
    // initial strategy release
    cy.contains('#strategy-version', 'v1')

    // v1 has the middlewaresEnabled gate (off here): dispatch passes through
    cy.contains('button', 'dispatch block').click()
    cy.get('@console.log').should('not.be.calledWithMatch', /onDispatch/)

    // hot update swaps the strategy module, the app bundle never reloads
    cy.contains('button', 'update middlewares').click()
    cy.contains('#strategy-version', 'v2')

    // v2 blocks dispatch
    cy.contains('button', 'dispatch block').click()
    cy.get('@console.log').should('be.calledWith', 'onDispatch v2: block')
    cy.get('@console.warn').should(
      'be.calledWith',
      ' %c dynamic-middlewares %c DISPATCH %c',
      Cypress.sinon.match.any,
      Cypress.sinon.match.any,
      Cypress.sinon.match.any,
      'blocked by middleware',
    )

    // v2 gates logging
    cy.contains('button', 'logger info').click()
    cy.get('@console.log').should('be.calledWith', 'onLog v2: info')

    // v2 observes messages
    cy.contains('button', 'postMessage hello').click()
    cy.get('@console.log').should('be.calledWith', 'onMessage v2: hello')

    // v2 observes module loads
    cy.contains('button', 'render A').click()
    cy.get('@console.log').should('be.calledWith', 'onLoad v2: dynamic-middlewares.A')
  })
})
