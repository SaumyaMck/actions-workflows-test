import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);
  const addToCounter = () => {
    setCounter(inputValue + counter);
  };
  const subsToCounter = () => {
    setCounter(counter - inputValue);
  };
  return (
    <div>
      <h2 data-testid="header">My Counter</h2>
      <h2
        className={`${counter >= 100 ? "green" : ""}${
          counter <= -100 ? "red" : ""
        }`}
        data-testid="counter"
      >
        {counter}
      </h2>
      <button data-testid="subs-btn" onClick={subsToCounter}>
        -
      </button>
      <input
        className="text-center"
        data-testid="input"
        type="number"
        value={inputValue}
        onChange={(e) => {
          setInputValue(parseInt(e.target.value));
        }}
      ></input>
      <button data-testid="add-btn" onClick={addToCounter}>
        +
      </button>
    </div>
  );
}

export default Counter;
