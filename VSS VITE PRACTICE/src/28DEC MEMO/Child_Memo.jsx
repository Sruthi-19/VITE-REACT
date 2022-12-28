import React from "react";
import { memo } from "react";

const ChildMemo=()=>{
    console.log("CHILD RENDER");
    return(
        <>
        <h1>Memo Child Component</h1>
        </>
    )
}
export default memo(ChildMemo)