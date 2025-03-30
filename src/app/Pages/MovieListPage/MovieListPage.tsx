import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { TopBar } from "../../../stories/TopBar/TopBar";
import Searchbar from "../../../stories/Searchbar/Searchbar";
import Select from "../../../stories/Select/Select";
import Tabs from "../../../stories/Tabs/Tabs";
import Tile from "../../../stories/Tile/Tile";

import "./MovieListPage.scss";

import {
  getAllMovies,
  getMoviesByGenre,
  getMoviesBySearchTerm,
  getMoviesBySortTerm,
} from "../../services/movies.service";
import { getAllGenres } from "../../services/genres.service";
import Modal from "../../../stories/Modal/Modal";
import MovieForm from "../../components/MovieForm/MovieForm";
import { Button } from "../../../stories/Button/Button";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

export default function MovieListPage() {
  const [movieList, setMovielist] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const [sortBy, setSortBy] = useState("release_date.desc");
  const [genreMap, setGenreMap]: any = useState({}); // [id: string]: string
  const [currentMovie, setCurrentMovie]: any = useState({}); // [id: string]: string
  const [isMovieFormModalOpen, setIsMovieFormModalOpen] = useState(false);
  const [isDeleteFormModalOpen, setIsDeleteFormModalOpen] = useState(false);
  const [modalType, setModalType] = useState("add"); // [id: string]: string

  const openAddModal = () => {
    setCurrentMovie({});
    setModalType("Add");
    setIsMovieFormModalOpen(true);
  };

  const openEditModal = () => {
    setModalType("Edit");
    setIsMovieFormModalOpen(true);
  };

  const closeMovieFormModal = () => {
    setIsMovieFormModalOpen(false);
  };

  const openDeleteModal = () => {
    setIsDeleteFormModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteFormModalOpen(false);
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
  function handleEllipsisClick(e: any) {
    e.preventDefault();
    e.stopPropagation();
    console.log(e.target.innerText);
    switch (e.target.innerText) {
      case "Edit":
        openEditModal();
        break;
      case "Delete":
        openDeleteModal();
        break;
      default:
        break;
    }
  }

  function handleConfirm(e: any) {
    console.log(e.target.innerText);
  }
  function handleCancel(e: any) {
    console.log(e.target.innerText);
  }
  return (
    <div>
      <Modal
        title={`${modalType} Movie`}
        isOpen={isMovieFormModalOpen}
        onClose={closeMovieFormModal}
      >
        <MovieForm currentMovie={currentMovie}></MovieForm>
      </Modal>
      <Modal
        title={`Delete Movie`}
        isOpen={isDeleteFormModalOpen}
        onClose={closeDeleteModal}
      >
        <DeleteModal
          handleConfirm={handleConfirm}
          handleCancel={handleCancel}
        />
      </Modal>
      <header className="z-10">
        <div className="background"></div>
        <div className="flex items-center justify-between">
          <TopBar title="ZOLO Movies"></TopBar>

          <Button
            size="small"
            click={() => openAddModal()}
            label="Add Movie"
            buttonStyle="secondary"
          ></Button>
        </div>
        <div className="search">
          <div className="title">Find Your Movies</div>
          <Searchbar search={search}></Searchbar>
        </div>
        )
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
          {movieList.map((movie: any, index) => {
            let posterPath = movie.poster_path || movie.backdrop_path;
            if (!posterPath) return null;
            return (
              <Link to={`/movie/${movie.id}`}>
                {" "}
                <div
                  onClick={() => {
                    setCurrentMovie(movie);
                  }}
                  key={index}
                >
                  <Tile
                    title={movie.title}
                    imageLink={`https://image.tmdb.org/t/p/w500${posterPath}`}
                    tags={movie.genre_ids.map((id: number) => genreMap[id])}
                    metaText={String(
                      new Date(movie.release_date).getFullYear()
                    )}
                    badgeText={movie.vote_average}
                    showEllipsis={true}
                    clickAction={(e) => {
                      setCurrentMovie(movie);
                      handleEllipsisClick(e);
                    }}
                  ></Tile>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <footer></footer>
    </div>
  );
}
