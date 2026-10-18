import { PageBanner } from '../components/SiteLayout.jsx'

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

export default ServicesPage