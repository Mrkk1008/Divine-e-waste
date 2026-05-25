const SERVICES = [
  {
    num: '01 / Collection',
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M2 6h10l3 3v5H2z"/><circle cx="6" cy="15.5" r="1.6"/><circle cx="13" cy="15.5" r="1.6"/></svg>,
    title: 'Collection & Logistics',
    desc: 'Fast, transparent nationwide pickups with real-time tracking and chain-of-custody documentation.',
    link: 'Book pickup',
    href: '/contact',
    featured: false,
  },
  {
    num: '02 / EPR',
    icon: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M4 3h9l3 3v11H4z"/><path d="M7 9h6M7 12h6M7 15h3"/></svg>,
    title: 'Extended Producer Responsibility',
    desc: 'We help producers meet their e-waste and plastic waste compliance targets with auditable filings.',
    link: 'Talk to a specialist',
    href: '/contact',
    featured: false,
  },
  {
    num: '03 / Data',
    icon: <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="3" y="3" width="14" height="14" rx="1"/><path d="M6 7h8M6 10h8M6 13h5"/></svg>,
    title: 'Certified Data Destruction',
    desc: 'On-site and off-site wiping and shredding, with destruction certificates for every device handled.',
    link: 'Request certificate sample',
    href: '/contact',
    featured: true,
  },
  {
    num: '04 / Recycling',
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M5 8l3-5 3 5M10 17l3-5 3 5M3 17l3-5"/><path d="M2 17h16"/></svg>,
    title: 'Recycling & Certification',
    desc: 'Authorized processing partners, full material recovery, and recycling certificates issued to every client.',
    link: 'See our process',
    href: '/about',
    featured: false,
  },
  {
    num: '05 / CSR',
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M10 17s-6-3.5-6-8a3.5 3.5 0 0 1 6-2.4A3.5 3.5 0 0 1 16 9c0 4.5-6 8-6 8z"/></svg>,
    title: 'CSR Collaboration',
    desc: 'Donate company e-waste to vetted recycling programs. Contributions are tax-deductible and fully traceable.',
    link: 'Partner with us',
    href: '/contact',
    featured: false,
  },
]

const arrowSvg = (
  <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
    <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.6" />
  </svg>
)

export default function Services() {
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow" style={{ marginBottom: 18, display: 'flex' }}>What we do</span>
            <h2>End-to-end<br />e-waste services.</h2>
          </div>
          <p>
            From single-pallet pickups to enterprise-wide recycling programs, we handle the
            full chain — collection, secure destruction, sustainable processing, and the
            paperwork that proves it. Five services, one accountable partner.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          border: '1px solid var(--rule)',
          borderRadius: 'var(--radius)',
          overflow: 'hidden',
          background: 'var(--surface)',
        }}
          className="svc-grid"
        >
          {SERVICES.map((svc, i) => (
            <article key={svc.num} className={`svc-card${svc.featured ? ' svc-featured' : ''}`}
              style={{
                gridColumn: i >= 3 ? 'span 3' : 'span 2',
                padding: '36px 32px 32px',
                borderRight: '1px solid var(--rule)',
                borderBottom: i < 3 ? '1px solid var(--rule)' : undefined,
                position: 'relative',
                background: svc.featured ? 'var(--ink)' : undefined,
                color: svc.featured ? 'var(--paper)' : undefined,
                transition: 'background 0.2s ease',
              }}
            >
              <div style={{
                fontFamily: 'var(--mono)', fontSize: 11,
                letterSpacing: '0.16em',
                color: svc.featured ? 'oklch(0.65 0.02 145)' : 'var(--muted)',
              }}>
                {svc.num}
              </div>
              <div style={{
                width: 44, height: 44,
                border: `1px solid ${svc.featured ? 'var(--lime)' : 'var(--ink)'}`,
                borderRadius: '50%',
                display: 'grid', placeItems: 'center',
                margin: '18px 0 22px',
                color: svc.featured ? 'var(--lime)' : 'var(--ink)',
              }}>
                {svc.icon}
              </div>
              <h3 style={{ fontSize: 22, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: 10 }}>
                {svc.title}
              </h3>
              <p style={{ color: svc.featured ? 'oklch(0.82 0.015 145)' : 'var(--ink-2)', fontSize: 14.5, lineHeight: 1.55, margin: 0 }}>
                {svc.desc}
              </p>
              <a href={svc.href} style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                marginTop: 22,
                fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: svc.featured ? 'var(--paper)' : 'var(--ink)',
              }}>
                {svc.link} {arrowSvg}
              </a>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .svc-card:not(.svc-featured):hover { background: var(--paper); }
        .svc-card:last-child { border-right: none !important; }
        .svc-card:nth-child(3) { border-right: none !important; }
        @media (max-width: 880px) {
          .svc-grid { grid-template-columns: 1fr !important; }
          .svc-card { grid-column: span 1 !important; border-right: none !important; border-bottom: 1px solid var(--rule) !important; }
          .svc-card:last-child { border-bottom: none !important; }
        }
      `}</style>
    </section>
  )
}
