import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms & Conditions — Divine E-Waste Solution',
}

const SECTIONS = [
  { id: 'intro', h: 'Introduction', p: 'These Terms and Conditions govern your use of the services provided by Divine E-Waste Solution ("we", "us") and access to our website. By requesting a pickup, submitting an enquiry, or using our services, you agree to these terms. If you do not agree, please do not use our services.' },
  { id: 'services', h: 'Services', p: 'We provide collection, transportation, data destruction, processing, and recycling of electronic and plastic waste. The scope of each engagement is confirmed in a written service order or handover note. We reserve the right to decline any consignment that is outside our licensed categories.' },
  { id: 'client-obligations', h: 'Client obligations', p: 'You agree to: provide accurate information about the nature, quantity, and condition of items; ensure items are accessible for collection at the agreed time; not present items that are not electronic or plastic waste; obtain any internal authorizations required before handing over items; and disclose any hazardous materials (batteries, CRTs, etc.) in advance.' },
  { id: 'data-destruction', h: 'Data destruction', p: 'We provide certified data destruction services aligned to NIST 800-88 guidelines. We issue a destruction certificate per device where an asset tag or serial number is available. You are responsible for removing personal data from items not covered by a data destruction service order. We accept no liability for residual data on items submitted without a data destruction instruction.' },
  { id: 'pricing', h: 'Pricing and payment', p: 'Prices are agreed in writing before each consignment. For commercial clients, invoices are due within 30 days of issue. We reserve the right to charge interest on overdue amounts at 18% per annum. Prices do not include GST unless stated; GST is added at the prevailing rate.' },
  { id: 'certificates', h: 'Recycling certificates', p: 'We issue recycling certificates after we have received confirmation from authorized recyclers that the material has been processed. Certificates are typically issued within 30 working days of collection. Certificates reflect the weight of material received; we are not responsible for discrepancies arising from settling, moisture loss, or sorting.' },
  { id: 'liability', h: 'Limitation of liability', p: 'To the maximum extent permitted by law, our total liability to you for any claim arising from our services is limited to the charges paid for the specific consignment giving rise to the claim. We are not liable for indirect, consequential, or economic losses. We are not liable for data loss on devices not covered by a destruction instruction.' },
  { id: 'ip', h: 'Intellectual property', p: 'All content on this website — text, graphics, logos, certificates — is our property or licensed to us. You may not reproduce, redistribute, or adapt it without our written consent.' },
  { id: 'environment', h: 'Environmental compliance', p: 'We operate under authorization from the relevant Pollution Control Boards and in compliance with the E-waste Management Rules and Plastic Waste Management Rules. We will not process materials in a manner that violates these rules. Client certificates reflect compliance only for materials we have received and processed.' },
  { id: 'force-majeure', h: 'Force majeure', p: 'We are not liable for delays or failures caused by events beyond our reasonable control, including natural disasters, government action, labour disputes, or infrastructure failures, provided we notify you promptly.' },
  { id: 'termination', h: 'Termination', p: 'Either party may terminate a service arrangement with 30 days written notice. We may suspend or terminate immediately if you breach these terms, present prohibited materials, or fail to pay.' },
  { id: 'disputes', h: 'Disputes and governing law', p: 'These terms are governed by the laws of India. Any dispute shall first be referred to good-faith negotiation. If unresolved within 30 days, disputes shall be submitted to arbitration in Surat under the Arbitration and Conciliation Act 1996. Courts in Surat shall have exclusive jurisdiction for ancillary relief.' },
  { id: 'changes', h: 'Changes to these terms', p: 'We may amend these terms by posting an updated version on this website. Continued use of our services after changes take effect constitutes acceptance of the updated terms.' },
  { id: 'contact', h: 'Contact', p: 'For queries about these terms, contact us at divineewastesolution@gmail.com or P-818 Katargam New GIDC, Surat, Gujarat 395004, India.' },
]

export default function Terms() {
  return (
    <>
      <section style={{ padding: '80px 0 56px', borderBottom: '1px solid var(--rule)' }}>
        <div className="wrap">
          <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 28 }}>Home / Terms & Conditions</div>
          <h1 style={{ fontSize: 'clamp(32px, 8vw, 88px)', lineHeight: 0.98, letterSpacing: '-0.04em', fontWeight: 500, maxWidth: '14ch' }}>
            Terms &amp; <em style={{ fontStyle: 'italic', color: 'var(--forest)', fontWeight: 400 }}>Conditions.</em>
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
            <span>Governing law: <strong style={{ color: 'var(--ink)', fontWeight: 500 }}>India</strong></span>
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
