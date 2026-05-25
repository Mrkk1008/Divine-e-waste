const CLIENTS = [
  'Ashirwad',
  'Krishna Ind.',
  'Surat Municipal',
  'Greenstar',
  'TechValley',
  'Maruti',
  'Sahyog',
  'Orion Pack',
  'Westfield',
  'NovaPlast',
]

export default function Clients() {
  return (
    <section className="clients" id="clients">
      <div className="wrap">
        <div className="sec-head reveal">
          <div>
            <div className="eyebrow">Clients · 06</div>
            <h2 className="section-title">
              Trusted by producers &amp; <em>enterprises.</em>
            </h2>
          </div>
          <div className="note">
            A selection of partners we serve — from municipal bodies to plastic producers.
          </div>
        </div>
        <div className="clients-grid">
          {CLIENTS.map(name => (
            <div className="client" key={name}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
