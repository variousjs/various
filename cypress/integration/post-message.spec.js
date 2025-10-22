/// <reference types="cypress" />

describe('post message', () => {
  beforeEach(() => {
    cy.visit('/#/post-message')
  })

  it('test', () => {
    // post message from react component
    cy.contains('button', 'React Post').click()
    cy.contains('h3', 'onMessage').next().children()
      .eq(0)
      .should('have.text', 'Trigger: post-message.MessageB')
    cy.contains('h3', 'onMessage').next().children()
      .eq(1)
      .should('have.text', 'Event: B-greet')
    cy.contains('h3', 'Vue Component').next().children()
      .eq(0)
      .should('have.text', 'Trigger: post-message.MessageB')
    cy.contains('h3', 'Vue Component').next().children()
      .eq(1)
      .should('have.text', 'Event: B-greet')

    // post message from vue component
    cy.contains('button', 'Vue Post').click()
    cy.contains('h3', 'onMessage').next().children()
      .eq(0)
      .should('have.text', 'Trigger: post-message-vue')
    cy.contains('h3', 'onMessage').next().children()
      .eq(1)
      .should('have.text', 'Event: Vue-greet')

    // post message from createPostMessage
    cy.contains('button', 'from createPostMessage').click()
    cy.contains('h3', 'onMessage').next().children()
      .eq(0)
      .should('have.text', 'Trigger: custom')
    cy.contains('h3', 'onMessage').next().children()
      .eq(1)
      .should('have.text', 'Event: custom-greet')
  })
})
