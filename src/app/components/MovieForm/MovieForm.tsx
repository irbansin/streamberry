import React, { useState } from "react";
import Input from "../../../stories/Input/Input";
import { Button } from "../../../stories/Button/Button";
import TextArea from "../../../stories/TextArea/TextArea";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";
import "./MovieForm.scss";

function handleSave(e: any) {
  e.preventDefault();
  e.stopPropagation();
  console.log(e.target.innerText);
}

function handleReset(e: any) {
  e.preventDefault();
  e.stopPropagation();
  console.log(e.target.innerText);
}

export default function MovieForm() {
  const [title, setTitle] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [movieUrl, setMovieUrl] = useState("");
  const [rating, setRating] = useState("");
  const [genre, setGenre] = useState("");
  const [runtime, setRuntime] = useState("");
  const [overView, setOverView] = useState("");

  function handleTitle(event: any): void {
    event.preventDefault();
    setTitle(event.target.value);
  }

  function handleOverView(event: any): void {
    event.preventDefault();
    setOverView(event.target.value);
  }

  function handleReleaseDate(event: any): void {
    event.preventDefault();
    setReleaseDate(event.target.value);
  }

  function handleMovieUrl(event: any): void {
    event.preventDefault();
    setMovieUrl(event.target.value);
  }

  function handleRating(event: any): void {
    event.preventDefault();
    setRating(event.target.value);
  }

  function handleGenre(event: any): void {
    event.preventDefault();
    setGenre(event.target.value);
  }

  function handleRuntime(event: any): void {
    event.preventDefault();
    setRuntime(event.target.value);
  }

  return (
    <div className="movieForm">
      <form onSubmit={handleSave}>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col ">
            <label>Title:</label>
            <ErrorBoundary>
              <Input
                inputType={"text"}
                placeholderText={"Title of the Movie"}
                inputValue={title}
                change={handleTitle}
                keyup={handleTitle}
                data-testid="searchValue-input"
              ></Input>{" "}
            </ErrorBoundary>
          </div>
          <div className="flex flex-col ">
            <label>Release Date:</label>
            <ErrorBoundary>
              <Input
                inputType={"text"}
                placeholderText={"Release Date"}
                inputValue={releaseDate}
                change={handleReleaseDate}
                keyup={handleReleaseDate}
                data-testid="searchValue-input"
              ></Input>{" "}
            </ErrorBoundary>
          </div>
          <div className="flex flex-col ">
            <label>Movie URL:</label>
            <ErrorBoundary>
              <Input
                inputType={"text"}
                placeholderText={"URL for the movie poster"}
                inputValue={movieUrl}
                change={handleMovieUrl}
                keyup={handleMovieUrl}
                data-testid="searchValue-input"
              ></Input>
            </ErrorBoundary>
          </div>
          <div className="flex flex-col ">
            <label>Rating:</label>
            <ErrorBoundary>
              <Input
                inputType={"text"}
                placeholderText={"Movie Rating"}
                inputValue={rating}
                change={handleRating}
                keyup={handleRating}
                data-testid="searchValue-input"
              ></Input>
            </ErrorBoundary>
          </div>
          <div className="flex flex-col ">
            <label>Genre:</label>
            <ErrorBoundary>
              <Input
                inputType={"text"}
                placeholderText={"Select Genre"}
                inputValue={genre}
                change={handleGenre}
                keyup={handleGenre}
                data-testid="searchValue-input"
              ></Input>
            </ErrorBoundary>
          </div>
          <div className="flex flex-col ">
            <label>Runtime:</label>
            <ErrorBoundary>
              <Input
                inputType={"text"}
                placeholderText={"Movie Runtime"}
                inputValue={runtime}
                change={handleRuntime}
                keyup={handleRuntime}
                data-testid="searchValue-input"
              ></Input>
            </ErrorBoundary>
          </div>
          <div className="flex flex-col ">
            <label>Overview:</label>
            <TextArea
              placeholderText={"What do you want to watch?"}
              inputValue={overView}
              change={handleOverView}
              keyup={handleOverView}
              data-testid="searchValue-input"
            />
          </div>
        </div>

        <div className="flex flex-row justify-end my-6">
          <div className="mx-1">
            <Button
              buttonStyle="secondary"
              buttonType="submit"
              label={`Reset`}
              size={"medium"}
              click={() => handleSave}
              data-testid="searchButton"
            ></Button>
          </div>{" "}
          <div className="mx-1">
            <Button
              buttonStyle="primary"
              label={`Save`}
              size={"medium"}
              click={() => handleReset}
              data-testid="searchButton"
            ></Button>
          </div>
        </div>
      </form>
    </div>
  );
}
