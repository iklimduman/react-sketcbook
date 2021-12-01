import './App.css';

import react, { useState, useRef, useEffect } from "react";

function App() {

  // most common use cases for useRef
  const [name, setName] = useState('');
  const inputRef = useRef('');
  const prevName = useRef('');
  const renderCount = useRef(1);

  // to reach DOM elements
  const handleFocus = () => {
    inputRef.current.focus() ;
  }

  // to store previous state value
  useEffect(()=>{
    prevName.current = name
  } , [name])

  // useRef doesnt cause to re-render
  useEffect(()=>{
    renderCount.current += 1 ;
  })

  return (
    <div className="App">
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}></input>
      <p>My name is {name}</p>
      <p>My previous name is {prevName.current}</p>
      <div>I have rendered {renderCount.current} times</div>
      <button onClick={handleFocus}>Focus</button>
    </div>
  );
}

export default App;
