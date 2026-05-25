export default function MarqueeSection() {
  const items = [
    { text: 'Collection', type: 'leaf' as const },
    { text: 'Data destruction', type: 'em' as const },
    { text: 'EPR compliance', type: 'leaf' as const },
    { text: 'Certified recycling', type: 'em' as const },
    { text: 'CSR collaboration', type: 'leaf' as const },
  ]

  function renderDivider(type: 'leaf' | 'em') {
    if (type === 'leaf') return <span className="leaf" />
    return <em>·</em>
  }

  return (
    <div className="marquee">
      <div className="marquee-track">
        {[0, 1].map(rep => (
          <span key={rep}>
            {items.map((item, i) => (
              <span key={i}>
                {item.text} {renderDivider(item.type)}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}
