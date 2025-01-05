import styles from "./Counter.module.scss";
import { useState } from "react";

function Counter(props) {
  const [counter, setCounter] = useState(Number(props.initialCount) || 0);
  /*
    useState is a hook that allows us to use state in a functional component.
    useState returns an array with two elements:
    1. The current value of the state
    2. A function to update the state

    We can use array destructuring to assign these values to variables.
  */

  function increaseCount() {
    setCounter(counter + 1);
    console.log("counter", counter);
  }

  function decreaseCount() {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    console.log("counter", counter);
  }

  return (
    <div>
      <label className={styles.label}>Counter</label>
      <div className={styles.roundedBorder}>
        <button className={styles.primary} onClick={decreaseCount}>
          -
        </button>
        <span className={styles.counter}> {counter}</span>
        <button className={styles.primary} onClick={increaseCount}>
          +
        </button>
      </div>
    </div>
  );
}
export default Counter;
