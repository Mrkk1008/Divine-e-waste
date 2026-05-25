'use client'

import { useEffect, useRef } from 'react'

const STATS = [
  { to: 1247, suffix: 't', label: 'Tonnes of e‑waste & plastic responsibly diverted from landfill' },
  { to: 850, suffix: '+', label: 'Enterprise & producer partners served across India' },
  { to: 28, suffix: '', label: 'States with active pickup & logistics coverage' },
  { to: 100, suffix: '%', label: 'Channeled through authorized, audited recyclers' },
]

function CountUp({ to, id }: { to: number; id: string }) {
  const spanRef = useRef<HTMLSpanElement>(null)
  const observed = useRef(false)

  useEffect(() => {
    if (!spanRef.current) return
    const el = spanRef.current
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (!e.isIntersecting || observed.current) return
          observed.current = true
          const dur = 1800
          const start = performance.now()
          const fmt = (n: number) => (to >= 1000 ? Math.round(n).toLocaleString() : String(Math.round(n)))
          function tick(t: number) {
            const p = Math.min(1, (t - start) / dur)
            const eased = 1 - Math.pow(1 - p, 3)
            el.textContent = fmt(to * eased)
            if (p < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
          io.unobserve(el)
        })
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [to])

  return <span ref={spanRef} id={id}>0</span>
}

export default function Impact() {
  return (
    <section className="impact" id="impact">
      <div className="impact-head reveal">
        <div className="eyebrow" style={{ justifyContent: 'center' }}>Impact · 04</div>
        <h2 className="impact-title" style={{ marginTop: 20 }}>
          Numbers that make <em>a difference.</em>
        </h2>
      </div>
      <div className="impact-num-row">
        {STATS.map((stat, i) => (
          <div className="impact-num" key={i}>
            <div className="k display">
              <CountUp to={stat.to} id={`stat-${i}`} />
              {stat.suffix && <span className="u">{stat.suffix}</span>}
            </div>
            <div className="l">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
