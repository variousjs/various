/// <reference types="cypress" />

describe('props test', () => {
  beforeEach(() => {
    cy.visit('/#/')
  })

  it('props', () => {
    cy.get('#date-picker input').should('have.value', '二月 15日 2022')
    cy.get('#config-menu').should('have.text', 'Home,Error,Module,Dispatch,Message')
    cy.get('#i-store-name').should('have.text', 'humpback')
  })

  it('$slient', () => {
    cy.get('.component-loading').should('have.length', 1)
  })
})
