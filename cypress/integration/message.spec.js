/// <reference types="cypress" />

describe('message test', () => {
  beforeEach(() => {
    cy.visit('/#/message')
  })

  it('message', () => {
    cy.get('#c-m').then(() => {
      cy.get('#d-m').then(() => {
        cy.get('#x-message').click()
        cy.get('#c-m').should('have.text', 'Message: x|X')
        cy.get('#d-m').should('have.text', 'Message: x|-')

        cy.get('#c-m').next().click()
        cy.get('#d-m').should('have.text', 'Message: c|cm')

        cy.get('#d-m').next().click()
        cy.get('#c-m').should('have.text', 'Message: d.dd|xyz')
      })
    })
  })
})
