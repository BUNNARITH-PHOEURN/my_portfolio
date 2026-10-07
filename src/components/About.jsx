import { useReveal } from '../hooks/useReveal'
import { useCounter } from '../hooks/useCounter'

const FOCUS_ITEMS = [
  {
    text: 'Automating manual, repetitive business processes end-to-end',
    icon: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />,
  },
  {
    text: 'Applying practical AI to HR, recruitment, and support workflows',
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      </>
    ),
  },
  {
    text: 'Designing cloud architecture on Azure that scales with the business',
    icon: <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />,
  },
  {
    text: 'Building enterprise software focused on reliability, not just features',
    icon: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
      </>
    ),
  },
]

function StatCard({ target, label }) {
  const [ref, value] = useCounter(target)
  return (
    <div className="glass stat-card">
      <div className="num">
        <span className="grad-text" ref={ref}>
          {value}
        </span>
        +
      </div>
      <div className="lbl">{label}</div>
    </div>
  )
}

export default function About() {
  const [headRef, headIn] = useReveal()
  const [cardRef, cardIn] = useReveal()
  const [statsRef, statsIn] = useReveal()

  return (
    <section className="about" id="about">
      <div className="wrap">
        <div ref={headRef} className={`section-head reveal ${headIn ? 'in' : ''}`}>
          <div className="eyebrow">About</div>
          <h2>Enterprise software, built to run on its own</h2>
          <p>A quick look at how I work and what drives the systems I build.</p>
        </div>

        <div className="about-grid">
          <div ref={cardRef} className={`glass about-card reveal ${cardIn ? 'in' : ''}`}>
            <p>
              I'm a Full Stack Developer and Microsoft Power Platform Developer focused on designing enterprise-grade
              business applications — from HR and recruitment systems to internal automation tools that remove
              repetitive work from people's days.
            </p>
            <p>
              My work sits at the intersection of Power Apps, Power Automate, Laravel, and Azure, with AI woven in
              wherever it can make a process faster or a decision easier. I care about software that enterprise teams
              can actually trust to run in production.
            </p>
            <div className="focus-list">
              {FOCUS_ITEMS.map((item, i) => (
                <div className="focus-item" key={i}>
                  <span className="ic">
                    <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {item.icon}
                    </svg>
                  </span>
                  {item.text}
                </div>
              ))}
            </div>
          </div>

          <div ref={statsRef} className={`about-stats reveal ${statsIn ? 'in' : ''}`}>
            <StatCard target={10} label="Enterprise Applications Shipped" />
            <StatCard target={20} label="Business Automations Delivered" />
            <StatCard target={100} label="Workflow Automations Built" />
            <div className="glass stat-card">
              <div className="num" style={{ fontSize: 22, lineHeight: 1.3 }}>
                M365 <span className="grad-text" style={{ fontSize: 22 }}>Specialist</span>
              </div>
              <div className="lbl">Power Platform &amp; Microsoft Graph</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
