import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{backgroundColor: 'black', minHeight: "100vh", margin: "0px"}}>

    <App />
    </div>
  </React.StrictMode>,
)
