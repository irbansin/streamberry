import React from "react";
import PropTypes from "prop-types";
import styles from "./Badge.module.scss";

const setStyles = (size) => {
  if (size === "lg") {
    return "text-3xl h-16 w-16 border-2";
  } else if (size === "md") {
    return "text-xl h-12 w-12 border-2";
  } else if (size === "sm") {
    return " h-10 w-10 border-2";
  }
};

export function Badge({ value, size }) {
  return (
    <div
      className={
        setStyles(size) +
        " flex items-center justify-center subpixel-antialiased font-sans  rounded-full ml-2"
      }
    >
      <div className={styles.badge}>{value}</div>
    </div>
  );
}
Badge.defaultProps = {
  value: 7.3,
  size: "small",
};

Badge.propTypes = {
  value: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
};
