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

const metrics = [
  { label: 'TODAY', value: '1,840', unit: 'kWh' },
  { label: 'MONTH', value: '52.6', unit: 'MWh' },
  { label: 'SELF-CONSUMPTION', value: '64', unit: '%' },
  { label: 'GRID EXPORT', value: '31', unit: '%' },
]

export function AssetDashboard() {
  const line = curve.map((p) => p.join(',')).join(' ')
  const area = `40,250 ${line} 560,250`

  return (
    <div className="border border-line-dark">
      {/* header */}
      <div className="flex flex-col gap-3 border-b border-line-dark px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4 font-mono text-[11px] tracking-[0.2em]">
          <span className="text-amber">GRID ENERGY / ASSET 001</span>
          <span className="hidden text-paper/40 sm:inline">
            FACILITY — C&amp;I ROOFTOP
          </span>
        </div>
        <span className="w-fit border border-amber/50 px-2.5 py-1 font-mono text-[10px] tracking-[0.2em] text-amber">
          ILLUSTRATIVE
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr]">
        {/* live + chart */}
        <div className="border-b border-line-dark p-6 lg:border-b-0 lg:border-r">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] text-paper/50">
                LIVE GENERATION
              </p>
              <p className="mt-3 font-sans text-5xl font-black leading-none tracking-tight text-paper lg:text-6xl">
                312.4
                <span className="ml-2 align-top font-mono text-base font-normal tracking-normal text-paper/45">
                  kW
                </span>
              </p>
              <p className="mt-2 font-mono text-[10px] tracking-[0.18em] text-paper/40">
                OF 480 kWp INSTALLED
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span
                className="h-2 w-2 animate-pulse bg-amber"
                aria-hidden="true"
              />
              <span className="font-mono text-[10px] tracking-[0.18em] text-paper/55">
                LIVE
              </span>
            </div>
          </div>

          <div className="mt-6">
            <div className="mb-3 flex items-center justify-between">
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
                <line
                  key={y}
                  x1="40"
                  y1={y}
                  x2="560"
                  y2={y}
                  stroke={PAPER}
                  strokeOpacity="0.1"
                />
              ))}
              <polygon points={area} fill={AMBER} fillOpacity="0.1" />
              <polyline points={line} fill="none" stroke={AMBER} strokeWidth="1.75" />
              {curve.map((p, i) =>
                i % 2 === 0 ? (
                  <circle key={i} cx={p[0]} cy={p[1]} r="2.5" fill={AMBER} />
                ) : null,
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
        </div>

        {/* metric tiles + availability */}
        <div className="flex flex-col">
          <div className="grid grid-cols-2">
            {metrics.map((m, i) => (
              <div
                key={m.label}
                className={`px-5 py-6 ${i % 2 === 0 ? 'border-r border-line-dark' : ''} ${
                  i < 2 ? 'border-b border-line-dark' : ''
                }`}
              >
                <p className="font-mono text-[10px] tracking-[0.18em] text-paper/45">
                  {m.label}
                </p>
                <p className="mt-3 font-sans text-2xl font-extrabold leading-none tracking-tight text-paper">
                  {m.value}
                  <span className="ml-1 font-mono text-xs font-normal tracking-normal text-paper/40">
                    {m.unit}
                  </span>
                </p>
              </div>
            ))}
          </div>

          {/* availability bar */}
          <div className="border-t border-line-dark px-5 py-6">
            <div className="mb-2 flex items-center justify-between font-mono text-[10px] tracking-[0.18em]">
              <span className="text-paper/50">SYSTEM AVAILABILITY</span>
              <span className="text-paper/70">97%</span>
            </div>
            <div className="h-[3px] w-full bg-paper/10">
              <div className="h-full bg-amber" style={{ width: '97%' }} />
            </div>
          </div>

          <div className="mt-auto flex items-center gap-2 border-t border-line-dark px-5 py-4">
            <span className="h-2 w-2 bg-amber" aria-hidden="true" />
            <span className="font-mono text-[10px] tracking-[0.18em] text-paper/55">
              SYSTEM STATUS — NOMINAL
            </span>
          </div>
        </div>
      </div>

      {/* disclaimer */}
      <div className="border-t border-line-dark px-5 py-3">
        <p className="font-mono text-[10px] leading-relaxed tracking-[0.14em] text-paper/35">
          ILLUSTRATIVE INTERFACE — REPRESENTATIVE VALUES, NOT A GRID ENERGY
          PROJECT METRIC.
        </p>
      </div>
    </div>
  )
}
