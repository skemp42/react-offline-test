import React, { ReactElement } from "react";
import { GenerationMix } from "./models/GenerationMixResponse";
import { Progress } from "antd";

const GenerationMixChart = ({ fuel, perc }: GenerationMix): ReactElement => {
  return (
    <section data-testid={`${fuel}-chart`}>
      <Progress
        type='circle'
        percent={perc}
        format={(percent) => `${fuel}  ${percent}%`}
      />
    </section>
  );
};

export default GenerationMixChart;
