/// <reference types="cypress" />
import { faker } from "@faker-js/faker";

import addToCart from "../../support/pages/addToCart/index";
import user from "../../fixtures/user.json";

describe("Adicionar produto no carrinho", () => {
  beforeEach(() => {
    cy.login(user);
  });

  context("Quando o usuário escolhe um produto", () => {
    const client = {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      cep: faker.address.zipCode(),
    };

    it("Deve adicionar produto no carrinho com sucesso", () => {
      addToCart.addItem();
    });

    it("Deve adicionar produto e realizar checkout com sucesso", () => {
      addToCart.addItemAndGoToCheckout(
        client,
        "Sauce Labs Backpack",
        "Sauce Labs Bike Light"
      );
    });
  });
});
