import React from "react";
import { UpdateInputBox, UpdateButton } from "./TODO_UPDATE_CONTAINER";
import {
  ItemDisplay,
  DeleteButton,
  UpdateDelButton,
} from "./TODO_DELETEUPDATE";

const TaskRender = ({
  listTodo,
  setListTodo,
  editId,
  setEditId,
  newTodo,
  setNewTodo,
}) => {
  //SET EDIT ITEM ID
  const displayUpdateContainer = (item) => {
    setEditId(item.id);
    setNewTodo(item.title);
  };

  //UPDATE TASK
  const updateTask = () => {
    setListTodo((prevState) => {
      return prevState.map((item) => {
        if (item.id == editId) {
          item.title = newTodo;
        }
        return item;
      });
    });
    setEditId(null);
    setNewTodo("");
  };

  //DELETE TASK
  const deleteTask = (item) => {
    setListTodo((prevState) => {
      return prevState.filter((items) => {
        return items.id != item.id;
      });
    });
  };

  return (
    <div>
      <h1>THE TASKS ARE RENDERED HERE</h1>
      {listTodo.map((item) => {
        if (item.id == editId) {
          
          return (
            <div>
              <UpdateInputBox 
                value={newTodo} 
                onChange={setNewTodo} 
              />
              <UpdateButton 
                onClick={updateTask} 
              />
            </div>
          );

        } 

        else {

          return (
            <>
              <ItemDisplay 
                h2={item.title}
              />
              <DeleteButton 
                item={item} 
                onClick={() => deleteTask(item)}
              />
              <UpdateDelButton
                item={item}
                onClick={() => displayUpdateContainer(item)}
              />
            </>
          );

          
        }
      })}
    </div>
  );
};

export default TaskRender;
