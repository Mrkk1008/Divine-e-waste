import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — Divine E-Waste Solution',
}

const PILLARS = [
  { n: '01', h: 'Responsibility', p: 'Every kilogram that enters our facility leaves through an authorized recycler. No grey channels. No informal handoffs.' },
  { n: '02', h: 'Transparency',   p: 'Weights, photos, asset tags and certificates for every consignment. Your auditors will not have questions we cannot answer.' },
  { n: '03', h: 'Sustainability', p: 'Material recovery first; landfill never. We measure our work in tonnes diverted, not invoices issued.' },
]

const TIMELINE = [
  { year: '2018', tag: 'Founded',    t: 'Started in Surat',                      d: 'Two people, one van, one principle: documented chain of custody from doorstep to recycler.' },
  { year: '2020', tag: 'Authorized', t: 'Became an authorized collection partner', d: 'Onboarded as a recognized partner working with CPCB-authorized recyclers across Gujarat.' },
  { year: '2022', tag: 'EPR launch', t: 'EPR services for producers',              d: 'Began helping electronics and plastic producers meet their Extended Producer Responsibility targets.' },
  { year: '2024', tag: 'Pan-India',  t: 'Nationwide pickups',                      d: 'Logistics network extended to 28+ states. CSR and data-destruction divisions established.' },
  { year: 'Today', tag: 'Onward',   t: '1,200+ tonnes diverted',                  d: 'A growing team, a deeper bench of corporate clients, and a thicker stack of certificates filed.' },
]

const TEAM = [
  { name: 'Founder & CEO',              role: 'FOUNDING / OPERATIONS',   label: 'FOUNDER PORTRAIT' },
  { name: 'Head of Operations',         role: 'LOGISTICS / COMPLIANCE',  label: 'OPERATIONS HEAD' },
  { name: 'Data & Certification Lead',  role: 'DATA DESTRUCTION / EPR',  label: 'DATA & CERT LEAD' },
]

const KV = [
  { k: 'Founded',        v: 'Surat, Gujarat' },
  { k: 'Headquarters',   v: 'P-818 Katargam New GIDC, Surat' },
  { k: 'Service area',   v: 'Pan-India · 28+ states' },
  { k: 'Materials',      v: 'Electronic & plastic waste' },
  { k: 'Authorizations', v: 'CPCB & State PCB partnerships' },
  { k: 'Compliance',     v: 'EPR — E-waste & Plastic' },
  { k: 'Data standard',  v: 'NIST 800-88 aligned' },
]

export default function About() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="wrap">
          <div className="crumbs">Home / About us</div>
          <h1>We channel discarded devices into <em>second lives.</em></h1>
          <p className="lead">
            Divine E-Waste Solution was founded on a simple conviction: every device deserves
            a responsible end. We collect, document, destroy data on, and route end-of-life
            electronics into authorized recyclers — quietly, ethically, and with the paperwork to prove it.
          </p>
        </div>
      </section>

      {/* MISSION */}
      <section className="section">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 80, alignItems: 'start' }} className="about-grid">
            <div>
              <span className="eyebrow" style={{ marginBottom: 18, display: 'flex' }}>Our mission</span>
              <h2 style={{ fontSize: 'clamp(26px, 5vw, 52px)', letterSpacing: '-0.035em', lineHeight: 1.02, maxWidth: '16ch' }}>
                Build a cleaner, greener future — one consignment at a time.
              </h2>
              <p style={{ color: 'var(--ink-2)', fontSize: 'clamp(16px, 4vw, 16.5px)', marginTop: 18 }}>
                India generates more than three million tonnes of e-waste a year, and most of it
                still leaks into the informal sector — where it is burned, melted, or buried.
                We exist to make the right choice the easy choice. For a business, that means a
                phone call, a pickup, a weight slip, a destruction certificate, and a recycling
                certificate. For the planet, that means materials returned to the loop and toxins
                kept out of soil and water.
              </p>
              <p style={{ color: 'var(--ink-2)', fontSize: 'clamp(16px, 4vw, 16.5px)', marginTop: 18 }}>
                Our team operates out of Katargam GIDC in Surat and serves clients across India —
                from single-pallet pickups for small offices to enterprise-wide hardware refresh
                programs for IT services firms.
              </p>
            </div>

            <aside style={{ border: '1px solid var(--rule)', background: 'var(--surface)', padding: 32, borderRadius: 'var(--radius)' }}>
              <h4 style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)', fontWeight: 500, margin: '0 0 18px' }}>
                At a glance
              </h4>
              <dl style={{ margin: 0 }}>
                {KV.map((item, i) => (
                  <div key={item.k} style={{
                    display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 14,
                    padding: '14px 0',
                    borderTop: '1px solid var(--rule)',
                    borderBottom: i === KV.length - 1 ? '1px solid var(--rule)' : undefined,
                    fontSize: 14.5,
                  }}>
                    <dt style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', paddingTop: 4 }}>{item.k}</dt>
                    <dd style={{ margin: 0 }}>{item.v}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
        <style>{`@media(max-width:880px){.about-grid{grid-template-columns:1fr!important;gap:40px!important;}}`}</style>
      </section>

      {/* PILLARS */}
      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow" style={{ marginBottom: 18, display: 'flex' }}>What we stand on</span>
              <h2>Three pillars.<br />No exceptions.</h2>
            </div>
            <p>
              We say no to clients more often than we say yes. The reason is simple: the
              moment chain-of-custody breaks, the certificate is worthless. These three
              principles are how we keep that from happening.
            </p>
          </div>

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            border: '1px solid var(--rule)', borderRadius: 'var(--radius)',
            overflow: 'hidden', background: 'var(--surface)',
          }} className="pillars-grid">
            {PILLARS.map((p, i) => (
              <div key={p.n} style={{ padding: 36, borderRight: i < 2 ? '1px solid var(--rule)' : undefined }}>
                <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(48px, 14vw, 80px)', fontWeight: 400, color: 'var(--rule-2)', letterSpacing: '-0.04em', lineHeight: 1 }}>{p.n}</div>
                <h3 style={{ fontSize: 'clamp(20px, 5vw, 24px)', letterSpacing: '-0.02em', margin: '28px 0 12px' }}>{p.h}</h3>
                <p style={{ color: 'var(--ink-2)', fontSize: 'clamp(14px, 3.6vw, 14.5px)', margin: 0 }}>{p.p}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:880px){.pillars-grid{grid-template-columns:1fr!important;}.pillars-grid>div{border-right:none!important;border-bottom:1px solid var(--rule)!important;}.pillars-grid>div:last-child{border-bottom:none!important;}}`}</style>
      </section>

      {/* TIMELINE */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow" style={{ marginBottom: 18, display: 'flex' }}>Our story</span>
              <h2>Built quietly, scaled deliberately.</h2>
            </div>
            <p>
              We&apos;re not the loudest e-waste company in India. We&apos;re the one your IT team trusts
              to actually destroy the drives. Here&apos;s how we got here.
            </p>
          </div>

          <div>
            {TIMELINE.map((row, i) => (
              <div key={row.year} style={{
                display: 'grid', gridTemplateColumns: '160px 1fr 1fr', gap: 40,
                padding: '32px 0',
                borderTop: '1px solid var(--rule)',
                borderBottom: i === TIMELINE.length - 1 ? '1px solid var(--rule)' : undefined,
                alignItems: 'start',
              }} className="t-row">
                <div>
                  <span style={{ fontFamily: 'var(--display)', fontSize: 'clamp(28px, 7vw, 36px)', letterSpacing: '-0.03em', fontWeight: 500, lineHeight: 1 }}>{row.year}</span>
                  <small style={{ display: 'block', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--muted)', fontWeight: 400, textTransform: 'uppercase', marginTop: 8 }}>{row.tag}</small>
                </div>
                <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(18px, 4.5vw, 20px)', letterSpacing: '-0.02em', fontWeight: 500 }}>{row.t}</div>
                <div style={{ color: 'var(--ink-2)', fontSize: 'clamp(15px, 4vw, 16px)' }}>{row.d}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:760px){.t-row{grid-template-columns:1fr!important;gap:14px!important;}}`}</style>
      </section>

      {/* TEAM */}
      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow" style={{ marginBottom: 18, display: 'flex' }}>The people</span>
              <h2>Small team.<br />Sharp paperwork.</h2>
            </div>
            <p>A leadership team that sits on the sorting floor as often as in client meetings.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="team-grid">
            {TEAM.map(person => (
              <article key={person.name} style={{ display: 'grid', gap: 18 }}>
                <div className="placeholder" style={{ aspectRatio: '4/5', borderRadius: 'var(--radius)' }}>
                  [ {person.label} ]
                </div>
                <div>
                  <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(18px, 4.5vw, 20px)', letterSpacing: '-0.02em', fontWeight: 500 }}>{person.name}</div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 6 }}>{person.role}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:880px){.team-grid{grid-template-columns:1fr 1fr!important;}}@media(max-width:560px){.team-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* CTA STRIP */}
      <section className="section" style={{ padding: '80px 0' }}>
        <div className="wrap">
          <div style={{
            display: 'grid', gridTemplateColumns: '1.2fr auto', gap: 40,
            alignItems: 'center', padding: '36px 0',
            borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)',
          }} className="about-cta">
            <div>
              <span className="eyebrow" style={{ marginBottom: 14, display: 'flex' }}>Work with us</span>
              <h2 style={{ fontSize: 'clamp(24px, 5vw, 44px)', letterSpacing: '-0.03em', lineHeight: 1.05 }}>
                Have a hardware refresh, a warehouse clearance, or an EPR target on your desk?
              </h2>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <a href="/contact" className="btn btn-primary">
                Talk to us
                <svg style={{ width: 16, height: 16 }} viewBox="0 0 16 16" fill="none"><path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" /></svg>
              </a>
              <a href="/media" className="btn btn-ghost">Media centre</a>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:760px){.about-cta{grid-template-columns:1fr!important;}}`}</style>
      </section>
    </>
  )
}
