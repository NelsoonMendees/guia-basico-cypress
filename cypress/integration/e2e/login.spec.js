///<reference types="Cypress" />

describe('Login', () => {
    const user = { userName: "standard_user", password: "secret_sauce" }

    context('Quando o usuário informa dados validos', () => {
        it('Deve realizar login com sucesso', () => {

            // Abre a pagina cofigurada na baseUrl no arquivo cypress.json
            cy.visit('/')

            // digita o user name
            cy.get('[data-test="username"]').type(user.userName)

            // digita o password do usuario
            cy.xpath('//input[@id="password"]').type("secret_sauce")

            //clica no botão de login
            cy.get('#login-button').click()

            // verifica se a url contem o caminho da pagina principal
            cy.url().should('contain', '/inventory.html')

            // valida se o titulo está visivel e contem o texto "Products"
            cy.xpath("//span[@class='title']").should('be.visible').and('have.text', 'Products')
        })
    })

    context('Quando o usuário não informar a senha', function () {
        it('Deve exibir mensagem de senha obrigatório', function () {
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

