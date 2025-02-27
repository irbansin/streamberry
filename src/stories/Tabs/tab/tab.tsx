import styles from "./tab.module.scss";
import PropTypes from "prop-types";
import React from "react";

export default function Tab({ tab, isActive, selectTab }) {
  return (
    <div
      className={`flex items-center justify-center px-1 w-fit h-full w-fit	
      ${styles.tab} 
      ${isActive ? styles.active : ""}`}
      onClick={selectTab}
      data-testid="tab"
    >
      {tab}
    </div>
  );
}
Tab.defaultProps = {
  tab: "",
  isActive: false,
  selectTab: () => {},
};
Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  selectTab: PropTypes.func.isRequired,
};
