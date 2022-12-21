import React from "react";

const ItemDisplay=({h2})=>{
  return(
    <li>{h2}</li>
  )
}

const DeleteButton=({item,onClick})=>{
  return(
    <button onClick={() => onClick(item)}>DELETE</button>
    )
}

const UpdateDelButton=({item,onClick})=>{
  return(
    <button onClick={() => onClick(item)}>UPDATE TASK</button>
  )

}

export {ItemDisplay};
export {DeleteButton};
export {UpdateDelButton};
