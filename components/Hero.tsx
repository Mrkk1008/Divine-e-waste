export default function Hero() {
  return (
    <section style={{ padding: '56px 0 0', position: 'relative', overflow: 'hidden' }}>
      <div className="wrap">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.05fr 1fr',
          gap: 56,
          alignItems: 'end',
          paddingBottom: 80,
          borderBottom: '1px solid var(--rule)',
        }}
          className="hero-grid"
        >
          {/* LEFT */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 40 }}>
              <span className="tag">
                <span className="dot" style={{ background: 'var(--lime)' }} />
                Authorized E-Waste Recycler
              </span>
              <span className="eyebrow">EST. SURAT, INDIA</span>
            </div>

            <h1 style={{
              fontFamily: 'var(--display)',
              fontSize: 'clamp(56px, 8vw, 124px)',
              lineHeight: 0.94,
              letterSpacing: '-0.045em',
              fontWeight: 500,
            }}>
              Responsible<br />
              recycling for a<br />
              <span style={{ position: 'relative', display: 'inline-block' }}>
                cleaner
                <span aria-hidden="true" style={{
                  position: 'absolute', left: 0, right: 0, bottom: '0.08em',
                  height: '0.16em', background: 'var(--lime)',
                  zIndex: -1, transform: 'skewX(-6deg)', display: 'block',
                }} />
              </span>{' '}
              <em style={{ fontStyle: 'italic', fontWeight: 400, color: 'var(--forest)' }}>tomorrow.</em>
            </h1>

            <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--ink-2)', maxWidth: '46ch', margin: '36px 0 0' }}>
              Divine E-Waste Solution channels electronic and plastic waste from
              businesses and households into certified, sustainable recycling —
              with secure data destruction, EPR compliance and pan-India logistics.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 36 }}>
              <a href="/contact" className="btn btn-primary">
                Schedule a pickup
                <svg style={{ width: 16, height: 16 }} viewBox="0 0 16 16" fill="none">
                  <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </a>
              <a href="/about" className="btn btn-ghost">How we work</a>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 24,
              padding: '28px 32px',
              border: '1px solid var(--rule)',
              borderRadius: 'var(--radius)',
              background: 'var(--surface)',
            }}>
              {[
                { label: 'Operating since', value: 'Surat, GIDC' },
                { label: 'Service area',    value: 'Pan-India' },
                { label: 'Compliance',      value: 'EPR · CPCB' },
                { label: 'Data handling',   value: 'Certified wipe' },
              ].map(item => (
                <div key={item.label}>
                  <small style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 6 }}>
                    {item.label}
                  </small>
                  <strong style={{ display: 'block', fontFamily: 'var(--display)', fontSize: 22, letterSpacing: '-0.02em', fontWeight: 500 }}>
                    {item.value}
                  </strong>
                </div>
              ))}
            </div>

            <div style={{ position: 'relative', height: 340, borderRadius: 'var(--radius)', overflow: 'hidden', marginTop: 28 }}>
              <div className="placeholder" style={{ position: 'absolute', inset: 0 }}>
                [ FACILITY / TEAM PHOTOGRAPH ]
              </div>
              <div style={{
                position: 'absolute', left: 16, bottom: 14,
                fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em',
                textTransform: 'uppercase', color: 'var(--ink-2)',
                background: 'color-mix(in oklab, var(--paper) 90%, transparent)',
                padding: '6px 10px', border: '1px solid var(--rule)',
              }}>
                Katargam GIDC · Sorting floor
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 36px !important; padding-bottom: 56px !important; }
        }
      `}</style>
    </section>
  )
}
