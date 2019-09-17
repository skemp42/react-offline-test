describe("grid watch", () => {
  beforeEach(() => {
    cy.server();
    cy.route(
      "GET",
      "https://api.carbonintensity.org.uk/generation",
      "fixture:generation-response.json"
    );
    cy.visit("/");
  });

  it("shows grid watch heading with from date", () => {
    cy.findByTestId("grid-watch").as("grid");

    cy.get("@grid").should(
      "contain",
      "GB Electricity National Grid Demand and Output per Production Type"
    );

    cy.get("@grid").should("contain", "Aug 12th 2019");
  });
});
