import { useEffect, useRef, useState } from 'react'

export default function SkillBar({ name, pct }) {
  const ref = useRef(null)
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setWidth(pct)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [pct])

  return (
    <div className="skill-row">
      <div className="top">
        <span className="name">{name}</span>
        <span className="pct">{pct}%</span>
      </div>
      <div className="bar" ref={ref}>
        <div className="bar-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  )
}
