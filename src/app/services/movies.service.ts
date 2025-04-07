import axios from "axios";

export function getAllMovies() {
  return axios
    .get(
      "https://api.themoviedb.org/3/discover/movie?api_key=1f54bd990f1cdfb230adb312546d765d"
    )
    .then((response) => {
      return movieFilter(response.data.results);
    });
}

export function getMoviesByGenre(genreId) {
  return axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=1f54bd990f1cdfb230adb312546d765d&with_genres=${genreId}`
    )
    .then((response) => {
      return movieFilter(response.data.results);
    });
}

export function getMoviesBySearchTerm(searchTerm) {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=1f54bd990f1cdfb230adb312546d765d&query=${searchTerm}}`
    )
    .then((response) => {
      return movieFilter(response.data.results);
    });
}

export function getMoviesBySortTerm(sortTerm) {
  return axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=1f54bd990f1cdfb230adb312546d765d&sort_by=${sortTerm}`
    )
    .then((response) => {
      return movieFilter(response.data.results);
    });
}

export function getMovieByReleaseYear(year) {
  return axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=1f54bd990f1cdfb230adb312546d765d&primary_release_year=${year}`
    )
    .then((response) => {
      return movieFilter(response.data.results);
    });
}

function movieFilter(movies) {
  return movies.filter((movie) => movie.poster_path && movie.backdrop_path);
}
