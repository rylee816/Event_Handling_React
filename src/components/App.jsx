import React, { useState } from "react";

function App() {
  let [isMousedOver, setMousedOver] = useState(false);
  let [headerText, setHeaderText] = useState("Hello");

  function handleClick() {
    return setHeaderText(<h1 style={{ color: "red" }}>Submitted</h1>);
  }

  function handleMouseOver() {
    return setMousedOver(true);
  }

  function handleMousedOut() {
    return setMousedOver(false);
  }

  return (
    <div className="container">
      <h1>{headerText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ background: isMousedOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMousedOut}
        onClick={handleClick}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
