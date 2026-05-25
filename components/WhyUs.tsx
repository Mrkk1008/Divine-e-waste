const REASONS = [
  { n: '01', t: 'Authorized collection partner', d: 'Government-recognized partner working with authorized recyclers.' },
  { n: '02', t: 'Secure data destruction',        d: 'Certified wiping or physical shredding for every storage device.' },
  { n: '03', t: 'Ethical & transparent operations', d: 'Photo evidence, weights, and certificates for every consignment.' },
  { n: '04', t: 'Fast pan-India logistics',        d: '48-hour average dispatch with route tracking and signed handovers.' },
]

const CERTS = [
  { seal: 'EPR',  name: 'EPR Compliance',       sub: 'E-WASTE · PLASTIC' },
  { seal: 'CPCB', name: 'Authorized Partner',    sub: 'CENTRAL POLLUTION CONTROL' },
  { seal: 'ISO',  name: 'Data Destruction Protocol', sub: 'NIST 800-88 ALIGNED' },
]

export default function WhyUs() {
  return (
    <section className="section" style={{ background: 'var(--paper-2)' }}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow" style={{ marginBottom: 18, display: 'flex' }}>Why choose us</span>
            <h2>Trusted by enterprises who care about the chain of custody.</h2>
          </div>
          <p>
            Anyone can haul old hardware away. Few can prove what happened to every drive,
            every device, and every kilogram of material after the truck left your loading bay.
            We can — and the paperwork is in the box.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 56 }} className="why-grid">
          {/* WHY LIST */}
          <div>
            {REASONS.map((r, i) => (
              <div key={r.n} style={{
                display: 'grid',
                gridTemplateColumns: '40px 1fr auto',
                gap: 20,
                padding: '22px 0',
                borderTop: '1px solid var(--rule)',
                borderBottom: i === REASONS.length - 1 ? '1px solid var(--rule)' : undefined,
                alignItems: 'center',
              }}
                className="why-row"
              >
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--muted)', paddingTop: 4 }}>{r.n}</div>
                <div style={{ fontFamily: 'var(--display)', fontSize: 22, letterSpacing: '-0.02em', fontWeight: 500 }}>{r.t}</div>
                <div style={{ fontSize: 14, color: 'var(--ink-2)', maxWidth: '38ch', textAlign: 'right' }} className="why-d">{r.d}</div>
              </div>
            ))}
          </div>

          {/* COMPLIANCE CARD */}
          <aside style={{
            border: '1px solid var(--rule)',
            borderRadius: 'var(--radius)',
            background: 'var(--surface)',
            padding: 36,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: 460,
          }}>
            <div>
              <span className="eyebrow">Compliance &amp; trust</span>
              <h3 style={{ fontSize: 26, margin: '18px 0 28px', letterSpacing: '-0.02em' }}>
                Documentation that holds up to audit.
              </h3>
            </div>
            <div style={{ display: 'grid', gap: 14 }}>
              {CERTS.map(c => (
                <div key={c.seal} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '18px 22px',
                  border: '1px solid var(--rule)',
                  background: 'var(--paper)',
                  borderRadius: 'var(--radius)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <span style={{
                      width: 32, height: 32, borderRadius: '50%',
                      border: '1px solid var(--ink)',
                      display: 'grid', placeItems: 'center',
                      fontFamily: 'var(--mono)', fontSize: 10, fontWeight: 500,
                    }}>
                      {c.seal}
                    </span>
                    <span>
                      <span style={{ fontFamily: 'var(--display)', fontSize: 15, fontWeight: 500, display: 'block' }}>{c.name}</span>
                      <small style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.14em', color: 'var(--muted)', fontWeight: 400, textTransform: 'uppercase', marginTop: 2, display: 'block' }}>{c.sub}</small>
                    </span>
                  </div>
                  <span style={{
                    fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.16em',
                    color: 'var(--forest)', textTransform: 'uppercase',
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                  }}>
                    <span style={{ width: 6, height: 6, background: 'var(--lime)', borderRadius: '50%', display: 'inline-block' }} />
                    Active
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .why-grid { grid-template-columns: 1fr !important; }
          .why-row { grid-template-columns: 40px 1fr !important; }
          .why-d { grid-column: 2; text-align: left !important; max-width: 100% !important; margin-top: 6px; }
        }
      `}</style>
    </section>
  )
}
