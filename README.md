# Bun Narith — Portfolio (React + Vite)

A dark/light glassmorphism portfolio for a Full Stack Developer & Microsoft Power Platform Developer, built as a React project (no CSS framework — plain CSS with design tokens in `src/index.css`).

## Getting started

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

The production files are written to `dist/` — deploy that folder to any static host (Vercel, Netlify, GitHub Pages, etc.).

## Project structure

```
src/
  App.jsx              root component, composes all sections
  index.css            design tokens + all styles (dark/light theme via [data-theme])
  hooks/
    useTheme.js         dark/light mode, persisted to localStorage
    useReveal.js         scroll-in fade/slide-up animation
    useCounter.js         animated number counters
  components/
    Header.jsx           sticky nav, theme toggle, mobile menu
    Hero.jsx              intro, CTAs, animated background
    About.jsx              summary + stats
    Skills.jsx               categorized skills with animated progress bars
    SkillBar.jsx               single animated skill bar
    Experience.jsx             timeline
    Projects.jsx                 project cards grid
    Achievements.jsx              stat counters
    Certifications.jsx             cert cards
    TechStack.jsx                   marquee logo/tag strip
    Testimonials.jsx                  testimonial cards
    Contact.jsx                       contact info + form (static demo)
    Footer.jsx                          social links + back-to-top
```

## Things to personalize

- **Photo** — swap the "BN" initials placeholder in `Hero.jsx` (`.avatar-placeholder`) for an actual `<img>`.
- **Resume** — add your PDF to `public/` and update the `handleResume` links in `Header.jsx` / `Hero.jsx` to point to it with `download`.
- **Social links** — replace the `href="#"` placeholders in `Contact.jsx` and `Footer.jsx` with your real LinkedIn, GitHub, and Facebook URLs.
- **Contact form** — `Contact.jsx` currently just simulates a send. Wire it to a service like Formspree, EmailJS, or your own API endpoint.
- **Content** — skill percentages, project descriptions, testimonials, and certification statuses are placeholders in `Skills.jsx`, `Projects.jsx`, `Testimonials.jsx`, and `Certifications.jsx` — edit the data arrays at the top of each file.

## Notes

- Respects `prefers-reduced-motion`.
- Fully responsive (desktop / tablet / mobile), with a slide-in mobile nav under 820px.
- No UI framework dependency — just React + Vite + plain CSS, so it's easy to restyle or migrate into a larger app.
