/// <reference types="cypress" />

describe("signup", () => {
  beforeEach(() => {
    cy.task("cleanDB");
    cy.viewport("iphone-6");
    cy.visit("/signup");
  });

  it("should allow the user to sign up when valid info is provided", () => {
    cy.get("[data-cy=firstname]").type("Dave");
    cy.get("[data-cy=lastname]").type("Lopper");
    cy.get("[data-cy=email]").type("dave.lopper@gmail.com");
    cy.get("[data-cy=address]").type("7 turtle road");
    cy.get("[data-cy=phoneNumber]").type("0769422558");
    cy.get("[data-cy=password]").type("67TRCXXs6$tt7");
    cy.get("[data-cy=passwordConfirmation]").type("67TRCXXs6$tt7");
    cy.get("[data-cy=registerBtn]").click();
  });

  it("should not allow the user to sign up when invalid info is provided", () => {
    const checkFormIsNotSent = () => {
      cy.get("[data-cy=registerBtn]").click();
    };
    checkFormIsNotSent();
    cy.get("[data-cy=firstname]").type("Dave");
    checkFormIsNotSent();
    cy.get("[data-cy=lastname]").type("Lopper");
    checkFormIsNotSent();
    cy.get("[data-cy=address]").type("7 turtle road");
    checkFormIsNotSent();
    cy.get("[data-cy=phoneNumber]").type("0769422558");
    checkFormIsNotSent();
    cy.get("[data-cy=email]").type("dave.loppergmail.com");
    checkFormIsNotSent();
    cy.get("[data-cy=email]").type("{selectAll}dave.lopper@gmail.com");
    checkFormIsNotSent();
    cy.get("[data-cy=password]").type("2short");
    cy.get("[data-cy=passwordConfirmation]").type("2short");
    checkFormIsNotSent();
    cy.contains(
      "password is too weak. It must contain an uppercase letter, a lowercase letter, a symbol and a number"
    );
    cy.get("[data-cy=password]").type("{selectAll}+bGZj5q8rS_?J;Ev");
    cy.get("[data-cy=passwordConfirmation]").type(
      "{selectAll}+bGZj5q8rS_-J;Ev"
    );
    checkFormIsNotSent();
    cy.contains("passwords do not match");
  });

  it("should print an error if email already exist", () => {
    const email = "dave.lopper@gmail.com";
    cy.task("createUser", {
      email,
      password: "superpassword",
      firstname: "Dave",
      lastname: "Lopper",
      address: "7 turtle road",
      phoneNumber: "0769422558",
    });
    cy.get("[data-cy=firstname]").type("Dave");
    cy.get("[data-cy=lastname]").type("Lopper");
    cy.get("[data-cy=address]").type("7 turtle road");
    cy.get("[data-cy=phoneNumber]").type("0769422558");
    cy.get("[data-cy=email]").type("dave.lopper@gmail.com");
    cy.get("[data-cy=password]").type("67TRCXXs6$tt7");
    cy.get("[data-cy=passwordConfirmation]").type("67TRCXXs6$tt7");
    cy.get("[data-cy=registerBtn]").click();
  });
});
