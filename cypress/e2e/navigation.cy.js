describe("Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:60312");
  });

  it("should navigate to Card Set page", () => {
    cy.contains(/card\s*sets/i).click();
    cy.contains(/study set library/i).should("exist");
  });

  it("should navigate to About page", () => {
    cy.contains(/about/i).click();
    cy.contains(/about study night/i).should("exist");
  });

  it("should navigate to Home page", () => {
    cy.contains(/home/i).click();
    cy.contains("Study Night").should("exist");
    cy.contains("A Digital Study Solution for the Modern World").should("exist");
  });
});