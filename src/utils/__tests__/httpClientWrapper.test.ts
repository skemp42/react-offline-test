import Axios from "axios";
import { get } from "../httpClientWrapper";

jest.mock("axios");
const mockedAxios = Axios as jest.Mocked<typeof Axios>;

const mockAxiosToReolve = (returnedData: unknown) => {
  mockedAxios.get.mockImplementation(() => {
    return Promise.resolve({
      data: returnedData
    });
  });
};

describe("http client wrapper", () => {
  describe("get", () => {
    it("returns data on 200 status code", async () => {
      const exampleData = {
        example: "data"
      };
      mockAxiosToReolve(exampleData);
      const data = await get("/test");
      expect(data).toBe(exampleData);
    });
  });
});
