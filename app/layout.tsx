import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import RevealProvider from '@/components/RevealProvider'

export const metadata: Metadata = {
  title: 'Divine E-Waste Solution — Responsible Recycling for a Cleaner Tomorrow',
  description:
    'Divine E-Waste Solution channels electronic and plastic waste into certified, sustainable recycling — with secure data destruction, EPR compliance and pan-India logistics.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,600;1,700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <RevealProvider />
      </body>
    </html>
  )
}
