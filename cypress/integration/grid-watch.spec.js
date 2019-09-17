describe("grid watch", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("shows grid watch heading", () => {
    cy.findByTestId("grid-watch").should(
      "contain",
      "GB Electricity National Grid Demand and Output per Production Type"
    );
  });
});
