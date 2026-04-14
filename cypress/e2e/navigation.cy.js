describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should navigate to Card Set page", () => {
    cy.get('[data-cy="card-set-link"]').click();
    cy.get('[data-cy="study-set-header"]').should("exist");
  });

  it("should navigate to About page", () => {
    cy.get('[data-cy="about-link"]').click();
    cy.get('[data-cy="about_page"]').should("exist");
  });

  it("should navigate to Home page", () => {
    cy.get('[data-cy="home-link"]').click();
    cy.get('[data-cy="home_header"]').should("contain", "Study Night");
    cy.contains("A Digital Study Solution for the Modern World").should("exist");
  });
});