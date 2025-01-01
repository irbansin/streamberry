import styles from "./Searchbar.module.scss";
import React from "react";
import { useState } from "react";
import { Button } from "../Button/Button";
import PropTypes from "prop-types";

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
    <div className={styles.searchbar}>
      <input
        type="text"
        placeholder="What do you want to watch?"
        value={searchValue}
        onChange={handleChange}
        onKeyUp={handleKeyUp}
        data-testid="searchValue-input"
      />
      <Button
        primary={true}
        label={"Search"}
        backgroundColor={"#f65261"}
        size={"medium"}
        onClick={() => search(searchValue)}
        data-testid="searchButton"
      ></Button>
    </div>
  );
}

Searchbar.defaultProps = {
  initialSearchValue: "",
  search: () => {},
};

Searchbar.propTypes = {
  initialSearchValue: PropTypes.string,
  search: PropTypes.func,
};
