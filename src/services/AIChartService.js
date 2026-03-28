import axiosInstance from "./axiosInstance";

export default {
  async generateResponse(prompt) {
    return axiosInstance.post("/openai/get-answer", { prompt });
  },
};
