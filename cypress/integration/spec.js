/// <reference types="cypress" />

it('adds todos', () => {
  cy.request('POST', '/todos', { todos: [] })
  cy.visit('/')
  cy.get('.new-todo').type('Learn Cypress{enter}').type('Write tests{enter}')
  cy.get('.todo').should('have.length', 2)
})
