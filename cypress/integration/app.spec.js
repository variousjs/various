/// <reference types="cypress" />

describe('config', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false)
  })

  it('config', () => {
    cy.visit('/#/', {
      onBeforeLoad(win) {
        cy.spy(win.console, 'log').as('console.log')
      },
    })

    cy.get('[data-store="name"]').should('have.text', 'humpback')
    cy.get('[data-env="env"]').should('have.text', 'development')
    cy.get('[data-config="props"]').should('have.text', 'Locale')
    cy.get('#date-picker input').should('have.value', '二月 15日 2022')
    cy.get('[data-config="pages"]').should('have.text', 'config, dispatch, i18n, message, create, render, helper')

    cy.get('@console.log').should('be.calledWith', 'app,false')
    cy.get('@console.log').should('be.calledWith', 'page,true')
  })

  it('container error', () => {
    cy.visit('/container-error.html')
    cy.contains('[APP_ERROR] variable is not defined').should('exist')
  })

  it('default-container', () => {
    cy.visit('/default-container.html')
    cy.contains('App Container is not defined').should('exist')
  })

  it('component error', () => {
    cy.visit('/component-error.html')
    cy.contains('[SCRIPT_ERROR] noexist is not defined').should('exist')
  })

  it('store error', () => {
    cy.visit('/store-error.html')
    cy.contains('[APP_ERROR] b is not defined').should('exist')
  })
})
