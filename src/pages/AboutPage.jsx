import { PageBanner } from '../components/SiteLayout.jsx'
import aboutImage from '../../assets/Who are we.png'
import servicesImage from '../../assets/What we do.png'

const values = [
  {
    title: 'Integrity',
    description: 'We uphold the highest standards of honesty and transparency, offering advice that is clear, ethical, and always in your best interest.',
  },
  {
    title: 'Personalized Service',
    description: 'Every business has unique goals, so we take the time to understand your needs and deliver tailored financial solutions that fit your journey.',
  },
  {
    title: 'Reliability',
    description: 'We are committed to dependable service, accurate reporting, and timely support so you can move forward with confidence and peace of mind.',
  },
]

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
                <img className="about-feature-image" src={servicesImage} alt="Modern office space with employees working" loading="lazy" />
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
                <div className="values-header" data-reveal>
                  <h2 id="values-title">Our values</h2>
                </div>
                <div className="values-grid">
                  {values.map((value, index) => (
                    <article className="value-card" data-reveal key={value.title}>
                      <span className="value-number">{`0${index + 1}`}</span>
                      <h3>{value.title}</h3>
                      <p>{value.description}</p>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default AboutPage