export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <div className="footer-statement">Because every device deserves a responsible end.</div>
            <div style={{ marginTop: 28, display: 'flex', gap: 10, alignItems: 'center' }}>
              <span className="brand-mark" style={{ background: 'var(--paper)', color: 'var(--ink)' }}>D</span>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'oklch(0.68 0.02 145)' }}>
                EST. SURAT &nbsp;·&nbsp; AUTHORIZED PARTNER
              </div>
            </div>
          </div>

          <div>
            <h4>Navigate</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About us</a></li>
              <li><a href="/media">Media centre</a></li>
              <li><a href="/contact">Contact us</a></li>
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li><a href="/#services">Collection &amp; Logistics</a></li>
              <li><a href="/#services">Data Destruction</a></li>
              <li><a href="/#services">EPR Compliance</a></li>
              <li><a href="/#services">CSR Collaboration</a></li>
              <li><a href="/#services">Recycling &amp; Certification</a></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+917990548623">+91 79905 48623</a></li>
              <li><a href="tel:+919537383637">+91 95373 83637</a></li>
              <li><a href="mailto:divineewastesolution@gmail.com">divineewastesolution@gmail.com</a></li>
              <li style={{ color: 'oklch(0.78 0.02 145)' }}>P-818 Katargam New GIDC, Surat</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} Divine E-Waste Solution. All rights reserved.</span>
          <span className="leaf">
            <span className="leaf-dot" />
            Authorized · Ethical · Transparent
          </span>
          <span>
            <a href="/privacy">Privacy</a>
            &nbsp;·&nbsp;
            <a href="/terms">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  )
}
