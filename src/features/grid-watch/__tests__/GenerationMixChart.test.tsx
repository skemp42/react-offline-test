import React from "react";
import { GenerationMix, Fuel } from "../models/GenerationMixResponse";
import { render } from "@testing-library/react";
import GenerationMixChart from "../GenerationMixChart";

describe("generation mix component", () => {
  it("shows fuel and perc from generation mix", () => {
    const generationMix: GenerationMix = {
      fuel: Fuel.Biomass,
      perc: 0.42
    };

    const { queryByText } = render(
      <GenerationMixChart fuel={generationMix.fuel} perc={generationMix.perc} />
    );

    expect(queryByText("biomass")).toBeDefined();
    expect(queryByText("0.42")).toBeDefined();
  });
});
