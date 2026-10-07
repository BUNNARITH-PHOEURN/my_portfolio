const scrollToId = (e, id) => {
  e.preventDefault()
  const target = document.querySelector(id)
  if (target) {
    const top = target.getBoundingClientRect().top + window.scrollY - 76
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

export default function Hero() {
  const handleResume = (e) => {
    e.preventDefault()
    alert('Add your resume PDF to /public and link it here — e.g. href="/Bun-Narith-Resume.pdf" download.')
  }

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
        <svg className="mesh" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4f7cff" />
              <stop offset="100%" stopColor="#9b5cff" />
            </linearGradient>
          </defs>
          <g stroke="url(#lineGrad)" strokeWidth="1" opacity="0.35" fill="none">
            <line x1="120" y1="120" x2="380" y2="260" />
            <line x1="380" y1="260" x2="640" y2="140" />
            <line x1="640" y1="140" x2="900" y2="300" />
            <line x1="380" y1="260" x2="420" y2="520" />
            <line x1="900" y1="300" x2="1080" y2="180" />
            <line x1="420" y1="520" x2="720" y2="600" />
          </g>
          <g fill="#7aa2ff" opacity="0.5">
            <circle cx="120" cy="120" r="3" />
            <circle cx="380" cy="260" r="4" />
            <circle cx="640" cy="140" r="3" />
            <circle cx="900" cy="300" r="3" />
            <circle cx="420" cy="520" r="4" />
            <circle cx="1080" cy="180" r="3" />
            <circle cx="720" cy="600" r="3" />
          </g>
        </svg>
      </div>

      <div className="wrap hero-grid">
        <div className="hero-copy reveal in">
          <div className="hero-eyebrow">
            <span className="pulse"></span>Available for freelance work.
          </div>
          <h1>
            Hi, I'm <span className="grad-text">Bunnarith Phoeurn</span>
          </h1>
          <div className="role">
            Full Stack Developer<span className="sep">/</span>Microsoft Power Platform Developer
            <span className="sep">/</span>AI &amp; Cloud Enthusiast
          </div>
          <p className="lead">
            I build enterprise business applications using Microsoft Power Platform, Opensource, Azure, AI, and modern
            web technologies — turning manual workflows into systems that run themselves.
          </p>
          <div className="hero-ctas">
            <a href="#projects" className="btn btn-primary" onClick={(e) => scrollToId(e, '#projects')}>
              View Projects
            </a>
            <a href="#" className="btn btn-ghost" onClick={handleResume}>
              Download Resume
            </a>
            <a href="#contact" className="btn btn-ghost" onClick={(e) => scrollToId(e, '#contact')}>
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-visual reveal in">
          <div className="avatar-ring">
            <div className="avatar-inner">
              <div className="avatar-placeholder">
                <span className="initials">BN</span>
              </div>
            </div>
          </div>
          <div className="float-chip glass chip1">
            <span className="dotc"></span>Power Platform
          </div>
          <div className="float-chip glass chip2">
            <span className="dotc"></span>Opensource + Azure
          </div>
          <div className="float-chip glass chip3">
            <span className="dotc"></span>AI Automations
          </div>
        </div>
      </div>

      <div className="scroll-cue">
        <span>SCROLL</span>
        <span className="line"></span>
      </div>
    </section>
  )
}
