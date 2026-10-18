import { Fragment } from 'react'
import homeImage from '../../assets/Homepage.png'

const offerings = [
  {
    number: '01',
    title: 'Monthly Retainer',
    description: 'Basic bookkeeping, tax compliance and filing, plus up to five hours of accounting advisory per month.',
  },
  {
    number: '02',
    title: 'Financial Statements',
    description: 'Annual bookkeeping review and preparation of unaudited financial statements, including required notes and schedules.',
  },
  {
    number: '03',
    title: 'Annual Tax Filing',
    description: 'Preparation, review, and electronic filing of annual tax returns, schedules, supporting computations, and required coordination.',
  },
  {
    number: '04',
    title: 'Accounting Advisory',
    description: 'Professional guidance on bookkeeping, financial statements, tax compliance, accounting systems, and BIR support.',
  },
]

const pillars = ['Organized Ledgers', 'Transparent Numbers', 'Dedicated Advisory']

const workflow = [
  { title: 'Snap Receipts', description: 'Send over the records from your day-to-day work.' },
  { title: 'We Reconcile in Drive', description: 'We organize and reconcile your numbers in one place.' },
  { title: 'Receive Clean Monthly Reports', description: 'Get the clarity you need to plan your next move.' },
]

function HomePage() {
  return (
    <main>
      <section className="hero home-hero">
        <div className="content" data-reveal>
          <p className="eyebrow">P&amp;C ACCOUNTING FIRM</p>
          <h1>Reliable Accounting and Tax Support for Your Business</h1>
          <p className="hero-lead">Professional bookkeeping, compliance, financial reporting, and advisory services from P&amp;C Accounting Firm.</p>
          <div className="buttons">
            <a className="btn-primary" href="#/services">Explore Solutions</a>
            <a className="btn-secondary" href="#/contact">Book a Discovery Call</a>
          </div>
        </div>
        <div className="hero-image" data-reveal>
          <img
            src={homeImage}
            alt="Accounting professionals reviewing financial records at a desk"
            fetchPriority="high"
          />
        </div>
      </section>

      <section className="value-pillars" aria-labelledby="value-pillars-title">
        <div className="section-heading" data-reveal>
          <p className="eyebrow">WHY OUTSOURCE TO US</p>
          <h2 id="value-pillars-title">Practical support for accurate, compliant records.</h2>
        </div>
        <div className="pillar-list">
          {pillars.map((title, index) => (
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
          {offerings.map((offering) => (
            <article className="card" data-reveal key={offering.number}>
              <span className="card-number">{offering.number}</span>
              <h3>{offering.title}</h3>
              <p>{offering.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="workflow" aria-labelledby="workflow-title" data-reveal>
        <div className="section-heading">
          <p className="eyebrow">WORKING TOGETHER</p>
          <h2 id="workflow-title">Simple inputs. Cleaner decisions.</h2>
        </div>
        <div className="workflow-steps">
          {workflow.map((step, index) => (
            <Fragment key={step.title}>
              <article className="workflow-step">
                <span>{`0${index + 1}`}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
              {index < workflow.length - 1 && <div className="workflow-arrow" aria-hidden="true">→</div>}
            </Fragment>
          ))}
        </div>
      </section>

      <section className="cta-banner" data-reveal aria-labelledby="cta-title">
        <div>
          <p className="eyebrow">READY WHEN YOU ARE</p>
          <h2 id="cta-title">Take control of your business finances today.</h2>
        </div>
        <a
          className="btn-primary"
          href="https://wa.me/639424107158?text=Hello%20P%26C%20Accounting%20Firm%2C%20I%27d%20like%20to%20learn%20more."
          target="_blank"
          rel="noopener noreferrer"
        >
          Message Us on WhatsApp
        </a>
      </section>
    </main>
  )
}

export default HomePage