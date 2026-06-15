function IconRoute({ s = 26 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="18" r="2.5" />
      <path d="M8.5 6H15a3.5 3.5 0 010 7H9a3.5 3.5 0 000 7h6.5" />
    </svg>
  )
}
function IconBuilding({ s = 26 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
    </svg>
  )
}
function IconShield({ s = 26 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}
function IconHeart({ s = 26 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20s-7-4.5-9.2-9C1.4 8.3 2.6 5 6 5c2 0 3.2 1.4 4 2.6C10.8 6.4 12 5 14 5c3.4 0 4.6 3.3 3.2 6-2.2 4.5-9.2 9-9.2 9z" />
    </svg>
  )
}
function IconDoc({ s = 26 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2.5h8l4 4v15H6z" /><path d="M14 2.5V7h4" />
      <path d="M9 12h6M9 15.5h6M9 18.5h3" />
    </svg>
  )
}
function IconArrow({ s = 16 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  )
}

const SERVICES = [
  { Icon: IconRoute,   t: 'Collection & Logistics',     p: 'Fast, transparent pickups across India — scheduled, collected and tracked from your door to the recycler.', c: 'leaf' },
  { Icon: IconBuilding,t: 'EPR Compliance',             p: 'Extended Producer Responsibility support, helping producers meet e-waste and plastic-waste compliance obligations.', c: 'deep' },
  { Icon: IconShield,  t: 'Data Destruction',           p: 'On-site and off-site certified data wiping and physical shredding — your information never leaves with the device.', c: 'gold' },
  { Icon: IconHeart,   t: 'CSR Collaboration',          p: 'Companies can donate their e-waste through us; contributions are tax-deductible and reported transparently.', c: 'sage' },
  { Icon: IconDoc,     t: 'Recycling & Certification',  p: 'Authorized processing with recycling certificates issued to every client for their records and audits.', c: 'leaf' },
]

export default function Services() {
  return (
    <section className="services section-pad" id="services">
      <div className="wrap">
        <div className="why-head reveal">
          <span className="eyebrow">What we do</span>
          <h2>End-to-end e-waste handling,<br />done responsibly.</h2>
          <p className="sec-lead">
            From collection to certification, Divine E-Waste Solution channels electronic and plastic waste
            to authorized recyclers — securely and transparently.
          </p>
        </div>

        <div className="svc-grid">
          {SERVICES.map((s, i) => (
            <div key={s.t} className={`svc reveal c-${s.c}`} data-d={(i % 3) + 1}>
              <div className="svc-ic"><s.Icon s={26} /></div>
              <h4>{s.t}</h4>
              <p>{s.p}</p>
            </div>
          ))}
          <div className="svc svc-cta reveal" data-d="2">
            <h4>Not sure what applies to you?</h4>
            <p>Tell us what you have and we&apos;ll handle the rest.</p>
            <a href="/contact" className="btn btn-light">
              Talk to us <IconArrow s={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
