import "./index.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  // const date = new Date("july 27 2024");
  const date = new Date();
  date.setDate(date.getDate() + count);

  function incCount() {
    setCount((s) => s + step);
  }
  function decCount() {
    setCount((s) => s - step);
  }
  function incStep() {
    setStep((p) => p + 1);
  }
  function decStep() {
    setStep((p) => p - 1);
  }

  return (
    <div>
      <h1>Date Counter</h1>
      <div>
        <span>
          <span onClick={decStep}>➖</span>
          <span>Step : {step}</span>
          <span onClick={incStep}>➕</span>
        </span>
      </div>
      <div>
        <span>
          <span onClick={decCount}>➖</span>
          <span>Count : {count}</span>
          <span onClick={incCount}>➕</span>
        </span>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

export default App;
