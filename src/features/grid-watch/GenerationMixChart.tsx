import React, { ReactElement } from "react";
import { GenerationMix } from "./models/GenerationMixResponse";

const GenerationMixChart = (generationMix: GenerationMix): ReactElement => {
  const { fuel, perc } = generationMix;

  return (
    <section>
      <div>Fuel: {fuel}</div>
      <div>Perc: {perc}</div>
    </section>
  );
};

export default GenerationMixChart;
