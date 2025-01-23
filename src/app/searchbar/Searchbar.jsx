import styles from "./Searchbar.module.scss";
import { useState } from "react";

export default function Searchbar(props) {
  const [search, setSearch] = useState(props.initialSearch || "");

  function onSearch(event) {
    event.preventDefault();
    console.log("search", event.target.value);

    setSearch(event.target.value);
    alert(search);
  }

  function handleInputChange(event) {
    event.preventDefault();
    setSearch(event.target.value);
  }

  function handleKeyUp(event) {
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
