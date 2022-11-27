/// <reference types="cypress" />

describe('render component', () => {
  beforeEach(() => {
    cy.visit('/#/render')
  })

  it('k', () => {
    cy.get('[data-k="ready"]').should('have.text', 'false')

    cy.get('[data-k="action"]').click()
    cy.get('[data-k="ready"]').should('have.text', 'true')

    cy.get('[data-l="action-render"]').click()
    cy.get('#switch > span').should('exist')

    // rerender
    cy.get('[data-l="action-render"]').click()
    cy.get('#switch > span').should('exist')

    cy.get('[data-l="action-unmount"]').click()
    cy.get('#switch > span').should('not.exist')
  })
})
