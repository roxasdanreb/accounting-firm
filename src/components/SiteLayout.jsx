import accountingLogo from '../../assets/accounting-logo.svg'

const navigation = [
  { label: 'Home', href: '#/', page: 'home' },
  { label: 'About Us', href: '#/about', page: 'about' },
  { label: 'Services', href: '#/services', page: 'services' },
  { label: 'Contact', href: '#/contact', page: 'contact' },
]

export function SiteNavigation({ activePage, theme, onToggleTheme }) {
  return (
    <nav className="site-nav">
      <a className="logo-wrap" href="#/" aria-label="P and C Accounting Firm home">
        <img className="nav-logo" src={accountingLogo} alt="" />
        <span className="logo">P &amp; C Accounting Firm</span>
      </a>
      <ul className="nav-links">
        {navigation.map((item) => (
          <li key={item.page}>
            <a
              className={activePage === item.page ? 'active' : undefined}
              href={item.href}
              aria-current={activePage === item.page ? 'page' : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div className="nav-actions">
        <button
          className="theme-toggle"
          type="button"
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          aria-pressed={theme === 'dark'}
          onClick={onToggleTheme}
        >
          <span className="toggle-icon" aria-hidden="true">{theme === 'dark' ? '🌙' : '☀️'}</span>
          <span className="toggle-text">{theme === 'dark' ? 'Dark' : 'Light'}</span>
        </button>
      </div>
    </nav>
  )
}

export function SiteFooter({ tagline = false }) {
  return (
    <footer>
      <div className="container footer-content">
        <p>&copy; <span>{new Date().getFullYear()}</span> P&amp;C Accounting Firm. All rights reserved.</p>
        {tagline && <p>Let us handle your finances so you can focus on your business.</p>}
      </div>
    </footer>
  )
}

export function PageBanner({ eyebrow, title, description }) {
  return (
    <header className="page-banner">
      <div className="container" data-reveal>
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </div>
    </header>
  )
}