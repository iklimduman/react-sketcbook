import react, { useEffect, useState, useLayoutEffect, useRef } from "react";

const Model = () => {
  const [count, setCount] = useState(1);
  const [aysncTest, setAsyncTest] = useState(1);
  const popup = useRef()
  const button= useRef()

  const handleCount = () => {
    setCount(count + 1);
    console.log("onClick " + count);
  };

  const replaceContentDelay = () => {
    if( popup.current == null || button.current == null)
     return
      const {bottom} = button.current.getBoundingClientRect() ;
      popup.current.style.top = `${bottom + 25}px`
  };

  const replaceContentNonDelay = () => {
    if( popup.current == null || button.current == null)
     return
      const {bottom} = button.current.getBoundingClientRect() ;
      popup.current.style.top = `${bottom + 55}px`
  };

  /* It works async ! */

  useEffect(() => {
    replaceContentDelay();
  }, [count]);

  /* It works sync */

  useLayoutEffect(() => {
    replaceContentNonDelay();
  }, [aysncTest]);

  const handleNonDelay = () => {
    setAsyncTest(aysncTest + 1) ;
    console.log(aysncTest)
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", rowGap: "10px" }}>
      <button style={{ width: "20%", margin: "auto" }} onClick={handleCount} ref={button}>
        Click me
      </button>
      <button
        style={{ width: "30%", margin: "auto" }}
        onClick={replaceContentDelay}
      >
        Click me useEffect
      </button>
      <button
        style={{ width: "30%", margin: "auto" }}
        onClick={handleNonDelay}
      >
        Click me useLayoutEffect
      </button>
      <span style={{ position: "relative" }} id="replace-content" ref={popup}>
        Pop up text
      </span>
      <span style={{ margin: "auto" }}>{count}</span>
      <span style={{ margin: "auto" }}>{aysncTest}</span>
    </div>
  );
};

export default Model;
