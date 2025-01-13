import { useState } from "react";
import styles from "./Tabs.module.scss";
import React from "react";
import { TabsProps } from "../../models/tabsProps.interface";

export default function Tabs(props: TabsProps) {
  let [tabsList, setTabsList] = useState(props.tabsList);

  function handleClick(event, i) {
    // 👇️ toggle isActive tabsList on click
    alert(tabsList[i].title + " clicked")
    tabsList.forEach((tab, index) => {
      if (index === i) {
        tab.active = true;
      } else {
        tab.active = false;
      }
    });
    setTabsList([...tabsList]);
    return i
  }

  return (
    <div className={styles.tabsContainer}>
      {tabsList.map((tab, index) => {
        return (
          <div
            key={index}
            onClick={(event, i = index) => handleClick(event, i)}
            className={`
                ${styles.tab} 
                ${tab.active ? styles.active : ""}`}
          >
            {tab.title}
          </div>
        );
      })}
    </div>
  );
}
