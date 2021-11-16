import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:4000/casas",
})

export default api;