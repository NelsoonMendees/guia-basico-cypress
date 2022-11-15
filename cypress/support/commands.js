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

Cypress.Commands.add('back2ThePast', function () {
    cy.api({
        method: 'DELETE',
        url: Cypress.env('urlAPI') + '/back2thepast/637395111a18d300161b3f0a'
    }).then((response) => {
        expect(response.status).to.eql(200)
    })
})

Cypress.Commands.add('getToken', function () {
    cy.api({
        method: 'POST',
        url: Cypress.env('urlAPI') + '/sessions',
        body: {
            email: Cypress.env('user'),
            password: Cypress.env('password')
        }
    }).then((response) => {
        expect(response.status).to.eql(200)
        Cypress.env('token', response.body.token)
    })
})

Cypress.Commands.add('postCharacter', function (character) {
    cy.api({
        method: 'POST',
        url: Cypress.env('urlAPI') + '/characters',
        body: character,
        headers: {
            Authorization: Cypress.env('token')
        }
    }).then((response) => {
        expect(response.status).to.eql(201)
        expect(response.body.character_id.length).to.eql(24)
    })
})

Cypress.Commands.add('postCharacters', function (payload) {
    cy.api({
        method: 'POST',
        url: Cypress.env('urlAPI') + '/characters',
        body: payload,
        headers: {
            Authorization: Cypress.env('token')
        },
        failOnStatusCode: false
    }).then((response) => {
        return response
    })
})