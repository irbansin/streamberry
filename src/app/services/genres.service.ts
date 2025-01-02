import axios from "axios";

export function getAllGenres() {
  return axios
    .get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=1f54bd990f1cdfb230adb312546d765d"
    )
    .then((response) => {
      return response.data.genres;
    });
}
