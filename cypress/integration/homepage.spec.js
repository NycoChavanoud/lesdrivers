/// <reference types="cypress" />

// Welcome to Cypress!
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe("homepage", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("displays a title", () => {
    cy.get("h1").should("not.be.empty");
  });
  it("should contain a navbar", () => {
    cy.get("navbarCypress").should("not.be.empty");
  });
  it("should contain a navbar", () => {
    cy.get("navbarCypress").should("not.be.empty");
  });
  it.only("can navigate to contact page", () => {
    cy.contains("Contact").click();
    cy.url().should("match", /contact/);
  });
});
