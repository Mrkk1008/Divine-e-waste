import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Divine E-Waste Solution',
}

const SECTIONS = [
  { id: 'who', h: 'Who we are', p: 'Divine E-Waste Solution ("we", "us", "our") is a company incorporated in India, operating from P-818 Katargam New GIDC, Surat, Gujarat 395004. We collect, process, and recycle electronic and plastic waste in compliance with applicable Indian environmental laws.' },
  { id: 'collect', h: 'Information we collect', p: 'We collect personal data you provide when you request a pickup or contact us: name, organisation, email address, phone number, and pickup address. We also collect usage data through your browser when you visit this website (IP address, browser type, pages visited).' },
  { id: 'use', h: 'How we use your data', p: 'We use your information to schedule and confirm pickups, issue recycling and data destruction certificates, send service updates and invoices, comply with EPR and CPCB reporting obligations, and respond to your enquiries. We do not use your data for marketing without your consent.' },
  { id: 'legal', h: 'Legal basis for processing', p: 'We process personal data under the Digital Personal Data Protection Act 2023 (DPDP Act). Our legal bases are: (a) your consent when you submit our contact form; (b) performance of a contract when we provide pickup and recycling services; and (c) compliance with our legal obligations under the E-waste Management Rules and Extended Producer Responsibility regulations.' },
  { id: 'share', h: 'Who we share data with', p: 'We share data only where necessary: with CPCB-authorized recyclers to complete consignments; with logistics partners for pickups; with government bodies (CPCB, SPCB) as required by law; and with our IT service providers under data processing agreements. We do not sell your personal data.' },
  { id: 'retention', h: 'Data retention', p: 'We retain transaction records (consignment notes, certificates, weights) for seven years as required by Indian tax and environmental regulations. Contact form data is kept for 24 months. You may request deletion of data not subject to a legal retention obligation.' },
  { id: 'rights', h: 'Your rights', p: 'Under the DPDP Act you have the right to: access a summary of your personal data held by us; correct inaccurate data; erase data where we have no legal obligation to retain it; nominate a person to exercise rights on your behalf. To exercise any right, email us at divineewastesolution@gmail.com.' },
  { id: 'security', h: 'Security', p: 'We maintain reasonable technical and organisational measures to protect your data. All data is stored on servers located in India. In the event of a breach that is likely to harm you, we will notify you and the relevant authority as required by law.' },
  { id: 'cookies', h: 'Cookies', p: 'This website uses only functional cookies necessary for the site to operate. We do not use advertising or tracking cookies. No cookie consent banner is shown because no non-essential cookies are set.' },
  { id: 'links', h: 'Third-party links', p: 'Our site may contain links to third-party websites. We are not responsible for their privacy practices. Please review their policies before submitting data.' },
  { id: 'children', h: 'Children\'s privacy', p: 'Our services are directed at businesses and adults. We do not knowingly collect data from persons under 18 years of age.' },
  { id: 'changes', h: 'Changes to this policy', p: 'We may update this policy when our practices change or law requires it. The effective date at the top of this page will change. Continued use of our services after the update constitutes acceptance.' },
  { id: 'contact', h: 'Contact', p: 'For any privacy queries or to exercise your rights: email divineewastesolution@gmail.com or write to us at P-818 Katargam New GIDC, Surat, Gujarat 395004, India.' },
]

export default function Privacy() {
  return (
    <>
      <section style={{ padding: '80px 0 56px', borderBottom: '1px solid var(--rule)' }}>
        <div className="wrap">
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 28 }}>Home / Privacy Policy</div>
          <h1 style={{ fontSize: 'clamp(32px, 8vw, 88px)', lineHeight: 0.98, letterSpacing: '-0.04em', fontWeight: 500, maxWidth: '14ch' }}>
            Privacy <em style={{ fontStyle: 'italic', color: 'var(--forest)', fontWeight: 400 }}>Policy.</em>
          </h1>
          <div style={{
            display: 'flex', gap: 24, flexWrap: 'wrap',
            marginTop: 32, paddingTop: 24,
            borderTop: '1px solid var(--rule)',
            fontFamily: 'var(--mono)', fontSize: 11,
            letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)',
          }}>
            <span>Effective date: <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>1 January 2025</strong></span>
            <span>Last updated: <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>1 January 2025</strong></span>
            <span>Jurisdiction: <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>India · DPDP Act 2023</strong></span>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="doc-layout">
          <nav className="doc-toc" aria-label="Table of contents">
            <div className="h">Contents</div>
            <ol>
              {SECTIONS.map(s => (
                <li key={s.id}><a href={`#${s.id}`}>{s.h}</a></li>
              ))}
            </ol>
          </nav>
          <div className="doc-content">
            {SECTIONS.map(s => (
              <section key={s.id} id={s.id}>
                <h2>{s.h}</h2>
                <p>{s.p}</p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
