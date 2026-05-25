const CLIENTS = [
  { name: 'Avani',       sub: 'MANUFACTURING' },
  { name: 'NorthArc',    sub: 'IT SERVICES' },
  { name: 'Sevenfold',   sub: 'LOGISTICS' },
  { name: 'Mehta & Co.', sub: 'HEALTHCARE' },
  { name: 'Crestlake',   sub: 'EDUCATION' },
  { name: 'Vertex Gov',  sub: 'PUBLIC SECTOR' },
  { name: 'Halcyon',     sub: 'HOSPITALITY' },
  { name: 'Bluering',    sub: 'FINANCE' },
  { name: 'Greenway',    sub: 'REAL ESTATE' },
  { name: 'Patel Group', sub: 'TEXTILES' },
  { name: 'Ironside',    sub: 'ENGINEERING' },
  { name: '+ 60 more',   sub: 'ACROSS INDIA' },
]

export default function Logos() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="eyebrow" style={{ marginBottom: 18, display: 'flex' }}>Our clients</span>
            <h2>Trusted across industry.</h2>
          </div>
          <p>
            Manufacturers, IT services firms, hospitals, schools and government offices send their
            end-of-life electronics through us. Your logo could be here — and the paperwork to match.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          border: '1px solid var(--rule)',
          borderRadius: 'var(--radius)',
          background: 'var(--surface)',
          overflow: 'hidden',
        }}
          className="logos-grid"
        >
          {CLIENTS.map((c, i) => (
            <div key={c.name} style={{
              height: 110,
              display: 'grid', placeItems: 'center',
              borderRight: (i + 1) % 6 !== 0 ? '1px solid var(--rule)' : undefined,
              borderBottom: i < 6 ? '1px solid var(--rule)' : undefined,
              fontFamily: 'var(--display)',
              fontSize: 18,
              letterSpacing: '-0.01em',
              color: 'var(--ink-2)',
              fontWeight: 500,
              textAlign: 'center',
              padding: '0 12px',
            }}>
              {c.name}
              <small style={{
                fontFamily: 'var(--mono)', display: 'block', fontSize: 9,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'var(--muted)', textAlign: 'center', marginTop: 4, fontWeight: 400,
              }}>
                {c.sub}
              </small>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 760px) {
          .logos-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .logos-grid > div { border-right: 1px solid var(--rule); border-bottom: 1px solid var(--rule); }
          .logos-grid > div:nth-child(3n) { border-right: none !important; }
        }
        @media (max-width: 480px) {
          .logos-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .logos-grid > div:nth-child(3n) { border-right: 1px solid var(--rule) !important; }
          .logos-grid > div:nth-child(2n) { border-right: none !important; }
        }
      `}</style>
    </section>
  )
}
