import React, { useState, useMemo } from "react";
import "./App.css";

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const buttonText = useMemo(
    () => (buttonColor === "red" ? "blue" : "red"),
    [buttonColor]
  );
  const handleOnclick = () => setButtonColor(buttonText);
  return (
    <div className="App">
      <button
        onClick={handleOnclick}
        style={{ backgroundColor: buttonColor }}
      >{`Change to ${buttonText}`}</button>
    </div>
  );
}

export default App;
