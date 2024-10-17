import React, { useState } from "react";
import Counters from "./components/counters";
import Navbar from "./components/navbar";

function App() {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 5 },
    { id: 3, value: 0 },
    { id: 4, value: 7 },
  ]);

  const handleIncrement = (counter) => {
    const copyCounters = counters.map((c) => {
      if (c.id === counter.id) {
        return { ...c, value: c.value + 1 };
      }
      return c;
    });
    setCounters(copyCounters);

    /*  const index = counters.findIndex((c) => c.id === counter.id);
    const copyCounters = [...counters];
    copyCounters[index].value++;
    setCounters(copyCounters); */
  };
  const handleDecrement = (counter) => {
    const copyCounters = counters.map((c) => {
      return c.id === counter.id ? { ...c, value: c.value - 1 } : c;
    });
    setCounters(copyCounters);
  };
  const handleDelete = (counter) => {
    const modified = counters.filter((c) => c.id !== counter.id);
    setCounters(modified);
  };

  const handleReset = () => {
    // const copyCounters = [...counters];
    // for (let i = 0; i < copyCounters.length; i++) {
    //   const c = { ...copyCounters[i], value: 0 };
    //   copyCounters[i] = c;
    // }
    const copyCounters = counters.map((counter) => {
      return { ...counter, value: 0 };
    });
    setCounters(copyCounters);
  };

  // const { counters } = this.state;
  return (
    <>
      <Navbar totalItems={counters.filter((c) => c.value > 0).length} />
      <Counters
        counters={counters}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onReset={handleReset}
      />
    </>
  );
}

export default App;
