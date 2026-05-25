const ITEMS = [
  {
    n: '01',
    title: 'Authorized & certified',
    desc: 'Every recycler in our network is CPCB‑authorized. Every consignment generates a recycling certificate. No shortcuts.',
    icon: (
      <svg className="icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="24" cy="24" r="20" />
        <path d="M14 24 L22 32 L34 18" />
      </svg>
    ),
  },
  {
    n: '02',
    title: 'Secure data destruction',
    desc: 'On‑site or at our facility — drives are wiped to NIST standards or physically shredded. Certificates issued per serial number.',
    icon: (
      <svg className="icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="10" y="14" width="28" height="22" rx="2" />
        <path d="M17 14 V10 a3 3 0 0 1 3 -3 h8 a3 3 0 0 1 3 3 V14" />
        <path d="M24 22 V30 M20 26 L24 30 L28 26" />
      </svg>
    ),
  },
  {
    n: '03',
    title: 'Ethical, transparent',
    desc: 'Live pickup tracking, weight verification, chain‑of‑custody paperwork, and a final impact report. You always know where it went.',
    icon: (
      <svg className="icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="24" cy="24" r="18" />
        <path d="M8 24 h32 M24 6 a22 22 0 0 1 0 36 a22 22 0 0 1 0 -36" />
      </svg>
    ),
  },
  {
    n: '04',
    title: 'Fast pan‑India logistics',
    desc: 'Active coverage across 28 states. Most metros picked up in 48 hrs; bulk consignments scheduled within the same week.',
    icon: (
      <svg className="icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M8 30 L8 18 L20 6 L28 6 L40 18 L40 30 L28 42 L20 42 Z" />
        <circle cx="24" cy="24" r="4" />
      </svg>
    ),
  },
]

export default function Promise() {
  return (
    <section className="promise">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="eyebrow">Our promise · 05</div>
            <h2 className="section-title">
              Four commitments. <em>Every</em> pickup.
            </h2>
          </div>
        </div>
        <div className="promise-grid">
          {ITEMS.map((item, i) => (
            <div className={`promise-item reveal${i % 2 === 1 ? ' d1' : ''}`} key={item.n}>
              <div className="n">{item.n}</div>
              {item.icon}
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
