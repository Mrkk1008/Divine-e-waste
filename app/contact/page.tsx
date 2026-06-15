import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Divine E-Waste Solution',
}

export default function Contact() {
  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 60 }}>
        <div className="wrap">
          <div className="crumbs">Home / Contact us</div>
          <h1>Let&apos;s get your devices a <em>proper exit.</em></h1>
          <p className="lead">
            Phone, WhatsApp, email, or a quick form — whichever&apos;s easiest. Most pickups
            are scheduled within one working day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 60, alignItems: 'start' }} className="contact-grid">
            <ContactForm />

            <aside>
              <div style={{ border: '1px solid var(--rule)', borderRadius: 'var(--radius)', background: 'var(--surface)', marginBottom: 16, overflow: 'hidden' }}>
                <div style={{ padding: '14px 22px', background: 'var(--paper)', borderBottom: '1px solid var(--rule)', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>Direct lines</div>
                <div style={{ padding: '24px 22px' }}>
                  <div className="contact-lines">
                    <div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: 6 }}>Operations</div>
                      <div className="contact-value"><a href="tel:+917990548623">+91 79905 48623</a></div>
                    </div>
                    <div>
                      <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: 6 }}>Logistics</div>
                      <div className="contact-value"><a href="tel:+919537383637">+91 95373 83637</a></div>
                    </div>
                  </div>
                  <div style={{ height: 22 }} />
                  <div>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: 6 }}>Email</div>
                    <div className="contact-value contact-value-email">
                      <a href="mailto:divineewastesolution@gmail.com">divineewastesolution@gmail.com</a>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ border: '1px solid var(--rule)', borderRadius: 'var(--radius)', background: 'var(--surface)', marginBottom: 16, overflow: 'hidden' }}>
                <div style={{ padding: '14px 22px', background: 'var(--paper)', borderBottom: '1px solid var(--rule)', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>Office &amp; sorting facility</div>
                <div style={{ padding: '24px 22px' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: 6 }}>Address</div>
                  <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(16px, 4vw, 18px)', lineHeight: 1.35, fontWeight: 500 }}>
                    P-818, Katargam New GIDC<br />
                    Surat, Gujarat — 395004<br />
                    India
                  </div>
                  <div style={{ height: 22 }} />
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', color: 'var(--muted)', textTransform: 'uppercase', marginBottom: 10 }}>Open hours</div>
                  {[
                    ['Mon — Sat', '09:00 — 18:30'],
                    ['Sunday', 'Door-to-door collection only'],
                    ['Public holidays', 'By appointment'],
                  ].map(([day, time]) => (
                    <div key={day} style={{ display: 'flex', justifyContent: 'space-between', gap: 12, padding: '8px 0', fontSize: 'clamp(14px, 3.6vw, 14.5px)', borderBottom: '1px solid var(--rule)' }}>
                      <span>{day}</span>
                      <span style={{ fontFamily: 'var(--mono)', fontSize: 'clamp(12px, 3.2vw, 13px)', color: 'var(--ink-2)', textAlign: 'right' }}>{time}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="placeholder" style={{ aspectRatio: '5/3', borderRadius: 'var(--radius)', border: '1px solid var(--rule)' }}>
                [ MAP — KATARGAM GIDC, SURAT ]
              </div>
            </aside>
          </div>
        </div>
        <style>{`
          @media(max-width:880px){.contact-grid{grid-template-columns:1fr!important;gap:40px!important;}}
          .contact-lines { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; }
          .contact-value {
            font-family: var(--display);
            font-size: clamp(16px, 4vw, 18px);
            letter-spacing: -0.015em;
            font-weight: 500;
          }
          .contact-value-email { word-break: break-all; }
          @media (max-width: 767px) {
            .contact-lines { grid-template-columns: 1fr; gap: 18px; }
          }
        `}</style>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: '1px solid var(--rule)', borderRadius: 'var(--radius)', background: 'var(--surface)', overflow: 'hidden' }} className="quick-strip">
            {[
              { t: 'For producers', h: 'EPR compliance support', p: 'Annual targets, returns filing, and certificate trails for the CPCB portal.', link: 'Talk to compliance' },
              { t: 'For IT teams',  h: 'Bulk data destruction',  p: 'On-site or off-site wiping and shredding with per-asset certificates.', link: 'Request a sample certificate' },
              { t: 'For press',     h: 'Media inquiries',        p: 'Comments, interviews, statistics, and high-res imagery for stories on e-waste.', link: 'Visit media centre' },
            ].map((qs, i) => (
              <div key={qs.t} style={{ padding: 28, borderRight: i < 2 ? '1px solid var(--rule)' : undefined }}>
                <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>{qs.t}</div>
                <h4 style={{ fontSize: 'clamp(18px, 4.5vw, 20px)', letterSpacing: '-0.02em', fontWeight: 500, margin: '10px 0 8px' }}>{qs.h}</h4>
                <p style={{ color: 'var(--ink-2)', fontSize: 'clamp(14px, 3.5vw, 14px)', margin: 0 }}>{qs.p}</p>
                <a href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 16, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase' }}>{qs.link} →</a>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:880px){.quick-strip{grid-template-columns:1fr!important;}.quick-strip>div{border-right:none!important;border-bottom:1px solid var(--rule)!important;}.quick-strip>div:last-child{border-bottom:none!important;}}`}</style>
      </section>
    </>
  )
}
