import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import AboutUs from './components/NavBar/AboutUs.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AboutUs/>
    <App />
  </React.StrictMode>,
)
