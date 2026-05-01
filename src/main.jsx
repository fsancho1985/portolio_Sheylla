import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { HelmetProvider } from 'react-helmet-async'
import { Analytics } from '@vercel/analytics/react'
import theme from './theme/theme'
import AnalyticsProvider from './components/analytics/AnalyticsProvider/AnalyticsProvider'
import AppRoutes from './routes/AppRoutes'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter basename={import.meta.env.VITE_ROUTER_BASE || '/'}>
          <AnalyticsProvider>
            <AppRoutes />
          </AnalyticsProvider>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
    <Analytics />
  </React.StrictMode>
)
