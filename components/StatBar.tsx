'use client'

import { useRef, useEffect, useState } from 'react'

const STATS = [
  { to: 100, suffix: '%',     label: 'Authorized recycling',    sub: 'channelized to certified recyclers' },
  { text: 'Pan-India',        label: 'Collection & logistics',  sub: 'fast pickups with live tracking' },
  { to: 0,                    label: 'Sent to landfill',        sub: 'nothing dumped or incinerated' },
  { to: 2,                    label: 'Waste streams',           sub: 'electronic + plastic waste' },
]

function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [v, setV] = useState(0)
  const seen = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting && !seen.current) {
          seen.current = true
          const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
          if (reduced) { setV(to); return }
          let raf = 0, start = 0
          const tick = (t: number) => {
            if (!start) start = t
            const prog = Math.min(1, (t - start) / 1700)
            const eased = 1 - Math.pow(1 - prog, 3)
            setV(to * eased)
            if (prog < 1) raf = requestAnimationFrame(tick)
          }
          raf = requestAnimationFrame(tick)
        }
      })
    }, { threshold: 0.5 })
    io.observe(el)
    return () => io.disconnect()
  }, [to])

  return <span ref={ref}>{Math.round(v).toLocaleString('en-US')}{suffix}</span>
}

export default function StatBar() {
  return (
    <section className="stats" id="impact">
      <div className="wrap stats-grid">
        {STATS.map((s, i) => (
          <div key={i} className="stat reveal" data-d={i + 1}>
            <div className="stat-num">
              {'text' in s
                ? s.text
                : <Counter to={s.to!} suffix={s.suffix} />
              }
            </div>
            <div className="stat-label">{s.label}</div>
            <div className="stat-sub">{s.sub}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
