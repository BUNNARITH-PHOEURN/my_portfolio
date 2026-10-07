import { useEffect, useState } from 'react'

const LINKS = ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Certifications', 'Contact']

export default function Header({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleResume = (e) => {
    e.preventDefault()
    alert('Add your resume PDF to /public and link it here — e.g. href="/Bun-Narith-Resume.pdf" download.')
  }

  const scrollToId = (e, id) => {
    e.preventDefault()
    const target = document.querySelector(id)
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 76
      window.scrollTo({ top, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  return (
    <>
      <header id="siteHeader" className={scrolled ? 'scrolled' : ''}>
        <div className="wrap">
          <nav>
            <a href="#home" className="logo" onClick={(e) => scrollToId(e, '#home')}>
              <span className="dot"></span>bun.narith
            </a>
            <ul className="nav-links">
              {LINKS.map((label) => {
                const id = `#${label.toLowerCase()}`
                return (
                  <li key={label}>
                    <a href={id} onClick={(e) => scrollToId(e, id)}>
                      {label}
                    </a>
                  </li>
                )
              })}
            </ul>
            <div className="nav-actions">
              <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark and light mode">
                {theme === 'dark' ? (
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
                  </svg>
                )}
              </button>
              <a href="#" className="btn btn-primary btn-sm" onClick={handleResume}>
                Resume
              </a>
              <button className="menu-btn" onClick={() => setMenuOpen(true)} aria-label="Open menu">
                <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round">
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">
          <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round">
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
        {LINKS.map((label) => {
          const id = `#${label.toLowerCase()}`
          return (
            <a key={label} href={id} onClick={(e) => scrollToId(e, id)}>
              {label}
            </a>
          )
        })}
      </div>
    </>
  )
}
