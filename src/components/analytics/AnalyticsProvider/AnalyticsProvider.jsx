import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '../../../services/analytics'

const GA4_ID = import.meta.env.VITE_GA4_ID

function loadGA4(id) {
  if (!id || document.getElementById('ga4-script')) return
  const script = document.createElement('script')
  script.id = 'ga4-script'
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`
  document.head.appendChild(script)
  window.dataLayer = window.dataLayer || []
  window.gtag = function () { window.dataLayer.push(arguments) }
  window.gtag('js', new Date())
  window.gtag('config', id)
}

export default function AnalyticsProvider({ children }) {
  const location = useLocation()

  useEffect(() => {
    loadGA4(GA4_ID)
  }, [])

  useEffect(() => {
    trackPageView(location.pathname)
  }, [location.pathname])

  return children
}
