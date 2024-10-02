import React, { Component } from "react";
import Counter from "./counter";
class Counters extends Component {
  render() {
    const { onDelete, onIncrement, onDecrement, onReset, counters } =
      this.props;
    return (
      <main className="container pt-5">
        <button onClick={onReset} className="btn btn-sm btn-primary">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
          />
        ))}
      </main>
    );
  }
}
export default Counters;
