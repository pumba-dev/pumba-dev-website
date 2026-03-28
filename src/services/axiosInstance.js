import axios from "axios";

const BACKEND_API_URL = import.meta.env.VITE_BACKEND_API_URL;

console.log("BACKEND_API_URL:", BACKEND_API_URL);

const axiosInstance = axios.create({
  baseURL: BACKEND_API_URL,
  timeout: 60000, // 1 minuto
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default axiosInstance;
