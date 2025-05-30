import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Autocomplete, TopBar } from "cryll-ui";
import { Select } from "cryll-ui";
import { Tabs } from "cryll-ui";
import { Tile } from "cryll-ui";
import { useSearchParams } from "react-router-dom";

import { getAllMovies, searchMovies } from "../../services/movies.service";
import { getAllGenres } from "../../services/genres.service";
import { Modal } from "cryll-ui";
import MovieForm from "../../components/MovieForm/MovieForm";
import { Button } from "cryll-ui";
import DeleteModal from "../../components/DeleteModal/DeleteModal";

import "./MovieListPage.scss";

export default function MovieListPage() {
  const [movieList, setMovielist] = useState([]);
  const [genreList, setGenreList] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  const [genreMap, setGenreMap]: any = useState({}); // [id: string]: string
  const [currentMovie, setCurrentMovie]: any = useState({}); // [id: string]: string
  const [isMovieFormModalOpen, setIsMovieFormModalOpen] = useState(false);
  const [isDeleteFormModalOpen, setIsDeleteFormModalOpen] = useState(false);
  const [modalType, setModalType] = useState("add"); // [id: string]: string

  const navigate = useNavigate();

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
    getAllGenres()
      .then((response) => {
        setGenreList(response);
        let genreObj = response.reduce((obj: any, genre: any) => {
          obj[genre.id] = genre.name;
          return obj;
        }, {});

        setGenreMap(genreObj);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    getAllMovies(searchParams.get("genre"), searchParams.get("sort"))
      .then((response) => {
        response.filter((movie: any) => !movie.adult);
        setMovielist(response);
      })
      .catch((error) => console.error(error));

    if (searchParams.get("search")) {
      searchMovies(searchParams.get("search"))
        .then((response) => {
          setMovielist(response);
        })
        .catch((error) => console.error(error));
    }
  }, [searchParams]);

  function updateMovieList(genreId: number) {
    setSearchParams({ ...searchParams, genre: genreId.toString() });
  }
  function search(searchTerm: string) {
    if (searchTerm) setSearchParams({ search: searchTerm });
  }
  function sortMovieList(sortTerm = "latest") {
    if (sortTerm) {
      const params = new URLSearchParams(searchParams);
      params.set("sort", sortTerm);
      setSearchParams(params);
    }
  }
  function handleEllipsisClick(e: any) {
    e.preventDefault();
    e.stopPropagation();
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
    alert(e.target.innerText);
  }
  function handleCancel(e: any) {
    alert(e.target.innerText);
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
        <div className="flex items-center justify-between px-8">
          <TopBar title="ZOLO Movies"></TopBar>
          <div style={{ display: "flex", gap: "10px" }}>
            <Button
              size="small"
              click={() => openAddModal()}
              label="Add Movie"
              buttonStyle="secondary"
            ></Button>
            <Button
              size="small"
              click={() => navigate("/recommendations")}
              label="Recommendations"
              buttonStyle="primary"
            ></Button>
          </div>
        </div>
        <div className="search">
          <div className="title">Find Your Movies</div>
          <Autocomplete
            initialSearchValue={searchParams.get("search") || ""}
            search={search}
          ></Autocomplete>
        </div>

        <div className="flex flex-row justify-between w-full flex-wrap border-bottom">
          <div className="grow">
            <Tabs
              tabsList={genreList.slice(0, 7)}
              triggerFunction={updateMovieList}
            ></Tabs>
          </div>
          <div>
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
              value={searchParams.get("sort")}
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
              //Xreate a separate component for this
              <Link to={`/movie/${movie.id}`} key={index}>
                {" "}
                <div
                  onClick={() => {
                    setCurrentMovie(movie);
                  }}
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
