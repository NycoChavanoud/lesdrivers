describe("translation", () => {
  xit("shows some content in fr", () => {
    cy.visit("/");
    cy.contains("Accueil");
    //cy.get("[data-cy=bio]").should("be.visible");
  });
  xit("has a translation in en", () => {
    cy.visit("/");
    cy.get('[data-cy="translate-button"]').select("en");
    cy.url().should("include", "/en");
  });
});
