/// <reference types="cypress" />

describe('i18n', () => {
  beforeEach(() => {
    cy.visit('/#/i18n')
    Cypress.on('uncaught:exception', () => false)
  })

  it('c', () => {
    cy.get('[data-c="title"]').should('have.text', '标题')
    cy.get('[data-c="hello"]').should('have.text', '你好，1，999')

    cy.get('[data-e="title"]').should('have.text', 'title')

    cy.get('[data-d="title"]').should('have.text', '标题')
      .then(() => {
        cy.get('[data-c="action-set"]').click()

        cy.get('[data-c="title"]').should('have.text', 'Title')
        cy.get('[data-c="hello"]').should('have.text', 'Hello, 1, 999')

        cy.get('[data-e="title"]').should('have.text', 'title')

        cy.get('[data-d="title"]').should('have.text', 'Title')
      })
  })

  it('d', () => {
    cy.get('[data-d="title"]').should('have.text', '标题')
    cy.get('[data-d="titl"]').should('have.text', 'titl')

    cy.get('[data-d="action-set"]').click()
    cy.get('[data-d="title"]').should('have.text', 'title')
    cy.get('[data-d="titl"]').should('have.text', 'titl')

    cy.get('[data-d="action-get"]').click()
    cy.get('[data-d="lang"]').should('have.text', 'zh-CN')
  })
})
