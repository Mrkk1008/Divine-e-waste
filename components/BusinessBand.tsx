function IconBuilding({ s = 18 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="3" width="14" height="18" rx="1.5" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
    </svg>
  )
}
function IconCheck({ s = 15 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 12.5l5 5 10-11" />
    </svg>
  )
}
function IconShield({ s = 15 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}
function IconArrow({ s = 18 }: { s?: number }) {
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  )
}

const B2B = [
  'EPR compliance support for producers',
  'Certified on-site / off-site data destruction',
  'Tax-deductible CSR e-waste donations',
  'Recycling certificates for every consignment',
]

export default function BusinessBand() {
  return (
    <section className="biz section-pad" id="business">
      <div className="wrap biz-grid">
        <div className="biz-copy reveal">
          <span className="eyebrow">For business</span>
          <h2>Compliance, CSR and clean conscience — sorted.</h2>
          <p>
            Whether you&apos;re a producer meeting EPR targets or an office clearing old hardware,
            we handle collection, certified data destruction, and the documentation your auditors ask for.
          </p>
          <ul className="biz-list">
            {B2B.map(b => (
              <li key={b}>
                <span className="bl-ic"><IconCheck s={15} /></span>
                {b}
              </li>
            ))}
          </ul>
          <div className="hero-actions">
            <a href="/contact" className="btn btn-dark btn-lg">
              <IconBuilding s={18} /> Request a quote
            </a>
            <a href="/contact" className="btn btn-ghost btn-lg">
              Book a pickup <IconArrow s={18} />
            </a>
          </div>
        </div>

        <div className="biz-card reveal" data-d="1">
          <div className="bc-head">
            <span className="bc-tag"><IconShield s={15} /> Compliance-ready</span>
          </div>
          <div className="bc-rows">
            <div className="bc-row"><span>Consignment collected</span><b>1,240 kg</b></div>
            <div className="bc-row"><span>Devices data-wiped</span><b>312</b></div>
            <div className="bc-row"><span>Channelized to authorized recyclers</span><b>100%</b></div>
            <div className="bc-row"><span>Sent to landfill</span><b className="zero">0</b></div>
          </div>
          <div className="bc-foot">
            <span className="bc-dot" />
            Recycling certificate issued · #DES-2291
          </div>
        </div>
      </div>
    </section>
  )
}
