//src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import './i18n'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

if (import.meta.env.DEV) {
  console.info('%cBuilt by Imana Tsaqif Ariyadi\n%cgithub.com/imanatsaqif', 'font-weight: bold; color: #128C7E', 'color: #555')
}