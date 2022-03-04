/// <reference types="cypress" />

describe('route test', () => {
  beforeEach(() => {
    cy.visit('/#/module')
  })

  it('route', () => {
    cy.contains('Container').should('exist').then(() => {
      cy.get('[data-title="X"]').should('exist').then(() => {
        cy.get('[data-title="g"]').should('exist').then(() => {
          cy.get('[data-title="gg"]').should('exist').then(() => {
            cy.contains('$render(Z)').click().then(() => {
              cy.visit('/#/message')
              cy.wait(2500)
              cy.contains('Container').should('exist')
              cy.get('[data-title="X"]').should('exist')
              cy.get('[data-title="c"]').should('exist')
              cy.get('[data-title="d.dd"]').should('exist')
              cy.get('[data-title="g"]').should('not.exist')
              cy.get('[data-title="gg"]').should('not.exist')
            })
          })
        })
      })
    })
  })
})
