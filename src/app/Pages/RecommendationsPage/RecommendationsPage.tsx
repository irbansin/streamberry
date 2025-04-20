import React, { useEffect, useRef, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RecommendationsPage.module.scss";
import axios from "axios";
import { Movie } from "../../models/Movie.interface";

function useDebouncedValue<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debounced;
}

export default function RecommendationsPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovieIds, setSelectedMovieIds] = useState<string[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebouncedValue(searchTerm, 200);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // Preprocess movie titles to lowercase for fast search
  const moviesWithLower = useMemo(
    () => movies.map((m: any) => ({ ...m, _lcTitle: m.title.toLowerCase() })),
    [movies]
  );

  useEffect(() => {
    axios
      .get("http://localhost:3001/movies")
      .then((res) => {
        setMovies(res.data);
      })
      .catch(() => setError("Failed to fetch movies."));
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fast, debounced, limited search
  const filteredMovies = useMemo(() => {
    if (!debouncedSearchTerm)
      return moviesWithLower
        .filter(
          (movie: any) =>
            !selectedMovieIds.includes((movie.movieId || movie.id).toString())
        )
        .slice(0, 30);
    return moviesWithLower
      .filter(
        (movie: any) =>
          movie._lcTitle.includes(debouncedSearchTerm.toLowerCase()) &&
          !selectedMovieIds.includes((movie.movieId || movie.id).toString())
      )
      .slice(0, 30);
  }, [moviesWithLower, debouncedSearchTerm, selectedMovieIds]);

  const handleSelectMovie = (id: string) => {
    setSelectedMovieIds((prev) => [...prev, id]);
    setSearchTerm("");
  };

  const handleRemoveMovie = (id: string) => {
    setSelectedMovieIds((prev) => prev.filter((mid) => mid !== id));
  };

  const handleDropdownToggle = () => {
    setDropdownOpen((open) => !open);
  };

  const handleViewRecommendations = async () => {
    setLoading(true);
    setError(null);
    setRecommendations([]);
    try {
      const response = await axios.post(
        "http://localhost:3001/recommendations_from_selection",
        {
          movie_ids: selectedMovieIds.map((id) => Number(id)),
        },
        {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      setRecommendations(response.data);
    } catch (err) {
      setError("Failed to fetch recommendations.");
    } finally {
      setLoading(false);
    }
  };

  const isButtonDisabled = selectedMovieIds.length === 0 || loading;

  return (
    <div className={styles.recommendationsPage}>
      <div className={styles.topbar}>
        <div className={styles.topbarTitle}>Movie Recommender</div>
        <button className={styles.topbarButton} onClick={() => navigate("/")}>
          Home
        </button>
      </div>
      <h1>Recommendations</h1>
      <div className={styles.multiSelectWrapper} ref={dropdownRef}>
        <div
          className={styles.selectedMovies}
          onMouseDown={handleDropdownToggle}
          tabIndex={0}
        >
          {selectedMovieIds.map((id) => {
            const movie = movies.find(
              (m: any) => (m.movieId || m.id).toString() === id
            );
            return (
              <span className={styles.selectedTag} key={id}>
                {movie?.title}
                <button
                  className={styles.removeTag}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveMovie(id);
                  }}
                >
                  &times;
                </button>
              </span>
            );
          })}
          <input
            ref={inputRef}
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setDropdownOpen(true)}
            placeholder="Select movies..."
            disabled={loading}
          />
        </div>
        {dropdownOpen && filteredMovies.length > 0 && (
          <div className={styles.dropdown}>
            {filteredMovies.map((movie: any) => (
              <div
                key={movie.movieId || movie.id}
                className={styles.dropdownItem}
                onClick={() =>
                  handleSelectMovie((movie.movieId || movie.id).toString())
                }
              >
                {movie.title}
              </div>
            ))}
          </div>
        )}
      </div>
      <button
        className={
          isButtonDisabled ? styles.disabledButton : styles.primaryButton
        }
        onClick={handleViewRecommendations}
        disabled={isButtonDisabled}
      >
        {loading ? "Loading..." : "View Recommendations"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div className={styles.recommendationsList}>
        {recommendations.length > 0 && (
          <>
            <h2 className={styles.recommendationsHeading}>Recommended Movies</h2>
            <div className={styles.recommendationsGrid}>
              {recommendations.map((rec) => (
                <div className={styles.recommendationCard} key={rec.movieId}>
                  {rec.poster_path ? (
                    <div className={styles.posterWrapper}>
                      <img
                        src={`https://image.tmdb.org/t/p/w200${rec.poster_path}`}
                        alt={rec.title}
                        className={styles.poster}
                      />
                    </div>
                  ) : null}
                  <div className={styles.cardContent}>
                    <div className={styles.recTitle}>{rec.title}</div>
                    <div className={styles.recGenres}>{rec.genres || ""}</div>
                    <div className={styles.recScore}>
                      Score: <span>{rec.score}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
