import React, { ReactElement, useState, useEffect } from "react";
import { getGenerations } from "./gridWatchActions";
import GenerationMixResponse, {
  GenerationMix
} from "./models/GenerationMixResponse";
import { Col, Row } from "antd";
import moment from "moment";
import GenerationMixChart from "./GenerationMixChart";

const GridWatch = (): ReactElement => {
  const [generationMix, setGenerationMix] = useState<
    GenerationMixResponse | undefined
  >(undefined);

  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    getGenerations()
      .then((res) => setGenerationMix(res))
      .catch((err) => {
        console.error(err);
        setHasError(true);
      });
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
      {generationMix && (
        <>
          <Row justify='center' type='flex'>
            <Col>
              {moment(generationMix.data.from).format("MMM Do YYYY")} <hr />
            </Col>
          </Row>
          <Row type='flex' justify='center'>
            {generationMix.data.generationmix.map((gm: GenerationMix) => (
              <Col span={2}>
                <GenerationMixChart {...gm} />
              </Col>
            ))}
          </Row>
        </>
      )}
      {hasError && (
        <div style={{ color: "red" }}>
          Something went wrong... Please refresh and try again...
        </div>
      )}
    </section>
  );
};

export default GridWatch;
