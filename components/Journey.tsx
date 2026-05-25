const STEPS = [
  {
    num: '01',
    title: 'Book',
    desc: 'You schedule a pickup online or over the phone. We confirm the window, vehicle, and quantity — with transparent pricing.',
  },
  {
    num: '02',
    title: 'Collect',
    desc: 'Our trained logistics team arrives on schedule, weighs & documents the consignment, and seals it for transit.',
  },
  {
    num: '03',
    title: 'Destroy data',
    desc: 'Every storage device is wiped or physically shredded — on‑site or at our facility — with certified destruction reports.',
  },
  {
    num: '04',
    title: 'Sort & process',
    desc: 'Materials are separated by type — metals, plastics, circuit boards, glass — and routed to authorized specialist recyclers.',
  },
  {
    num: '05',
    title: 'Certify',
    desc: 'You receive a recycling certificate, data destruction certificate, weight manifest, and an environmental impact report.',
  },
]

export default function Journey() {
  return (
    <section className="journey" id="journey">
      <div className="wrap" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="sec-head reveal">
          <div>
            <div className="eyebrow">The journey · 03</div>
            <h2 className="section-title">
              From your <em>doorstep</em> to new raw material.
            </h2>
          </div>
          <div className="note" style={{ color: 'color-mix(in oklab, var(--paper) 60%, transparent)' }}>
            Every kilogram is weighed, documented, and traceable from pickup to processed material.
            Here's the path.
          </div>
        </div>
        <div className="flow">
          {STEPS.map(step => (
            <div className="flow-step" key={step.num}>
              <div className="fn display">{step.num}</div>
              <div>
                <div className="ft">{step.title}</div>
                <div className="fd">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
