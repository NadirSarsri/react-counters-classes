function Counter({ counter, onDelete, onIncrement, onDecrement }) {
  const setSpanClasses = () => {
    let classes = "badge text-bg-";
    return counter.value === 0
      ? (classes += "warning")
      : (classes += "primary");
  };
  return (
    <div className="row g-2 align-items-center">
      <div className="col-1">
        <span className={setSpanClasses()}>
          {counter.value === 0 ? "Zero" : counter.value}
        </span>
      </div>

      <div className="col">
        <button
          className="btn btn-sm btn-secondary m-2"
          onClick={() => onDecrement(counter)}
          disabled={counter.value === 0}
        >
          -
        </button>
        <button
          className="btn btn-sm btn-secondary m-2"
          onClick={() => onIncrement(counter)}
        >
          +
        </button>
        <button
          onClick={() => onDelete(counter)}
          className="btn btn-sm btn-danger m-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Counter;
