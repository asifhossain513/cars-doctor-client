import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Main from "./Layout/Main.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="max-w-7xl mx-auto">
    <React.StrictMode>
      <Main />
    </React.StrictMode>
    ,
  </div>
);
