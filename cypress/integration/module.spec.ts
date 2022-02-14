/// <reference types="cypress" />

describe('module test', () => {
  beforeEach(() => {
    cy.visit('/#/module')
  })

  it('$getMountedComponents', () => {
    cy.contains('$getMountedComponents').click()
    cy.get('#mounted-components').should('have.text', 'g,gg,x,z')
  })
})
