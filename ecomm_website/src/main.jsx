import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Route>
      <Routes path="/" element="/Home">
      </Routes>
    </Route>
    </BrowserRouter>
  </StrictMode>,
)
