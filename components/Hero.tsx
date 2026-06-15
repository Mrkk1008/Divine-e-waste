'use client'

import { useEffect, useRef } from 'react'

/* SVG icons */
function IconTruck({ s = 26 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 6.5h10v9h-10z" /><path d="M12.5 9.5h4l3 3v3h-7z" />
      <circle cx="6.5" cy="17.5" r="2" /><circle cx="16.5" cy="17.5" r="2" />
    </svg>
  )
}
function IconCheck({ s = 15 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 12.5l5 5 10-11" />
    </svg>
  )
}
function IconRecycle({ s = 20 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.5 4.5l2.2 3.8-3.8.2" /><path d="M12 3.5l3 5.2-2.4 1.4" />
      <path d="M19.5 13l-2.5 4.3-3-1.7" /><path d="M14.5 20.5h-5l1.4-2.4" />
      <path d="M4.5 13l2.5 4.3 2.6-1.6" /><path d="M7 8.5L4.5 13l2.7.2" />
    </svg>
  )
}
function IconLeaf({ s = 22 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 19c0-8 6-13 14-13 0 8-6 13-14 13z" />
      <path d="M9 15c2-3 5-5 8-6" />
    </svg>
  )
}
function DevLaptop({ s = 30 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="5" width="16" height="11" rx="1.5" />
      <path d="M2.5 19h19l-1-3H3.5z" />
    </svg>
  )
}
function DevPhone({ s = 26 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M10.5 18.5h3" />
    </svg>
  )
}
function DevTv({ s = 30 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="4.5" width="19" height="12" rx="2" />
      <path d="M8.5 20h7M12 16.5V20" />
    </svg>
  )
}
function IconHome({ s = 22 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 11l8-7 8 7" /><path d="M6 9.5V20h12V9.5" /><path d="M10 20v-5h4v5" />
    </svg>
  )
}
function IconBolt({ s = 22 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 2L5 13h6l-1 9 8-12h-6z" />
    </svg>
  )
}
function IconArrow({ s = 18 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  )
}

function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hv-blob" />
      <div className="hv-panel">
        <div className="hv-truck"><IconTruck s={26} /></div>
        <div className="hv-devices">
          <div className="hv-dev d1"><DevLaptop s={28} /></div>
          <div className="hv-dev d2"><DevPhone s={24} /></div>
          <div className="hv-dev d3"><DevTv s={28} /></div>
        </div>
        <div className="hv-chip hv-chip-1">
          <span className="dot" /> Pickup booked · Tue 9am
        </div>
        <div className="hv-chip hv-chip-2">
          <IconCheck s={14} /> 100% recovered
        </div>
        <div className="hv-loop"><IconRecycle s={20} /></div>
        <div className="hv-sprout"><IconLeaf s={20} /></div>
        <div className="hv-foot">
          <div className="hv-foot-bar"><i style={{ width: '82%' }} /></div>
          <span>Diverted from landfill this week</span>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          el.querySelectorAll<HTMLElement>('.reveal').forEach(r => r.classList.add('in'))
        }
      }),
      { threshold: 0.1 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <section className="hero" ref={heroRef}>
      <div className="wrap hero-grid">
        {/* LEFT COPY */}
        <div className="hero-copy reveal in">
          <span className="tag-pill">
            <span className="dot" /> Pan-India collection · authorized recyclers
          </span>
          <h1 style={{ marginTop: 22 }}>
            Give your old tech<br /><em>a second life.</em>
          </h1>
          <p className="hero-tag">
            Divine E-Waste Solution collects your retired laptops, phones, CPUs and TVs —
            and channels every device to authorized recyclers. Securely wiped, fully traceable, nothing to landfill.
          </p>
          <div className="hero-actions">
            <a href="/contact" className="btn btn-primary btn-lg">
              <IconTruck s={19} /> Book a Pickup
            </a>
            <a href="#business" className="btn btn-ghost btn-lg">
              For Business <IconArrow s={18} />
            </a>
          </div>
          <div className="hero-trust">
            <div className="ht-avatars">
              <span /><span /><span /><span />
            </div>
            <p>
              <strong>Households &amp; businesses</strong> across India recycle with Divine
            </p>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="reveal in" data-d="1">
          <HeroVisual />
        </div>
      </div>
    </section>
  )
}
