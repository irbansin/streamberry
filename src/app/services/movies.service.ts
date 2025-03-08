import axios from "axios";

export function getAllMovies(genreId?, sortTerm?, year?) {
  return axios
    .get(
      `https://api.themoviedb.org/3/discover/movie?api_key=1f54bd990f1cdfb230adb312546d765d` +
        (genreId ? `&with_genres=${genreId}` : "") +
        (sortTerm ? `&sort_by=${sortTerm}` : "") +
        (year ? `&primary_release_year=${year}` : "")
    )
    .then((response) => {
      return movieFilter(response.data.results);
    });
}

export function searchMovies(searchTerm) {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=1f54bd990f1cdfb230adb312546d765d&query=${searchTerm}}`
    )
    .then((response) => {
      return movieFilter(response.data.results);
    });
}

function movieFilter(movies) {
  return movies.filter((movie) => movie.poster_path && movie.backdrop_path);
}
