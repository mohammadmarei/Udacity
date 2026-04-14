describe("Forms", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get('[data-cy="card-set-link"]').click();
  });

  it("happy path - create new set", () => {
    cy.get('[data-cy="toggle_form"]').click();

    cy.get('[data-cy="set_form"] input[name="titleInput"]').type("My Test Set");
    cy.get('[data-cy="set_form"] input[type="submit"]').click();

    cy.contains("My Test Set").should("exist");
  });

  it("unhappy path - empty input", () => {
    cy.get('[data-cy="toggle_form"]').click();

    cy.get('[data-cy="set_form"] input[type="submit"]').click();

    cy.contains(/title cannot be empty/i).should("exist");
  });
});