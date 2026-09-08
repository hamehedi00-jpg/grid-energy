type WordmarkProps = {
  className?: string
  tone?: 'ink' | 'paper'
}

export function Wordmark({ className = '', tone = 'ink' }: WordmarkProps) {
  const color = tone === 'ink' ? 'text-ink' : 'text-paper'
  return (
    <div className={`flex items-center gap-2.5 ${color} ${className}`}>
      <GridGlyph tone={tone} />
      <span className="font-sans text-sm font-extrabold tracking-[0.24em]">
        GRID ENERGY
      </span>
    </div>
  )
}

function GridGlyph({ tone }: { tone: 'ink' | 'paper' }) {
  const stroke = tone === 'ink' ? '#17191d' : '#eeeeea'
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <rect x="0.5" y="0.5" width="17" height="17" stroke={stroke} />
      <line x1="6" y1="0.5" x2="6" y2="17.5" stroke={stroke} strokeWidth="0.75" />
      <line x1="12" y1="0.5" x2="12" y2="17.5" stroke={stroke} strokeWidth="0.75" />
      <line x1="0.5" y1="6" x2="17.5" y2="6" stroke={stroke} strokeWidth="0.75" />
      <line x1="0.5" y1="12" x2="17.5" y2="12" stroke={stroke} strokeWidth="0.75" />
      <rect x="6" y="6" width="6" height="6" fill="#d1802a" />
    </svg>
  )
}
