import React from "react";
import PropTypes from "prop-types";

import "./Tile.scss";

export default function Tile({ title, description, image, altText }) {
  return (
    <div className="tile">
      <div className="tile__image">
        <img src={image} alt={altText} />
      </div>
      <div className="tile__content">
        <h3 className="tile__title">{title}</h3>
        <p className="tile__description">{description}</p>
      </div>
    </div>
  );
}

Tile.defaultProps = {
  title: "Title",
  altText: "Image",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  image: "https://via.placeholder.com/300x300",
};

Tile.propTypes = {
  title: PropTypes.string,
  altText: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};
