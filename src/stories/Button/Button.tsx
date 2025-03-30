import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  label = "Labels",
  click = () => {
    console.log("button clicked");
  },
}) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      onClick={click}
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
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
