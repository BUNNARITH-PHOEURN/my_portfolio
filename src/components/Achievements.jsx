import { useCounter } from '../hooks/useCounter'
import { useReveal } from '../hooks/useReveal'

function AchCard({ target, label }) {
  const [ref, value] = useCounter(target)
  const [revealRef, inView] = useReveal()
  return (
    <div ref={revealRef} className={`glass ach-card reveal ${inView ? 'in' : ''}`}>
      <div className="num grad-text" ref={ref}>
        {value}
      </div>
      <div className="lbl">{label}</div>
    </div>
  )
}

export default function Achievements() {
  const [staticRef, staticIn] = useReveal()

  return (
    <section className="achievements">
      <div className="wrap">
        <div className="ach-grid">
          <AchCard target={10} label="Enterprise Applications" />
          <AchCard target={20} label="Business Automations" />
          <AchCard target={100} label="Workflow Automations" />
          <div ref={staticRef} className={`glass ach-card reveal ${staticIn ? 'in' : ''}`}>
            <div className="num grad-text" style={{ fontSize: 22 }}>
              M365
            </div>
            <div className="lbl">Microsoft 365 Specialist</div>
          </div>
        </div>
      </div>
    </section>
  )
}
