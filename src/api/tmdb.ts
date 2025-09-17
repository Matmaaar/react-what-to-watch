import type { Movie } from "../types.js";

const Url = "https://api.themoviedb.org/3";
const ApiKey = "b015e4f8a58b9f851a624efe450890d8";
const UrlGenres = `${Url}/genre/movie/list?api_key=${ApiKey}&language=fr-FR`;

const getGenres = async () => {
  const response = await fetch(UrlGenres);
  const data = await response.json();
  return data.genres;
};

const getTrendingMovies = async () => {
  const response = await fetch(
    `${Url}/movie/popular?api_key=${ApiKey}&language=fr-FR`
  );
  const data = await response.json();
  return data.results;
};

const getTrendingSeries = async () => {
  const response = await fetch(
    `${Url}/tv/popular?api_key=${ApiKey}&language=fr-FR`
  );
  const data = await response.json();
  return data.results;
};

const getMovie = async (id: number) => {
  const response = await fetch(
    `${Url}/movie/${id}?api_key=${ApiKey}&language=fr-FR`
  );
  const data = await response.json();
  return data;
};

type Filters = {
  year?: number;
  genre?: number;
};

const searchMovies = async (query: string, filters: Filters) => {
  let url = `${Url}/search/movie?api_key=${ApiKey}&language=fr-FR&query=${encodeURIComponent(
    query
  )}`;
  if (filters.year) {
    url += `&year=${filters.year}`;
  }
  if (filters.genre) {
    url += `&with_genres=${filters.genre}`;
  }
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};

export {
  getTrendingMovies,
  getGenres,
  searchMovies,
  getTrendingSeries,
  getMovie,
};
