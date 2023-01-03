import React, { memo, useCallback } from "react";

const ChildUseCallback = ({ counter, updateCounter }) => {
  console.log("CHILD");

  return (
    <>
      {/* <h1>CHILD USE CALLBACK</h1> */}
      <h1>CHILD: {counter}</h1>
      <button onClick={updateCounter}>Child Component Button</button>
    </>
  );
};

export default memo(ChildUseCallback);
