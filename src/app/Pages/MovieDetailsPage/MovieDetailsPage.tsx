import React, { useEffect, useState } from "react";
import styles from "./MovieDetailsPage.module.scss";
import Detail from "../../../stories/Detail/Detail";
import { useParams } from "react-router-dom";

export default function MovieDetailsPage() {
  const { id } = useParams();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=1f54bd990f1cdfb230adb312546d765d`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCurrentMovie(data);
      });
  }, []);
  const [currentMovie, setCurrentMovie]: any = useState({}); // [id: string]: string
  return (
    <div className={styles.movieDetail}>
      <Detail
        title={currentMovie.title}
        badge={Number(currentMovie.vote_average).toFixed(1)}
        description={currentMovie.description}
        imageLink={`https://image.tmdb.org/t/p/w500${currentMovie.poster_path}`}
        secondaryTitle={String(
          new Date(currentMovie.release_date).getFullYear()
        )}
        // tags={currentMovie.genre_ids.map((id: number) => genreMap[id])}
      ></Detail>
    </div>
  );
}