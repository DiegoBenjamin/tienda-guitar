import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouter } from './router/AppRouter'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRouter />
  </StrictMode>,
)
