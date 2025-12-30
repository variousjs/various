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
    const t = 'define(["react"],(function(e){return function(){"use strict";var t={161:function(t){t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var u=n[e]={exports:{}};return t[e](u,u.exports,r),u.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){r.r(o);var e=r(161),t=r.n(e);o.default=function(){return t().createElement("div",{style:{fontSize:50,margin:0}},"Ggggggg")}}(),o}()}))'

    cy.contains('p', '[SCRIPT_ERROR]:A is not defined').then(() => {
      cy.intercept('/dist/create-component/reload.js?*', t)
      cy.contains('p', '[SCRIPT_ERROR]:A is not defined').next().click()
      cy.contains('div', 'Ggggggg').should('exist')
    })
  })

  it('props slient', () => {
    cy.visit('/app/create-component-slient.html')
    cy.get('#t').should('have.text', 'create,Acreatevue')
  })
})
