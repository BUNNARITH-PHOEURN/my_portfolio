import { useReveal } from '../hooks/useReveal'

const HIGHLIGHTS = [
  'Enterprise HR System',
  'Recruitment System',
  'Budget Request System',
  'Material Request System',
  'Cash Advance System',
  'AI HR Assistant',
  'AI Recruitment Chatbot',
  'Event Auto Posting Platform',
  'Microsoft 365 Automation',
  'Employee Work Schedule Management',
]

export default function Experience() {
  const [headRef, headIn] = useReveal()
  const [itemRef, itemIn] = useReveal()

  return (
    <section className="experience" id="experience">
      <div className="wrap">
        <div ref={headRef} className={`section-head reveal ${headIn ? 'in' : ''}`}>
          <div className="eyebrow">Experience</div>
          <h2>Where the work happened</h2>
          <p>Enterprise systems delivered end-to-end, from architecture to rollout.</p>
        </div>

        <div className="timeline">
          <div ref={itemRef} className={`tl-item reveal ${itemIn ? 'in' : ''}`}>
            <div className="tl-head">
              <h3>Web Developer</h3>
              <span className="co">Proseth Solutions</span>
            </div>
            <div className="glass tl-body">
              <p className="role-desc">
                Designing and building enterprise business systems end-to-end — spanning HR, recruitment, finance
                workflows, and AI-driven automation across the Microsoft and Laravel ecosystems.
              </p>
              <div className="tl-tags">
                {HIGHLIGHTS.map((h) => (
                  <div className="tl-tag" key={h}>
                    {h}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
