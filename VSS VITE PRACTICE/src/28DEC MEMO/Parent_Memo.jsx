import React, { useEffect, useState } from "react";
import { memo } from "react";
import { useMemo } from "react";
import ChildMemo from "./Child_Memo";

const ParentMemo = () => {
//   const counter = useMemo(() => {
//     let count = 0;
//     for (let i = 1; i <= 100; i++) {
//       count += i;
//     }

//     return count;
//   }, []);

const[counter,setCounter]=useState(0);
useEffect(() => {
    let count = 0;
    for (let i = 1; i <= 100; i++) {
      count += i;
    }
    setCounter(count)
  }, []);

  console.log("Re-Render");

  return (
    <>
      <p>Counter: {counter}</p>
    </>
  );
  //   const [val, setVal] = useState("");
  //   // const[final,setFinal]=useState(0);
  //   console.log("PARENT RENDER");
  //   useEffect(() => {
  //     console.log("USE EFFECT");
  //   }, []);
  //   return (
  //     <>
  //       <h1> Memo Parent Component</h1>
  //       <input value={val} onChange={(e) => setVal(e.target.value)}></input>
  //       <h2>Input Box Value: {val}</h2>
  //       {/* <p>COUNT VALUE: {final}</p> */}
  //       {/* <ChildMemo/> */}
  //     </>
  //   );
};

export default ParentMemo;
