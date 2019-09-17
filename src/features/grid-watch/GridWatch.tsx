import React, { ReactElement, useState, useEffect } from "react";
import { getGenerations } from "./gridWatchActions";
import GenerationMixResponse from "./models/GenerationMixResponse";
import { Col, Row } from "antd";
import moment from "moment";

const GridWatch = (): ReactElement => {
  const [generationMix, setGenerationMix] = useState<
    GenerationMixResponse | undefined
  >(undefined);

  useEffect(() => {
    getGenerations().then((res) => setGenerationMix(res));
  }, []);

  return (
    <section data-testid='grid-watch'>
      <Row justify='center' type='flex' gutter={4}>
        <Col>
          <h1>
            GB Electricity National Grid Demand and Output per Production Type
          </h1>
        </Col>
      </Row>
      <Row justify='center' type='flex'>
        {generationMix && (
          <>
            <Col>
              {moment(generationMix.data.from).format("MMM Do YYYY")} <hr />
            </Col>
          </>
        )}
      </Row>
    </section>
  );
};

export default GridWatch;
