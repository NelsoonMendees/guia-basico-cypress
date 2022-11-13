import { el } from './elements'

class AddToCartPage {
    addItem() {
        cy.get(el.addBackPack).click()
        cy.get(el.addBiceLight).click()
        cy.xpath(el.cart).should('have.text', '2').click()
        cy.get(el.title).should('be.visible').and('have.text', 'Your Cart')
        this.validateItemCart("Sauce Labs Backpack")
        this.validateItemCart("Sauce Labs Bike Light")
    }

    addItemAndGoToCheckout(client, itemUm, itemDois) {
        cy.get(el.addBackPack).click()
        cy.get(el.addBiceLight).click()
        cy.xpath(el.cart).should('have.text', '2').click()
        cy.get(el.title).should('be.visible').and('have.text', 'Your Cart')
        this.validateItemCart(itemUm)
        this.validateItemCart(itemDois)
        cy.get(el.goCheckout).click()
        cy.get(el.title).should('be.visible').and('have.text', 'Checkout: Your Information')
        cy.get(el.firstName).type(client.firstName)
        cy.get(el.lastName).type(client.lastName)
        cy.get(el.cep).type(client.cep)
        cy.get(el.continue).click()
        cy.get(el.title).should('be.visible').and('have.text', 'Checkout: Overview')
        cy.get(el.finalizar).scrollIntoView().should('be.visible').click()
        cy.get(el.messageOrder).should('be.visible').and('have.text', 'THANK YOU FOR YOUR ORDER')
    }

    validateItemCart(itemName) {
        cy.xpath(`//div[normalize-space()='${itemName}']`).should('be.visible')
    }
}

export default new AddToCartPage()