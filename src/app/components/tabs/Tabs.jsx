import { useState } from "react";
import styles from "./Tabs.module.scss";

export default function Tabs(props) {
  let [tabsList, setTabsList] = useState(props.list);

  function handleClick(event, i) {
    // 👇️ toggle isActive tabsList on click
    tabsList.forEach((tab, index) => {
      if (index === i) {
        tab.active = true;
      } else {
        tab.active = false;
      }
    });
    setTabsList([...tabsList]);
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
