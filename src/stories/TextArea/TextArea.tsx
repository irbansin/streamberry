import React from "react";
import styles from "./TextArea.module.scss";

export default function TextArea({
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
      <textarea
        className={styles.textarea}
        placeholder={placeholderText}
        value={inputValue}
        onChange={change}
        onKeyUp={keyup}
        data-testid="searchValue-input"
      />
    </div>
  );
}
