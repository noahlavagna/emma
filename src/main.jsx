import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/global.css'

// URLs propres (sans #). Le basename suit le `base` de Vite (/emma/),
// et un 404.html de secours gère le rafraîchissement des liens profonds.
const base = import.meta.env.BASE_URL
const basename = base === '/' ? '/' : base.replace(/\/$/, '')

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
