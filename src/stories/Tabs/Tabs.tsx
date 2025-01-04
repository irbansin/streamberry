import { useState } from "react";
import styles from "./Tabs.module.scss";
import React from "react";
import Tab from "./tab/tab.tsx";
import PropTypes from "prop-types";
export default function Tabs({ tabsList }) {
  let [activeTab, setActiveTab] = useState(0);

  function selectTab(i) {
    // toggle isActive tabs on click
    setActiveTab(i);
  }

  return (
    <div className={styles.tabsContainer} data-testid="tabs">
      {tabsList.map((tab, index) => {
        return (
          <Tab
            tab={tab}
            key={index}
            isActive={index === activeTab}
            selectTab={() => selectTab(index)}
          ></Tab>
        );
      })}
    </div>
  );
}

Tabs.defaultProps = {
  tabsList: ["Tab 1", "Tab 2", "Tab 3"],
};

Tabs.propTypes = {
  tabsList: PropTypes.array,
};
