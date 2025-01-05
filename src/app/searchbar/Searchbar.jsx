import styles from "./Searchbar.module.scss";
import { useState } from "react";

export default function Searchbar(props) {
  const [search, setSearch] = useState("");

  function onSearch(event) {
    event.preventDefault();
    console.log("search", event.target.value);

    setSearch(event.target.value);
  }

  function handleInputChange(event) {
    setSearch(event.target.value);
  }

  function handleKeyUp(event) {
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
      <table>
        <tr>
          <td>{search}</td>
        </tr>
      </table>
    </>
  );
}
