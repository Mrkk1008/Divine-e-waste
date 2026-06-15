'use client'

import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import BookPickupModal from './BookPickupModal'

const NAV = [
  { href: '/',        label: 'Home' },
  { href: '/about',   label: 'About Us' },
  { href: '/media',   label: 'Media Centre' },
  { href: '/contact', label: 'Contact' },
]

function LeafIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 19c0-8 6-13 14-13 0 8-6 13-14 13z" />
      <path d="M9 15c2-3 5-5 8-6" />
    </svg>
  )
}

function TruckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2.5 6.5h10v9h-10z" />
      <path d="M12.5 9.5h4l3 3v3h-7z" />
      <circle cx="6.5" cy="17.5" r="2" />
      <circle cx="16.5" cy="17.5" r="2" />
    </svg>
  )
}

export default function Navbar() {
  const pathname = usePathname()
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const [booking, setBooking] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <>
      <header className={`nav${solid ? ' solid' : ''}`}>
        <div className="wrap nav-in">
          <a href="/" className="brand">
            <span className="brand-mark"><LeafIcon /></span>
            <span className="brand-name">
              Divine&nbsp;E-Waste
              <small>Surat · Pan-India</small>
            </span>
          </a>

          <nav className="nav-links">
            {NAV.map(link => (
              <a key={link.href} href={link.href} className={isActive(link.href) ? 'on' : ''}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="nav-cta">
            <button className="btn btn-primary" onClick={() => setBooking(true)}>
              <TruckIcon /> Book a Pickup
            </button>
          </div>

          <button
            className="nav-burger"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`nav-mobile${open ? ' open' : ''}`}>
          {NAV.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? 'on' : ''}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button
            className="btn btn-primary btn-lg"
            onClick={() => { setOpen(false); setBooking(true) }}
          >
            <TruckIcon /> Book a Pickup
          </button>
        </div>
      </header>

      <BookPickupModal open={booking} onClose={() => setBooking(false)} />
    </>
  )
}
