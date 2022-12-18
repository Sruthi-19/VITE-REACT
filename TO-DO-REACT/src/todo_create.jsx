// import React from "react";
// import { useState } from "react";
// import { v4 as uuidv4, v4 } from "uuid";

// const To_Do_App_Create = () => {
//   //STATE FOR INPUT VALUE IN TO-DO
//   const [todo_input_value, set_To_Do_Input] = useState("");
//   const [todo_output_list, set_To_Do_Output] = useState([]);

//   //ADD TASK TO LIST
//   const renderTask = () => {
//     if (!todo_input_value) {
//       return alert("Enter a task");
//     }
//     set_To_Do_Output((last_To_Do_Output) => [
//       ...last_To_Do_Output,
//       { title: todo_input_value, id: v4() },
//     ]);
//     set_To_Do_Input("");
//   };

//   //DELETE TASK
//   const deleteTask = (id) => {
//     set_To_Do_Output((todo_output_list) => {
//       return todo_output_list.filter((item) => item.id !== id);
//     });
//   };

//   //UPDATE TASK
//   const updateTask = (id1, title) => {
//     let input_box = document.getElementById("input-tag");
//     input_box.focus();
//     input_box.value = title;
//     input_box.addEventListener("keypress", function (event) {
//       if (event.key == "Enter") {
//         set_To_Do_Output((todo_output_list) => {
//           console.log(input_box.value);
//           todo_output_list.map((item) =>
//             item.id == id1
//               ? (item.title = input_box.value)
//               : (item.title = "yup")
//           );
//           return todo_output_list
//         });
//       }
//     });
//   };

//   return (
//     <>
//       <h1>ENTER A TO-DO TASK HERE</h1>
//       <input
//         id="input-tag"
//         placeholder="Enter a task"
//         value={todo_input_value}
//         onChange={(e) => set_To_Do_Input(e.target.value)}
//       ></input>
//       <button onClick={renderTask}>ADD TASK</button>

//       <h1> THE TASKS ARE ADDED HERE</h1>

//       {todo_output_list.map((item, index) => {
//         return (
//           <div>
//             <h2 key={index}>{item.title}</h2>
//             <button onClick={() => deleteTask(item.id)}>DELETE TASK</button>
//             <button onClick={() => updateTask(item.id, item.title)}>
//               UPDATE TASK
//             </button>
//           </div>
//         );
//       })}
//     </>
//   );
// };
// export default To_Do_App_Create;
