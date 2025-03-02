import { useState } from "react";
import styles from "./Tabs.module.scss";
import React from "react";
import Tab from "./tab/tab";
import PropTypes from "prop-types";
export default function Tabs({ tabsList, triggerFunction }) {
  let [activeTab, setActiveTab] = useState(0);

  function selectTab(id) {
    setActiveTab(id);
    triggerFunction(id);
  }

  return (
    <div className={styles.tabsContainer} data-testid="tabs">
      {tabsList.map((tab, index) => {
        return (
          <Tab
            tab={tab.name || tab}
            key={tab.id || index}
            isActive={tab.id === activeTab || index === activeTab}
            selectTab={() => selectTab(tab.id || index)}
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
