import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './Home.jsx'
import Addtocart from './Addtocart.jsx'
import Wishlist from './Wishlist.jsx'
import App from './app.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
