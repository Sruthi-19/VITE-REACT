import React from "react";
import { useState } from "react";
import { v4 as uuidv4, v4 } from "uuid";
import To_Do_App_Render from "./todo_render";

const To_Do_App_Create = () => {
  //STATE FOR INPUT VALUE IN TO-DO
  const [todo_input_value, set_To_Do_Input] = useState("");
  const [todo_output_list, set_To_Do_Output] = useState([]);

  //ADD TASK TO LIST
  const renderTask = () => {
    if (!todo_input_value) {
      return alert("Enter a task");
    }
    set_To_Do_Output((last_To_Do_Output) => [
      ...last_To_Do_Output,
      { title: todo_input_value, id: v4() },
    ]);
    set_To_Do_Input("");
  };

  return (
    <>
      <h1>ENTER A TO-DO TASK HERE</h1>
      
      <input
        placeholder="Enter a task"
        value={todo_input_value}
        onChange={(e) => set_To_Do_Input(e.target.value)}
      ></input>

      <button onClick={renderTask}>ADD TASK</button>

      <h1> THE TASKS ARE ADDED HERE</h1>

      <To_Do_App_Render
        todo_output_list={todo_output_list}
        set_To_Do_Output={set_To_Do_Output}
      />
    </>
  );
};
export default To_Do_App_Create;
