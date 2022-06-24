describe("login", () => {
  beforeEach(() => {
    cy.viewport("iphone-6");
    cy.task("cleanDB");
  });

  xit("is accessible from the menu", () => {
    cy.visit("/");
    cy.url().should("include", "/login");
  });

  describe("without session", () => {
    beforeEach(() => {
      cy.signup({ password: "verysecure" });
      cy.visit("/login");
    });

    xit("can login with correct credentials", function () {
      cy.get('[data-cy="email"]').type(this.userInDb.email);
      cy.get('[data-cy="password"]').type("verysecure");
      cy.get('[data-cy="loginForm"]').submit();
    });

    xit("cannot login with incorrect email", () => {
      cy.get('[data-cy="email"]').type("adin@website.com");
      cy.get('[data-cy="password"]').type("verysecure");
      cy.get('[data-cy="loginForm"]').submit();
    });

    xit("cannot login with incorrect password", function () {
      cy.get('[data-cy="email"]').type(this.userInDb.email);
      cy.get('[data-cy="password"]').type("veryscure");
      cy.get('[data-cy="loginForm"]').submit();
    });
  });

  describe("with an active session", function () {
    beforeEach(function () {
      cy.setupCurrentUser({ email: "visitor@website.com" });
      cy.log(this.userInDb);
      cy.visit("/login");
    });
    xit("shows the email of the current user", function () {
      cy.contains(this.userInDb.email);
    });
    xit("shows a disconnect button", function () {
      const email = this.userInDb.email;
      cy.get('[data-cy="disconnectBtn"]').click();
      cy.contains(email).should("not.exist");
    });
  });
});
