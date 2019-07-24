import axios from "axios";

const URL = "http://www.omdbapi.com";

const API = axios.create({
  baseURL: URL,
  params: {
    apikey: 98477287
  }
});

export default API;
