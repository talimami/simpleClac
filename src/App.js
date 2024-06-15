import React, { useState } from "react";
import "./App.css";

function App() {
  const [createNumber, setCreateNumber] = useState("");
  const [storedNumber, setStoredNumber] = useState("");
  const [storedAction, setStoredAction] = useState("");

  const number = (x) => {
    setCreateNumber((prevCreateNumber) => prevCreateNumber + x.toString());
  };

  const backSpace = () => {
    setCreateNumber((prevCreateNumber) => prevCreateNumber.slice(0, -1));
  };

  const completeClear = () => {
    setCreateNumber("");
    setStoredAction("");
    setStoredNumber("");
  };

  const StoreAndClear = (x) => {
    setStoredNumber(createNumber);
    setCreateNumber("");
    setStoredAction(x);
  };

  const LogicCalc = () => {
    let result;
    const num1 = parseFloat(storedNumber);
    const num2 = parseFloat(createNumber);

    if (storedAction === "+") {
      result = num1 + num2;
    } else if (storedAction === "-") {
      result = num1 - num2;
    } else if (storedAction === "*") {
      result = num1 * num2;
    } else if (storedAction === "/") {
      result = num1 / num2;
    } else {
      result = parseFloat(createNumber);
    }

    setCreateNumber(result.toString());
    setStoredNumber("");
    setStoredAction("");
  };

  const numbers = () => {
    return (
      <div>
        <div className="numbers">
          <button onClick={() => number(1)}>1</button>
          <button onClick={() => number(2)}>2</button>
          <button onClick={() => number(3)}>3</button>
          <button onClick={() => number(4)}>4</button>
          <button onClick={() => number(5)}>5</button>
          <button onClick={() => number(6)}>6</button>
          <button onClick={() => number(7)}>7</button>
          <button onClick={() => number(8)}>8</button>
          <button onClick={() => number(9)}>9</button>
          <button onClick={() => number(0)}>0</button>
          <button onClick={() => LogicCalc()}>=</button>
        </div>
        <div className="others">
          <button onClick={() => completeClear()}>C</button>
          <button onClick={() => backSpace()}>B</button>
          <button onClick={() => StoreAndClear("+")}>+</button>
          <button onClick={() => StoreAndClear("-")}>-</button>
          <button onClick={() => StoreAndClear("*")}>*</button>
          <button onClick={() => StoreAndClear("/")}>/</button>
        </div>
      </div>
    );
  };

  return (
    <div className="calculatorContainer">
      <div className="calculatorFrame">
        <div className="display">{createNumber}</div>
        {numbers()}
      </div>
    </div>
  );
}

export default App;
