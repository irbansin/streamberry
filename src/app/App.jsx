import { TopBar } from "../stories/TopBar/TopBar";
import "./App.scss";
import Searchbar from "../stories/Searchbar/Searchbar.tsx";
import Select from "../stories/Select/Select.tsx";
import Tabs from "../stories/Tabs/Tabs.tsx";
import { useEffect, useState } from "react";
import Tile from "../stories/Tile/Tile.tsx";
import {
  getAllMovies,
  getMoviesByGenre,
  getMoviesBySearchTerm,
  getMoviesBySortTerm,
} from "./services/movies.service.ts";
import { getAllGenres } from "./services/genres.service.ts";

function App() {
  const [movieList, setMovielist] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [sortBy, setSortBy] = useState("release_date.desc");
  const [genreMap, setGenreMap] = useState({}); // [id: string]: string

  useEffect(() => {
    getAllMovies()
      .then((response) => {
        setMovielist(response);
      })
      .catch((error) => console.log(error));
    getAllGenres()
      .then((response) => {
        console.log(response);
        setGenreList(response);
        let genreObj = response.reduce((obj, genre) => {
          obj[genre.id] = genre.name;
          return obj;
        }, {});

        setGenreMap(genreObj);
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
    if (searchTerm)
      getMoviesBySearchTerm(searchTerm).then((response) => {
        setMovielist(response);
      });
  }
  function sortMovieList(sortTerm = "latest") {
    if (sortTerm) setSortBy(sortTerm);
    getMoviesBySortTerm(sortTerm).then((response) => {
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
        <div className="flex flex-row justify-between w-full flex-wrap border-bottom">
          <div className="grow ">
            <Tabs
              className="w-4/5"
              tabsList={genreList.slice(0, 7)}
              triggerFunction={updateMovieList}
            ></Tabs>
          </div>
          <div>
            <Select
              className="w-1/5"
              label={"Sort By"}
              triggerFunction={sortMovieList}
              options={[
                {
                  label: "Release Date (Earliest)",
                  value: "release_date.asc",
                },
                {
                  label: "Release Date (Latest)",
                  value: "release_date.desc",
                },
                {
                  label: "Name",
                  value: "title.asc",
                },

                {
                  label: "Rating",
                  value: "vote_average.desc",
                },
              ]}
              value={sortBy}
            ></Select>
          </div>
        </div>
      </header>
      <div className="w-full flex justify-evenly content">
        <div className="grid grid-cols-3 grid-rows-3 gap-4">
          {movieList.map((movie, i) => {
            let posterPath = movie.poster_path || movie.backdrop_path;
            if (!posterPath) return null;
            return (
              <Tile
                title={movie.title}
                imageLink={`https://image.tmdb.org/t/p/w500${posterPath}`}
                tags={movie.genre_ids.map((id) => genreMap[id])}
                metaText={new Date(movie.release_date).getFullYear()}
                badgeText={movie.vote_average}
                key={i}
              ></Tile>
            );
          })}
        </div>
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
