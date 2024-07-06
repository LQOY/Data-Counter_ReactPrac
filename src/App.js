import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  const [step, setStep] = useState(1);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min={0}
          max={10}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        ></input>
        <span>Steps: {step}</span>
      </div>

      <div>
        <button
          onClick={() => {
            setCount(() => count - step);
          }}
        >
          {" "}
          -{" "}
        </button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        ></input>
        <button
          onClick={() => {
            setCount(() => count + step);
          }}
        >
          {" "}
          +{" "}
        </button>
      </div>
      <p>
        {" "}
        {count === 0
          ? `Today is `
          : count > 0
          ? `${count} day from today is `
          : `${Math.abs(count)} days ago was `}{" "}
        <span>{date.toDateString()}</span>
      </p>

      <div>
        {/* conditional rendering, reset button only not show when count or step did not change */}
        {count !== 0 || step !== 1 ? (
          <button onClick={handleReset}>Reset</button>
        ) : null}
      </div>
    </div>
  );
}

export default App;
