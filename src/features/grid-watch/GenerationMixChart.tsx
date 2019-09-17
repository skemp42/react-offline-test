import React, { ReactElement } from "react";
import { GenerationMix } from "./models/GenerationMixResponse";

const GenerationMixChart = ({ fuel, perc }: GenerationMix): ReactElement => {
  return (
    <section data-testid={`${fuel}-chart`}>
      <div>Fuel: {fuel}</div>
      <div>Perc: {perc}</div>
    </section>
  );
};

export default GenerationMixChart;
