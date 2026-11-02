import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { SiteFooter, SiteNavigation } from './components/SiteLayout.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'

const routes = {
  '/': 'home',
  '/about': 'about',
  '/services': 'services',
  '/contact': 'contact',
}

const pageMetadata = {
  home: {
    title: 'P & C Accounting Firm | Accounting and Tax Services',
    description: 'Professional bookkeeping, tax compliance, financial reporting, and accounting advisory for entrepreneurs and small businesses in the Philippines.',
    path: '/',
  },
  about: {
    title: 'About Us | P & C Accounting Firm',
    description: 'Meet P & C Accounting Firm and learn how our reliable, personalized accounting and bookkeeping support helps small businesses grow.',
    path: '/about',
  },
  services: {
    title: 'Accounting and Bookkeeping Services | P & C Accounting Firm',
    description: 'Explore bookkeeping, financial reporting, tax compliance, advisory, cash flow planning, and accounting system setup services.',
    path: '/services',
  },
  contact: {
    title: 'Contact Us | P & C Accounting Firm',
    description: 'Contact P & C Accounting Firm in Argao, Cebu to discuss bookkeeping, tax, financial reporting, and advisory needs for your business.',
    path: '/contact',
  },
}

function getCurrentPage() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/'
  return routes[pathname] || 'home'
}

function App() {
  const [currentPage, setCurrentPage] = useState(getCurrentPage)
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('theme')
    return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })

  useEffect(() => {
    const syncPageFromPath = () => setCurrentPage(getCurrentPage())
    window.addEventListener('popstate', syncPageFromPath)
    return () => window.removeEventListener('popstate', syncPageFromPath)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.body.dataset.theme = theme
    window.localStorage.setItem('theme', theme)
  }, [currentPage, theme])

  useEffect(() => {
    const revealItems = document.querySelectorAll('[data-reveal]')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reducedMotion || !('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'))
      return undefined
    }

    document.body.classList.add('has-reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { rootMargin: '0px 0px -40px 0px', threshold: 0.08 })

    revealItems.forEach((item) => observer.observe(item))
    return () => {
      observer.disconnect()
      document.body.classList.remove('has-reveal')
    }
  }, [currentPage])

  const pages = {
    about: AboutPage,
    services: ServicesPage,
    contact: ContactPage,
  }
  const CurrentPage = pages[currentPage] || HomePage
  const metadata = pageMetadata[currentPage] || pageMetadata.home

  return (
    <>
      <Helmet>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href={`${window.location.origin}${metadata.path}`} />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:url" content={`${window.location.origin}${metadata.path}`} />
      </Helmet>
      <SiteNavigation
        activePage={currentPage}
        theme={theme}
        onToggleTheme={() => setTheme((value) => value === 'dark' ? 'light' : 'dark')}
      />
      <CurrentPage />
      <SiteFooter tagline={currentPage === 'services'} />
    </>
  )
}

export default App