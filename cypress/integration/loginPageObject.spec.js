/// <reference types="Cypress" />
import loginPage from '../support/pages/login/index'

describe('Login - Page Objects', () => {
    context('Quando o usuário informa dados validos', () => {
        it('Deve realizar login com sucesso', () => {
            const user = { userName: "standard_user", password: "secret_sauce" }

            loginPage.go()
            loginPage.fillForm(user)
            loginPage.submit()
            loginPage.validaLogin()
        })
    })

})