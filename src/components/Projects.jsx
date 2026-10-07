import { useReveal } from '../hooks/useReveal'

const ICON_EXTERNAL = (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <path d="M15 3h6v6" />
    <path d="M10 14 21 3" />
  </svg>
)
const ICON_GITHUB = (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
  </svg>
)
const ICON_CASE = (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
)

const PROJECTS = [
  {
    title: 'Enterprise HCM System',
    desc: 'A full human capital management platform covering employee records, schedules, and org-wide HR operations.',
    badges: ['Laravel', 'Filament', 'MySQL'],
    links: ['demo', 'github', 'case'],
    thumb: (
      <>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </>
    ),
  },
  {
    title: 'Budget Request System',
    desc: 'An approval-driven budgeting workflow with automated routing and SharePoint-backed document tracking.',
    badges: ['Power Apps', 'Power Automate', 'SharePoint'],
    links: ['demo', 'case'],
    thumb: (
      <>
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </>
    ),
  },
  {
    title: 'Cash Advance System',
    desc: 'A self-service cash advance and reconciliation flow built entirely on the Power Platform.',
    badges: ['Power Platform'],
    links: ['demo', 'case'],
    thumb: (
      <>
        <rect x="1" y="4" width="22" height="16" rx="2" />
        <line x1="1" y1="10" x2="23" y2="10" />
      </>
    ),
  },
  {
    title: 'Recruitment Management System',
    desc: 'Candidate pipeline management with AI-assisted screening to shortlist applicants faster.',
    badges: ['Laravel', 'AI'],
    links: ['demo', 'github'],
    thumb: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <circle cx="16" cy="11" r="2" />
      </>
    ),
  },
  {
    title: 'AI Recruitment Assistant',
    desc: 'An AI assistant that reads resumes, ranks candidates, and drafts interview shortlists via Microsoft Graph.',
    badges: ['OpenAI', 'Microsoft Graph'],
    links: ['case'],
    thumb: (
      <>
        <path d="M12 2a5 5 0 0 0-5 5c0 1.5.6 2.4 1.5 3.3S10 12 10 13.5V16h4v-2.5c0-1.5.6-2.4 1.5-3.2S17 8.5 17 7a5 5 0 0 0-5-5z" />
        <path d="M9 21h6" />
      </>
    ),
  },
  {
    title: 'HR Assistant Chatbot',
    desc: 'A Power Platform chatbot answering employee HR questions and routing requests automatically.',
    badges: ['Power Platform', 'AI'],
    links: ['demo', 'case'],
    thumb: (
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    ),
  },
  {
    title: 'Event Auto Posting System',
    desc: 'Scheduled, rule-based event publishing across internal channels — no manual posting required.',
    badges: ['Power Apps', 'Power Automate'],
    links: ['demo', 'case'],
    thumb: (
      <>
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </>
    ),
  },
  {
    title: 'Microsoft 365 Account Automation',
    desc: 'Automated employee onboarding and offboarding across Microsoft 365 via Graph API.',
    badges: ['Power Automate', 'Graph API'],
    links: ['case'],
    thumb: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </>
    ),
  },
]

const LINK_META = {
  demo: { label: 'Live Demo', icon: ICON_EXTERNAL },
  github: { label: 'GitHub', icon: ICON_GITHUB },
  case: { label: 'Case Study', icon: ICON_CASE },
}

function ProjectCard({ project }) {
  const [ref, inView] = useReveal()
  return (
    <div ref={ref} className={`glass project-card reveal ${inView ? 'in' : ''}`}>
      <div className="project-thumb">
        <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          {project.thumb}
        </svg>
      </div>
      <div className="project-body">
        <h3>{project.title}</h3>
        <p>{project.desc}</p>
        <div className="badges">
          {project.badges.map((b) => (
            <span className="badge" key={b}>
              {b}
            </span>
          ))}
        </div>
        <div className="project-links">
          {project.links.map((key) => (
            <a href="#" key={key}>
              {LINK_META[key].icon}
              {LINK_META[key].label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [headRef, headIn] = useReveal()

  return (
    <section className="projects" id="projects">
      <div className="wrap">
        <div ref={headRef} className={`section-head reveal ${headIn ? 'in' : ''}`}>
          <div className="eyebrow">Featured Projects</div>
          <h2>Systems built for real business operations</h2>
          <p>A selection of enterprise applications and automations shipped to production.</p>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
