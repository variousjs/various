/// <reference types="cypress" />

describe('dispatch test', () => {
  beforeEach(() => {
    cy.visit('/#/dispatch')
  })

  it('store', () => {
    cy.get('[data-title="a"]').next().should('have.text', 'Store: humpback')
    cy.get('[data-title="X"]').next().should('have.text', 'Store: humpback')
    cy.get('#x-dispatch-global').click()
    cy.get('[data-title="a"]').next().should('have.text', 'Store: X')
    cy.get('[data-title="X"]').next().should('have.text', 'Store: X')
    cy.get('#b-dispatch-global').click()
    cy.get('[data-title="a"]').next().should('have.text', 'Store: B')
    cy.get('[data-title="X"]').next().should('have.text', 'Store: B')
    cy.get('#a-dispatch-global').click()
    cy.get('#a-dispatch-error').should('have.text', '`store` action `no-exist` is not present')
  })

  it('component', () => {
    cy.contains('$dispatch(no-exist)').click()
      .then(() => {
        cy.contains('$dispatch(b)').click()
        cy.contains('Value(b)').should('have.text', 'Value(b): b')
        cy.contains('$dispatch(b-no-exits)').click()
        cy.get('#a-dispatch-error').should('have.text', '`b.C` action `no-exist` is not present')
      })
    cy.get('[data-title="b.C"]').next().should('have.text', 'Dispatch Error: component `no-exist` is not ready')
    cy.get('[data-title="a"]').then(() => {
      cy.contains('$dispatch(a)').click()
      cy.contains('Store(component)').should('have.text', 'Store(component): ab')
      cy.contains('Container').next().should('have.value', 'Container state keeping')
    })
  })
})
