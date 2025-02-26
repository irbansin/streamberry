import React from "react";
import styles from "./Input.module.scss";

export default function Input({
  inputType = "text",
  inputValue = "",
  placeholderText = "Type Something",
  change = (value: any) => {
    console.log(value);
  },
  keyup = (value: any) => {
    console.log(value);
  },
}) {
  return (
    <div className="m-1">
      <input
        className={styles.input}
        type={inputType}
        placeholder={placeholderText}
        value={inputValue}
        onChange={change}
        onKeyUp={keyup}
        data-testid="searchValue-input"
      />
    </div>
  );
}
