import axios from "axios";

const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  headers: {"content-type": "application/json"}
});

export default api;