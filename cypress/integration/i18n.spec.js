/// <reference types="cypress" />

describe('i18n', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false)
  })

  it('component config test', () => {
    cy.visit('/#/i18n')

    // error type
    cy.contains('h3', 'Error').next().contains('p', 'no-config').should('exist')
    cy.contains('h3', 'Error').next().contains('p', 'no-resources').should('exist')
    cy.contains('h3', 'Error').next().contains('p', 'no-key').should('exist')
    cy.contains('h3', 'Error').next().contains('p', 'no-locale').should('exist')
    cy.contains('h3', 'Error').next().contains('p', '[SCRIPT_ERROR]:get i18n config error').should('exist')
    cy.contains('h3', 'Error').next().contains('button', '刷新').should('exist')

    // change locale
    cy.contains('h3', 'I18n').next().contains('p', 'name: 张三').should('exist')
    cy.contains('h3', 'I18n').next().contains('p', 'greet: 你好，A，B').should('exist')
    cy.contains('h3', 'Vue Component').next().contains('p', 'greet: 你好，C，D').should('exist')
    cy.contains('h3', 'Vue Component').next().contains('p', 'name: 张三').should('exist')
    cy.contains('button', 'change locale').click()
    cy.contains('h3', 'I18n').next().contains('p', 'name: Json').should('exist')
    cy.contains('h3', 'I18n').next().contains('p', 'greet: Hello, A, B').should('exist')
    cy.contains('h3', 'Vue Component').next().contains('p', 'greet: Hello, C, D').should('exist')
    cy.contains('h3', 'Vue Component').next().contains('p', 'name: Json').should('exist')
    cy.contains('h3', 'Error').next().contains('button', 'reload').should('exist')

    // default text
    cy.contains('h3', 'Default Text').next().contains('p', 'default Text').should('exist')
    cy.contains('h3', 'Default Text').next().contains('p', 'Json').should('exist')
    cy.contains('h3', 'Default Text').next().contains('p', 'Hello, {name}, {name2}').should('exist')
    cy.contains('h3', 'Default Text').next().contains('p', 'Hello, {name}, {name2}').should('exist')

    // async config
    cy.contains('h3', 'Async').next().contains('p', 'name').should('exist')
    cy.contains('button', 'get resources').click()
    cy.contains('h3', 'Async').next().contains('p', 'Json').should('exist')

    // update config
    cy.contains('h3', 'Update').next().contains('p', 'name').should('exist')
    cy.contains('button', 'update resources').click()
    cy.contains('button', 'update localeKey').click()
    cy.contains('h3', 'Update').next().contains('p', 'Json').should('exist')

    // update config vue
    cy.contains('button', 'vue update localeKey').click()
    cy.contains('h3', 'Vue Component').next().contains('p', 'greet: greet').should('exist')
    cy.contains('h3', 'Vue Component').next().contains('p', 'name: name').should('exist')
  })

  it('app config', () => {
    cy.visit('/i18n/index.html')

    // app update config
    cy.contains('title: Jpabn').should('exist')
    cy.contains('button', 'update global').click()
    cy.contains('title: update JP').should('exist')
  })

  it('app async config', () => {
    cy.visit('/i18n/async.html')

    // app update config
    cy.contains('title: title').should('exist')
    cy.contains('button', 'get Resource').click()
    cy.contains('title: Japan').should('exist')
  })

  it('app async config error', () => {
    cy.visit('/i18n/async-error.html')

    // app update config
    cy.contains('title: title').should('exist')
    cy.contains('button', 'get Resource').click()
    cy.contains('title: title').should('exist')
  })
})
