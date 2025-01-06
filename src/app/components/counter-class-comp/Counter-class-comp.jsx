import React from "react";
import styles from "./Counter-class-comp.module.scss";

export default class CounterDepr extends React.Component {
  constructor({ initialCount }) {
    super({ initialCount });

    this.state = {
      counter: Number({ initialCount }) || 0,
    };
  }
  increaseCount = () => {
    let newCount = this.state.counter + 1;

    this.setState({
      counter: newCount,
    });
  };
  decreaseCount = () => {
    let newCount = this.state.counter - 1;

    if (newCount >= 0) {
      this.setState({
        counter: newCount,
      });
    }
  };
  render() {
    return (
      <counter-class-comp>
        <label className={styles.label}>Counter class-comp</label>
        <button className={styles.primary} onClick={this.decreaseCount}>
          -
        </button>
        <span className={styles.counter}> {this.state.counter}</span>
        <button className={styles.primary} onClick={this.increaseCount}>
          +
        </button>
      </counter-class-comp>
    );
  }
}
