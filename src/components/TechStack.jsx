import { useReveal } from '../hooks/useReveal'

const TECHS = [
  'Laravel',
  'Power Apps',
  'Power Automate',
  'Power BI',
  'Azure',
  'AWS',
  'Docker',
  'GitHub',
  'MySQL',
  'JavaScript',
  'Python',
  'SharePoint',
]

export default function TechStack() {
  const [headRef, headIn] = useReveal()
  // duplicate the list so the marquee loop is seamless
  const items = [...TECHS, ...TECHS]

  return (
    <section className="techstack">
      <div className="wrap">
        <div ref={headRef} className={`section-head reveal ${headIn ? 'in' : ''}`} style={{ marginBottom: 20 }}>
          <div className="eyebrow">Tech Stack</div>
          <h2>Tools I reach for daily</h2>
        </div>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {items.map((tech, i) => (
            <span className="glass tech-pill" key={`${tech}-${i}`}>
              <span className="sq"></span>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
