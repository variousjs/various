/// <reference types="cypress" />

describe('module test', () => {
  beforeEach(() => {
    cy.visit('/#/module')
  })

  it('sub module', () => {
    cy.get('[data-title="g"]').next().should('have.text', 'G')
    cy.get('[data-title="z.X"]').next().should('contain.text', 'Rendered(Z)')
    cy.get('[data-title="gg"]').next().should('have.text', 'G')
  })

  it('$render', () => {
    cy.get('#render-z').should('have.text', 'no')
    cy.get('#render-switch').should('have.text', 'no')
    cy.contains('$render(Z)').click()
    cy.contains('$render(switch)').click()
    cy.get('#render-z').should('have.text', 'yes')
    cy.get('#render-switch').should('have.text', 'yes')
    cy.contains('$isComponentLoaded(H)').should('have.length', 1)
    cy.get('#switch').within(() => {
      cy.get('input').should('have.css', 'display', 'none')
    })
  })

  it('$preload', () => {
    cy.contains('$preload(H)').click()
    cy.get('#preload-h').should('have.text', 'yes')
    cy.contains('$render(Z)').click()
    cy.contains('$isComponentLoaded(H)').click()
    cy.get('#component-loaded-h').should('have.text', 'yes')
  })

  it('$getMountedComponents', () => {
    cy.get('.component-loaded').should('have.length', 3).then(() => {
      cy.contains('$getMountedComponents').click()
      cy.get('#mounted-components').should('have.text', 'g,gg,x,z.X')
    })
  })
})
