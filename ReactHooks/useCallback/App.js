import "./styles.css";
import {useState , useCallback , useMemo} from "react"

const functionsCounter = new Set() ;
const functionsCounterCallback = new Set() ;

export default function App() {

  // To see the difference a Set data structure has been created and added the handle click functions to it.
  // seen that everytime component re-renders onClick functions are re-creating again.
  // if you try out this code you'll see that logs at console will increment 3 times at a time.

  const [count, setCount] = useState(0) ;
  const [otherCounter , setOtherCounter] = useState(0) ;

  const hanldeIncrease = () => {
    setCount(prevCount => prevCount+1)
  }

  const handleDecrease = () => {
    setCount(prevCount => prevCount-1)
  }

  const incrementOtherCounter = () => {
    setOtherCounter(otherCounter + 1)
  }

  functionsCounter.add(hanldeIncrease);
  functionsCounter.add(handleDecrease);
  functionsCounter.add(incrementOtherCounter);

  console.log(functionsCounter);

  const [countCallback , setCountCallback] = useState(0);
  const [incrementOtherCounterCallback , setIncrementOtherCounterCallback] = useState(0) ;

  const hanldeIncreaseCallback = useCallback( ()=> {
    setCountCallback(count+1)
  },[countCallback])

  const handleDecreaseCallback = useCallback( ()=> {
    setCountCallback(count-1)
  },[countCallback])

  const incrementOther = useCallback( ()=> {
    setIncrementOtherCounterCallback(incrementOtherCounterCallback-1)
  },[incrementOtherCounterCallback])

  functionsCounterCallback.add(hanldeIncreaseCallback)
  functionsCounterCallback.add(handleDecreaseCallback)
  functionsCounterCallback.add(incrementOther) 

  // as you can see in console only the one function who re-renders that time adding to Set.
  // the other functions who are not used that time are not re-creating again
  
  console.log("----")
  console.log(functionsCounterCallback)
  console.log("----")


  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button onClick={hanldeIncrease}>+</button>
      <p>{count}</p>
      <button onClick={handleDecrease}>-</button>
      <button onClick={incrementOtherCounter}>incrementOtherCounter</button>

      <button onClick={hanldeIncreaseCallback}>+</button>
      <p>{countCallback}</p>
      <button onClick={handleDecreaseCallback}>-</button>
      <button onClick={incrementOther}>incrementOtherCounter-Callback</button>
    </div>
  );
}

