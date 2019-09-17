import GenerationMixResponse from "./models/GenerationMixResponse";
import { get } from "../../utils/httpClientWrapper";

export const getGenerations = async (): Promise<GenerationMixResponse> => {
  const result = await get<GenerationMixResponse>(
    "https://api.carbonintensity.org.uk/generation"
  );

  return result;
};
