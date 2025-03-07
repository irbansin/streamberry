import React from "react";
import PropTypes from "prop-types";

import "./Tile.scss";
import { Tags } from "../Tags/Tags.tsx";
import { Badge } from "../Badge/Badge.tsx";

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
    <div className="tile flex flex-col w-fit max-w-xs">
      <div className="tile__image">
        <img className="w-full" src={imageLink} alt={altText} />
      </div>
      <div className="tile__content py-4 px-2 w-full">
        <div className="flex justify-between">
          <h3 className="tile__title text-2xl font-black subpixel-antialiased	font-sans">
            {title}
          </h3>

          <Badge value={badgeText} size="sm"></Badge>
        </div>
        <div className="flex justify-between">
          <Tags tags={tags} />
          <div className="tile__metaText ">{metaText}</div>
        </div>
        <p className="tile__description">{description}</p>
      </div>
    </div>
  );
}

Tile.defaultProps = {
  title: "Title",
  description: "",
  imageLink: "https://picsum.photos/",
  altText: "",
  tags: [],
  metaText: "Action",
  badgeText: "3.2",
};

Tile.propTypes = {
  title: PropTypes.string,
  altText: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};
