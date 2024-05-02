import axios from "axios";
const API_KEY = "714c3120d8fef346bdc59740f67d43e6";
const BASE_URL = "https://api.themoviedb.org/3/";

export const fetchTrendingMovies = async () => {
  const target = `${BASE_URL}trending/movie/day?api_key=${API_KEY}`;
  const response = await axios.get(target);
  return response.data.results;
};

export const fetchMoviesByQuery = async (query) => {
  const target = `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;
  const response = await axios.get(target);
  return response.data.results;
};

export const fetchMovieDetails = async (id) => {
  const target = `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`;
  const response = await axios.get(target);
  return response.data;
};

export const fetchMovieCast = async (id) => {
  const target = `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
  const response = await axios.get(target);
  return response.data.cast;
};

export const fetchMovieReviews = async (id) => {
  const target = `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  const response = await axios.get(target);
  return response.data.results;
};

const api = {
  fetchTrendingMovies,
  fetchMoviesByQuery,
  fetchMovieDetails,
  fetchMovieCast,
  fetchMovieReviews,
};

export default api;
