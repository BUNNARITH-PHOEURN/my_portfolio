import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const [panelRef, panelIn] = useReveal()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Static demo — wire this up to your email service (e.g. Formspree, EmailJS, or a backend endpoint).
    setSent(true)
    setTimeout(() => {
      setSent(false)
      setForm({ name: '', email: '', message: '' })
    }, 2200)
  }

  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <div ref={panelRef} className={`glass contact-panel reveal ${panelIn ? 'in' : ''}`}>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="eyebrow">Contact</div>
              <h2>Let's build something reliable</h2>
              <p>
                Open to enterprise projects, Power Platform consulting, and full-stack development work. Reach out
                through any channel below.
              </p>
              <div className="contact-list">
                <a href="mailto:hello@bunnarith.dev" className="glass">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="m22 6-10 7L2 6" />
                    </svg>
                  </span>
                  hello@bunnarith.dev
                </a>
                <a href="#" className="glass">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </span>
                  linkedin.com/in/bunnarith
                </a>
                <a href="#" className="glass">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
                    </svg>
                  </span>
                  github.com/bunnarith
                </a>
                <div className="item">
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </span>
                  Phnom Penh, Cambodia
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="you@company.com" value={form.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                {sent ? 'Message Sent ✓' : 'Send Message'}
              </button>
              <p className="form-note">This form is a static demo — connect it to your email service to receive messages.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
