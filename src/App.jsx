import { useEffect, useState } from 'react'
import { SiteFooter, SiteNavigation } from './components/SiteLayout.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import HomePage from './pages/HomePage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'

function App() {
  const [currentPage, setCurrentPage] = useState(() => window.location.hash.replace(/^#\/?/, '') || 'home')
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('theme')
    return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })

  useEffect(() => {
    const syncPageFromHash = () => setCurrentPage(window.location.hash.replace(/^#\/?/, '') || 'home')
    window.addEventListener('hashchange', syncPageFromHash)
    return () => window.removeEventListener('hashchange', syncPageFromHash)
  }, [])

  useEffect(() => {
    const pageTitles = {
      home: 'P & C Accounting Firm',
      about: 'About Us - P & C Accounting Firm',
      services: 'Services - P & C Accounting Firm',
      contact: 'Contact - P & C Accounting Firm',
    }
    document.title = pageTitles[currentPage] || pageTitles.home
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

  return (
    <>
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