import styles from "./Searchbar.module.scss";
import React from "react";
import { useState } from "react";

export default function Searchbar({ initialSearch }) {
  const [search, setSearch] = useState(initialSearch || "");

  function onSearch(event): string {
    event.preventDefault();
    console.log("search", event.target.value);

    setSearch(event.target.value);
    alert(search);
    return search;
  }

  function handleInputChange(event): void {
    event.preventDefault();
    setSearch(event.target.value);
  }

  function handleKeyUp(event): void {
    event.preventDefault();
    if (event.key === "Enter") {
      onSearch(event);
    }
  }

  return (
    <>
      <div className={styles.title}>Find Your Movies</div>
      <div className={styles.searchbar}>
        <input
          type="text"
          placeholder="What do you want to watch?"
          value={search}
          onChange={handleInputChange}
          onKeyUp={handleKeyUp}
        />
        <button value={search} onClick={onSearch}>
          Search
        </button>
      </div>
    </>
  );
}
