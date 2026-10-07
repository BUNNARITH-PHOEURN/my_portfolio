import { useReveal } from '../hooks/useReveal'

const CERTS = [
  {
    title: 'PL-200',
    issuer: 'Microsoft Power Platform Functional Consultant',
    status: 'progress',
    label: 'IN PROGRESS',
    icon: (
      <>
        <path d="M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
        <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
      </>
    ),
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    status: 'progress',
    label: 'IN PROGRESS',
    icon: (
      <>
        <path d="M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
        <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
      </>
    ),
  },
  {
    title: 'Future Microsoft Certifications',
    issuer: 'Continued Power Platform & Azure track',
    status: 'planned',
    label: 'PLANNED',
    icon: <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />,
  },
]

function CertCard({ cert }) {
  const [ref, inView] = useReveal()
  return (
    <div ref={ref} className={`glass cert-card reveal ${inView ? 'in' : ''}`}>
      <div className="cert-top">
        <span className="cert-icon">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {cert.icon}
          </svg>
        </span>
        <span className={`cert-status ${cert.status}`}>{cert.label}</span>
      </div>
      <h3>{cert.title}</h3>
      <p className="issuer">{cert.issuer}</p>
    </div>
  )
}

export default function Certifications() {
  const [headRef, headIn] = useReveal()

  return (
    <section className="certs" id="certifications">
      <div className="wrap">
        <div ref={headRef} className={`section-head reveal ${headIn ? 'in' : ''}`}>
          <div className="eyebrow">Certifications</div>
          <h2>Credentials backing the work</h2>
          <p>Formal recognition alongside hands-on delivery experience.</p>
        </div>
        <div className="certs-grid">
          {CERTS.map((c) => (
            <CertCard key={c.title} cert={c} />
          ))}
        </div>
      </div>
    </section>
  )
}
