import { useReveal } from '../hooks/useReveal'

const TESTIMONIALS = [
  {
    quote:
      'Narith turned a two-week manual approval process into a same-day automated flow. The system just works, quietly, in the background.',
    initials: 'HR',
    name: 'HR Operations Lead',
    role: 'Enterprise Client',
  },
  {
    quote:
      "Clear communication, clean architecture, and a genuine understanding of what the business actually needed — not just what was asked for.",
    initials: 'PM',
    name: 'Project Manager',
    role: 'Proseth Solutions',
  },
  {
    quote:
      "The AI recruitment assistant cut our screening time dramatically. It's rare to find someone who's equally strong on Power Platform and custom code.",
    initials: 'TA',
    name: 'Talent Acquisition',
    role: 'Partner Organization',
  },
]

function TestiCard({ t }) {
  const [ref, inView] = useReveal()
  return (
    <div ref={ref} className={`glass testi-card reveal ${inView ? 'in' : ''}`}>
      <p className="testi-quote">{t.quote}</p>
      <div className="testi-person">
        <div className="testi-avatar">{t.initials}</div>
        <div>
          <div className="name">{t.name}</div>
          <div className="role">{t.role}</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [headRef, headIn] = useReveal()

  return (
    <section className="testimonials">
      <div className="wrap">
        <div ref={headRef} className={`section-head reveal ${headIn ? 'in' : ''}`}>
          <div className="eyebrow">Testimonials</div>
          <h2>What people say about working together</h2>
          <p>Placeholder feedback — to be replaced with real client and colleague quotes.</p>
        </div>
        <div className="testi-grid">
          {TESTIMONIALS.map((t) => (
            <TestiCard t={t} key={t.name} />
          ))}
        </div>
      </div>
    </section>
  )
}
