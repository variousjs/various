/// <reference types="cypress" />

describe('create module', () => {
  beforeEach(() => {
    cy.visit('/#/create-module')
    Cypress.on('uncaught:exception', () => false)
  })

  it('test', () => {
    // default
    cy.contains('h3', 'CreateModule').next().find('button').click()
    cy.contains('h3', 'CreateModule').next().children().eq(0)
      .should('have.text', 'Default: default module text')

    // module not define
    cy.contains('h3', 'Not Defined').next().find('button').click()
    cy.contains('h3', 'Not Defined').next().children().eq(0)
      .should('have.text', 'Error: NOT_DEFINED')

    // module invalid
    cy.contains('h3', 'Invalid Module').next().find('button').click()
    cy.contains('h3', 'Invalid Module').next().children().eq(0)
      .should('have.text', 'Error: INVALID_MODULE')

    // submodule not define
    cy.contains('h3', 'Submodule Not Defined').next().find('button').click()
    cy.contains('h3', 'Submodule Not Defined').next().children().eq(0)
      .should('have.text', 'Error: SUBMODULE_NOT_DEFINED')

    // loading error
    cy.contains('h3', 'Loading Error').next().find('button').click()
    cy.contains('h3', 'Loading Error').next().children().eq(0)
      .should('have.text', 'Error: LOADING_ERROR')

    // submodule loading error (no url, registered module fails)
    cy.contains('h3', 'Submodule Loading Error').next().find('button').click()
    cy.contains('h3', 'Submodule Loading Error').next().children().eq(0)
      .should('have.text', 'Error: SUBMODULE_LOADING_ERROR')

    // script error (registered module loaded with custom url -> LOADING_ERROR,
    // triggers resetDependencyConfig L122 url-override branch)
    cy.contains('h3', 'Script Error').next().find('button').click()
    cy.contains('h3', 'Script Error').next().children().eq(0)
      .should('have.text', 'Error: LOADING_ERROR')
  })

  it('dynamic defined dependency (multiple import maps)', () => {
    // 'sub-m' is not in the app config, so it is missing from the initial
    // import map. defineDependencies appends a new import map at runtime;
    // sub-not-define.js (which has `import sub from 'sub-m'`) then loads.
    // Requires multiple import maps support (Chromium 133+).
    if (Cypress.browser.family !== 'chromium' || Number(Cypress.browser.majorVersion) < 133) {
      cy.log('skip: browser does not support multiple import maps')
      return
    }

    cy.contains('h3', 'Dynamic Defined').next().find('button').click()
    cy.contains('h3', 'Dynamic Defined').next().children().eq(0)
      .should('have.text', 'Value: sub module value')
  })
})
