/// <reference types="cypress" />

describe('component error test', () => {
  beforeEach(() => {
    cy.visit('/#/error')
    Cypress.on('uncaught:exception', () => false)
  })

  it('error type', () => {
    cy.contains('[INVALID_COMPONENT]:Cannot load component named `store`').should('exist')
    cy.contains('[LOADING_ERROR]:Script error for "link"')
      .should('exist').parent().next()
      .should('have.attr', 'type', 'button')
    cy.contains('[DEPENDENCIES_LOADING_ERROR]')
      .should('exist').parent().next()
      .should('have.attr', 'type', 'button')
    cy.contains('[SCRIPT_ERROR]:noexist is not defined')
      .should('exist').parent().next()
      .should('have.attr', 'type', 'button')
    cy.contains('[NOT_DEFINED]:Component not defined').should('exist')
    cy.contains('[INVALID_COMPONENT]:No content').should('exist')
    cy.contains('[INVALID_COMPONENT]:Component cannot be executed').should('exist')
    cy.contains('[INVALID_COMPONENT]:Module not defined').should('exist')
    cy.wait(3500)
    cy.get('[data-title="timeout-error"]').next().should('not.exist')
  })

  it('reload', () => {
    const t = 'define(["react"],(function(e){return function(){"use strict";var t={161:function(t){t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var u=n[e]={exports:{}};return t[e](u,u.exports,r),u.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){r.r(o);var e=r(161),t=r.n(e);o.default=function(){return t().createElement("div",{style:{fontSize:50,margin:0}},"G")}}(),o}()}))'

    cy.contains('[LOADING_ERROR]:Script error for "link"').then(() => {
      cy.intercept('/link.js', t)
      cy.contains('[LOADING_ERROR]:Script error for "link"').parent().next().click()
      cy.get('[data-title="link"]').next().should('have.text', 'G')
    })
  })
})
