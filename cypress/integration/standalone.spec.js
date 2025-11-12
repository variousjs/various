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

    // i18n
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
  })

  it('deps error', () => {
    cy.visit('/standalone.html?type=depsError')
    cy.contains('p', 'Error - /dist/standalone/a.js').should('exist')
    cy.contains('p', 'Error - /dist/standalone/b.js').should('exist')
  })

  it('requirejs path', () => {
    cy.visit('/standalone.html?type=requirejsPath')
    cy.contains('h3', 'SUBMODULE_LOADING_ERROR').should('exist')
    cy.contains('h3', 'NOT_DEFINED').should('exist')
  })

  it('requirejs path error', () => {
    cy.visit('/standalone.html?type=requirejsPathError')
    cy.contains('h3', 'SCRIPT_ERROR').should('exist')
  })
})
