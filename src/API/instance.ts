import axios from "axios";
const baseURL = import.meta.env.OPEN_LIBRARY_API_URL;

const instance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
});

export default instance;