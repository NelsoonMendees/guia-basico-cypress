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
}

export default new LoginPage()