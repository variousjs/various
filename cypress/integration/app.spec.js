/// <reference types="cypress" />
const packageJson = require('../../package.json')

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
    cy.get('[data-version="version"]').should('have.text', packageJson.version)
    cy.get('[data-config="props"]').should('have.text', 'Locale')
    cy.get('#date-picker input').should('have.value', '二月 15日 2022')
    cy.get('[data-config="pages"]').should('have.text', 'config, dispatch, i18n, message, create, render, helper, logger')

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

  it('production env', () => {
    cy.visit('/production.html', {
      onBeforeLoad(win) {
        cy.spy(win.console, 'log').as('console.log')
      },
    })

    cy.get('[data-b="action-a-block"]').click()
    cy.get('@console.log').should('be.calledWith', 'block')
  })

  it('middlewares', () => {
    cy.visit('/middlewares.html')
    cy.get('[data-a="action-b"]').click()
    cy.get('[data-f="block"]').click()
    cy.wait(300)
  })
})
