describe("Forms", () => {
  beforeEach(() => {
    cy.visit("http://localhost:60312");
    cy.contains(/card\s*sets/i).click();
  });

  it("happy path - create new set", () => {
    cy.contains(/add new set/i).click();

    cy.get('input:not([type="submit"])').type("My Test Set");
    cy.contains(/submit set/i).click();

    cy.contains("My Test Set").should("exist");
  });

  it("unhappy path - empty input", () => {
    cy.contains(/add new set/i).click();

    cy.contains(/submit set/i).click();

    cy.contains(/title cannot be empty/i).should("exist");
  });
});