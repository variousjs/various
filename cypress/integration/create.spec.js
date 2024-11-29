/// <reference types="cypress" />

describe('create component', () => {
  beforeEach(() => {
    cy.visit('/#/create', {
      onBeforeLoad(win) {
        cy.spy(win.console, 'log').as('console.log')
      },
    })
    Cypress.on('uncaught:exception', () => false)
  })

  it('success', () => {
    cy.contains('create-jj').should('exist').next().should('have.text', 'J')
    cy.contains('create-j').should('exist').next().should('have.text', 'J')
    cy.contains('create-j.j').should('exist').next().should('have.text', 'j')
  })

  it('error', () => {
    cy.get('@console.log').should('be.calledWith', 'create-j,SUBMODULE_NOT_DEFINED')

    cy.contains('[SUBMODULE_LOADING_ERROR]:Script error for "rc-table"')
      .should('exist')
      .next()
      .should('have.text', '刷新')

    cy.contains('[SCRIPT_ERROR]:noexist is not defined')
      .should('exist')
      .next()
      .should('have.text', '刷新')

    cy.contains('[NOT_DEFINED]:Module "no-defined" not defined')
      .should('exist')
      .next()
      .should('not.exist')

    cy.contains('[LOADING_ERROR]:Script error for "create-path-error"')
      .should('exist')
      .next()
      .should('have.text', '刷新')

    cy.contains('[INVALID_MODULE]:Module "create-empty-content" not content')
      .should('exist')
      .next()
      .should('have.text', '刷新')

    cy.contains('create-j.k')
      .should('exist')
      .next()
      .should('contain.text', '[INVALID_COMPONENT]:Not a valid React component')

    cy.contains('create-j.l')
      .should('exist')
      .next()
      .should('contain.text', '[INVALID_COMPONENT]:Not a valid React component')

    cy.contains('[SUBMODULE_NOT_DEFINED]:Submodule "no-exist" not defined')
      .should('exist')
      .next()
      .should('have.text', '刷新')

    cy.contains('create-slient')
      .should('exist')
      .next()
      .should('not.exist')

    cy.contains('create-timeout')
      .should('exist')
      .next()
      .should('contain.text', '[LOADING_ERROR]:Load timeout for modules: create-timeout')
  })

  it('reload', () => {
    const t = 'define(["react"],(function(e){return function(){"use strict";var t={161:function(t){t.exports=e}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var u=n[e]={exports:{}};return t[e](u,u.exports,r),u.exports}r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};return function(){r.r(o);var e=r(161),t=r.n(e);o.default=function(){return t().createElement("div",{style:{fontSize:50,margin:0}},"G")}}(),o}()}))'

    cy.contains('[SCRIPT_ERROR]:noexist is not defined').then(() => {
      cy.intercept('/dist/create-i.js?*', t)
      cy.contains('[SCRIPT_ERROR]:noexist is not defined').next().click()
      cy.contains('create-i').next().should('have.text', 'G')
    })

    cy.wait(1000)

    cy.contains('[SUBMODULE_LOADING_ERROR]:Script error for "rc-table"')
      .should('exist')
      .next()
      .click()

    cy.contains('[SUBMODULE_SCRIPT_ERROR]:Maximum call stack size exceeded')
      .should('exist')
  })
})
