import { useState } from 'react'

const emailAddress = 'pandcservice181@gmail.com'

function ContactPage() {
  const [formState, setFormState] = useState({ status: 'idle', message: '' })

  async function handleInquirySubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = Object.fromEntries(new FormData(form).entries())
    const payload = Object.fromEntries([
      ['Full Name', formData.name],
      ['Corporate Entity / Business Name', formData.business],
      ['Corporate Email Address', formData.email],
      ['Direct Phone Number', formData.phone],
      ['Primary Area of Interest', formData.interest],
      ['Engagement Summary / Operational Scope', formData.message],
    ].filter(([, value]) => value))
    payload._subject = 'New Consultation Request | P&C Accounting Firm'
    payload._replyto = formData.email
    payload._template = 'table'
    const controller = new AbortController()
    const timeoutId = window.setTimeout(() => controller.abort(), 15000)
    setFormState({ status: 'sending', message: 'Sending your inquiry…' })

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${emailAddress}`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      })
      const result = await response.json().catch(() => null)

      if (!response.ok || String(result?.success).toLowerCase() !== 'true') {
        const serviceMessage = typeof result?.message === 'string' ? result.message.trim() : ''
        throw new Error(serviceMessage || `FormSubmit returned an unexpected response (HTTP ${response.status}).`)
      }

      form.reset()
      setFormState({ status: 'success', message: 'Your inquiry was sent. The firm will follow up soon.' })
    } catch (error) {
      const message = error.name === 'AbortError'
        ? 'Sending took too long. Please try again or email the firm directly.'
        : error instanceof TypeError
          ? `Could not connect to FormSubmit. Check your internet connection and try again, or email ${emailAddress} directly.`
          : `FormSubmit could not accept your inquiry: ${error.message} If this is your first submission, check ${emailAddress} for an activation email.`
      setFormState({ status: 'error', message })
    } finally {
      window.clearTimeout(timeoutId)
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
            <div><h3>Business Email</h3><p><a href={`mailto:${emailAddress}`}>{emailAddress}</a></p></div>
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
            {formState.message && (
              <p className={`form-status ${formState.status}`} role={formState.status === 'error' ? 'alert' : 'status'} aria-live="polite">
                {formState.message}
              </p>
            )}
          </form>
        </div>
      </section>
    </main>
  )
}

export default ContactPage