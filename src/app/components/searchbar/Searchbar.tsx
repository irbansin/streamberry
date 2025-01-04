import styles from "./Searchbar.module.scss";
import React from "react";
import { useState } from "react";

export default function Searchbar({ initialSearchValue, search }) {
  const [searchValue, setSearchValue] = useState(initialSearchValue || "");

  function handleChange(event): void {
    event.preventDefault();
    setSearchValue(event.target.value);
    if (event.key === "Enter") {
      search(searchValue);
    }
  }

  function handleKeyUp(event) {
    if (event.key === "Enter") {
      search(searchValue);
    }
  }

  return (
    <>
      <div className={styles.title}>Find Your Movies</div>
      <div className={styles.searchbar}>
        <input
          type="text"
          placeholder="What do you want to watch?"
          value={searchValue}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          data-testid="searchValue-input"
        />
        <button onClick={() => search(searchValue)} data-testid="searchButton">
          Search
        </button>
      </div>
    </>
  );
}
