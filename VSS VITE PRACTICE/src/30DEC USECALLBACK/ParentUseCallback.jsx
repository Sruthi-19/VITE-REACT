import React, { useCallback, useMemo, useState } from "react";
import ChildUseCallback from "./ChildUseCallback";

const ParentUseCallback = () => {
  const [counter, setCounter] = useState(0);

  const [count, setCount] = useState(0);

  console.log("PARENT");

  //   const updateCount = useCallback(() => {
  //     setCount((prev) => prev + 1);
  //   }, []);

  const updateCount = () => {
    setCount((prev) => prev + 1);
  };

    const updateCounter = useCallback(() => {
      setCounter((prev) => prev + 1);
    }, []);

  //   const updateCounter = () => {
  //     setCounter((prev) => prev + 1);
  //   };

  return (
    <>
      {/* <h1>PARENT USE CALLBACK</h1> */}
      <h1>PARENT: {count}</h1>
      <button onClick={updateCount}>Parent Comp Button</button>
      <ChildUseCallback counter={counter} updateCounter={updateCounter} />
    </>
  );
};

export default ParentUseCallback;
