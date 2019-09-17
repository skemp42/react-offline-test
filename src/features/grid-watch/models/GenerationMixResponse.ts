interface Data {
  from: Date;
  to: Date;
  generationmix: GenerationMix[];
}

export interface GenerationMix {
  fuel: string;
  perc: number;
}

export default interface GenerationMixResponse {
  data: Data;
}
