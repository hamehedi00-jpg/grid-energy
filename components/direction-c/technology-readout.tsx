const mono = { fontFamily: 'var(--font-plex-mono), ui-monospace, monospace' }
const PAPER = '#eeeeea'
const AMBER = '#e79a3f'

const curve = [
  [40, 250],
  [105, 236],
  [170, 192],
  [235, 120],
  [300, 72],
  [365, 86],
  [430, 150],
  [495, 214],
  [560, 249],
]

const channels = [
  { name: 'GENERATION', level: 0.82 },
  { name: 'SELF-CONSUMPTION', level: 0.64 },
  { name: 'GRID EXPORT', level: 0.31 },
  { name: 'ARRAY AVAILABILITY', level: 0.97 },
]

export function TechnologyReadout() {
  const line = curve.map((p) => p.join(',')).join(' ')
  const area = `40,250 ${line} 560,250`

  return (
    <div className="grid grid-cols-1 border border-line-dark lg:grid-cols-[1.5fr_1fr]">
      {/* chart */}
      <div className="border-b border-line-dark p-6 lg:border-b-0 lg:border-r">
        <div className="mb-4 flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-[0.2em] text-paper/50">
            DAILY GENERATION PROFILE
          </span>
          <span className="font-mono text-[10px] tracking-[0.2em] text-amber">
            SCHEMATIC
          </span>
        </div>
        <svg
          viewBox="0 0 600 290"
          className="h-auto w-full"
          role="img"
          aria-label="Illustrative daily solar generation profile peaking at midday"
        >
          {[70, 130, 190, 250].map((y) => (
            <line key={y} x1="40" y1={y} x2="560" y2={y} stroke={PAPER} strokeOpacity="0.1" />
          ))}
          <polygon points={area} fill={AMBER} fillOpacity="0.1" />
          <polyline points={line} fill="none" stroke={AMBER} strokeWidth="1.75" />
          {curve.map((p, i) =>
            i % 2 === 0 ? <circle key={i} cx={p[0]} cy={p[1]} r="2.5" fill={AMBER} /> : null,
          )}
          {[
            ['06', 105],
            ['12', 300],
            ['18', 495],
          ].map(([t, x]) => (
            <text
              key={t as string}
              x={x as number}
              y="278"
              textAnchor="middle"
              style={mono}
              fontSize="11"
              fill={PAPER}
              fillOpacity="0.45"
              letterSpacing="1"
            >
              {t}
            </text>
          ))}
        </svg>
      </div>

      {/* channels */}
      <div className="flex flex-col justify-between p-6">
        <div className="space-y-5">
          {channels.map((c) => (
            <div key={c.name}>
              <div className="mb-2 flex items-center justify-between font-mono text-[10px] tracking-[0.18em]">
                <span className="text-paper/60">{c.name}</span>
                <span className="text-paper/30">MONITORED</span>
              </div>
              <div className="h-[3px] w-full bg-paper/10">
                <div
                  className="h-full bg-amber"
                  style={{ width: `${Math.round(c.level * 100)}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex items-center gap-2 border-t border-line-dark pt-4">
          <span className="h-2 w-2 bg-amber" aria-hidden="true" />
          <span className="font-mono text-[10px] tracking-[0.18em] text-paper/55">
            SYSTEM STATUS — NOMINAL
          </span>
        </div>
      </div>
    </div>
  )
}
