const STATS = [
  { n: '28', sup: '+',   lbl: 'Indian states served' },
  { n: '1,200', sup: 'T', lbl: 'E-waste processed' },
  { n: '100', sup: '%',  lbl: 'Certified data destruction' },
  { n: '48', sup: 'hr',  lbl: 'Avg. pickup turnaround' },
]

export default function StatBar() {
  return (
    <section>
      <div className="wrap" style={{ paddingLeft: 0, paddingRight: 0 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          borderBottom: '1px solid var(--rule)',
          margin: '0 var(--gutter)',
        }}
          className="stat-bar-grid"
        >
          {STATS.map((s, i) => (
            <div key={i} style={{
              padding: '36px 24px',
              borderRight: i < STATS.length - 1 ? '1px solid var(--rule)' : undefined,
            }}>
              <div style={{
                fontFamily: 'var(--display)',
                fontSize: 44,
                lineHeight: 1,
                letterSpacing: '-0.03em',
                fontWeight: 500,
              }}>
                {s.n}
                <sup style={{ fontSize: '0.5em', color: 'var(--forest)', marginLeft: 4, verticalAlign: 'top', position: 'relative', top: '0.15em' }}>
                  {s.sup}
                </sup>
              </div>
              <div style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                marginTop: 10,
              }}>
                {s.lbl}
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 760px) {
          .stat-bar-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .stat-bar-grid > div:nth-child(2) { border-right: none !important; }
          .stat-bar-grid > div:nth-child(-n+2) { border-bottom: 1px solid var(--rule); }
        }
        @media (max-width: 400px) {
          .stat-bar-grid { grid-template-columns: 1fr !important; }
          .stat-bar-grid > div { border-right: none !important; border-bottom: 1px solid var(--rule); }
        }
      `}</style>
    </section>
  )
}
