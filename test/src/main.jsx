import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'tailwindcss/tailwind.css'
import './index.css'
 
const renderApp =()=>{
  ReactDOM.createRoot(document.getElementById('block-ahri-content')).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
export default renderApp;

