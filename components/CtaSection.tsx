export default function CtaSection() {
  return (
    <section className="section" style={{ borderTop: 'none', paddingTop: 0 }}>
      <div className="wrap">
        <div style={{
          background: 'var(--ink)',
          color: 'var(--paper)',
          borderRadius: 'var(--radius)',
          padding: '80px 60px',
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr',
          gap: 60,
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
          className="cta-block"
        >
          <h2 style={{
            fontFamily: 'var(--display)',
            fontSize: 'clamp(36px, 4.6vw, 64px)',
            lineHeight: 1,
            letterSpacing: '-0.035em',
            color: 'var(--paper)',
          }}>
            Got old electronics<br />
            lying around?{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--lime)', fontWeight: 400 }}>
              Don&apos;t throw them.
            </em>
          </h2>

          <div style={{ display: 'grid', gap: 18 }}>
            <p style={{ color: 'oklch(0.78 0.015 145)', maxWidth: '32ch', margin: 0 }}>
              Recycle them the right way. We&apos;ll pick up from your office or warehouse
              anywhere in India — and send you the certificates to prove it happened.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="/contact" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '14px 22px', borderRadius: 999,
                fontSize: 14, fontWeight: 500,
                background: 'var(--paper)', color: 'var(--ink)',
                border: '1px solid var(--paper)', transition: 'all 0.15s ease',
              }}>
                Schedule a pickup
                <svg style={{ width: 16, height: 16 }} viewBox="0 0 16 16" fill="none">
                  <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
                </svg>
              </a>
              <a href="tel:+917990548623" style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                padding: '14px 22px', borderRadius: 999,
                fontSize: 14, fontWeight: 500,
                background: 'transparent', color: 'var(--paper)',
                border: '1px solid oklch(0.40 0.02 150)',
                transition: 'all 0.15s ease',
              }}>
                +91 79905 48623
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .cta-block { padding: 56px 32px !important; grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 500px) {
          .cta-block { padding: 40px 24px !important; }
        }
      `}</style>
    </section>
  )
}
