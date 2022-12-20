import React from "react";

const To_Do_Delete_Update = ({
  item,
  index,
  todo_output_list,
  set_To_Do_Output,
  edit_id,
  set_edit_id,
}) => {

    //DELETE
    const deleteTask=(item)=>{
        set_To_Do_Output((prevvState)=>{
            return prevvState.filter((items)=>{
                return items.id !== item.id
            })
        })
    }

    //UPDATE
    const updateTaskClicked = (item) => {
    set_edit_id(item.id);
  };
  
  return (
    <div>
      <h2 key={index}>{item.title}</h2>
      <button onClick={() => deleteTask(item)}>DELETE</button>
      <button onClick={() => updateTaskClicked(item)}>UPDATE</button>
    </div>
  );
};

export default To_Do_Delete_Update;
