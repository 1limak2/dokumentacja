/// <reference types="cypress" />

describe("E2E - Lokalizatory", () => {
    it("Weryfikacja elementów", () => {
        cy.visit("/")

        //Po znaczniku
        cy.get("a");

        //Po klasie
        cy.get(".quantity-controls")

    it.only("Lokalizator Koszyk", () => {
        cy.contains("Do koszyka")
    })


    })
})