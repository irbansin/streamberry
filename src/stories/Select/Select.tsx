import React, { useState } from "react";
import styles from "./Select.module.scss";
import PropTypes from "prop-types";

export default function Select({ label, options, value, triggerFunction }) {
  let [selectedValue, setSelectedValue] = useState(value);

  function updateValue(event: any) {
    setSelectedValue(event.target.value);
    triggerFunction(event.target.value);
  }

  return (
    <div className={styles.selectContainer} data-testid="tabs">
      <div className={styles.selectLabel}>{label}</div>
      <select
        className={styles.select}
        value={selectedValue}
        onChange={updateValue}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
Select.defaultProps = {
  options: [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ],
  value: "1",
  label: "",
  triggerFunction: () => {},
};

Select.propTypes = {
  options: PropTypes.array,
  value: PropTypes.string,
  triggerFunction: PropTypes.func,
};
