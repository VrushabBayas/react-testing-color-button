import React, { useState, useMemo } from "react";
import "./App.css";

export const replaceCamalWithSpaces = (color) => {
  return color.replace(/\B([A-Z])\B/g, " $1");
};
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
          style={{ backgroundColor: disabled ? "gray" : buttonColor }}
        >{`Change to ${buttonText}`}</button>
      </div>
      <div className="checboxWrapper">
        <input
          id="disable-button-checkbox"
          type="checkbox"
          defaultChecked={disabled}
          aria-checked={disabled}
          onChange={handleOnCheck}
        />
        <label htmlFor="disable-button-checkbox">Disable button</label>
      </div>
    </div>
  );
}

export default App;
