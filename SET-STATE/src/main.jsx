import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import Form_Component from './form'
// import Closure_Component from './14Dec_Stale_Closure'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <Form_Component />
    {/* <Closure_Component /> */}
  </React.StrictMode>,
)
