import React from "react";
import PropTypes from "prop-types";
import styles from "./Tags.module.scss";

export function Tags({ tags = [] }) {
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

Tags.defaultProps = {
  tags: [],
};

Tags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
};
