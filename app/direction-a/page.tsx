import type { Metadata } from 'next'
import { Wordmark } from '@/components/wordmark'
import { DirectionSwitcher } from '@/components/direction-switcher'

export const metadata: Metadata = {
  title: 'GRID ENERGY — Energy is an asset',
}

const nav = ['SYSTEM', 'ASSETS', 'CAPITAL', 'COMPANY']

const sequence = [
  { n: '01', label: 'ROOF', note: 'Under-used industrial surface' },
  { n: '02', label: 'ASSET', note: 'Engineered, financed, owned' },
  { n: '03', label: 'ENERGY', note: 'Generated on site, at load' },
  { n: '04', label: 'CASH FLOW', note: 'Metered, contracted, durable' },
]

const buildout = [
  { n: '01', title: 'Rooftop Solar', status: 'ACTIVE' },
  { n: '02', title: 'Energy Assets', status: 'ACTIVE' },
  { n: '03', title: 'Battery Storage', status: 'NEAR-TERM' },
  { n: '04', title: 'Energy Management', status: 'NEAR-TERM' },
  { n: '05', title: 'EV Infrastructure', status: 'PLANNED' },
  { n: '06', title: 'Distributed Energy', status: 'PLANNED' },
  { n: '07', title: 'Utility-Scale Generation', status: 'HORIZON' },
  { n: '08', title: 'Energy Infrastructure Platform', status: 'HORIZON' },
]

const axes = [
  { k: 'ENERGY', v: 'Generation, storage and delivery engineered for industrial load.' },
  { k: 'ENGINEERING', v: 'Structural, electrical and performance design held to grid standard.' },
  { k: 'CAPITAL', v: 'Assets structured, financed and owned for long-duration return.' },
  { k: 'TECHNOLOGY', v: 'Monitoring, control and settlement across a distributed fleet.' },
]

export default function DirectionA() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      {/* Header */}
      <header className="mx-auto flex max-w-[1400px] items-center justify-between border-b border-line px-6 py-5 lg:px-10">
        <Wordmark />
        <nav className="hidden gap-8 font-mono text-[11px] tracking-[0.18em] text-concrete md:flex">
          {nav.map((item) => (
            <span key={item} className="transition-colors hover:text-ink">
              {item}
            </span>
          ))}
        </nav>
        <span className="hidden font-mono text-[11px] tracking-[0.18em] text-concrete lg:block">
          DHAKA · 23.8103°N
        </span>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-12 border-b border-line">
          <div className="col-span-12 py-6 lg:col-span-8 lg:border-r lg:border-line lg:py-16 lg:pr-10">
            <p className="mb-8 font-mono text-[11px] tracking-[0.22em] text-concrete">
              COMMERCIAL &amp; INDUSTRIAL ENERGY INFRASTRUCTURE — BANGLADESH
            </p>
            <h1 className="text-balance font-sans text-[clamp(3rem,11vw,10rem)] font-black leading-[0.86] tracking-[-0.03em]">
              ENERGY IS
              <br />
              AN <span className="text-amber">ASSET.</span>
            </h1>
            <p className="mt-10 max-w-xl text-pretty text-lg leading-relaxed text-ink/80">
              GRID ENERGY engineers, finances and operates the infrastructure
              that turns industrial rooftops into productive, long-duration
              energy assets.
            </p>
          </div>
          <div className="col-span-12 flex flex-col justify-between gap-8 py-6 font-mono text-[11px] leading-relaxed tracking-[0.1em] text-concrete lg:col-span-4 lg:py-16 lg:pl-10">
            <div className="space-y-6">
              <Meta label="MANDATE" value="On-site generation for industrial load" />
              <Meta label="STAGE" value="C&I rooftop — build-out underway" />
              <Meta label="MODEL" value="Own · Operate · Settle" />
            </div>
            <div className="flex items-end justify-between border-t border-line pt-6">
              <span>FIG. A</span>
              <span className="font-sans text-6xl font-black leading-none text-ink">
                01
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Conceptual sequence */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-baseline justify-between border-b border-line py-4">
          <span className="font-mono text-[11px] tracking-[0.22em] text-concrete">
            THE CONVERSION
          </span>
          <span className="font-mono text-[11px] tracking-[0.22em] text-concrete">
            ROOF → ASSET → ENERGY → CASH FLOW
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {sequence.map((step, i) => (
            <div
              key={step.n}
              className={`relative border-line py-10 lg:py-16 ${
                i !== 0 ? 'border-t sm:border-t lg:border-t-0 lg:border-l' : ''
              } ${i === 1 ? 'lg:border-l' : ''} ${i > 0 ? 'lg:pl-8' : ''}`}
            >
              <span className="font-mono text-[11px] tracking-[0.2em] text-amber">
                {step.n}
              </span>
              <h3 className="mt-4 font-sans text-3xl font-extrabold tracking-tight lg:text-4xl">
                {step.label}
              </h3>
              <p className="mt-3 max-w-[16ch] font-mono text-[11px] leading-relaxed tracking-[0.06em] text-concrete">
                {step.note}
              </p>
              {i < sequence.length - 1 && (
                <span className="absolute right-6 top-10 hidden font-sans text-2xl text-line lg:block">
                  →
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Thesis */}
      <section className="border-y border-line bg-ink text-paper">
        <div className="mx-auto grid max-w-[1400px] grid-cols-12 px-6 py-16 lg:px-10 lg:py-28">
          <p className="col-span-12 mb-8 font-mono text-[11px] tracking-[0.22em] text-paper/50 lg:col-span-3 lg:mb-0">
            THESIS / 001
          </p>
          <h2 className="col-span-12 text-balance font-sans text-[clamp(1.75rem,4vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.01em] lg:col-span-9">
            Bangladesh runs on constrained, expensive and carbon-heavy power.
            Above every factory sits an idle surface. We convert that surface
            into infrastructure — and infrastructure into{' '}
            <span className="text-amber-bright">predictable return.</span>
          </h2>
        </div>
      </section>

      {/* Build-out ladder */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex items-baseline justify-between border-b border-line py-4">
          <span className="font-mono text-[11px] tracking-[0.22em] text-concrete">
            THE BUILD-OUT
          </span>
          <span className="font-mono text-[11px] tracking-[0.22em] text-concrete">
            ROOFTOP → PLATFORM
          </span>
        </div>
        <ol>
          {buildout.map((phase) => (
            <li
              key={phase.n}
              className="group grid grid-cols-12 items-center gap-4 border-b border-line py-6 transition-colors hover:bg-muted/60"
            >
              <span className="col-span-2 font-mono text-[11px] tracking-[0.2em] text-concrete lg:col-span-1">
                {phase.n}
              </span>
              <h3 className="col-span-10 font-sans text-2xl font-semibold tracking-tight lg:col-span-8 lg:text-4xl">
                {phase.title}
              </h3>
              <span
                className={`col-span-12 col-start-3 font-mono text-[10px] tracking-[0.2em] lg:col-span-3 lg:col-start-10 lg:text-right ${
                  phase.status === 'ACTIVE' ? 'text-amber' : 'text-concrete'
                }`}
              >
                {phase.status}
              </span>
            </li>
          ))}
        </ol>
      </section>

      {/* Positioning */}
      <section className="mx-auto max-w-[1400px] px-6 py-16 lg:px-10 lg:py-28">
        <div className="grid grid-cols-12 gap-y-10">
          <div className="col-span-12 lg:col-span-4">
            <p className="font-mono text-[11px] tracking-[0.22em] text-concrete">
              POSITION
            </p>
            <h2 className="mt-6 text-balance font-sans text-3xl font-extrabold leading-tight tracking-tight lg:text-5xl">
              At the intersection of four disciplines.
            </h2>
          </div>
          <div className="col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:col-span-8">
            {axes.map((axis, i) => (
              <div
                key={axis.k}
                className={`border-line py-8 lg:px-10 ${
                  i % 2 === 1 ? 'sm:border-l' : ''
                } ${i > 1 ? 'border-t' : 'border-t sm:border-t-0 lg:border-t'} ${
                  i < 2 ? 'sm:border-t lg:border-t' : ''
                }`}
              >
                <h3 className="font-sans text-xl font-bold tracking-[0.06em] text-amber">
                  {axis.k}
                </h3>
                <p className="mt-3 max-w-[34ch] text-pretty leading-relaxed text-ink/75">
                  {axis.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-8 px-6 py-12 font-mono text-[11px] tracking-[0.14em] text-concrete lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <div className="space-y-3">
            <Wordmark />
            <p className="max-w-xs leading-relaxed">
              GRID ENERGY LTD · ENERGY INFRASTRUCTURE · DHAKA, BANGLADESH
            </p>
          </div>
          <p className="lg:text-right">© {new Date().getFullYear()} GRID ENERGY — ENERGY IS AN ASSET.</p>
        </div>
      </footer>

      <div className="h-16" />
      <DirectionSwitcher />
    </main>
  )
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-line pt-4">
      <p className="text-amber">{label}</p>
      <p className="mt-1 text-ink/70">{value}</p>
    </div>
  )
}
