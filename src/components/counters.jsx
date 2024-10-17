import Counter from "./counter";

function Counters({ onDelete, onIncrement, onDecrement, onReset, counters }) {
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

export default Counters;
