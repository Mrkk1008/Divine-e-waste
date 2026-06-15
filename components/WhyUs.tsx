function IconShield({ s = 26 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}
function IconChip({ s = 26 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9.5 9.5h5v5h-5z" />
      <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
    </svg>
  )
}
function IconLeaf({ s = 26 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 19c0-8 6-13 14-13 0 8-6 13-14 13z" />
      <path d="M9 15c2-3 5-5 8-6" />
    </svg>
  )
}
function IconTruck({ s = 26 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 6.5h10v9h-10z" /><path d="M12.5 9.5h4l3 3v3h-7z" />
      <circle cx="6.5" cy="17.5" r="2" /><circle cx="16.5" cy="17.5" r="2" />
    </svg>
  )
}

const PILLARS = [
  { Icon: IconShield, t: 'Authorized collection partner',     p: 'We work only within the authorized recycling chain — fully compliant, end to end.', c: 'leaf' },
  { Icon: IconChip,   t: 'Secure data destruction',          p: 'Certified wiping and shredding so sensitive data is gone for good.',                  c: 'deep' },
  { Icon: IconLeaf,   t: 'Ethical & transparent operations', p: 'Documented, traceable handling at every stage — no grey-market shortcuts.',          c: 'sage' },
  { Icon: IconTruck,  t: 'Fast pan-India logistics',         p: 'A responsive collection network that reaches you wherever you are.',                  c: 'gold' },
]

export default function WhyUs() {
  return (
    <section className="why section-pad" id="why">
      <div className="wrap">
        <div className="why-head reveal">
          <span className="eyebrow">Why choose us</span>
          <h2>Trusted with the things<br />you can&apos;t just throw away.</h2>
        </div>
        <div className="why-grid">
          {PILLARS.map((f, i) => (
            <div key={f.t} className={`fact reveal c-${f.c}`} data-d={(i % 4) + 1}>
              <div className="fact-ic"><f.Icon s={26} /></div>
              <div className="fact-t big">{f.t}</div>
              <p>{f.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
