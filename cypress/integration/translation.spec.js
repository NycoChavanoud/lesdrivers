describe("translation", () => {
  it("shows some content in fr", () => {
    cy.visitInLanguage("/", "fr");
    cy.contains("Accueil");
    //cy.get("[data-cy=bio]").should("be.visible");
  });
  it("has a translation in en", () => {
    cy.visitInLanguage("/", "fr");
    cy.get('[data-cy="translate-button"]').click();
    cy.contains("Home");
  });
});
