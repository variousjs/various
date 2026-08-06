/// <reference types="cypress" />

describe('create component', () => {
  beforeEach(() => {
    cy.visit('/#/create-component')
    Cypress.on('uncaught:exception', () => false)
  })

  it('test', () => {
    // FC Ref
    cy.contains('button', 'set text').click().then(() => {
      cy.contains('h3', 'Create Component').next().children()
        .eq(0)
        .should('have.text', 'text: some text')
    })

    // Runtime Create
    cy.contains('h3', 'Runtime Create').next().children()
      .eq(0)
      .should('have.text', 'humpback')

    // Vue & custom url
    cy.get('.various-vue-component.create-vue-c').children()
      .should('have.text', 'props name: humpback / store name: humpback')

    // Class Component Ref
    cy.contains('h3', 'Class Component Ref').next().children()
      .eq(0)
      .should('have.value', '0')
    cy.contains('button', 'input add').click().then(() => {
      cy.contains('h3', 'Class Component Ref').next().children()
        .eq(0)
        .should('have.value', '1')
    })

    // Store props
    cy.contains('h3', 'Watch Store').next().children()
      .eq(0)
      .should('have.text', 'name: humpback')
    cy.contains('button', 'dispatch').click().then(() => {
      cy.contains('h3', 'Watch Store').next().children()
        .eq(0)
        .should('have.text', 'name: various')
      cy.get('.various-vue-component.create-vue-c').children()
        .should('have.text', 'props name: various / store name: various')
    })

    // vue component type error
    cy.contains('h3', 'create.A').next().children()
      .eq(0)
      .should('have.text', '[INVALID_COMPONENT]:not a valid Vue component')
    cy.contains('h3', 'create.B').next().children()
      .eq(0)
      .should('have.text', '[INVALID_COMPONENT]:not a valid Vue component')

    // react component type error
    cy.contains('h3', 'create-react-vue').next().children()
      .eq(0)
      .should('have.text', '[INVALID_COMPONENT]:not a valid React component')
    cy.contains('h3', 'create.C').next().children()
      .eq(0)
      .should('have.text', '[INVALID_COMPONENT]:not a valid React component')

    // script error
    cy.contains('h3', 'create.D').next().children()
      .eq(0)
      .should('have.text', '[SCRIPT_ERROR]:Cannot read properties of undefined (reading \'c\')')
    cy.contains('h3', 'create-vue-e').next().children()
      .eq(0)
      .should('have.text', '[SCRIPT_ERROR]:Cannot read properties of undefined (reading \'c\')')
  })

  it('reload', () => {
    const t = "import React from 'react'; export default function() { return React.createElement('div', {style:{fontSize:50,margin:0}}, 'Ggggggg'); }"

    cy.contains('p', '[SCRIPT_ERROR]:A is not defined').then(() => {
      cy.intercept('/dist/create-component/reload.js?*', (req) => {
        req.reply({
          statusCode: 200,
          headers: { 'Content-Type': 'application/javascript' },
          body: t,
        })
      })
      cy.contains('p', '[SCRIPT_ERROR]:A is not defined').next().click()
      cy.contains('div', 'Ggggggg').should('exist')
    })
  })

  it('props slient', () => {
    cy.visit('/app/create-component-slient.html')
    cy.get('#t').should('have.text', 'create.Acreatevue')
  })
})
