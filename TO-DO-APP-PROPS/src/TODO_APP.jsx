import React from "react";
import { useState } from "react";
import { v4 as uuidv4, v4 } from "uuid";
import { AddButton, InputBox } from "./TODO_INPUT_ADD";
import TaskRender from "./TODO_RENDER_OVERALL";

const TodoApp = () => {
  const [initialTodo, setInitialTodo] = useState("");
  const [listTodo, setListTodo] = useState([]);
  const [editId, setEditId] = useState(null);
  const [newTodo, setNewTodo] = useState("");

  const addTask = () => {
    if (initialTodo.length === 0) {
      window.alert("Please enter a task");
    } else
      setListTodo((prevState) => {
        return [...prevState, { title: initialTodo, id: v4() }];
      });
    setInitialTodo("");
  };

  return (
    <div>
      <h1>ENTER TASKS HERE</h1>

      <InputBox
        value={initialTodo}
        onChange={(inputBoxValue) => setInitialTodo(inputBoxValue)}
      />

      <AddButton onClick={addTask} />

      <TaskRender
        listTodo={listTodo}
        setListTodo={setListTodo}
        editId={editId}
        setEditId={setEditId}
        newTodo={newTodo}
        setNewTodo={setNewTodo}
      />
    </div>
  );
};

export default TodoApp;
