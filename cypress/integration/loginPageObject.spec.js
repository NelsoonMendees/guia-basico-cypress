/// <reference types="Cypress" />

import loginPage from '../support/pages/login/index'
import message from '../fixtures/message.json'
import user from '../fixtures/user.json'

describe('Login - Page Objects', () => {
    context('Quando o usuário informa dados validos', () => {
        it('Deve realizar login com sucesso', () => {
            loginPage.go()
            loginPage.fillForm(user)
            loginPage.submit()
            loginPage.validaLogin()
        })
    })

    context('Quando o usuário não informar a senha', function () {
        it('Deve exibir mensagem de senha obrigatório', function () {
            loginPage.go()
            loginPage.passworRequired(user, message.passwordRequired)
        })
    })

})