import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Nav from './Nav.jsx'
import './index.css'
import Home from './Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav />
    <Home />
  </StrictMode>,
)
