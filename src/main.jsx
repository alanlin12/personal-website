import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* BrowserRouter lets the app read and change the URL (/, /about, /contact) */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
