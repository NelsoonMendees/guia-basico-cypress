///<reference types="Cypress" />

describe('Login', () => {
    context('Quando o usuário informa dados validos', () => {
        it('Deve realizar login com sucesso', () => {
            cy.visit('/')
            cy.get('[data-test="username"]').type("standard_user")
            cy.xpath('//input[@id="password"]').type("secret_sauce")
            cy.get('#login-button').click()
            cy.url().should('contain', '/inventory.html')
            cy.xpath("//span[@class='title']").should('be.visible').and('have.text', 'Products')
        })
    })

    context('Quando o usuário não informa o campo password', function () {
        it('Deve exibir mensagem de passoword obrigatório', function () {
            cy.visit('/')
            cy.get('[data-test="username"]').type("standard_user")
            cy.get('#login-button').click()
            cy.get("[data-test='error']").should('be.visible').and('have.text', "Epic sadface: Password is required")
        })
    })

    context('Quando o usuário não informa um login valido', function () {
        it('Deve exibir mensagem de usuario ou senha invalidos', function () {
            cy.visit('/')
            cy.get('[data-test="username"]').type("standard")
            cy.xpath('//input[@id="password"]').type("secret_sauce")
            cy.get('#login-button').click()
            cy.get("[data-test='error']").should('be.visible').and('have.text', "Epic sadface: Username and password do not match any user in this service")
        })
    })
})

