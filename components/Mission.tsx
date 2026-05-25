export default function Mission() {
  return (
    <section className="mission" id="mission">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="eyebrow">Mission · 01</div>
            <h2 className="section-title">
              Responsible recycling for a <em>cleaner</em> tomorrow.
            </h2>
          </div>
        </div>
        <div className="mission-grid">
          <div className="mission-quote reveal">
            We exist for one reason —{' '}
            <em>to keep electronics out of landfill,</em>
            {' '}and to put their materials back to work.
          </div>
          <div className="mission-body reveal d1">
            <p>
              India generates over 3.2 million tonnes of e‑waste every year. Less than 20% is
              formally recycled. The rest is burned, dumped, or picked apart unsafely — leaching
              lead, mercury, and cadmium into groundwater and lungs.
            </p>
            <p>
              Divine E‑Waste Solution works to shift that curve. We partner with producers,
              enterprises, municipalities, and CSR programs to collect end‑of‑life electronics and
              plastic, destroy data securely, and channel every kilogram to government‑authorized
              recyclers.
            </p>
            <div className="mission-stats">
              <div className="s">
                <div className="k display">
                  100<em>%</em>
                </div>
                <div className="l">Channeled through authorized recyclers</div>
              </div>
              <div className="s">
                <div className="k display">28</div>
                <div className="l">States with active pickup coverage</div>
              </div>
              <div className="s">
                <div className="k display">0</div>
                <div className="l">Kilograms to landfill. Ever.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
