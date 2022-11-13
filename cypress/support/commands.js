/// <reference types="Cypress" />

import { el } from './pages/login/elements'


Cypress.Commands.add('login', function (user) {
    cy.visit('/')
    cy.get(el.logo).should('be.visible')
    cy.get(el.user).type(user.userName)
    cy.xpath(el.password).type(user.password)
    cy.get(el.login).click()
    cy.xpath(el.title).should('be.visible').and('have.text', 'Products')
})

