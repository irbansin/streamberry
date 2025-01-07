import styles from "./Searchbar.module.scss";
import React from "react";
import { useState } from "react";
import { SearchbarProps } from "../../models/searchbarProps.interface";

export default function Searchbar(props: SearchbarProps) {
  const [search, setSearch] = useState(props.initialSearch || "");

  function onSearch(event): string{
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
