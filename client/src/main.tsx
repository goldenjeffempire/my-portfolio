
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from "@/components/ui/theme-toggle"
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
