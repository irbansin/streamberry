import React, { useState, useEffect } from "react";
import { TopBar } from "../../stories/TopBar/TopBar";

import Searchbar from "../../stories/Searchbar/Searchbar";
import Select from "../../stories/Select/Select";
import Tabs from "../../stories/Tabs/Tabs";
import Tile from "../../stories/Tile/Tile";

import Detail from "../../stories/Detail/Detail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import "./MovieListPage.scss";

import {
  getAllMovies,
  getMoviesByGenre,
  getMoviesBySearchTerm,
  getMoviesBySortTerm,
} from "../services/movies.service";
import { getAllGenres } from "../services/genres.service";
import Modal from "../../stories/Modal/Modal";
import MovieForm from "../components/MovieForm";
import { Button } from "../../stories/Button/Button";

export default function MovieListPage() {
  const [movieList, setMovielist] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [sortBy, setSortBy] = useState("release_date.desc");
  const [genreMap, setGenreMap]: any = useState({}); // [id: string]: string
  const [currentMovie, setCurrentMovie]: any = useState({}); // [id: string]: string
  const [showdescription, setShowDescription] = useState(false); // [id: string]: string
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    getAllMovies()
      .then((response) => {
        response.filter((movie: any) => !movie.adult);
        setMovielist(response);
      })
      .catch((error) => console.log(error));
    getAllGenres()
      .then((response) => {
        setGenreList(response);
        let genreObj = response.reduce((obj: any, genre: any) => {
          obj[genre.id] = genre.name;
          return obj;
        }, {});

        setGenreMap(genreObj);
      })
      .catch((error) => console.log(error));
  }, []);

  function updateMovieList(genreId: number) {
    getMoviesByGenre(genreId)
      .then((response) => {
        setMovielist(response);
      })
      .catch((error) => console.log(error));
  }
  function search(searchTerm: string) {
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
    <div>
      <div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <MovieForm></MovieForm>
        </Modal>
      </div>
      <header>
        <div className="background"></div>
        <div className="flex items-center justify-between">
          <TopBar title="ZOLO Movies"></TopBar>
          {showdescription && (
            <div
              className="searchButton px-6 "
              onClick={() => setShowDescription(false)}
            >
              <FontAwesomeIcon icon={faSearch} />
            </div>
          )}{" "}
          {/* <button className="add-movie-button" onClick={openModal}>
            Add Movie
          </button> */}
          <Button
            size="small"
            click={openModal}
            label="Add Movie"
            buttonType="secondary"
          ></Button>
        </div>
        {!showdescription && (
          <div className="search">
            <div className="title">Find Your Movies</div>
            <Searchbar search={search}></Searchbar>
          </div>
        )}
        {showdescription && (
          <div>
            <Detail
              title={currentMovie.title}
              badge={currentMovie.vote_average}
              description={currentMovie.description}
              imageLink={`https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`}
              secondaryTitle={String(
                new Date(currentMovie.release_date).getFullYear()
              )}
              tags={currentMovie.genre_ids.map((id: number) => genreMap[id])}
            ></Detail>
          </div>
        )}

        <div className="flex flex-row justify-between w-full flex-wrap border-bottom">
          <div className="grow w-4/5">
            <Tabs
              tabsList={genreList.slice(0, 7)}
              triggerFunction={updateMovieList}
            ></Tabs>
          </div>
          <div className="w-1/5">
            <Select
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
          {movieList.map((movie: any, i) => {
            let posterPath = movie.poster_path || movie.backdrop_path;
            if (!posterPath) return null;
            return (
              <div
                onClick={() => {
                  setCurrentMovie(movie);
                  setShowDescription(true);
                }}
              >
                <Tile
                  title={movie.title}
                  imageLink={`https://image.tmdb.org/t/p/w500${posterPath}`}
                  tags={movie.genre_ids.map((id: number) => genreMap[id])}
                  metaText={String(new Date(movie.release_date).getFullYear())}
                  badgeText={movie.vote_average}
                  key={i}
                ></Tile>
              </div>
            );
          })}
        </div>
      </div>
      <footer></footer>
    </div>
  );
}
