import Axios from "axios";
import { get } from "../httpClientWrapper";

jest.mock("axios");
const mockedAxios = Axios as jest.Mocked<typeof Axios>;

const mockAxiosToResolve = (returnedData: unknown) => {
  mockedAxios.get.mockImplementation(() => {
    return Promise.resolve({
      data: returnedData,
      code: 200
    });
  });
};

const mockAxiosToReject = (returnedData: unknown) => {
  mockedAxios.get.mockImplementation(() => {
    return Promise.reject({
      response: {
        data: returnedData
      },
      code: 400
    });
  });
};

describe("http client wrapper", () => {
  describe("get", () => {
    it("returns data on 200 status code", async () => {
      const exampleData = {
        example: "data"
      };
      mockAxiosToResolve(exampleData);
      const data = await get("/test");
      expect(data).toBe(exampleData);
    });

    it("returns data on error status code", async () => {
      const exampleData = {
        example: "bad-data"
      };

      mockAxiosToReject(exampleData);

      try {
        await get("/failed-response-test");
      } catch (error) {
        expect(error).toBe(exampleData);
      }
    });
  });
});
