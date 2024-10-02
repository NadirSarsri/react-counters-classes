import React, { Component } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 5 },
      { id: 3, value: 0 },
      { id: 4, value: 7 },
    ],
  };

  handleIncrement = (counter) => {
    const index = this.state.counters.findIndex((c) => c.id === counter.id);
    const counters = [...this.state.counters];
    counters[index].value++;
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    const index = this.state.counters.findIndex((c) => c.id === counter.id);
    const counters = [...this.state.counters];
    counters[index].value--;
    this.setState({ counters });
  };
  handleDelete = (counter) => {
    const counters = this.state.counters.filter((c) => c.id !== counter.id);
    this.setState({ counters });
  };

  handleReset = () => {
    const counters = [...this.state.counters];
    for (const c of counters) {
      c.value = 0;
    }
    this.setState({ counters });
  };

  render() {
    const { counters } = this.state;
    return (
      <>
        <Navbar totalItems={counters.filter((c) => c.value > 0).length} />
        <Counters
          counters={counters}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        />
      </>
    );
  }
}

export default App;
