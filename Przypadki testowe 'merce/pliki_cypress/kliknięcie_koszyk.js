/// <reference types="cypress" />

describe("E2E - Akcja dodania do koszyka", () => {
    it("Kliknięcie w element", () => {
        cy.visit("https://rekrutacja.dev.merce.com/samsung-galaxy-s21-ultra")
        cy.contains("span", "Dodaj do koszyka").click({force: true});
 
    })
})