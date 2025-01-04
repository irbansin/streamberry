import React from "react";
import styles from "./Counter.module.scss";
import { useState } from "react";

function Counter({ initialCount, title }) {
  const [counter, setCounter] = useState(Number(initialCount) || 0);
  /*
    useState is a hook that allows us to use state in a functional component.
    useState returns an array with two elements:
    1. The current value of the state
    2. A function to update the state

    We can use array destructuring to assign these values to variables.
  */

  function increaseCount() {
    setCounter(counter + 1);
  }

  function decreaseCount() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }

  return (
    <div>
      <label className={styles.label} data-testid="label">
        {title}
      </label>
      <div className={styles.roundedBorder}>
        <button
          className={styles.primary}
          onClick={decreaseCount}
          data-testid="decrement-button"
        >
          -
        </button>
        <span className={styles.counter} data-testid="counter">
          {counter}
        </span>
        <button
          className={styles.primary}
          onClick={increaseCount}
          data-testid="increment-button"
        >
          +
        </button>
      </div>
    </div>
  );
}
export default Counter;
