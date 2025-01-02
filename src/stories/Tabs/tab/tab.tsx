import styles from "./tab.module.scss";
import React from "react";

export default function Tab({ tab, isActive, selectTab }) {
  return (
    <div
      className={`
      ${styles.tab} 
      ${isActive ? styles.active : ""}`}
      onClick={selectTab}
      data-testid="tab"
    >
      {tab.name}
    </div>
  );
}
