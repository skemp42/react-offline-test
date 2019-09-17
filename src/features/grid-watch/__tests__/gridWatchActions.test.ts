import { get } from "../../../utils/httpClientWrapper";
import GenerationMixResponse from "../models/GenerationMixResponse";
import { getGenerations } from "../gridWatchActions";

jest.mock("../../../utils/httpClientWrapper");

const mockGetToReturn = (generationMix: GenerationMixResponse) => {
  (get as jest.Mock).mockResolvedValue(generationMix);
};

describe("grid watch actions", () => {
  it("returns generation mix on getGenerations", async () => {
    const expected: GenerationMixResponse = {
      data: {
        from: new Date(),
        to: new Date()
      }
    };
    mockGetToReturn(expected);
    const result = await getGenerations();
    expect(result).toStrictEqual(expected);
  });
});
