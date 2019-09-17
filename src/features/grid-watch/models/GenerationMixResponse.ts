interface Data {
  from: Date;
  to: Date;
  generationmix: GenerationMix[];
}

export interface GenerationMix {
  fuel: Fuel;
  perc: number;
}

export enum Fuel {
  Biomass = "biomass"
}

export default interface GenerationMixResponse {
  data: Data;
}
