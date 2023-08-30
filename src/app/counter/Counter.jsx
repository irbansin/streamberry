import "./Counter.scss";
import { useState } from "react";

function Counter(props) {
  const [counter, setCounter] = useState(props.initialCount || 0);
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
    <>
      <button onClick={decreaseCount}>-</button>
      <span class="counter"> {counter}</span>
      <button onClick={increaseCount}> +</button>
    </>
  );
}
export default Counter;
