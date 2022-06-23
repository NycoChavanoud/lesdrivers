/// <reference types="cypress" />

// Welcome to Cypress!
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("homepage", () => {
  beforeEach(() => {
    cy.viewport("iphone-6");
    cy.visit("/");
  });

  xit("displays a title", () => {
    cy.get('[data-cy="h1Lyon"]').should("not.be.empty");
  });
  xit("should contain a navbar", () => {
    cy.get("navbarCypress").should("not.be.empty");
  });
  xit("can navigate to contact page", () => {
    cy.get('[data-cy="btnBurger"]').click();
    cy.contains("Contact").click();
    cy.url().should("include", "/contact");
  });
});
