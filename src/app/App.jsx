import { TopBar } from "../stories/TopBar/TopBar";
import "./App.scss";
import Searchbar from "../stories/Searchbar/Searchbar.tsx";
import Tabs from "../stories/Tabs/Tabs.tsx";
import { useEffect, useState } from "react";
import Tile from "../stories/Tile/Tile.tsx";
import axios from "axios";

function search(searchTerm) {
  console.log("searching for", searchTerm);
}

function App() {
  const [movieList, setMovielist] = useState([]);
  const [genreList, setGenreList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=1f54bd990f1cdfb230adb312546d765d"
      )
      .then((response) => {
        setMovielist(response.data.results);
      })
      .catch((error) => console.log(error));
    axios
      .get(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=1f54bd990f1cdfb230adb312546d765d"
      )
      .then((response) => {
        console.log(response);
        setGenreList(response.data.genres);
      })
      .catch((error) => console.log(error));
  }, []);
  // let list = ["All", "Documentory", "Comedy", "Horror", "Crime"];

  return (
    <div className="App">
      <header>
        <div className="background"></div>
        <TopBar title="ZOLO Movies"></TopBar>
        <div className="title">Find Your Movies</div>
        <Searchbar initialSearch="" search={search}></Searchbar>
        <Tabs tabsList={genreList}></Tabs>
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
