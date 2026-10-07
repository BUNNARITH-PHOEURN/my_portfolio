import { useReveal } from '../hooks/useReveal'
import SkillBar from './SkillBar'

const CATEGORIES = [
  {
    title: 'Frontend',
    icon: (
      <>
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </>
    ),
    skills: [
      { name: 'JavaScript', pct: 90 },
      { name: 'Tailwind CSS', pct: 92 },
      { name: 'Livewire', pct: 85 },
      { name: 'Vue.js', pct: 80 },
      { name: 'HTML5 / CSS3', pct: 95 },
    ],
  },
  {
    title: 'Backend',
    icon: (
      <>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </>
    ),
    skills: [
      { name: 'Laravel', pct: 93 },
      { name: 'PHP', pct: 90 },
      { name: 'Node.js', pct: 82 },
      { name: 'Python', pct: 75 },
      { name: 'REST API Design', pct: 90 },
    ],
  },
  {
    title: 'Microsoft Technologies',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </>
    ),
    skills: [
      { name: 'Power Apps', pct: 95 },
      { name: 'Power Automate', pct: 93 },
      { name: 'Power BI', pct: 78 },
      { name: 'SharePoint / Graph', pct: 85 },
      { name: 'Entra ID / Exchange', pct: 80 },
    ],
  },
  {
    title: 'Database',
    icon: (
      <>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
      </>
    ),
    skills: [
      { name: 'MySQL', pct: 92 },
      { name: 'SQL Server', pct: 85 },
    ],
  },
  {
    title: 'Cloud',
    icon: <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />,
    skills: [
      { name: 'Microsoft Azure', pct: 88 },
      { name: 'AWS', pct: 70 },
    ],
  },
  {
    title: 'DevOps',
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
    skills: [
      { name: 'Git / GitHub', pct: 90 },
      { name: 'Docker', pct: 75 },
      { name: 'Linux', pct: 80 },
      { name: 'CI / CD', pct: 72 },
    ],
  },
]

const AI_SKILLS = [
  { name: 'OpenAI Integration', pct: 85 },
  { name: 'Copilot Studio', pct: 82 },
  { name: 'Chatbot Development', pct: 80 },
  { name: 'Prompt Engineering', pct: 88 },
]

function SkillCard({ title, icon, skills, wide }) {
  const [ref, inView] = useReveal()
  return (
    <div ref={ref} className={`glass skill-card reveal ${inView ? 'in' : ''}`} style={wide ? { gridColumn: 'span 3' } : undefined}>
      <div className="skill-card-head">
        <span className="ic">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {icon}
          </svg>
        </span>
        <h3>{title}</h3>
      </div>
      <div className="skill-rows" style={wide ? { display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '14px 28px' } : undefined}>
        {skills.map((s) => (
          <SkillBar key={s.name} name={s.name} pct={s.pct} />
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const [headRef, headIn] = useReveal()

  return (
    <section className="skills" id="skills">
      <div className="wrap">
        <div ref={headRef} className={`section-head reveal ${headIn ? 'in' : ''}`}>
          <div className="eyebrow">Skills</div>
          <h2>A stack built for enterprise delivery</h2>
          <p>From front-end interfaces to Power Platform automation and cloud infrastructure.</p>
        </div>

        <div className="skills-grid">
          {CATEGORIES.map((cat) => (
            <SkillCard key={cat.title} title={cat.title} icon={cat.icon} skills={cat.skills} />
          ))}
          <SkillCard
            title="AI"
            icon={
              <>
                <path d="M12 2a5 5 0 0 0-5 5c0 1.5.6 2.4 1.5 3.3S10 12 10 13.5V16h4v-2.5c0-1.5.6-2.4 1.5-3.2S17 8.5 17 7a5 5 0 0 0-5-5z" />
                <path d="M9 21h6" />
              </>
            }
            skills={AI_SKILLS}
            wide
          />
        </div>
      </div>
    </section>
  )
}
