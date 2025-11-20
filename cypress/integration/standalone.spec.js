/// <reference types="cypress" />

describe('standalone', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false)
  })

  it('test', () => {
    cy.visit('/standalone.html', {
      onBeforeLoad(win) {
        cy.spy(win.console, 'info').as('console.info')
      },
    })

    // make sure component exist
    cy.contains('button', 'dispatch').should('exist')
    cy.contains('button', 'postMessage').should('exist')

    // props
    cy.contains('p', 'props: propsA').should('exist')
    cy.contains('p', 'props: propsB').should('exist')

    // store
    cy.contains('p', 'global: B').should('exist')

    // $self
    cy.contains('p', 'info: b - /dist/standalone/b.js').should('exist')

    // i18n & createDispatch
    cy.contains('p', 'greet: 你好，C，D').should('exist')
    cy.contains('button', 'change lng').click()
    cy.contains('p', 'greet: Hello, C, D').should('exist')

    // ref
    cy.contains('button', 'set text').click()
    cy.contains('p', 'text: setText').should('exist')

    // postMessage
    cy.contains('button', 'postMessage').click()
    cy.contains('p', 'Trigger: a.A').should('exist')
    cy.contains('p', 'Event: aaa').should('exist')

    // dispatch
    cy.contains('button', 'dispatch').click()
    cy.get('@console.info').should(
      'be.calledWith',
      '%c aa ',
      Cypress.sinon.match.any,
      'log',
    )

    // createLogger
    cy.contains('button', 'log').click()
    cy.get('@console.info').should(
      'be.calledWith',
      '%c ot ',
      Cypress.sinon.match.any,
      'any',
    )

    // createPostMessage
    cy.contains('button', 'message').click()
    cy.contains('p', 'Trigger: ot').should('exist')
    cy.contains('p', 'Event: greet').should('exist')
  })

  it('strict and without config', () => {
    cy.visit('/standalone.html?type=strict')
    cy.contains('p', 'greet: greet').should('exist')
  })

  it('base config', () => {
    cy.visit('/standalone.html?type=config')
    cy.contains('p', 'greet: greet').should('exist')
  })
})
