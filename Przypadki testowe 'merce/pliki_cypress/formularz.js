/// <reference types="cypress" />

describe("E2E - Lokalizatory", () => {
    it("Weryfikacja dostępności formularza rejestracji", () => {
        cy.visit("https://rekrutacja.dev.merce.com")
        cy.contains("span", "Konto").click({force: true});


    })
})