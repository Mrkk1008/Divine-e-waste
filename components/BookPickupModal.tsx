'use client'

import { useState, useEffect, useRef } from 'react'

function IconClose() {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
}
function IconCheck({ s = 13 }: { s?: number }) {
  return <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 12.5l5 5 10-11" /></svg>
}
function IconArrow() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 12h15M13 6l6 6-6 6" /></svg>
}
function IconHome() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11l8-7 8 7" /><path d="M6 9.5V20h12V9.5" /><path d="M10 20v-5h4v5" /></svg>
}
function IconBuilding() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="3" width="14" height="18" rx="1.5" /><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" /></svg>
}
function IconLeaf() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19c0-8 6-13 14-13 0 8-6 13-14 13z" /></svg>
}
function DevLaptop() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="5" width="16" height="11" rx="1.5" /><path d="M2.5 19h19l-1-3H3.5z" /></svg>
}
function DevPhone() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="7" y="2.5" width="10" height="19" rx="2.5" /><path d="M10.5 18.5h3" /></svg>
}
function DevCpu() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2.5" width="12" height="19" rx="2" /><path d="M9 6h6M9 9h6" /><circle cx="12" cy="16.5" r="1.6" /></svg>
}
function DevTv() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="4.5" width="19" height="12" rx="2" /><path d="M8.5 20h7M12 16.5V20" /></svg>
}
function IconRecycle() {
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 4.5l2.2 3.8-3.8.2" /><path d="M12 3.5l3 5.2-2.4 1.4" /><path d="M19.5 13l-2.5 4.3-3-1.7" /><path d="M14.5 20.5h-5l1.4-2.4" /><path d="M4.5 13l2.5 4.3 2.6-1.6" /><path d="M7 8.5L4.5 13l2.7.2" /></svg>
}

const ITEMS = [
  { key: 'laptop', label: 'Laptops & computers',             Icon: DevLaptop },
  { key: 'phone',  label: 'Phones & tablets',                Icon: DevPhone },
  { key: 'cpu',    label: 'Desktops & CPUs',                 Icon: DevCpu },
  { key: 'tv',     label: 'TVs & monitors',                  Icon: DevTv },
  { key: 'misc',   label: 'Cables, chargers & small gadgets',Icon: IconRecycle },
]
const WINDOWS = ['9–12 am', '12–3 pm', '3–6 pm', '6–6:30 pm']

function isEmailValid(v: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) }
function hasValue(v: string) { return v.trim().length > 0 }

interface ModalProps { open: boolean; onClose: () => void }

export default function BookPickupModal({ open, onClose }: ModalProps) {
  const [step, setStep] = useState(0)
  const [type, setType] = useState<'residential' | 'business'>('residential')
  const [picked, setPicked] = useState<Record<string, boolean>>({})
  const [form, setForm] = useState({ name: '', email: '', phone: '', address: '', date: '', win: '' })
  const [touched, setTouched] = useState(false)
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (open) {
      setStep(0); setTouched(false)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape' && open) onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  const anyItem = Object.values(picked).some(Boolean)
  const set = (k: string, v: string) => setForm(f => ({ ...f, [k]: v }))
  const toggle = (k: string) => setPicked(p => ({ ...p, [k]: !p[k] }))

  const errs = {
    name:    !hasValue(form.name),
    email:   !isEmailValid(form.email),
    address: !hasValue(form.address),
    date:    !hasValue(form.date),
    win:     !hasValue(form.win),
  }
  const step2Ok = !Object.values(errs).some(Boolean)

  const next = () => {
    if (step === 1) { setTouched(true); if (!step2Ok) return }
    setStep(s => s + 1); setTouched(false)
  }
  const back = () => setStep(s => Math.max(0, s - 1))

  const dateMin = new Date(Date.now() + 86400000).toISOString().slice(0, 10)
  const pickedList = ITEMS.filter(i => picked[i.key]).map(i => i.label)

  return (
    <div className="modal-scrim" onMouseDown={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="modal" ref={dialogRef} role="dialog" aria-modal="true" aria-label="Book a pickup">
        <button className="modal-x" onClick={onClose} aria-label="Close">
          <IconClose />
        </button>

        {step < 2 && (
          <div className="modal-steps">
            {['Items', 'Details', 'Done'].map((l, i) => (
              <div key={l} className={`ms${i === step ? ' on' : ''}${i < step ? ' done' : ''}`}>
                <span className="ms-n">{i < step ? <IconCheck s={13} /> : i + 1}</span>
                {l}
              </div>
            ))}
          </div>
        )}

        {/* Step 1 — items */}
        {step === 0 && (
          <div className="modal-body">
            <h3>What are we picking up?</h3>
            <p className="modal-sub">Select everything you&apos;d like recycled.</p>
            <div className="type-toggle">
              <button className={type === 'residential' ? 'on' : ''} onClick={() => setType('residential')}>
                <IconHome /> Residential
              </button>
              <button className={type === 'business' ? 'on' : ''} onClick={() => setType('business')}>
                <IconBuilding /> Business
              </button>
            </div>
            <div className="item-grid">
              {ITEMS.map(it => (
                <button key={it.key} className={`item-card${picked[it.key] ? ' on' : ''}`} onClick={() => toggle(it.key)}>
                  <span className="item-ic"><it.Icon /></span>
                  <span className="item-lb">{it.label}</span>
                  <span className="item-check"><IconCheck s={14} /></span>
                </button>
              ))}
            </div>
            <div className="modal-foot">
              <span className="mf-note">{anyItem ? `${pickedList.length} selected` : 'Pick at least one'}</span>
              <button className="btn btn-primary btn-lg" disabled={!anyItem} onClick={next}>
                Continue <IconArrow />
              </button>
            </div>
          </div>
        )}

        {/* Step 2 — details */}
        {step === 1 && (
          <div className="modal-body">
            <h3>Where &amp; when?</h3>
            <p className="modal-sub">
              Free pickup, {type === 'business' ? 'scheduled for your site' : 'right from your door'}.
            </p>
            <div className="form-grid">
              <label className={`fld${touched && errs.name ? ' err' : ''}`}>
                <span>Full name</span>
                <input value={form.name} onChange={e => set('name', e.target.value)} placeholder="Priya Sharma" />
                {touched && errs.name && <i>Please enter your name</i>}
              </label>
              <label className={`fld${touched && errs.email ? ' err' : ''}`}>
                <span>Email</span>
                <input value={form.email} onChange={e => set('email', e.target.value)} placeholder="you@email.com" />
                {touched && errs.email && <i>Enter a valid email</i>}
              </label>
              <label className="fld">
                <span>Phone <small>(optional)</small></span>
                <input value={form.phone} onChange={e => set('phone', e.target.value)} placeholder="+91 98765 43210" />
              </label>
              <label className={`fld${touched && errs.address ? ' err' : ''}`}>
                <span>{type === 'business' ? 'Business address' : 'Pickup address'}</span>
                <input value={form.address} onChange={e => set('address', e.target.value)} placeholder="Street, City, State" />
                {touched && errs.address && <i>We need an address</i>}
              </label>
              <label className={`fld${touched && errs.date ? ' err' : ''}`}>
                <span>Preferred date</span>
                <input type="date" min={dateMin} value={form.date} onChange={e => set('date', e.target.value)} />
                {touched && errs.date && <i>Choose a date</i>}
              </label>
              <label className={`fld${touched && errs.win ? ' err' : ''}`}>
                <span>Time window</span>
                <div className="win-row">
                  {WINDOWS.map(w => (
                    <button type="button" key={w} className={`win${form.win === w ? ' on' : ''}`} onClick={() => set('win', w)}>
                      {w}
                    </button>
                  ))}
                </div>
                {touched && errs.win && <i>Pick a time window</i>}
              </label>
            </div>
            <div className="modal-foot">
              <button className="btn btn-ghost btn-lg" onClick={back}>Back</button>
              <button className="btn btn-primary btn-lg" onClick={next}>
                Confirm pickup <IconCheck s={18} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3 — success */}
        {step === 2 && (
          <div className="modal-body success">
            <div className="ok-burst">
              <div className="ok-ring" />
              <div className="ok-check"><IconCheck s={40} /></div>
            </div>
            <h3>You&apos;re booked, {form.name.split(' ')[0] || 'friend'}! 🌱</h3>
            <p className="modal-sub">
              A confirmation is on its way to <b>{form.email}</b>. Our crew will arrive on:
            </p>
            <div className="ok-summary">
              <div><span>When</span><b>{form.date} · {form.win}</b></div>
              <div><span>Where</span><b>{form.address}</b></div>
              <div><span>Items</span><b>{pickedList.join(', ') || '—'}</b></div>
              <div><span>Type</span><b style={{ textTransform: 'capitalize' }}>{type}</b></div>
            </div>
            <div className="ok-loop">
              <IconLeaf /> Track your devices through every stage of the Divine loop.
            </div>
            <div className="modal-foot center">
              <button className="btn btn-primary btn-lg" onClick={onClose}>Done</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
