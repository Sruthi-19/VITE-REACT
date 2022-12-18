import React from 'react'
import ReactDOM from 'react-dom/client'
import To_Do_App_Create from './todo_render'
// import TodoApp from './todo_create'
// import TodoApp from './todo_copy'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <TodoApp /> */}
    <To_Do_App_Create />
    {/* <TodoApp /> */}
  </React.StrictMode>,
)
