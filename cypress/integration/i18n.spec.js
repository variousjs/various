/// <reference types="cypress" />

describe('i18n test', () => {
  beforeEach(() => {
    cy.visit('/#/i18n')
  })

  it('i18n', () => {
    cy.get('[data-title="k.C"]').next().should('have.text', '标题')
    cy.get('[data-title="k.C"]').next().next().should('have.text', '你好，1，999')
    cy.get('[data-title="k.T"]').next().should('have.text', 'title')
    cy.get('#zh-cn').click()
    cy.get('[data-title="k.C"]').next().should('have.text', 'title')
    cy.get('#en').click()
    cy.get('[data-title="k.C"]').next().should('have.text', 'Title')
    cy.get('#titl').should('have.text', 'titl')
  })
})
