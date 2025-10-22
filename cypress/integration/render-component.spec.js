/// <reference types="cypress" />

describe('render component', () => {
  beforeEach(() => {
    cy.visit('/#/render-component')
  })

  it('test', () => {
    // render & remove component
    cy.contains('button', 'renderA').click()
    cy.get('#a-dom').should('have.text', 'A')
    cy.contains('button', 'unMounteA').click()
    cy.get('#a-dom').should('be.empty')

    // render with props
    cy.contains('button', 'with props').click()
    cy.get('#props-dom').should('have.text', 'bar')

    // global props
    cy.contains('button', 'global').click()
    cy.get('#global-dom').contains('p', 'name: humpback').should('exist')
    cy.contains('button', 'dispatch').click()
    cy.get('#global-dom').contains('p', 'name: various').should('exist')

    // ref
    cy.contains('button', 'ref').click()
    cy.get('#ref-dom').contains('p', 'text:').should('exist')
    cy.contains('button', 'set text').click()
    cy.get('#ref-dom').contains('p', 'text: text via ref').should('exist')

    // custom node
    cy.contains('button', 'custom').click()
    cy.get('#custom-dom').should('have.text', 'Pathname: /render-component')

    // url & vue
    cy.contains('button', 'url & vue').click()
    cy.get('#url-dom').contains('p', 'vue component').should('exist')

    // render by vue component
    cy.contains('button', 'vue render').click()
    cy.get('#vue-dom').should('have.text', 'this will render by vue component')
  })
})
