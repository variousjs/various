/// <reference types="cypress" />

describe('render component', () => {
  beforeEach(() => {
    cy.visit('/#/render')
  })

  it('context', () => {
    cy.get('#context').should('have.text', '-')
    cy.get('[data-k="action-context"]').click()
    cy.get('#context').should('have.text', 'Pathname: /render')
  })

  it('k', () => {
    cy.get('[data-k="ready"]').should('have.text', 'false')

    cy.get('[data-k="action"]').click()
    cy.get('[data-k="ready"]').should('have.text', 'true')

    cy.get('[data-l="action-render"]').click()
    cy.get('#switch > span').should('exist')
    cy.get('[data-m="is-switch"]').should('have.text', 'true')

    // rerender
    cy.get('[data-l="action-render"]').click()
    cy.get('#switch > span').should('exist')

    cy.get('[data-l="action-unmount"]').click()
    cy.get('#switch > span').should('not.exist')
    cy.get('[data-m="is-switch"]').should('have.text', 'false')
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
