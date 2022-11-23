/// <reference types="cypress" />

describe('config', () => {
  beforeEach(() => {
    cy.visit('/#/')
  })

  it('store', () => {
    cy.get('[data-store="name"]').should('have.text', 'humpback')
  })

  it('env', () => {
    cy.get('[data-env="env"]').should('have.text', 'development')
  })

  it('config', () => {
    cy.get('#date-picker input').should('have.value', '二月 15日 2022')
    cy.get('[data-config="pages"]').should('have.text', 'config, dispatch, i18n, message, create, render, helper')
  })
})
