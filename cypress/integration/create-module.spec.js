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

    // script error
    cy.contains('h3', 'Script Error').next().find('button').click()
    cy.contains('h3', 'Script Error').next().children().eq(0)
      .should('have.text', 'Error: SCRIPT_ERROR')

    // loading error
    cy.contains('h3', 'Loading Error').next().find('button').click()
    cy.contains('h3', 'Loading Error').next().children().eq(0)
      .should('have.text', 'Error: LOADING_ERROR')

    // submodule loading error
    cy.contains('h3', 'Submodule Loading Error').next().find('button').click()
    cy.contains('h3', 'Submodule Loading Error').next().children().eq(0)
      .should('have.text', 'Error: SUBMODULE_LOADING_ERROR')

    // submodule script error
    cy.contains('h3', 'Submodule Script Error').next().find('button').click()
    cy.contains('h3', 'Submodule Script Error').next().children().eq(0)
      .should('have.text', 'Error: SUBMODULE_SCRIPT_ERROR')
  })
})
