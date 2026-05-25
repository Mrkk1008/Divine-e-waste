'use client'

import { usePathname } from 'next/navigation'

const LINKS = [
  { href: '/',        label: 'Home' },
  { href: '/about',   label: 'About us' },
  { href: '/media',   label: 'Media centre' },
  { href: '/contact', label: 'Contact us' },
  { href: '/privacy', label: 'P & P' },
  { href: '/terms',   label: 'T & C' },
]

function toggleMenu() {
  if (typeof document !== 'undefined') {
    document.body.classList.toggle('menu-open')
  }
}

function closeMenu() {
  if (typeof document !== 'undefined') {
    document.body.classList.remove('menu-open')
  }
}

export default function Navbar() {
  const pathname = usePathname()

  return (
    <header className="nav-shell">
      <nav className="nav" aria-label="Primary">
        <a className="brand" href="/" aria-label="Divine E-Waste Solution home" onClick={closeMenu}>
          <span className="brand-mark" aria-hidden="true">D</span>
          <span className="brand-name">
            Divine E-Waste Solution
            <small>Surat · Pan-India</small>
          </span>
        </a>

        <ul className="nav-links">
          {LINKS.map(link => (
            <li key={link.href}>
              <a href={link.href} className={pathname === link.href ? 'is-active' : ''}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a className="nav-cta" href="/contact">
          <span className="dot" aria-hidden="true" />
          Schedule pickup
        </a>

        <button
          className="nav-burger"
          aria-label="Open menu"
          onClick={toggleMenu}
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
            <path d="M0 1h18M0 7h18M0 13h18" stroke="currentColor" strokeWidth="1.4" />
          </svg>
        </button>
      </nav>

      <div className="mobile-menu">
        <ul>
          {LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                className={pathname === link.href ? 'is-active' : ''}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="/contact" className="mm-cta" onClick={closeMenu}>
              Schedule pickup →
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
