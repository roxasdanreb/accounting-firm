import { useEffect, useState } from 'react'
import accountingLogo from '../assets/accounting-logo.svg'
import homeImage from '../assets/Homepage.png'
import aboutImage from '../assets/Who are we.png'
import workImage from '../assets/What we do.png'

const navigation = [
  { label: 'Home', href: 'index.html', page: 'index.html' },
  { label: 'About Us', href: 'about.html', page: 'about.html' },
  { label: 'Services', href: 'services.html', page: 'services.html' },
  { label: 'Contact', href: 'contact.html', page: 'contact.html' },
]

const services = [
  {
    category: 'BOOKKEEPING',
    title: 'BOOKKEEPING & GENERAL ACCOUNTING',
    description: 'Continuous ledger oversight, expense classification, and comprehensive reconciliations of accounts.',
  },
  {
    category: 'REPORTING',
    title: 'FINANCIAL REPORTING SUITES',
    description: 'Preparation of unaudited Statements of Financial Position, Comprehensive Income, and Cash Flow summaries.',
  },
  {
    category: 'ADVISORY',
    title: 'EXECUTIVE ADVISORY & CONSULTING',
    description: 'Routine strategic consultations to strengthen financial controls and support senior decision-makers.',
  },
  {
    category: 'AUDIT',
    title: 'AUDIT READINESS & ASSURANCE',
    description: 'Independent ledger reviews, adjusting entries, and documentation reconciliation for stakeholders and lenders.',
  },
  {
    category: 'CASH FLOW',
    title: 'CASH FLOW & BUDGET PLANNING',
    description: 'Diagnostic liquidity management, runway assessments, and financial modeling to support expansion.',
  },
  {
    category: 'SYSTEMS',
    title: 'SYSTEMS & WORKFLOW SETUP',
    description: 'Tailored chart of accounts design, cloud ledger transition, and internal process optimization.',
  },
]

const faqs = [
  {
    question: 'What records should I prepare before getting started?',
    answer: 'Recent bank statements, sales and expense records, receipts, prior financial statements, and tax documents are a useful starting point. We can confirm what is needed for your business during an initial discussion.',
  },
  {
    question: 'Can you help with bookkeeping and tax filing?',
    answer: 'The firm offers bookkeeping, accounting, financial reporting, tax preparation, and related advisory support. The exact scope depends on your business and reporting needs.',
  },
  {
    question: 'How do I ask about services for my business?',
    answer: 'Use the inquiry form or contact the firm directly by email or phone. Share your main accounting needs, and the firm can follow up about a suitable scope.',
  },
]

function SiteNavigation({ activePage, theme, onToggleTheme }) {
  return (
    <nav className="site-nav">
      <a className="logo-wrap" href="index.html" aria-label="P and C Accounting Firm home">
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

function SiteFooter({ tagline = false }) {
  return (
    <footer>
      <div className="container footer-content">
        <p>&copy; <span>{new Date().getFullYear()}</span> P&amp;C Accounting Firm. All rights reserved.</p>
        {tagline && <p>Let us handle your finances so you can focus on your business.</p>}
      </div>
    </footer>
  )
}

function PageBanner({ eyebrow, title, description }) {
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

function HomePage() {
  return (
    <main>
      <section className="hero home-hero">
        <div className="content" data-reveal>
          <p className="eyebrow">P&amp;C ACCOUNTING FIRM</p>
          <h1>Reliable Accounting and Tax Support for Your Business</h1>
          <p className="hero-lead">Professional bookkeeping, compliance, financial reporting, and advisory services from P&amp;C Accounting Firm.</p>
          <div className="buttons">
            <a className="btn-primary" href="services.html">Explore Solutions</a>
            <a className="btn-secondary" href="contact.html">Book a Discovery Call</a>
          </div>
        </div>
        <div className="hero-image" data-reveal>
          <img src={homeImage} alt="Accounting professionals reviewing financial records at a desk" />
        </div>
      </section>

      <section className="value-pillars" aria-labelledby="value-pillars-title">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">WHY OUTSOURCE TO US</p>
          <h2 id="value-pillars-title">Practical support for accurate, compliant records.</h2>
        </div>
        <div className="pillar-list">
          {['Organized Ledgers', 'Transparent Numbers', 'Dedicated Advisory'].map((title, index) => (
            <article className="pillar" data-reveal key={title}>
              <span>{`0${index + 1}`}</span>
              <h3>{title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="services-section" aria-labelledby="home-services-title">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">OUR SERVICES</p>
          <h2 id="home-services-title">Choose the support your business needs.</h2>
        </div>
        <div className="card-grid">
          <article className="card" data-reveal>
            <span className="card-number">01</span>
            <h3>Monthly Retainer</h3>
            <p>Basic bookkeeping, tax compliance and filing, plus up to five hours of accounting advisory per month.</p>
          </article>
          <article className="card" data-reveal>
            <span className="card-number">02</span>
            <h3>Financial Statements</h3>
            <p>Annual bookkeeping review and preparation of unaudited financial statements, including required notes and schedules.</p>
          </article>
          <article className="card" data-reveal>
            <span className="card-number">03</span>
            <h3>Annual Tax Filing</h3>
            <p>Preparation, review, and electronic filing of annual tax returns, schedules, supporting computations, and required coordination.</p>
          </article>
          <article className="card" data-reveal>
            <span className="card-number">04</span>
            <h3>Accounting Advisory</h3>
            <p>Professional guidance on bookkeeping, financial statements, tax compliance, accounting systems, and BIR support.</p>
          </article>
        </div>
      </section>

      <section className="workflow" aria-labelledby="workflow-title" data-reveal>
        <div className="section-heading">
          <p className="eyebrow">WORKING TOGETHER</p>
          <h2 id="workflow-title">Simple inputs. Cleaner decisions.</h2>
        </div>
        <div className="workflow-steps">
          <article className="workflow-step">
            <span>01</span><h3>Snap Receipts</h3><p>Send over the records from your day-to-day work.</p>
          </article>
          <div className="workflow-arrow" aria-hidden="true">→</div>
          <article className="workflow-step">
            <span>02</span><h3>We Reconcile in Drive</h3><p>We organize and reconcile your numbers in one place.</p>
          </article>
          <div className="workflow-arrow" aria-hidden="true">→</div>
          <article className="workflow-step">
            <span>03</span><h3>Receive Clean Monthly Reports</h3><p>Get the clarity you need to plan your next move.</p>
          </article>
        </div>
      </section>

      <section className="cta-banner" data-reveal aria-labelledby="cta-title">
        <div>
          <p className="eyebrow">READY WHEN YOU ARE</p>
          <h2 id="cta-title">Take control of your business finances today.</h2>
        </div>
        <a className="btn-primary" href="https://wa.me/639424107158?text=Hello%20P%26C%20Accounting%20Firm%2C%20I%27d%20like%20to%20learn%20more." target="_blank" rel="noopener noreferrer">Message Us on WhatsApp</a>
      </section>
    </main>
  )
}

function AboutPage() {
  return (
    <>
      <PageBanner eyebrow="ABOUT P&C ACCOUNTING FIRM" title="Your Dedicated Accounting & Bookkeeping Partner" />
      <main>
        <div className="container">
          <section className="about-section">
            <div className="about-text">
              <article className="about-panel about-feature-row" data-reveal>
                <img className="about-feature-image" src={aboutImage} alt="Accountants reviewing documents" loading="lazy" />
                <div className="about-feature-copy">
                  <h2>Who we are</h2>
                  <p>P&amp;C Accounting Firm provides comprehensive accounting, tax, and advisory solutions tailored for emerging entrepreneurs and small businesses. We simplify complex finances, ensure regulatory compliance, and deliver actionable insights so you can focus on scaling with confidence.</p>
                </div>
              </article>
              <article className="about-panel about-feature-row" data-reveal>
                <img className="about-feature-image" src={workImage} alt="Modern office space with employees working" loading="lazy" />
                <div className="about-feature-copy">
                  <h2>What we do</h2>
                  <p>We offer tailored solutions to help clients stay organized, file taxes on time, and ensure compliance with financial regulations, all while providing expert guidance and support throughout their business journey.</p>
                </div>
              </article>
              <section className="about-panel mission-panel" data-reveal>
                <p className="section-kicker">OUR MISSION</p>
                <h2>Our mission</h2>
                <p className="mission-statement">Our goal is to provide straightforward, affordable, and professional accounting services that allow entrepreneurs to focus on growing their businesses.</p>
              </section>
              <section className="about-panel values-panel" aria-labelledby="values-title">
                <div className="values-header" data-reveal><h2 id="values-title">Our values</h2></div>
                <div className="values-grid">
                  <article className="value-card" data-reveal>
                    <span className="value-number">01</span><h3>Integrity</h3>
                    <p>We uphold the highest standards of honesty and transparency, offering advice that is clear, ethical, and always in your best interest.</p>
                  </article>
                  <article className="value-card" data-reveal>
                    <span className="value-number">02</span><h3>Personalized Service</h3>
                    <p>Every business has unique goals, so we take the time to understand your needs and deliver tailored financial solutions that fit your journey.</p>
                  </article>
                  <article className="value-card" data-reveal>
                    <span className="value-number">03</span><h3>Reliability</h3>
                    <p>We are committed to dependable service, accurate reporting, and timely support so you can move forward with confidence and peace of mind.</p>
                  </article>
                </div>
              </section>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

function ServicesPage() {
  return (
    <>
      <PageBanner title="Our Services" />
      <main className="services-page">
        <div className="container">
          <section className="services-header" data-reveal>
            <h2>Practice Areas &amp; Specialized Solutions</h2>
            <p>Systematic financial oversight designed for sustainable performance.</p>
          </section>
          <div className="services-matrix">
            {services.map((service) => (
              <article className="service-item" data-reveal key={service.category}>
                <span className="icon">{service.category}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
          <section className="custom-scope" data-reveal>
            <p>Every business requires a distinct framework. Engagements are structured around your transaction volume, operational complexity, and reporting needs.</p>
          </section>
          <section className="faq-section" aria-labelledby="faq-title">
            <div className="section-heading" data-reveal>
              <p className="eyebrow">COMMON QUESTIONS</p>
              <h2 id="faq-title">A few things clients often ask.</h2>
            </div>
            <div className="faq-list">
              {faqs.map((item) => (
                <details className="faq-item" data-reveal key={item.question}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

function ContactPage() {
  const [formState, setFormState] = useState({ status: 'idle', message: '' })

  async function handleInquirySubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const payload = Object.fromEntries(new FormData(form).entries())
    payload._subject = 'New inquiry for P&C Accounting Firm'
    setFormState({ status: 'sending', message: 'Sending your inquiry…' })

    try {
      const response = await fetch('https://formsubmit.co/ajax/pandcservice181@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })
      const result = await response.json()

      if (!response.ok || String(result.success).toLowerCase() !== 'true') {
        throw new Error('Email service did not accept the inquiry.')
      }

      form.reset()
      setFormState({ status: 'success', message: 'Your inquiry was sent. The firm will follow up soon.' })
    } catch {
      setFormState({ status: 'error', message: 'We could not send your inquiry. Please email pandcservice181@gmail.com directly.' })
    }
  }

  return (
    <main className="contact-page">
      <header className="contact-page-header">
        <div className="container" data-reveal>
          <p className="eyebrow">CONTACT P&amp;C</p>
          <h1>Initiate a Confidential Discussion</h1>
          <p>Share the scope of your accounting needs and our team will respond with a focused next step.</p>
        </div>
      </header>
      <section className="contact-grid container" aria-label="Contact and consultation request">
        <div className="headquarters-panel" data-reveal>
          <p className="eyebrow">CORPORATE HEADQUARTERS</p>
          <h2>Let&apos;s discuss what your business needs next.</h2>
          <div className="contact-fact">
            <span className="contact-fact-icon" aria-hidden="true">&#128205;</span>
            <div><h3>Office Address</h3><p>Tawog, Talo-ot, Argao,<br />Cebu, Philippines</p></div>
          </div>
          <div className="contact-fact">
            <span className="contact-fact-icon" aria-hidden="true">&#128222;</span>
            <div><h3>Direct Telephone</h3><p><a href="tel:+639424107158">(+63) 942 410 7158</a></p></div>
          </div>
          <div className="contact-fact">
            <span className="contact-fact-icon" aria-hidden="true">&#9993;</span>
            <div><h3>Business Email</h3><p><a href="mailto:pandcservice181@gmail.com">pandcservice181@gmail.com</a></p></div>
          </div>
          <div className="contact-fact">
            <span className="contact-fact-icon" aria-hidden="true">&#128172;</span>
            <div>
              <h3>Direct Executive Channel</h3>
              <a className="whatsapp-link" href="https://wa.me/639424107158?text=Hello%20there%2C%20I%27d%20like%20to%20initiate%20a%20confidential%20discussion." target="_blank" rel="noopener noreferrer">Initiate WhatsApp Conversation <span aria-hidden="true">&#8594;</span></a>
            </div>
          </div>
          <div className="contact-fact">
            <span className="contact-fact-icon" aria-hidden="true">&#128336;</span>
            <div><h3>Operating Hours</h3><p>Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 9:00 AM - 2:00 PM</p></div>
          </div>
        </div>
        <div className="consultation-panel" data-reveal>
          <p className="eyebrow">CONSULTATION REQUEST FORM</p>
          <h2>Tell us about your engagement.</h2>
          <form className="contact-form consultation-form" onSubmit={handleInquirySubmit}>
            <div className="form-field">
              <label htmlFor="full-name">Full Name <span aria-hidden="true">*</span></label>
              <input id="full-name" name="name" type="text" autoComplete="name" required />
            </div>
            <div className="form-field">
              <label htmlFor="business-name">Corporate Entity / Business Name</label>
              <input id="business-name" name="business" type="text" autoComplete="organization" />
            </div>
            <div className="form-field">
              <label htmlFor="corporate-email">Corporate Email Address <span aria-hidden="true">*</span></label>
              <input id="corporate-email" name="email" type="email" autoComplete="email" required />
            </div>
            <div className="form-field">
              <label htmlFor="direct-phone">Direct Phone Number</label>
              <input id="direct-phone" name="phone" type="tel" autoComplete="tel" />
            </div>
            <fieldset className="interest-fieldset">
              <legend>Primary Area of Interest</legend>
              <label><input type="radio" name="interest" value="Full-Cycle Bookkeeping Management" required /> Full-Cycle Bookkeeping Management</label>
              <label><input type="radio" name="interest" value="Financial Statements & Performance" /> Financial Statements &amp; Performance</label>
              <label><input type="radio" name="interest" value="Strategic Business Advisory" /> Strategic Business Advisory</label>
              <label><input type="radio" name="interest" value="Accounting Systems Setup" /> Accounting Systems Setup</label>
            </fieldset>
            <div className="form-field">
              <label htmlFor="engagement-summary">Engagement Summary / Operational Scope</label>
              <textarea id="engagement-summary" name="message" rows="5" />
            </div>
            <button type="submit" className="btn-primary" disabled={formState.status === 'sending'}>
              {formState.status === 'sending' ? 'Sending…' : 'Submit Formal Inquiry'} <span aria-hidden="true">&#8594;</span>
            </button>
            {formState.message && <p className={`form-status ${formState.status}`} role="status" aria-live="polite">{formState.message}</p>}
          </form>
        </div>
      </section>
    </main>
  )
}

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  })
  const currentPage = window.location.pathname.split('/').pop() || 'index.html'

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.body.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

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

  let page
  if (currentPage === 'about.html') page = <AboutPage />
  else if (currentPage === 'services.html') page = <ServicesPage />
  else if (currentPage === 'contact.html') page = <ContactPage />
  else page = <HomePage />

  return (
    <>
      <SiteNavigation
        activePage={currentPage}
        theme={theme}
        onToggleTheme={() => setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark')}
      />
      {page}
      <SiteFooter tagline={currentPage === 'services.html'} />
    </>
  )
}

export default App
