/// <reference types="cypress" />
const packageJson = require('../../package.json')

describe('helper', () => {
  beforeEach(() => {
    cy.visit('/#/')
    Cypress.on('uncaught:exception', () => false)
  })

  it('test', () => {
    // version
    cy.contains('h3', 'version').next().should('have.text', packageJson.version)

    // getConfig
    cy.contains('h3', 'getConfig').next().should('have.text', 'timeout: 1.5')

    // getStore
    cy.contains('h3', 'getStore').next().should('have.text', 'name: humpback')

    // isModuleLoaded
    cy.contains('h3', 'isModuleLoaded').next().children()
      .eq(0)
      .should('have.text', 'helper-define: false')

    // earlyParallelDependencies
    cy.contains('h3', 'isModuleLoaded').next().children()
      .eq(1)
      .should('have.text', 'preload component: true')

    // preloadModules error
    cy.contains('button', 'Preload: helper-define').click()
    cy.contains('h3', 'isModuleLoaded').next().children()
      .eq(0)
      .should('have.text', 'helper-define: load error')

    // defineDependencies and isModuleLoaded
    cy.contains('button', 'Define: helper-define').click().then(() => {
      cy.contains('button', 'Preload: helper-define').click()
    })
    cy.contains('h3', 'isModuleLoaded').next().children()
      .eq(0)
      .should('have.text', 'helper-define: true')

    // removeLoadedModules and isModuleLoaded
    cy.contains('button', 'remove: helper-define').click()
    cy.contains('h3', 'isModuleLoaded').next().children()
      .eq(0)
      .should('have.text', 'helper-define: false')

    // getMountedComponents
    cy.contains('h3', 'getMountedComponents').next().should('have.text', 'container,helper')

    // onComponentMounted
    cy.contains('h3', 'onComponentMounted').next().children()
      .eq(0)
      .should('have.text', 'helper: true')
    cy.contains('h3', 'onComponentMounted').next().children()
      .eq(1)
      .should('have.text', 'Waiting: false')

    // onComponentMounted mount component
    cy.contains('button', 'Mount: Waiting').click()
    cy.contains('h3', 'onComponentMounted').next().children()
      .eq(1)
      .should('have.text', 'Waiting: true')
    cy.contains('h3', 'getMountedComponents').next().should('have.text', 'container,helper,helper.Waiting')
  })
})
