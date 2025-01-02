import { TopBar } from "../stories/TopBar/TopBar";
import "./App.scss";
import Searchbar from "../stories/Searchbar/Searchbar.tsx";
import Tabs from "../stories/Tabs/Tabs.tsx";
import { useEffect, useState } from "react";
import Tile from "../stories/Tile/Tile.tsx";
import {
  getAllMovies,
  getMoviesByGenre,
  getMoviesBySearchTerm,
} from "./services/movies.service.ts";
import { getAllGenres } from "./services/genres.service.ts";

function App() {
  const [movieList, setMovielist] = useState([]);
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    getAllMovies()
      .then((response) => {
        setMovielist(response);
      })
      .catch((error) => console.log(error));
    getAllGenres()
      .then((response) => {
        setGenreList(response);
      })
      .catch((error) => console.log(error));
  }, []);

  function updateMovieList(genreId) {
    getMoviesByGenre(genreId)
      .then((response) => {
        setMovielist(response);
      })
      .catch((error) => console.log(error));
  }
  function search(searchTerm) {
    getMoviesBySearchTerm(searchTerm).then((response) => {
      setMovielist(response);
    });
  }

  return (
    <div className="App">
      <header>
        <div className="background"></div>
        <TopBar title="ZOLO Movies"></TopBar>
        <div className="title">Find Your Movies</div>
        <Searchbar initialSearch="" search={search}></Searchbar>
        <Tabs tabsList={genreList} triggerFunction={updateMovieList}></Tabs>
      </header>
      <div className="w-full flex justify-evenly	 content">
        <div className="grid grid-cols-3 grid-rows-3 gap-4">
          {movieList.map((movie, i) => {
            return (
              <Tile
                title={movie.title}
                image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                tags={movie.genre_ids}
                metaText={movie.release_date}
                key={i}
              ></Tile>
            );
          })}
        </div>
      </div>{" "}
      <footer></footer>
    </div>
  );
}

export default App;
