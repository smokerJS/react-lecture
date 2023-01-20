import axios, { AxiosError } from "axios";

const PREFIX = "http://localhost:3001";

class BoardApi {
  static fetch = async () => {
    try {
      const response = await axios.get(`${PREFIX}/board`);
      return response;
    } catch (error) {
      if (error instanceof AxiosError) {
        window.alert("잠시 후 다시 시도해주세요");
      }
    }
  };
  static delete = async (id: number) => {
    try {
      await axios.delete(`${PREFIX}/board/${id}`);
    } catch (error) {
      if (error instanceof AxiosError) {
        window.alert("잠시 후 다시 시도해주세요");
      }
    }
  };
}

// BoardApi.delete(1);

export default BoardApi;
