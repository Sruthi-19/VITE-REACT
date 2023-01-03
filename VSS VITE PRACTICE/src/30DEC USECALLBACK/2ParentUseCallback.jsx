import React, { useCallback, useState } from "react";
import Child2UseCallback from "./2ChildUseCallback";

const Parent2UseCallback = () => {
  console.log("PARENT");
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const updateCount = () => {
    setCount((prev) => prev + 1);
  };

  const updateInput=useCallback((val)=>{
      setInput(val);
  },[])

//   const updateInput = (val) => {
//     setInput(val);
//   };

  return (
    <>
      <h1>PARENT: {count}</h1>
      <button onClick={updateCount}>Parent Increment</button>
      <Child2UseCallback input={input} updateInput={updateInput} />
    </>
  );
};

export default Parent2UseCallback;
