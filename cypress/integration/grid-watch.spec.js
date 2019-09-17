describe("grid watch", () => {
  describe("happy path", () => {
    beforeEach(() => {
      cy.server();
      cy.route(
        "GET",
        "https://api.carbonintensity.org.uk/generation",
        "fixture:generation-response.json"
      );
      cy.visit("/");
    });

    it("GridWatch shows generation mix charts", () => {
      cy.findByTestId("grid-watch").as("grid");
      cy.get("@grid").should(
        "contain",
        "GB Electricity National Grid Demand and Output per Production Type"
      );
      cy.get("@grid").should("contain", "Aug 12th 2019");

      cy.findByTestId("biomass-chart").should("contain", "4.8");
      cy.findByTestId("coal-chart").should("contain", "2.5");
      cy.findByTestId("imports-chart").should("contain", "8.7");
      cy.findByTestId("gas-chart").should("contain", "46.5");
      cy.findByTestId("nuclear-chart").should("contain", "16.1");
      cy.findByTestId("other-chart").should("contain", "0.3");
      cy.findByTestId("hydro-chart").should("contain", "0.9");
      cy.findByTestId("solar-chart").should("contain", "14.6");
      cy.findByTestId("wind-chart").should("contain", "5.6");
    });
  });

  describe("sad path", () => {
    beforeEach(() => {
      cy.server();
      cy.route(
        "GET",
        "https://api.carbonintensity.org.uk/generation",
        {
          response: {
            data: {
              message: "Something went wrong!"
            }
          }
        },
        {
          status: 400
        }
      );
      cy.visit("/");
    });

    it("displays error message on network error", () => {
      cy.findByTestId("grid-watch").as("grid");

      cy.get("@grid").should(
        "contain",
        "GB Electricity National Grid Demand and Output per Production Type"
      );

      cy.get("@grid").should(
        "contain",
        "Something went wrong... Please refresh and try again..."
      );
    });
  });
});
