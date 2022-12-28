import React, { useEffect, useState } from "react";
import ChildMemo from "./Child_Memo";

const ParentMemo=()=>{
    const[val,setVal]=useState("");
    const[final,setFinal]=useState(0);
    console.log("PARENT RENDER");
    useEffect(()=>{
        let count=0;
        for(let i=0;i<10;i++){
            count=count+i
        }
        setFinal(count);
        console.log("USE EFFECT");
    },[])
    return(
        <>
        <h1> Memo Parent Component</h1>
        <input value={val} onChange={(e)=>setVal(e.target.value)}></input>
        <h2>Input Box Value: {val}</h2>
        <p>COUNT VALUE: {final}</p>
        <ChildMemo/>
        
        </>
    )

}

export default ParentMemo