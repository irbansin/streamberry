import { useState } from "react";
import styles from "./Tabs.module.scss";
import React from "react";
import Tab from "./tab/tab.tsx";

export default function Tabs({ tabsList }) {
  let [activeTab, setActiveTab] = useState(0);

  function handleClick(i) {
    // 👇️ toggle isActive tabs on click
    setActiveTab(i);
    alert(tabsList[i] + " clicked");

    return i;
  }

  return (
    <div className={styles.tabsContainer}>
      {tabsList.map((tab, index) => {
        return (
          <Tab
            tab={tab}
            key={index}
            isActive={index === activeTab}
            click={() => handleClick(index)}
          ></Tab>
        );
      })}
    </div>
  );
}
