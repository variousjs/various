/// <reference types="cypress" />

describe('helper', () => {
  beforeEach(() => {
    cy.visit('/#/helper', {
      // onBeforeLoad(win) {
      //   cy.stub(win.console, 'error').as('consoleError')
      // },
    })
    Cypress.on('uncaught:exception', () => false)
  })

  it('m', () => {
    cy.get('[data-m="n"]').should('have.text', '-')
    cy.get('[data-m="deps"]').should('have.text', '-')
    cy.get('[data-m="loaded"]').should('have.text', 'false')
    cy.get('[data-m="preloaded"]').should('have.text', 'false')

    // cy.wait(1000)
    // cy.get('@consoleError').should(
    //   'have.been.calledWith',
    //   '%chelper-m',
    //   'color:white;background:blue;padding:1px 2px',
    //   '[component] props key duplicate with store',
    // )

    cy.get('[data-m="action-render"]').click()
    cy.get('[data-m="n"]').should('have.text', 'N')
    cy.get('[data-m="loaded"]').should('have.text', 'true')

    cy.get('[data-m="action-dependencies"]').click()
    cy.get('#deps > span').should('exist')

    cy.get('[data-m="action-preload"]').click()
    cy.get('[data-m="preloaded"]').should('have.text', 'true')
    cy.get('[data-m="preloaded-error"]').should('contain.text', 'Script error for "helper-aa"')

    cy.get('[data-m="action-create"]').click()
    cy.get('[data-m="createModule"]').should('contain.text', 'Maximum call stack size exceeded')

    cy.visit('/#/')
    cy.wait(500)
    cy.visit('/#/helper')
    cy.wait(500)
    cy.visit('/#/')
    cy.wait(1000)
  })
})
