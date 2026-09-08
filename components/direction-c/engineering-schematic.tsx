const mono = { fontFamily: 'var(--font-plex-mono), ui-monospace, monospace' }
const PAPER = '#eeeeea'
const AMBER = '#e79a3f'
const LINE = '#4a4e56'

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

export function EngineeringSchematic() {
  return (
    <figure className="w-full">
      <svg
        viewBox="0 0 1000 330"
        className="h-auto w-full"
        role="img"
        aria-label="System architecture: PV array to inverter to revenue meter, splitting to facility load and grid, with a monitoring data tap"
      >
        {/* connectors */}
        <g stroke={PAPER} strokeOpacity="0.45">
          <line x1="200" y1="130" x2="300" y2="130" />
          <line x1="450" y1="130" x2="550" y2="130" />
          <line x1="700" y1="130" x2="770" y2="130" />
          <line x1="770" y1="130" x2="770" y2="72" />
          <line x1="770" y1="72" x2="800" y2="72" />
          <line x1="770" y1="130" x2="770" y2="188" />
          <line x1="770" y1="188" x2="800" y2="188" />
        </g>
        {/* data tap */}
        <line
          x1="625"
          y1="160"
          x2="625"
          y2="250"
          stroke={AMBER}
          strokeOpacity="0.8"
          strokeDasharray="4 5"
        />

        {/* current labels */}
        <text x="250" y="120" textAnchor="middle" style={mono} fontSize="11" fill={PAPER} fillOpacity="0.5" letterSpacing="1.5">DC</text>
        <text x="500" y="120" textAnchor="middle" style={mono} fontSize="11" fill={PAPER} fillOpacity="0.5" letterSpacing="1.5">AC</text>
        <text x="643" y="215" style={mono} fontSize="11" fill={AMBER} letterSpacing="1.5">DATA</text>

        {/* split node */}
        <circle cx="770" cy="130" r="4" fill={AMBER} />

        {/* nodes */}
        <Node x={40} y={90} w={160} h={80} label="PV ARRAY" accent />
        <Node x={300} y={90} w={150} h={80} label="INVERTER" />
        <Node x={550} y={90} w={150} h={80} label="METER" />
        <Node x={800} y={42} w={160} h={60} label="FACILITY LOAD" />
        <Node x={800} y={158} w={160} h={60} label="GRID" />
        <Node x={550} y={250} w={150} h={56} label="MONITORING" />
      </svg>
    </figure>
  )
}
