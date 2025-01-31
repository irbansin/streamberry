import React from "react";
import { Button } from "cryll-ui";

import { useFormik } from "formik";

import "./MovieForm.scss";

import { Movie } from "../../models/Movie.interface";

interface MovieformProps {
  currentMovie: Movie;
}

export default function MovieForm({ currentMovie }: MovieformProps) {
  const formik = useFormik({
    initialValues: {
      title: currentMovie.title || "",
      releaseDate: currentMovie.release_date || "",
      posterUrl: currentMovie.poster_path || "",
      rating: currentMovie.vote_average || "",
      overView: currentMovie.overview || "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  let editMode = false;

  if (currentMovie.id) {
    editMode = true;
  }

  return (
    <div className="movieForm">
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col ">
            <label>Title:</label>
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Movie Title"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.title}
            />

            {formik.errors.title ? <div>{formik.errors.title}</div> : null}
          </div>
          <div className="flex flex-col ">
            <label>Release Date:</label>
            <input
              id="releaseDate"
              name="releaseDate"
              type="date"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.releaseDate}
            />
            {formik.errors.releaseDate ? (
              <div>{formik.errors.releaseDate}</div>
            ) : null}
          </div>
          <div className="flex flex-col ">
            <label>Movie URL:</label>
            <input
              id="posterUrl"
              name="posterUrl"
              type="url"
              placeholder="www.movieurl.com/poster"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.posterUrl}
            />
            {formik.errors.posterUrl ? (
              <div>{formik.errors.posterUrl}</div>
            ) : null}
          </div>
          <div className="flex flex-col ">
            <label>Rating:</label>

            <input
              id="rating"
              name="rating"
              type="number"
              placeholder="0-10"
              min={0}
              max={10}
              step={0.1}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.rating}
            />
            {formik.errors.rating ? <div>{formik.errors.rating}</div> : null}
          </div>
          {/* <div className="flex flex-col ">
            <label>Genre:</label>
            <ErrorBoundary>
              <Input
                inputType={"text"}
                placeholderText={"Select Genre"}
                inputValue={genre.join(",")}
                change={handleGenre}
                data-testid="searchValue-input"
              ></Input>
            </ErrorBoundary>
          </div> */}

          <div className="flex flex-col ">
            <label>Overview:</label>
            <textarea
              id="overView"
              name="overView"
              placeholder="Something about the movie"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.overView}
              data-testid="searchValue-input"
            />
          </div>
        </div>
        {formik.errors.overView ? <div>{formik.errors.overView}</div> : null}

        <div className="flex flex-row justify-end my-6">
          {!editMode ? (
            <div className="mx-1">
              <Button
                buttonStyle="secondary"
                buttonType="reset"
                label={`Reset`}
                size={"medium"}
                data-testid="searchButton"
              ></Button>
            </div>
          ) : null}
          <div className="mx-1">
            <Button
              buttonType="submit"
              buttonStyle="primary"
              label={`Save`}
              size={"medium"}
              data-testid="searchButton"
            ></Button>
          </div>
        </div>
      </form>
    </div>
  );
}
