import type { Metadata } from 'next'
import { Wordmark } from '@/components/wordmark'
import { DirectionSwitcher } from '@/components/direction-switcher'

export const metadata: Metadata = {
  title: 'GRID ENERGY — The energy system',
}

const flow = [
  {
    n: 'S1',
    label: 'SUN',
    input: 'Irradiance on the array plane',
    state: 'RESOURCE',
  },
  {
    n: 'S2',
    label: 'SOLAR',
    input: 'DC generation across the roof',
    state: 'CONVERSION',
  },
  {
    n: 'S3',
    label: 'FACILITY',
    input: 'Consumed behind the meter',
    state: 'LOAD',
  },
  {
    n: 'S4',
    label: 'GRID',
    input: 'Import / export at the boundary',
    state: 'BALANCE',
  },
  {
    n: 'S5',
    label: 'STORAGE',
    input: 'Energy held and time-shifted',
    state: 'BUFFER',
  },
  {
    n: 'S6',
    label: 'ENERGY ASSET',
    input: 'Metered, contracted, settled',
    state: 'RETURN',
  },
]

export default function DirectionB() {
  return (
    <main className="min-h-screen bg-ink text-paper">
      {/* subtle technical grid */}
      <div className="pointer-events-none fixed inset-0 grid-lines-dark opacity-40 [background-size:56px_56px]" />

      <div className="relative">
        {/* Header */}
        <header className="mx-auto flex max-w-[1400px] items-center justify-between border-b border-line-dark px-6 py-5 lg:px-10">
          <Wordmark tone="paper" />
          <span className="hidden font-mono text-[11px] tracking-[0.18em] text-paper/45 md:block">
            SYSTEM SCHEMATIC / REV. B
          </span>
          <span className="font-mono text-[11px] tracking-[0.18em] text-paper/45">
            STATUS: ONLINE
          </span>
        </header>

        {/* Hero */}
        <section className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid grid-cols-12 gap-y-10 border-b border-line-dark py-14 lg:py-20">
            <div className="col-span-12 lg:col-span-7">
              <p className="mb-6 font-mono text-[11px] tracking-[0.22em] text-amber">
                THE ENERGY SYSTEM
              </p>
              <h1 className="text-balance font-sans text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.9] tracking-[-0.03em]">
                ONE ASSET.
                <br />
                SIX STATES OF
                <br />
                <span className="text-amber">ENERGY.</span>
              </h1>
              <p className="mt-8 max-w-lg text-pretty leading-relaxed text-paper/70">
                GRID ENERGY designs the full path — from irradiance to settled
                cash flow. Every rooftop we build is one continuous system,
                instrumented end to end.
              </p>
            </div>

            {/* schematic readout */}
            <div className="col-span-12 lg:col-span-5 lg:pl-10">
              <div className="border border-line-dark bg-ink-soft/60">
                <div className="flex items-center justify-between border-b border-line-dark px-4 py-3 font-mono text-[10px] tracking-[0.18em] text-paper/45">
                  <span>FIG. B — DAILY ENERGY PROFILE</span>
                  <span className="text-amber">SCHEMATIC</span>
                </div>
                <div className="p-4">
                  <ProfileChart />
                  <div className="mt-4 grid grid-cols-3 gap-2 font-mono text-[10px] tracking-[0.1em] text-paper/55">
                    <Legend color="var(--color-amber-bright)" label="SOLAR" />
                    <Legend color="var(--color-paper)" label="LOAD" />
                    <Legend color="var(--color-concrete)" label="STORAGE" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flow spine */}
        <section className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="flex items-baseline justify-between border-b border-line-dark py-4 font-mono text-[11px] tracking-[0.22em] text-paper/45">
            <span>ENERGY FLOW</span>
            <span>SUN → ENERGY ASSET</span>
          </div>

          <ol className="ml-2 border-l border-line-dark py-4 lg:ml-6">
            {flow.map((node, i) => (
              <li
                key={node.n}
                className="relative grid grid-cols-12 items-center gap-4 py-8 pl-8 lg:pl-14"
              >
                {/* node marker */}
                <span
                  aria-hidden="true"
                  className={`absolute -left-[6px] h-3 w-3 ${
                    i === flow.length - 1 ? 'bg-amber' : 'bg-paper'
                  }`}
                />
                <span className="col-span-3 font-mono text-[11px] tracking-[0.18em] text-amber lg:col-span-2">
                  {node.n}
                </span>
                <h3 className="col-span-9 font-sans text-3xl font-extrabold tracking-tight lg:col-span-5 lg:text-5xl">
                  {node.label}
                </h3>
                <p className="col-span-9 col-start-4 font-mono text-[11px] leading-relaxed tracking-[0.06em] text-paper/60 lg:col-span-4 lg:col-start-8">
                  {node.input}
                </p>
                <span className="col-span-3 col-start-1 font-mono text-[10px] tracking-[0.18em] text-paper/40 lg:col-span-1 lg:col-start-12 lg:text-right">
                  {node.state}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* Annotated statement */}
        <section className="border-t border-line-dark">
          <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-y-8 px-6 py-16 lg:px-10 lg:py-24">
            <p className="col-span-12 font-mono text-[11px] tracking-[0.22em] text-paper/40 lg:col-span-3">
              READOUT / 002
            </p>
            <h2 className="col-span-12 text-balance font-sans text-[clamp(1.6rem,3.6vw,3rem)] font-semibold leading-[1.12] tracking-[-0.01em] lg:col-span-9">
              We instrument every stage so energy can be measured, controlled
              and settled — the difference between a solar array and{' '}
              <span className="text-amber-bright">a financial asset.</span>
            </h2>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-line-dark">
          <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-12 font-mono text-[11px] tracking-[0.14em] text-paper/45 lg:flex-row lg:items-end lg:justify-between lg:px-10">
            <div className="space-y-3">
              <Wordmark tone="paper" />
              <p className="max-w-xs leading-relaxed">
                GRID ENERGY LTD · ENERGY INFRASTRUCTURE · DHAKA, BANGLADESH
              </p>
            </div>
            <p className="lg:text-right">
              © {new Date().getFullYear()} GRID ENERGY — THE ENERGY SYSTEM
            </p>
          </div>
        </footer>

        <div className="h-16" />
      </div>
      <DirectionSwitcher />
    </main>
  )
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-2">
      <span
        aria-hidden="true"
        className="inline-block h-2 w-2"
        style={{ backgroundColor: color }}
      />
      {label}
    </span>
  )
}

function ProfileChart() {
  // Schematic, illustrative curves — not measured company data.
  const w = 320
  const h = 150
  const hours = Array.from({ length: 25 }, (_, i) => i)
  const x = (hr: number) => (hr / 24) * w

  // Solar: bell curve peaking at noon
  const solar = (hr: number) => {
    const v = Math.exp(-Math.pow((hr - 12.5) / 3.4, 2))
    return h - v * (h - 18)
  }
  // Load: broad industrial daytime plateau
  const load = (hr: number) => {
    const base = 0.35
    const day = hr > 8 && hr < 19 ? 0.5 : 0
    const v = base + day
    return h - v * (h - 18)
  }

  const solarPts = hours.map((hr) => `${x(hr)},${solar(hr)}`).join(' ')
  const loadPts = hours.map((hr) => `${x(hr)},${load(hr)}`).join(' ')
  const solarArea = `0,${h} ${solarPts} ${w},${h}`

  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      className="h-auto w-full"
      role="img"
      aria-label="Schematic daily energy profile showing solar generation, facility load and storage buffering"
    >
      {[0.25, 0.5, 0.75].map((g) => (
        <line
          key={g}
          x1="0"
          x2={w}
          y1={h * g}
          y2={h * g}
          stroke="var(--color-line-dark)"
          strokeWidth="1"
        />
      ))}
      <polygon points={solarArea} fill="var(--color-amber)" opacity="0.16" />
      <polyline
        points={solarPts}
        fill="none"
        stroke="var(--color-amber-bright)"
        strokeWidth="2"
      />
      <polyline
        points={loadPts}
        fill="none"
        stroke="var(--color-paper)"
        strokeWidth="1.5"
        strokeDasharray="1 0"
      />
      <line
        x1={x(12.5)}
        x2={x(12.5)}
        y1="0"
        y2={h}
        stroke="var(--color-concrete)"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
    </svg>
  )
}
