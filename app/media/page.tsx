import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Media Centre — Divine E-Waste Solution',
}

function PlaceholderImg({ label, style }: { label: string; style?: React.CSSProperties }) {
  return (
    <div className="placeholder" style={{ ...style, display: 'grid', placeItems: 'center' }}>
      [ {label} ]
    </div>
  )
}

const playIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
    <path d="M7 5l13 7-13 7V5z" fill="var(--lime-ink)" />
  </svg>
)

const playMini = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M7 5l13 7-13 7V5z" fill="var(--ink)" />
  </svg>
)

const closeIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.6" />
  </svg>
)

const VIDEOS = [
  { id: 'vid-1', placeholder: 'Video poster · process',   dur: '02:48', meta: 'PROCESS · 02:48',    title: 'How we destroy a hard drive — start to finish.' },
  { id: 'vid-2', placeholder: 'Video poster · facility',  dur: '06:21', meta: 'FACILITY · 06:21',   title: 'A walk-through of our Katargam sorting facility.' },
  { id: 'vid-3', placeholder: 'Video poster · on the road', dur: '01:54', meta: 'ON THE ROAD · 01:54', title: 'A pickup, from doorstep to depot.' },
]

export default function Media() {
  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 60 }}>
        <div className="wrap">
          <div className="crumbs">Home / Media centre</div>
          <h1>Films &amp; <em>photographs</em> from the recycling floor.</h1>
          <p className="lead">
            A visual archive of our facility, our teams, and the materials that pass through us.
          </p>
        </div>
      </section>

      {/* FILTER CHIPS */}
      <div className="wrap">
        <div style={{
          display: 'flex', gap: 8, flexWrap: 'wrap',
          padding: '30px 0', borderBottom: '1px solid var(--rule)',
          alignItems: 'center',
        }}>
          {['All', 'Videos', 'Facility', 'Process', 'Team', 'On the road'].map((chip, i) => (
            <button key={chip} style={{
              padding: '8px 14px', border: '1px solid var(--rule-2)', borderRadius: 999,
              fontSize: 13, color: i === 0 ? 'var(--paper)' : 'var(--ink-2)',
              cursor: 'pointer',
              background: i === 0 ? 'var(--ink)' : 'transparent',
              borderColor: i === 0 ? 'var(--ink)' : 'var(--rule-2)',
            }}>
              {chip}
            </button>
          ))}
          <div style={{ marginLeft: 'auto', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>
            14 photos · 4 films
          </div>
        </div>
      </div>

      {/* VIDEO HERO */}
      <section style={{ padding: '56px 0' }}>
        <div className="wrap">
          <div style={{
            position: 'relative', aspectRatio: '16/9',
            borderRadius: 'var(--radius)', overflow: 'hidden',
            background: 'var(--ink)', border: '1px solid var(--rule)',
          }}>
            <PlaceholderImg label="Drop a video poster · 16:9" style={{ position: 'absolute', inset: 0, borderRadius: 0, border: 0 }} />
            <span style={{
              position: 'absolute', top: 24, left: 24,
              fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
              padding: '6px 10px', background: 'var(--lime)', color: 'var(--lime-ink)',
            }}>Featured film · 04:12</span>
            <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.55) 100%)', pointerEvents: 'none' }}>
              <div style={{
                width: 92, height: 92, borderRadius: '50%',
                background: 'var(--lime)', display: 'grid', placeItems: 'center',
                boxShadow: '0 0 0 8px rgba(255,255,255,0.18), 0 12px 32px rgba(0,0,0,0.25)',
              }}>
                {playIcon}
              </div>
            </div>
            <div style={{ position: 'absolute', left: 24, bottom: 24, right: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', color: '#fff' }}>
              <div style={{ fontFamily: 'var(--display)', fontSize: 'clamp(22px,2.4vw,34px)', letterSpacing: '-0.025em', fontWeight: 500, textShadow: '0 2px 12px rgba(0,0,0,0.4)' }}>
                Inside Katargam: a day on the sorting floor.
              </div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', padding: '6px 10px', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(6px)', border: '1px solid rgba(255,255,255,0.2)' }}>
                DOCUMENTARY · 4:12
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO GRID */}
      <section className="section" style={{ paddingTop: 30 }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow" style={{ marginBottom: 18, display: 'flex' }}>Films</span>
              <h2>From the field.</h2>
            </div>
            <p>Short documentaries and process films — how we handle a hard drive, what a pickup looks like, what happens after the truck leaves your bay.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }} className="videos-grid">
            {VIDEOS.map(v => (
              <article key={v.id} style={{ border: '1px solid var(--rule)', background: 'var(--surface)', borderRadius: 'var(--radius)', overflow: 'hidden' }}>
                <div style={{ aspectRatio: '16/9', position: 'relative', overflow: 'hidden' }}>
                  <PlaceholderImg label={v.placeholder} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', borderRadius: 0, border: 0 }} />
                  <span style={{ position: 'absolute', left: 16, bottom: 16, width: 44, height: 44, borderRadius: '50%', background: 'var(--paper)', display: 'grid', placeItems: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.18)' }}>
                    {playMini}
                  </span>
                  <span style={{ position: 'absolute', right: 12, bottom: 12, fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase', padding: '4px 8px', background: 'rgba(0,0,0,0.7)', color: '#fff' }}>{v.dur}</span>
                </div>
                <div style={{ padding: '18px 22px 22px' }}>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10.5, letterSpacing: '0.14em', color: 'var(--muted)', textTransform: 'uppercase' }}>{v.meta}</div>
                  <h4 style={{ fontFamily: 'var(--display)', fontSize: 17, letterSpacing: '-0.015em', lineHeight: 1.25, margin: '10px 0 0', fontWeight: 500 }}>{v.title}</h4>
                </div>
              </article>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:880px){.videos-grid{grid-template-columns:1fr 1fr!important;}}@media(max-width:560px){.videos-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* GALLERY 01 — FACILITY */}
      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow" style={{ marginBottom: 18, display: 'flex' }}>Gallery · 01</span>
              <h2>Facility &amp;<br />sorting floor.</h2>
            </div>
            <p>Wide shots of the intake bay, weighing stations, storage racks, and the machinery that handles end-of-life electronics every day.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridAutoRows: 96, gap: 12 }} className="gallery-grid">
            <PlaceholderImg label="Sorting floor · wide angle"  style={{ gridColumn: 'span 8', gridRow: 'span 4', borderRadius: 'var(--radius)' }} />
            <PlaceholderImg label="Loading bay · tall"          style={{ gridColumn: 'span 4', gridRow: 'span 5', borderRadius: 'var(--radius)' }} />
            <PlaceholderImg label="Weighing station"            style={{ gridColumn: 'span 4', gridRow: 'span 3', borderRadius: 'var(--radius)' }} />
            <PlaceholderImg label="Storage racks"               style={{ gridColumn: 'span 4', gridRow: 'span 3', borderRadius: 'var(--radius)' }} />
            <PlaceholderImg label="Sorting bins"                style={{ gridColumn: 'span 6', gridRow: 'span 3', borderRadius: 'var(--radius)' }} />
            <PlaceholderImg label="Facility exterior"           style={{ gridColumn: 'span 6', gridRow: 'span 3', borderRadius: 'var(--radius)' }} />
          </div>
        </div>
        <style>{`@media(max-width:880px){.gallery-grid{grid-template-columns:repeat(2,1fr)!important;grid-auto-rows:180px!important;}.gallery-grid>*{grid-column:span 2!important;grid-row:span 1!important;}}`}</style>
      </section>

      {/* GALLERY 02 — PROCESS */}
      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow" style={{ marginBottom: 18, display: 'flex' }}>Gallery · 02</span>
              <h2>Process &amp;<br />destruction.</h2>
            </div>
            <p>Close-ups of data destruction, drive shredding, component sorting, and the paperwork that travels alongside every consignment.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridAutoRows: 96, gap: 12 }} className="gallery-grid">
            <PlaceholderImg label="Drive shredder"       style={{ gridColumn: 'span 5', gridRow: 'span 4', borderRadius: 'var(--radius)' }} />
            <PlaceholderImg label="Wipe station"          style={{ gridColumn: 'span 7', gridRow: 'span 4', borderRadius: 'var(--radius)' }} />
            <PlaceholderImg label="Asset tag"             style={{ gridColumn: 'span 3', gridRow: 'span 3', borderRadius: 'var(--radius)' }} />
            <PlaceholderImg label="Component pile"        style={{ gridColumn: 'span 3', gridRow: 'span 3', borderRadius: 'var(--radius)' }} />
            <PlaceholderImg label="Certificate close-up"  style={{ gridColumn: 'span 6', gridRow: 'span 3', borderRadius: 'var(--radius)' }} />
          </div>
        </div>
      </section>

      {/* GALLERY 03 — PEOPLE */}
      <section className="section" style={{ background: 'var(--paper-2)' }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <span className="eyebrow" style={{ marginBottom: 18, display: 'flex' }}>Gallery · 03</span>
              <h2>People &amp;<br />on the road.</h2>
            </div>
            <p>The team that keeps the facility running, the trucks that bring consignments in, and the partners we work with across India.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridAutoRows: 96, gap: 12 }} className="gallery-grid">
            <PlaceholderImg label="Team portrait · group"      style={{ gridColumn: 'span 4', gridRow: 'span 3', borderRadius: 'var(--radius)' }} />
            <PlaceholderImg label="Operator at console"        style={{ gridColumn: 'span 4', gridRow: 'span 3', borderRadius: 'var(--radius)' }} />
            <PlaceholderImg label="Loading dock · golden hour" style={{ gridColumn: 'span 4', gridRow: 'span 3', borderRadius: 'var(--radius)' }} />
            <PlaceholderImg label="Truck on highway"           style={{ gridColumn: 'span 7', gridRow: 'span 4', borderRadius: 'var(--radius)' }} />
            <PlaceholderImg label="Field pickup · client site" style={{ gridColumn: 'span 5', gridRow: 'span 4', borderRadius: 'var(--radius)' }} />
          </div>
        </div>
      </section>
    </>
  )
}
