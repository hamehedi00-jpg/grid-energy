const mono = { fontFamily: 'var(--font-plex-mono), ui-monospace, monospace' }
const PAPER = '#eeeeea'
const AMBER = '#e79a3f'

function Node({
  x,
  y,
  w,
  h,
  label,
  accent = false,
}: {
  x: number
  y: number
  w: number
  h: number
  label: string
  accent?: boolean
}) {
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        fill="none"
        stroke={accent ? AMBER : PAPER}
        strokeOpacity={accent ? 1 : 0.55}
      />
      <text
        x={x + w / 2}
        y={y + h / 2 + 4}
        textAnchor="middle"
        style={mono}
        fontSize="13"
        letterSpacing="1.5"
        fill={PAPER}
        fillOpacity="0.9"
      >
        {label}
      </text>
    </g>
  )
}

export function EnergySystemDiagram() {
  return (
    <figure className="w-full border border-line-dark p-6 lg:p-8">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.2em] text-paper/50">
          FIG. — ENERGY SYSTEM
        </span>
        <span className="font-mono text-[10px] tracking-[0.2em] text-amber">
          PV · FACILITY · GRID · STORAGE
        </span>
      </div>
      <svg
        viewBox="0 0 1000 300"
        className="h-auto w-full"
        role="img"
        aria-label="Energy system: PV generation flows to the facility and out to the grid, with storage connected to the facility"
      >
        {/* horizontal flow */}
        <g stroke={PAPER} strokeOpacity="0.45">
          <line x1="240" y1="90" x2="400" y2="90" />
          <line x1="600" y1="90" x2="760" y2="90" />
          {/* facility to storage */}
          <line x1="500" y1="140" x2="500" y2="210" />
        </g>

        {/* flow direction glyphs */}
        <text x="320" y="80" textAnchor="middle" style={mono} fontSize="14" fill={AMBER}>
          →
        </text>
        <text x="680" y="80" textAnchor="middle" style={mono} fontSize="14" fill={AMBER}>
          →
        </text>
        <text x="512" y="182" style={mono} fontSize="14" fill={AMBER}>
          ↕
        </text>

        {/* junction */}
        <circle cx="500" cy="90" r="4" fill={AMBER} />

        <Node x={80} y={50} w={160} h={80} label="PV" accent />
        <Node x={400} y={50} w={200} h={80} label="FACILITY" />
        <Node x={760} y={50} w={160} h={80} label="GRID" />
        <Node x={400} y={210} w={200} h={70} label="STORAGE" />
      </svg>
    </figure>
  )
}
