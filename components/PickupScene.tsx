'use client'

import { useRef, useEffect, useState } from 'react'

/* ---- tiny helpers ---- */
const lerp = (a: number, b: number, t: number) => a + (b - a) * t
const clamp01 = (t: number) => Math.max(0, Math.min(1, t))
const easeIO = (t: number) => t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2
const seg = (t: number, a: number, b: number) => clamp01((t - a) / (b - a))

/* ---- device icons ---- */
function DevPhone({ s = 22 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M10.5 18.5h3" />
    </svg>
  )
}
function DevLaptop({ s = 22 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="5" width="16" height="11" rx="1.5" /><path d="M2.5 19h19l-1-3H3.5z" />
    </svg>
  )
}
function DevCpu({ s = 22 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="2.5" width="12" height="19" rx="2" /><path d="M9 6h6M9 9h6" /><circle cx="12" cy="16.5" r="1.6" />
    </svg>
  )
}
function DevTv({ s = 22 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="4.5" width="19" height="12" rx="2" /><path d="M8.5 20h7M12 16.5V20" />
    </svg>
  )
}
function IconLeaf({ s = 12 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 19c0-8 6-13 14-13 0 8-6 13-14 13z" />
    </svg>
  )
}
function IconCheck({ s = 13 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 12.5l5 5 10-11" />
    </svg>
  )
}

const DEVS = [DevPhone, DevLaptop, DevCpu, DevTv] as const
const PARK = 28, CARGO = 39, HOME = 65, GROUND = 70
const HANDS = [0.30, 0.44, 0.58, 0.72] as const

interface DevState {
  Icon: (typeof DEVS)[number]
  x: number
  y: number
  sc: number
  op: number
  rot: number
}

function useReducedMotion() {
  const [r, setR] = useState(false)
  useEffect(() => {
    const m = window.matchMedia('(prefers-reduced-motion: reduce)')
    setR(m.matches)
    const h = () => setR(m.matches)
    m.addEventListener('change', h)
    return () => m.removeEventListener('change', h)
  }, [])
  return r
}

function useMobileScene() {
  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    const m = window.matchMedia('(max-width: 767px)')
    setMobile(m.matches)
    const h = () => setMobile(m.matches)
    m.addEventListener('change', h)
    return () => m.removeEventListener('change', h)
  }, [])
  return mobile
}

export default function PickupScene() {
  const reduced = useReducedMotion()
  const mobile = useMobileScene()
  const staticScene = reduced || mobile
  const sectionRef = useRef<HTMLElement>(null)
  const [sp, setSp] = useState(0)

  const p = staticScene ? 0.92 : sp

  useEffect(() => {
    if (staticScene) return
    let raf = 0
    const calc = () => {
      raf = 0
      const el = sectionRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const total = rect.height - window.innerHeight
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(total, 1))
      setSp(total > 0 ? scrolled / total : 0)
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(calc) }
    calc()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [staticScene])

  /* truck position */
  const tx = p < 0.12 ? lerp(128, PARK, easeIO(seg(p, 0, 0.12))) : PARK
  const moving = p < 0.12
  const door = seg(p, 0.15, 0.23)

  /* devices */
  let loaded = 0
  const devs: DevState[] = HANDS.map((hs, i) => {
    const he = hs + 0.12
    let x = HOME, y = 28, sc = 1, op = 1, rot = 0
    if (p < hs) {
      op = door > 0.5 ? 1 : 0
    } else if (p < he) {
      const u = easeIO(seg(p, hs, he))
      x = lerp(HOME, CARGO, u)
      y = 28 + Math.sin(u * Math.PI) * 78
      sc = lerp(1, 0.55, u)
      rot = lerp(0, -18, u)
      op = u > 0.85 ? lerp(1, 0, (u - 0.85) / 0.15) : 1
    } else {
      op = 0; loaded++
    }
    return { Icon: DEVS[i], x, y, sc, op, rot }
  })

  const done = loaded >= HANDS.length

  return (
    <section
      className="pickup"
      id="pickup"
      ref={sectionRef}
      style={staticScene ? undefined : { height: '300vh' }}
    >
      <div className={`pickup-inner${staticScene ? ' static' : ''}`}>
        <div className="wrap pickup-head reveal">
          <span className="eyebrow">We come to you</span>
          <h2>We pull up —<br />your old tech rolls out.</h2>
          <p>
            Our truck arrives at your door and loads up the phones, laptops, CPUs and TVs you&apos;ve
            set aside. You don&apos;t lift a thing.
          </p>
        </div>

        <div className="scene-frame reveal" data-d="1">
          <div className="scene">
            {/* sky */}
            <div className="sb-cloud c1" />
            <div className="sb-cloud c2" />
            <div className="sb-sun" />

            {/* counter */}
            <div className="scene-counter">
              {done
                ? <><span className="sc-check"><IconCheck s={13} /></span> All loaded — thank you!</>
                : <><span className="sc-dot" /> {loaded} of {HANDS.length} collected</>
              }
            </div>

            {/* house */}
            <div className="sb-house">
              <div className="sb-roof" />
              <div className="sb-chimney" />
              <div className="sb-body">
                <div className="sb-win" style={{ right: 22 }} />
                <div className="sb-door-frame" />
                <div
                  className="sb-door"
                  style={{ transform: `perspective(340px) rotateY(${-door * 105}deg)` }}
                />
              </div>
            </div>

            {/* truck */}
            <div className="sb-truck" style={{ left: `${tx}%` }}>
              <div className={`sb-puff${moving ? ' on' : ''}`} />
              <div className="sb-cargo">
                <span className="sb-decal">
                  <IconLeaf s={12} /> DIVINE
                </span>
                <span className="sb-cargo-open" />
              </div>
              <div className="sb-cab">
                <span className="sb-window" />
              </div>
              <div className="sb-wheel w1">
                <span className={`wheel-spin${moving ? ' roll' : ''}`} />
              </div>
              <div className="sb-wheel w2">
                <span className={`wheel-spin${moving ? ' roll' : ''}`} />
              </div>
              <div className="sb-shadow" />
            </div>

            {/* arcing devices */}
            {devs.map((d, i) => (
              <div
                key={i}
                className="sb-dev"
                style={{
                  left: `${d.x}%`,
                  bottom: `${GROUND + d.y}px`,
                  opacity: d.op,
                  transform: `translateX(-50%) scale(${d.sc}) rotate(${d.rot}deg)`,
                }}
              >
                <d.Icon s={22} />
              </div>
            ))}

            <div className="scene-ground">
              <div className="road-dash" />
            </div>
          </div>
        </div>

        {!staticScene && (
          <div className="scene-progress reveal" data-d="2">
            <div className="sp-track">
              <div className="sp-fill" style={{ width: `${p * 100}%` }} />
            </div>
            <span>{done ? 'All loaded — off to the recycler!' : 'Scroll to load the truck'}</span>
          </div>
        )}
      </div>
    </section>
  )
}
