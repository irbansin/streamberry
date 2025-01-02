import axios from "axios";

export function getAllMovies() {
  return axios
    .get(
      "https://api.themoviedb.org/3/discover/movie?api_key=1f54bd990f1cdfb230adb312546d765d"
    )
    .then((response) => {
      return response.data.results;
    });
}

export function getMoviesByGenre(genreId) {
  return axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=1f54bd990f1cdfb230adb312546d765d&with_genres=${genreId}`
    )
    .then((response) => {
      return response.data.results;
    });
}

export function getMoviesBySearchTerm(searchTerm) {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=1f54bd990f1cdfb230adb312546d765d&query=${searchTerm}}`
    )
    .then((response) => {
      return response.data.results;
    });
}
