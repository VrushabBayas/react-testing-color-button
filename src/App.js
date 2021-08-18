import React, { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [disabled, setDisabled] = useState(false);
  const buttonText = useMemo(
    () => (buttonColor === "red" ? "blue" : "red"),
    [buttonColor]
  );
  const handleOnclick = () => setButtonColor(buttonText);
  const handleOnCheck = (e) => setDisabled(e.target.checked);
  return (
    <div className="App">
      <div className="buttonWrapper">
        <button
          disabled={disabled}
          onClick={handleOnclick}
          style={{ backgroundColor: buttonColor }}
        >{`Change to ${buttonText}`}</button>
      </div>
      <input
        type="checkbox"
        defaultChecked={disabled}
        aria-checked={disabled}
        onChange={handleOnCheck}
      />
    </div>
  );
}

export default App;
