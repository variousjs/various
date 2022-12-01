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

  // check component unmount
  it('ll', () => {
    cy.get('[data-ll="action-render-t"]').click()
    cy.get('[data-ll="action-unmount-t"]').click()

    cy.wait(2000)

    cy.get('[data-ll="action-render-s"]').click()
    cy.get('[data-ll="action-unmount-s"]').click()

    cy.wait(1000)
  })
})
