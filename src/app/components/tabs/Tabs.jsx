import styles from "./Tabs.module.scss";
import { useState } from "react";

export default function Tabs(props) {
  return (
    <div className={styles.tabsContainer}>
      {props.tabsList.map((tab) => {
        return <div className={styles.tab}>{tab}</div>;
      })}
    </div>
  );
}
