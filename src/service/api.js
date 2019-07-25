import axios from "axios";

const TMDB_URL = "https://api.themoviedb.org/3";
const OMDB_URL = "http://www.omdbapi.com";

export const TMDB = axios.create({
  baseURL: TMDB_URL,
  params: {
    api_key: "f4afe2396f2c320d0cacf1a09abd39a1",
    language: "en-US"
  }
});

export const OMDB = axios.create({
  baseURL: OMDB_URL,
  params: {
    apikey: 98477287
  }
});
