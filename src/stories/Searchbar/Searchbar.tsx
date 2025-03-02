import styles from "./Searchbar.module.scss";
import React from "react";
import { useState } from "react";
import { Button } from "../Button/Button";
import PropTypes from "prop-types";
import Input from "../Input/Input";

export default function Searchbar({
  initialSearchValue = "",
  search = (value) => {
    alert(value);
  },
}) {
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
      <Input
        inputType={"text"}
        placeholderText={"What do you want to watch?"}
        inputValue={searchValue}
        change={handleChange}
        keyup={handleKeyUp}
        data-testid="searchValue-input"
      ></Input>
      <Button
        primary={true}
        label={"Search"}
        size={"medium"}
        click={() => search(searchValue)}
        data-testid="search-button"
      ></Button>
    </div>
  );
}

Searchbar.propTypes = {
  initialSearchValue: PropTypes.string,
  search: PropTypes.func,
};
