import React from 'react';
import './App.css';
import Timer from './Timer.js';
import Counter from './Counter';

class App extends React.Component {
  

  render () {
    return ( 
    <div className="App">
      <Timer/>
      <Counter/>
    </div>
    )
  }
}

export default App;
