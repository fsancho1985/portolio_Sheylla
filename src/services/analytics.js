const GLOBAL_PARAMS = {
  experiment_id: 'rodacki_site_ab_2026',
  variant: 'A',
}

function gtag(...args) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag(...args)
  }
}

export function trackPageView(path) {
  gtag('event', 'page_view', {
    ...GLOBAL_PARAMS,
    page_path: path,
  })
}

export function trackCtaClick(location) {
  gtag('event', 'cta_click', {
    ...GLOBAL_PARAMS,
    page_path: window.location.pathname,
    cta_location: location,
  })
}

export function trackWhatsappClick() {
  gtag('event', 'whatsapp_click', {
    ...GLOBAL_PARAMS,
    page_path: window.location.pathname,
    cta_location: 'contact',
  })
}

export function trackFormStart() {
  gtag('event', 'form_start', {
    ...GLOBAL_PARAMS,
    page_path: window.location.pathname,
  })
}

export function trackFormSubmit() {
  gtag('event', 'form_submit', {
    ...GLOBAL_PARAMS,
    page_path: window.location.pathname,
  })
}

export function trackFormError() {
  gtag('event', 'form_error', {
    ...GLOBAL_PARAMS,
    page_path: window.location.pathname,
  })
}

export function trackServiceCardClick(serviceName) {
  gtag('event', 'service_card_click', {
    ...GLOBAL_PARAMS,
    page_path: window.location.pathname,
    service_name: serviceName,
  })
}

export function trackScroll(depth) {
  gtag('event', `scroll_${depth}`, {
    ...GLOBAL_PARAMS,
    page_path: window.location.pathname,
  })
}
