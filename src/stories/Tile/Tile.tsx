import React from "react";
import PropTypes from "prop-types";

import "./Tile.scss";
import { Tags } from "../Tags/Tags";
import { Badge } from "../Badge/Badge";

import Dropdown from "../Dropdown/Dropdown";

export default function Tile({
  title = "Title",
  description = "",
  imageLink = "https=//picsum.photos/",
  altText = "",
  tags = [],
  metaText = "Action",
  badgeText = "3.2",
  showEllipsis = false,
  clickAction = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    alert(e.target.innerText);
  },
}) {
  let options = ["Edit", "Delete"];

  return (
    <div className="tile flex flex-col w-fit max-w-xs relative">
      {showEllipsis ? (
        <Dropdown menuItems={options} click={clickAction} />
      ) : null}
      <div className="tile__image">
        <img className="w-full" src={imageLink} alt={altText} />
      </div>

      <div className="tile__content py-4 px-2 w-full">
        <div className="flex justify-between">
          <h3 className="tile__title text-2xl font-black subpixel-antialiased	font-sans">
            {title}
          </h3>

          <Badge value={String(Number(badgeText).toFixed(1))} size="sm"></Badge>
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

Tile.defaultProps = {};

Tile.propTypes = {
  title: PropTypes.string,
  altText: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};
