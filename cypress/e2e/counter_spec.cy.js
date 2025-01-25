describe("Counter Component", () => {
  let initialCount = 0;
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("should display the initial count from the page", () => {
    cy.get('[data-testid="counter"]').then(($counter) => {
      initialCount = Number($counter.text());
      cy.get('[data-testid="counter"]').should("contain", initialCount);
    });
  });

  it("should increment the count when the + button is clicked", () => {
    // Click the + button
    cy.get('[data-testid="increment-button"]').click();

    // Get the updated count from the page
    cy.get('[data-testid="counter"]').should("contain", initialCount + 1);
  });

  it("should decrement the count when the - button is clicked", () => {
    // Click the - button
    cy.get('[data-testid="decrement-button"]').click();

    // Get the updated count from the page
    cy.get('[data-testid="counter"]').should("contain", initialCount - 1);
  });

  it("should not allow count to go below 0 on clicking 5 times after it reaches 0", () => {
    // Click the - button multiple times
    for (let i = 0; i < initialCount + 5; i++) {
      cy.get('[data-testid="decrement-button"]').click();
    }

    // Get the count from the page (it should not go below 0)
    cy.get('[data-testid="counter"]').should("contain", "0");
  });
});
