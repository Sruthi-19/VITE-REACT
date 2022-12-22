import React from "react";
import To_Do_Update from "./todo_update";
import To_Do_Delete_Update from "./todo_delete_update";
import { useState } from "react";

const To_Do_App_Render = (props) => {
  const [edit_id, set_edit_id] = useState(null);
  return (
    <>
      {props.todo_output_list.map((item, index) => {
        if(item.id==edit_id){
          return(
            <To_Do_Update todo_output_list={props.todo_output_list} set_To_Do_Output={props.set_To_Do_Output} edit_id={edit_id} set_edit_id={set_edit_id}/>
          )

        }
        else{
          return(
            <To_Do_Delete_Update item={item} index={index} todo_output_list={props.todo_output_list} set_To_Do_Output={props.set_To_Do_Output} edit_id={edit_id} set_edit_id={set_edit_id}/>
          )
        }
      })}
    </>
  );
};

export default To_Do_App_Render