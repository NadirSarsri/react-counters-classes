import React, { Component } from "react";
class Counter extends Component {
  setSpanClasses = () => {
    let classes = "badge text-bg-";
    return this.props.counter.value === 0
      ? (classes += "warning")
      : (classes += "primary");
  };

  render() {
    const { counter } = this.props;
    return (
      <div className="row g-2 align-items-center">
        <div className="col-1">
          <span className={this.setSpanClasses()}>
            {counter.value === 0 ? "Zero" : counter.value}
          </span>
        </div>

        <div className="col">
          <button
            className="btn btn-sm btn-secondary m-2"
            onClick={() => this.props.onDecrement(counter)}
            disabled={counter.value === 0}
          >
            -
          </button>
          <button
            className="btn btn-sm btn-secondary m-2"
            onClick={() => this.props.onIncrement(counter)}
          >
            +
          </button>
          <button
            onClick={() => this.props.onDelete(counter)}
            className="btn btn-sm btn-danger m-2"
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}
export default Counter;
