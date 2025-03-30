import React from "react";
import PropTypes from "prop-types";
import styles from "./Tags.module.scss";

export function Tags({ tags = ["tag1", "tag2", "tag3"] }) {
  return (
    <div className={styles.tile__tags}>
      {tags.map((item, index) => {
        return (
          <span className="pr-2" key={index}>
            {item}
          </span>
        );
      })}
    </div>
  );
}

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};
