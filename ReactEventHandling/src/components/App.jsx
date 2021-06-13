import React, { useState } from "react";

function App() {
  const [headingText, setHeadingText] = useState("Hello");

  const [name, setName] = useState("");

  let finalName = "";

  function handleClick(event) {
    setHeadingText("Hello Again ");
    setName(finalName);

    event.preventDefault();
  }

  function handleMouseOver() {
    console.log("cursor is on button");
    document.getElementById("button").style.backgroundColor = "#356e6d";
    document.getElementById("button").style.color = "white";
  }

  function handleMouseLeave() {
    console.log("cursor hes leave the button");
    document.getElementById("button").style.backgroundColor = "white";
    document.getElementById("button").style.color = "#356e6d";
  }

  function handleOnChange(event) {
    finalName = event.target.value;
  }

  return (
    <div className="container">
      <h1>{headingText + " " + name}</h1>
      <input
        onChange={handleOnChange}
        type="text"
        placeholder="What's your name?"
      />
      <button
        id="button"
        onClick={handleClick}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
