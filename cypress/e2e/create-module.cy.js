/// <reference types="cypress" />

describe('create module', () => {
  beforeEach(() => {
    cy.visit('/#/create-module')
    Cypress.on('uncaught:exception', () => false)
  })

  it('test', () => {
    // default
    cy.contains('h3', 'CreateModule').next().find('button').click()
    cy.contains('h3', 'CreateModule').next().children().eq(0)
      .should('have.text', 'Default: default module text')

    // module not define
    cy.contains('h3', 'Not Defined').next().find('button').click()
    cy.contains('h3', 'Not Defined').next().children().eq(0)
      .should('have.text', 'Error: NOT_DEFINED')

    // module invalid
    cy.contains('h3', 'Invalid Module').next().find('button').click()
    cy.contains('h3', 'Invalid Module').next().children().eq(0)
      .should('have.text', 'Error: INVALID_MODULE')

    // submodule not define
    cy.contains('h3', 'Submodule Not Defined').next().find('button').click()
    cy.contains('h3', 'Submodule Not Defined').next().children().eq(0)
      .should('have.text', 'Error: SUBMODULE_NOT_DEFINED')

    // loading error
    cy.contains('h3', 'Loading Error').next().find('button').click()
    cy.contains('h3', 'Loading Error').next().children().eq(0)
      .should('have.text', 'Error: LOADING_ERROR')
  })
})
