import React from "react";
import "./Counter-class-comp.scss";

export default class CounterDepr extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: Number(this.props.initialCount) || 0,
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
        <label>Counter class-comp</label>
        <button onClick={this.decreaseCount}>-</button>
        <span class="counter"> {this.state.counter}</span>
        <button onClick={this.increaseCount}> +</button>
      </counter-class-comp>
    );
  }
}
