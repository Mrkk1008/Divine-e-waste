function IconTruck({ s = 19 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 6.5h10v9h-10z" /><path d="M12.5 9.5h4l3 3v3h-7z" />
      <circle cx="6.5" cy="17.5" r="2" /><circle cx="16.5" cy="17.5" r="2" />
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
function IconLeaf({ s = 18 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 19c0-8 6-13 14-13 0 8-6 13-14 13z" />
      <path d="M9 15c2-3 5-5 8-6" />
    </svg>
  )
}

function MatMetal({ s = 18 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
    </svg>
  )
}
function MatPlastic({ s = 18 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6l-1 3 2 2v11a2 2 0 01-2 2h-4a2 2 0 01-2-2V8l2-2z" />
      <path d="M8 12h8" />
    </svg>
  )
}
function MatGlass({ s = 18 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 3h10l-1.5 7a3.5 3.5 0 01-7 0z" />
      <path d="M12 17v3M9 20.5h6" />
    </svg>
  )
}

export default function CtaSection() {
  return (
    <section className="finalcta">
      <div className="wrap">
        <div className="fc-panel reveal">
          <div className="fc-glow" />
          <span className="eyebrow light">Close the loop</span>
          <h2>That old laptop isn&apos;t junk.<br />It&apos;s tomorrow&apos;s raw material.</h2>
          <p>
            Book a pickup today and let Divine channel your e-waste to authorized recyclers —
            securely and transparently.
          </p>
          <div className="hero-actions center" style={{ marginTop: 32 }}>
            <a href="/contact" className="btn btn-primary btn-lg">
              <IconTruck s={19} /> Book a Pickup
            </a>
            <a href="/contact" className="btn btn-light btn-lg">
              Contact us <IconArrow s={18} />
            </a>
          </div>
          <div className="fc-mats">
            <span><MatMetal s={18} /> Metal</span>
            <span><MatPlastic s={18} /> Plastic</span>
            <span><MatGlass s={18} /> Glass</span>
            <span><IconLeaf s={18} /> Renewed</span>
          </div>
        </div>
      </div>
    </section>
  )
}
