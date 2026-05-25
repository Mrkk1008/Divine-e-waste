'use client'

import { useState } from 'react'

const SERVICES_LIST = [
  'Collection & logistics',
  'Data destruction',
  'EPR compliance',
  'CSR collaboration',
]

const inputStyle: React.CSSProperties = {
  font: 'inherit',
  padding: '14px 16px',
  border: '1px solid var(--rule)',
  background: 'var(--paper)',
  borderRadius: 'var(--radius)',
  color: 'var(--ink)',
  fontSize: 15,
  width: '100%',
  outline: 'none',
  transition: 'border-color 0.15s ease',
}

const labelStyle: React.CSSProperties = {
  fontFamily: 'var(--mono)',
  fontSize: 11,
  letterSpacing: '0.14em',
  textTransform: 'uppercase',
  color: 'var(--muted)',
}

export default function ContactForm() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', city: '', qty: 'Under 50 kg', msg: '' })
  const [services, setServices] = useState<string[]>([])

  function update(field: string, value: string) {
    setForm(prev => ({ ...prev, [field]: value }))
  }

  function toggleService(s: string) {
    setServices(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div style={{ background: 'var(--surface)', border: '1px solid var(--rule)', borderRadius: 'var(--radius)', padding: 40 }} className="form-card">
      <h3 style={{ fontSize: 28, letterSpacing: '-0.02em', marginBottom: 8 }}>Request a pickup or quote.</h3>
      <p style={{ color: 'var(--ink-2)', fontSize: 15, marginBottom: 28 }}>We&apos;ll respond within one working day, usually faster.</p>

      {sent ? (
        <div style={{ padding: 28, background: 'color-mix(in oklab, var(--lime) 20%, var(--paper))', border: '1px solid color-mix(in oklab, var(--lime) 60%, var(--rule))', borderRadius: 'var(--radius)', fontSize: 14.5 }}>
          <strong style={{ fontFamily: 'var(--display)', fontSize: 18, letterSpacing: '-0.02em', display: 'block', marginBottom: 6 }}>Thanks — we&apos;ve got it.</strong>
          Someone from our team will reach you on the number you provided. For urgent pickups call{' '}
          <a href="tel:+917990548623" style={{ textDecoration: 'underline' }}>+91 79905 48623</a>.
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="cf-row-2">
            <div style={{ display: 'grid', gap: 8, marginBottom: 18 }}>
              <label style={labelStyle}>Full name</label>
              <input required placeholder="Your name" value={form.name} onChange={e => update('name', e.target.value)} style={inputStyle} />
            </div>
            <div style={{ display: 'grid', gap: 8, marginBottom: 18 }}>
              <label style={labelStyle}>Company / organisation</label>
              <input placeholder="Optional" value={form.company} onChange={e => update('company', e.target.value)} style={inputStyle} />
            </div>
          </div>

          <div className="cf-row-2">
            <div style={{ display: 'grid', gap: 8, marginBottom: 18 }}>
              <label style={labelStyle}>Email</label>
              <input type="email" required placeholder="you@company.com" value={form.email} onChange={e => update('email', e.target.value)} style={inputStyle} />
            </div>
            <div style={{ display: 'grid', gap: 8, marginBottom: 18 }}>
              <label style={labelStyle}>Phone</label>
              <input required placeholder="+91 …" value={form.phone} onChange={e => update('phone', e.target.value)} style={inputStyle} />
            </div>
          </div>

          <div className="cf-row-2">
            <div style={{ display: 'grid', gap: 8, marginBottom: 18 }}>
              <label style={labelStyle}>Pickup city / state</label>
              <input placeholder="e.g. Surat, Gujarat" value={form.city} onChange={e => update('city', e.target.value)} style={inputStyle} />
            </div>
            <div style={{ display: 'grid', gap: 8, marginBottom: 18 }}>
              <label style={labelStyle}>Approx. quantity</label>
              <select value={form.qty} onChange={e => update('qty', e.target.value)} style={{ ...inputStyle }}>
                <option>Under 50 kg</option>
                <option>50 – 500 kg</option>
                <option>500 kg – 2 tonnes</option>
                <option>2 – 10 tonnes</option>
                <option>10+ tonnes / programme</option>
              </select>
            </div>
          </div>

          <div style={{ marginBottom: 18 }}>
            <label style={{ ...labelStyle, display: 'block', marginBottom: 8 }}>I&apos;m interested in</label>
            <div className="cf-row-2">
              {SERVICES_LIST.map(s => (
                <label key={s} onClick={() => toggleService(s)} style={{
                  padding: '12px 14px', border: `1px solid ${services.includes(s) ? 'var(--ink)' : 'var(--rule)'}`,
                  borderRadius: 'var(--radius)', cursor: 'pointer', fontSize: 13.5,
                  background: 'var(--paper)', display: 'flex', alignItems: 'center', gap: 10,
                  marginBottom: 8,
                }}>
                  <span style={{
                    width: 16, height: 16, borderRadius: 4,
                    border: '1px solid var(--rule-2)',
                    background: services.includes(s) ? 'var(--ink)' : 'transparent',
                    display: 'inline-block', flexShrink: 0,
                  }} />
                  {s}
                </label>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gap: 8, marginBottom: 18 }}>
            <label style={labelStyle}>Tell us more</label>
            <textarea
              placeholder="Roughly what hardware, how often, any deadlines or audit requirements…"
              value={form.msg}
              onChange={e => update('msg', e.target.value)}
              style={{ ...inputStyle, minHeight: 130, resize: 'vertical' }}
            />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 16, flexWrap: 'wrap', gap: 12 }}>
            <small style={{ fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '0.14em', color: 'var(--muted)', textTransform: 'uppercase' }}>
              By submitting you agree to our <a href="/privacy" style={{ textDecoration: 'underline' }}>Privacy Policy</a>.
            </small>
            <button type="submit" className="btn btn-primary">
              Send enquiry
              <svg style={{ width: 16, height: 16 }} viewBox="0 0 16 16" fill="none">
                <path d="M2 8h12M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </button>
          </div>
        </form>
      )}

      <style>{`
        .cf-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .form-card input:focus, .form-card select:focus, .form-card textarea:focus { border-color: var(--ink) !important; }
        @media (max-width: 880px) { .form-card { padding: 28px !important; } .cf-row-2 { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  )
}
