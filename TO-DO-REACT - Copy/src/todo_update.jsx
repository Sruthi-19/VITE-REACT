import React, { useState } from "react";

const To_Do_Update=(props)=>{
    const[new_todo,set_new_todo]=useState("");

    const displayUpdatedTodo=()=>{
        props.set_To_Do_Output((prevState)=>{
            return prevState.map((items,index)=>{
                if(items.id==props.edit_id){
                    items.title=new_todo;
                }
                return items
                
            });
           
        });
        props.set_edit_id(null);
        set_new_todo("");
    }
    
    return(
        <>
        <input value={new_todo} onChange={(e)=>set_new_todo(e.target.value)} placeholder="Update To-do Here"></input>
        <button onClick={displayUpdatedTodo}>UPDATE</button>
        </>
    )

}
export default To_Do_Update