/// <reference types="cypress"
import character from '../../fixtures/characters.json'

describe('POST /characters', function () {

    before(function () {
        cy.getToken()

        cy.back2ThePast()
    })
    it('Deve cadastrar um personagem', function () {

        cy.api({
            method: 'POST',
            url: Cypress.env('urlAPI') + '/characters',
            body: character.Wanda,
            headers: {
                Authorization: Cypress.env('token')
            }
        }).then((response) => {
            expect(response.status).to.eql(201)
            expect(response.body.character_id.length).to.eql(24)
        })
    })

    context('Quando o personagem já existe', () => {

        before(function () {
            cy.postCharacter(character.Stark)
        })

        it('não deve cadastrar duplicado', () => {
            cy.api({
                method: 'POST',
                url: Cypress.env('urlAPI') + '/characters',
                body: character.Stark,
                headers: {
                    Authorization: Cypress.env('token')
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eql(400)
                expect(response.body.error).to.eql('Duplicate character')
            })
        })
    })
})