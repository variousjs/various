/// <reference types="cypress" />

describe('config', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false)
  })

  it('config', () => {
    cy.visit('/#/')

    cy.get('[data-store="name"]').should('have.text', 'humpback')
    cy.get('[data-env="env"]').should('have.text', 'development')
    cy.get('[data-config="props"]').should('have.text', 'Locale')
    cy.get('#date-picker input').should('have.value', '二月 15日 2022')
    cy.get('[data-config="pages"]').should('have.text', 'config, dispatch, i18n, message, create, render, helper')
  })

  it('container error', () => {
    cy.visit('/container-error.html')
    cy.contains('[CONTAINER_ERROR] entry is not defined').should('exist')
  })

  it('default', () => {
    cy.visit('/default.html')
    cy.contains('Container not defined').should('exist')
  })

  it('component error', () => {
    cy.visit('/component-error.html')
    cy.contains('[SCRIPT_ERROR] noexist is not defined').should('exist')
  })
})
