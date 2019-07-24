import axios from "axios";

const URL = "https://api.themoviedb.org/3";

export const API = axios.create({
  baseURL: URL,
  params: {
    api_key: "f4afe2396f2c320d0cacf1a09abd39a1",
    language: "en-US"
  }
});
