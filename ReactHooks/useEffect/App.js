import "./styles.css";
import {useEffect,useState} from "react"

export default function App() {

  const [windowWidth,setWindowWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(()=>{
    window.addEventListener('resize',handleResize)
  },[])

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>{windowWidth}</h2>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
