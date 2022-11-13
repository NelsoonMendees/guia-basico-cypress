import { el } from './elements'

class LoginPage {
    go() {
        cy.visit('/')
        cy.title().should('eq', 'Swag Labs')
        cy.get(el.logo).should('be.visible')
    }

    fillForm(user) {
        cy.get(el.user).type(user.userName)
        cy.xpath(el.password).type(user.password)
    }

    submit() {
        cy.get(el.login).click()
    }

    validaLogin() {
        cy.xpath(el.title).should('be.visible').and('have.text', 'Products')
    }

    passworRequired(user, message) {
        cy.get(el.user).type(user.userName)
        cy.get(el.login).click()
        cy.get(el.error).should('be.visible').and('have.text', message)
    }
}

export default new LoginPage()