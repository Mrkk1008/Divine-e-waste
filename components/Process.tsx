const STEPS = [
  { num: '01', t: 'Request & quote',   d: 'Tell us what you\'ve got. Phone, WhatsApp, or web form — we respond within one working day.' },
  { num: '02', t: 'Pickup & weighing', d: 'We collect from your site, weigh in your presence, and issue an itemized handover note.' },
  { num: '03', t: 'Data destruction',  d: 'All storage media wiped or shredded. Certificates issued per asset tag.' },
  { num: '04', t: 'Recycle & certify', d: 'Authorized recyclers process materials. You receive recycling & EPR certificates.' },
]

export default function Process() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow" style={{ marginBottom: 18, display: 'flex' }}>How it works</span>
            <h2>Four steps from your loading bay to a recycler&apos;s furnace.</h2>
          </div>
          <p>
            A clean, repeatable process — small enough for a single laptop, scalable to a
            warehouse clearance. You sign off on weights at pickup and receive certificates
            when materials are processed.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          borderTop: '1px solid var(--rule)',
          borderBottom: '1px solid var(--rule)',
        }}
          className="process-grid"
        >
          {STEPS.map((s, i) => (
            <div key={s.num} style={{
              padding: '36px 32px',
              borderRight: i < STEPS.length - 1 ? '1px solid var(--rule)' : undefined,
            }}>
              <div style={{
                fontFamily: 'var(--display)',
                fontSize: 60,
                lineHeight: 1,
                letterSpacing: '-0.04em',
                color: 'var(--rule-2)',
                fontWeight: 400,
              }}>
                {s.num}
              </div>
              <div style={{ fontFamily: 'var(--display)', fontSize: 20, margin: '24px 0 10px', letterSpacing: '-0.02em', fontWeight: 500 }}>
                {s.t}
              </div>
              <div style={{ fontSize: 14.5, color: 'var(--ink-2)', lineHeight: 1.55 }}>
                {s.d}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 880px) {
          .process-grid { grid-template-columns: 1fr 1fr !important; }
          .process-grid > div:nth-child(2) { border-right: none !important; }
          .process-grid > div:nth-child(-n+2) { border-bottom: 1px solid var(--rule); }
        }
        @media (max-width: 560px) {
          .process-grid { grid-template-columns: 1fr !important; }
          .process-grid > div { border-right: none !important; border-bottom: 1px solid var(--rule) !important; }
          .process-grid > div:last-child { border-bottom: none !important; }
        }
      `}</style>
    </section>
  )
}
