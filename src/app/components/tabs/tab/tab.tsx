import styles from "./tab.module.scss";
import React from "react";

export default function Tab({ tab, isActive, click }) {
  return (
    <div
      className={`
      ${styles.tab} 
      ${isActive ? styles.active : ""}`}
      onClick={click}
    >
      {tab}
    </div>
  );
}
