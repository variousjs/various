/// <reference types="cypress" />

describe('i18n test', () => {
  beforeEach(() => {
    cy.visit('/#/i18n', {
      onBeforeLoad(win) {
        cy.stub(win.console, 'warn').as('consoleWarn')
      },
    })
  })

  it('i18n', () => {
    cy.get('[data-title="k.C"]').next().should('have.text', '标题')
    cy.get('[data-title="k.T"]').next().should('have.text', '标题')
    cy.get('@consoleWarn').should('be.calledWith', '[k.G][i18n] key `titl` not exist')
    cy.get('@consoleWarn').should('be.calledWith', '[k.T][i18n] config not exist')
    cy.get('#zh-cn').click()
    cy.get('@consoleWarn').should('be.calledWith', '[k.G][i18n] locale `zh-CN` not exist')
    cy.get('#en').click()
    cy.get('[data-title="k.C"]').next().should('have.text', 'Title')
    cy.get('#titl').should('have.text', '标题')
  })
})
