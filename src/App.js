import "./styles.css";
import * as math from "mathjs";
import { useState } from "react";
function App() {
  const [input, setInput] = useState("");

  const handleDelete = () => {
    let expression = input;
    if (expression === "Error") {
      setInput("");
      return;
    }
    expression = expression.slice(0, -1);
    setInput(expression);
  };

  const handleResult = () => {
    try {
      const expression = input;
      const result = math.evaluate(expression);
      console.log(result);
      setInput(result);
    } catch (error) {
      setInput("Error");
    }
  };

  const handleInput = (i) => {
    if (input === "Error") {
      setInput(i);
    } else {
      setInput(input + i);
    }
  };

  return (
    <div className="grid-calculator">
      <div className="input">
        <div className="operand">{input}</div>
      </div>
      <button className="span-column-2" onClick={() => setInput("")}>
        AC
      </button>
      <button onClick={handleDelete}>DEL</button>
      <button onClick={() => handleInput("/")}>÷</button>
      <button onClick={() => handleInput("1")}>1</button>
      <button onClick={() => handleInput("2")}>2</button>
      <button onClick={() => handleInput("3")}>3</button>
      <button onClick={() => handleInput("*")}>*</button>
      <button onClick={() => handleInput("4")}>4</button>
      <button onClick={() => handleInput("5")}>5</button>
      <button onClick={() => handleInput("6")}>6</button>
      <button onClick={() => handleInput("+")}>+</button>
      <button onClick={() => handleInput("7")}>7</button>
      <button onClick={() => handleInput("8")}>8</button>
      <button onClick={() => handleInput("9")}>9</button>
      <button onClick={() => handleInput("-")}>-</button>
      <button onClick={() => handleInput(".")}>.</button>
      <button onClick={() => handleInput("0")}>0</button>
      <button onClick={handleResult} className="span-column-2">
        =
      </button>
    </div>
  );
}

export default App;
