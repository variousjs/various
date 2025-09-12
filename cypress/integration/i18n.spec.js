/// <reference types="cypress" />

describe('i18n', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false)
  })

  it('c', () => {
    cy.visit('/#/i18n')
    cy.get('[data-c="title"]').should('have.text', '标题')
    cy.get('[data-c="hello"]').should('have.text', '你好，1，999')

    cy.get('[data-e="title"]').should('have.text', 'title')
    cy.get('[data-e="input"]').should('have.value', 'Global Title')

    cy.get('[data-d="title"]').should('have.text', '标题')
      .then(() => {
        cy.get('[data-c="action-set"]').click()

        cy.get('[data-c="title"]').should('have.text', 'Title')
        cy.get('[data-c="hello"]').should('have.text', 'Hello, 1, 999')

        cy.get('[data-e="title"]').should('have.text', 'title')

        cy.get('[data-d="title"]').should('have.text', 'Title')

        cy.get('[data-e="input"]').should('have.value', 'globalTitle')
      })
  })

  it('d', () => {
    cy.visit('/#/i18n')
    cy.get('[data-d="title"]').should('have.text', '标题')
    cy.get('[data-d="titl"]').should('have.text', 'titl')

    cy.get('[data-d="action-set"]').click()
    cy.get('[data-d="title"]').should('have.text', 'default title')
    cy.get('[data-d="titl"]').should('have.text', 'titl')
    cy.get('[data-c="hello"]').should('have.text', 'Default Hello')

    cy.get('[data-d="action-get"]').click()
    cy.get('[data-d="lang"]').should('have.text', 'zh-CN')
  })

  it('error case', () => {
    cy.visit('/i18n.html')
    cy.get('[data-e="input"]').should('have.value', 'globalTitle')
    cy.contains('[SCRIPT_ERROR]:something error').should('exist')

    cy.visit('/i18n2.html', {
      onBeforeLoad(win) {
        cy.spy(win.console, 'log').as('console.log')
      },
    })
    cy.get('[data-e="input"]').should('have.value', 'globalTitle')
    cy.get('[data-c="hello"]').should('have.text', 'Default Hello')
    cy.get('@console.log').should('be.calledWith', 'get i18n something error')

    cy.visit('/i18n3.html', {
      onBeforeLoad(win) {
        cy.spy(win.console, 'log').as('console.log2')
      },
    })
    cy.get('@console.log2').should('be.calledWith', 'locale key not defined')
  })
})
