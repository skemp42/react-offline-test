import Axios, { AxiosResponse } from "axios";

export const get = async <T>(endpoint: string): Promise<T> => {
  return new Promise(
    async (resolve, reject): Promise<void> => {
      try {
        const res: AxiosResponse = await Axios.get<T>(endpoint);
        resolve(res.data);
      } catch (error) {
        //TODO: Logging, etc
        const err = error.response ? error.response.data : error;
        reject(err);
      }
    }
  );
};
