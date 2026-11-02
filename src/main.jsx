import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import App from './App.jsx'
import GlobalStyles from './GlobalStyles.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <GlobalStyles />
      <App />
    </HelmetProvider>
  </StrictMode>,
)
