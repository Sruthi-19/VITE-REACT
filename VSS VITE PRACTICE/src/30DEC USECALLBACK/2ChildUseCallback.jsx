import React, { memo } from "react";

const Child2UseCallback=({input,updateInput})=>{
    console.log("CHILD");

   

    return(
        <>
        <h1>CHILD: {input}</h1>
        <input value={input} onChange={(e)=>updateInput(e.target.value)}></input>
        </>
    )

}

export default memo(Child2UseCallback)