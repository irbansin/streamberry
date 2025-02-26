import React from "react";
import PropTypes from "prop-types";

import "./Tile.scss";

export default function Tile({
  title,
  description,
  imageLink,
  altText,
  tags,
  metaText,
  badgeText,
}) {
  return (
    <div className="tile">
      <div className="tile__image">
        <img src={imageLink} alt={altText} />
      </div>
      <div className="tile__content">
        <div className="flex justify-between">
          <h3 className="tile__title text-2xl font-black subpixel-antialiased	font-sans">
            {title}
          </h3>
          <h3 className="tile__title text-2xl font-black subpixel-antialiased	font-sans">
            {badgeText}
          </h3>
        </div>
        <div className="flex justify-between">
          <div className="tile__tags ">
            {tags.map((item, index) => {
              return <span key={index}>{item} </span>;
            })}
          </div>
          <div className="tile__metaText ">{metaText}</div>
        </div>
        <p className="tile__description">{description}</p>
      </div>
    </div>
  );
}

Tile.defaultProps = {
  title: "Title",
  altText: "Image",
  description: "",
  image: "https://via.placeholder.com/300x300",
};

Tile.propTypes = {
  title: PropTypes.string,
  altText: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};
