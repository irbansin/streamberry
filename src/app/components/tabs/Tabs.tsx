import { useState } from "react";
import styles from "./Tabs.module.scss";
import React from "react";

export default function Tabs({ tabsList }) {
  let [tabs, settabs] = useState(tabsList);

  function handleClick(event, i) {
    // 👇️ toggle isActive tabs on click
    alert(tabs[i].title + " clicked");
    tabs.forEach((tab, index) => {
      if (index === i) {
        tab.active = true;
      } else {
        tab.active = false;
      }
    });
    settabs([...tabs]);
    return i;
  }

  return (
    <div className={styles.tabsContainer}>
      {tabs.map((tab, index) => {
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
