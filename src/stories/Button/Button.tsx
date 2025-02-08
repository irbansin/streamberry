import React from "react";
import PropTypes from "prop-types";
import styles from "./button.module.scss";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  buttonStyle = "primary",
  buttonType = "button",
  size = "medium",
  label = "Labels",
  click = (e: any) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("button clicked");
  },
}) => {
  return (
    <button
      type="button"
      onClick={click}
      className={`${styles.storybookButton} ${
        styles[`storybook-button--${size}`]
      } ${styles[`storybook-button--${buttonStyle}`]}`}
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
