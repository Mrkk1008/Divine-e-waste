function IconLeaf() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 19c0-8 6-13 14-13 0 8-6 13-14 13z" />
      <path d="M9 15c2-3 5-5 8-6" />
    </svg>
  )
}
function IconPhone() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 4h4l1.5 4-2 1.5a11 11 0 005 5l1.5-2 4 1.5v4a2 2 0 01-2 2C9.5 24 1 15.5 3 4a2 2 0 012-2z" />
    </svg>
  )
}
function IconMail() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M4 7l8 6 8-6" />
    </svg>
  )
}
function IconPin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 21c5-5.5 7-9 7-12a7 7 0 10-14 0c0 3 2 6.5 7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}
function IconArrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12h15M13 6l6 6-6 6" />
    </svg>
  )
}

const FLINKS_SERVICES = [
  'Collection & Logistics',
  'EPR Compliance',
  'Data Destruction',
  'Recycling & Certification',
]
const FLINKS_COMPANY = [
  { label: 'About Us',      href: '/about' },
  { label: 'Media Centre',  href: '/media' },
  { label: 'Contact',       href: '/contact' },
  { label: 'Privacy Policy',href: '/privacy' },
]

function Social({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <a className="soc" href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {children}
    </a>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="wrap foot-grid">
        {/* Brand + contact */}
        <div className="foot-brand">
          <a href="/" className="brand">
            <span className="brand-mark"><IconLeaf /></span>
            <span className="brand-name">Divine&nbsp;E-Waste</span>
          </a>
          <p>Channelizing electronic and plastic waste to authorized recyclers — for a cleaner, greener tomorrow.</p>
          <div className="foot-contact">
            <a href="tel:+917990548623"><IconPhone /> +91 79905 48623</a>
            <a href="tel:+919537383637"><IconPhone /> +91 95373 83637</a>
            <a href="mailto:divineewastesolution@gmail.com"><IconMail /> divineewastesolution@gmail.com</a>
            <span><IconPin /> P-818, Katargam New GIDC, Surat, Gujarat</span>
          </div>
          <div className="foot-soc">
            <Social label="Instagram" href="https://instagram.com/divineewastesolution">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.2 1 .47 1.4.9.43.4.7.8.9 1.4.17.4.36 1 .42 2.2.06 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2-.2.6-.47 1-.9 1.4-.4.43-.8.7-1.4.9-.4.17-1 .36-2.2.42-1.3.06-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.25-2.2-.42-.6-.2-1-.47-1.4-.9-.43-.4-.7-.8-.9-1.4-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.2-.6.47-1 .9-1.4.4-.43.8-.7 1.4-.9.4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.07-.9.04-1.4.2-1.7.32-.43.17-.74.37-1.06.7-.32.31-.52.62-.7 1.05-.12.3-.28.8-.32 1.7C3.25 8.5 3.24 8.9 3.24 12s0 3.5.07 4.7c.04.9.2 1.4.32 1.7.17.43.37.74.7 1.06.31.32.62.52 1.05.7.3.12.8.28 1.7.32 1.2.06 1.6.07 4.7.07s3.5 0 4.7-.07c.9-.04 1.4-.2 1.7-.32.43-.17.74-.37 1.06-.7.32-.31.52-.62.7-1.05.12-.3.28-.8.32-1.7.06-1.2.07-1.6.07-4.7s0-3.5-.07-4.7c-.04-.9-.2-1.4-.32-1.7a2.8 2.8 0 00-.7-1.06 2.8 2.8 0 00-1.05-.7c-.3-.12-.8-.28-1.7-.32C15.5 4 15.1 4 12 4zm0 3.06A4.94 4.94 0 1112 17a4.94 4.94 0 010-9.88zm0 8.15A3.2 3.2 0 1112 8.8a3.2 3.2 0 010 6.4zm6.3-8.35a1.15 1.15 0 11-2.3 0 1.15 1.15 0 012.3 0z" />
              </svg>
            </Social>
            <Social label="WhatsApp" href="https://wa.me/917990548623">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 00-8.5 15.3L2 22l4.8-1.5A10 10 0 1012 2zm0 1.8a8.2 8.2 0 016.9 12.6l-.2.3.7 2.6-2.7-.7-.3.2A8.2 8.2 0 1112 3.8zm-3.2 4c-.2 0-.5.07-.7.3-.3.3-.9.9-.9 2.1s.9 2.5 1 2.6c.1.2 1.7 2.7 4.2 3.7 2 .8 2.5.7 2.9.6.5-.04 1.4-.6 1.6-1.1.2-.6.2-1 .14-1.1l-.6-.3s-1.4-.7-1.6-.8c-.2-.07-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.3.1-.4l.4-.5c.1-.2.2-.3.2-.5.07-.1.04-.3 0-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4z" />
              </svg>
            </Social>
            <Social label="Email" href="mailto:divineewastesolution@gmail.com">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3 5h18a1 1 0 011 1v12a1 1 0 01-1 1H3a1 1 0 01-1-1V6a1 1 0 011-1zm9 7L4 7v11h16V7l-8 5zm0-2l8-5H4l8 5z" />
              </svg>
            </Social>
          </div>
        </div>

        {/* Services */}
        <div className="foot-col">
          <h5>Services</h5>
          <ul>
            {FLINKS_SERVICES.map(s => (
              <li key={s}><a href="/#services">{s}</a></li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="foot-col">
          <h5>Company</h5>
          <ul>
            {FLINKS_COMPANY.map(l => (
              <li key={l.href}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>
        </div>

        {/* Get started */}
        <div className="foot-col foot-cta-col">
          <h5>Get started</h5>
          <p style={{ color: 'rgba(169,198,186,.9)', fontSize: 14, lineHeight: 1.6, marginBottom: 18 }}>
            Have e-waste to clear? We&apos;ll arrange a pickup anywhere in India.
          </p>
          <a href="/contact" className="btn btn-primary">
            Book a Pickup <IconArrow />
          </a>
        </div>
      </div>

      <div className="wrap foot-bottom">
        <span>© {year} Divine E-Waste Solution. All rights reserved.</span>
        <div className="foot-legal">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <span>Authorized collection partner</span>
        </div>
      </div>
    </footer>
  )
}
