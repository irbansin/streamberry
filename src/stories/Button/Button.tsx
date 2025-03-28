import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.scss";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  buttonType = "primary",
  size = "medium",
  label = "Labels",
  click = () => {
    console.log("button clicked");
  },
}) => {
  return (
    <button
      type="button"
      onClick={click}
      // className={["", `storybook-button--${size}`, mode].join(
      //   " "
      // )}
      className={`${styles.storybookButton} ${
        styles[`storybook-button--${size}`]
      } ${styles[`storybook-button--${buttonType}`]}`}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  click: PropTypes.func,
};
