import React from "react";
import styles from "./Dropdown.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis } from "@fortawesome/free-solid-svg-icons";

export default function Dropdown({
  menuItems = ["Option 1", "Option 2", "Option 3"],
  click = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    alert(e.target.innerText);
  },
}) {
  return (
    <div className={styles.dropdown}>
      <button className="tile__options absolute right-2 top-2 w-8 h-8 rounded-full">
        <FontAwesomeIcon icon={faEllipsis} />
      </button>
      <div className={styles.dropdownContent}>
        {menuItems.map((item, index) => (
          <div onClick={click} key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
