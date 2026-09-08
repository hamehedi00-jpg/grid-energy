import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Wordmark } from '@/components/wordmark'
import { DirectionSwitcher } from '@/components/direction-switcher'

export const metadata: Metadata = {
  title: 'GRID ENERGY — Brand & art direction study',
}

const directions = [
  {
    code: 'A',
    href: '/direction-a',
    title: 'Energy Infrastructure',
    desc: 'Editorial and architectural. Large typography, technical diagrams, minimal colour and a subtle solar amber. A global infrastructure institution.',
    tone: 'Paper / editorial',
    image: null,
  },
  {
    code: 'B',
    href: '/direction-b',
    title: 'The Energy System',
    desc: 'Data-driven. The flow from sun to settled cash flow, rendered as an instrumented schematic with annotations and data visualization.',
    tone: 'Ink / schematic',
    image: null,
  },
  {
    code: 'C',
    href: '/direction-c',
    title: 'Industrial Modernism',
    desc: 'Physical and cinematic. Restrained imagery of rooftops, facilities and grid infrastructure, with typography and composition in command.',
    tone: 'Photographic',
    image: '/images/facility.png',
  },
]

export default function Overview() {
  return (
    <main className="min-h-screen bg-paper text-ink">
      <header className="mx-auto flex max-w-[1400px] items-center justify-between border-b border-line px-6 py-5 lg:px-10">
        <Wordmark />
        <span className="font-mono text-[11px] tracking-[0.18em] text-concrete">
          BRAND STUDY / 3 DIRECTIONS
        </span>
      </header>

      {/* Intro */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid grid-cols-12 gap-y-10 border-b border-line py-14 lg:py-24">
          <div className="col-span-12 lg:col-span-8 lg:border-r lg:border-line lg:pr-10">
            <p className="mb-8 font-mono text-[11px] tracking-[0.22em] text-concrete">
              VISUAL IDENTITY — WORKING STUDY
            </p>
            <h1 className="text-balance font-sans text-[clamp(2.5rem,7vw,6rem)] font-black leading-[0.9] tracking-[-0.03em]">
              Three ways to look
              <br />
              like an energy
              <br />
              <span className="text-amber">institution.</span>
            </h1>
            <p className="mt-10 max-w-xl text-pretty text-lg leading-relaxed text-ink/75">
              A first exercise for GRID ENERGY — a Bangladesh energy
              infrastructure company converting industrial rooftops into
              productive assets. Three distinct homepage art directions, built
              to compare on composition, typography, hierarchy and character.
            </p>
          </div>
          <div className="col-span-12 flex flex-col justify-between gap-8 font-mono text-[11px] leading-relaxed tracking-[0.1em] text-concrete lg:col-span-4 lg:pl-10">
            <div className="space-y-6">
              <Note label="CONCEPT" value="ROOF → ASSET → ENERGY → CASH FLOW" />
              <Note label="INTERSECTION" value="Energy · Engineering · Capital · Technology" />
              <Note label="SCOPE" value="Composition, type, spacing, imagery, hierarchy" />
            </div>
            <p className="border-t border-line pt-6">
              Select a direction below, or use the switcher at the base of the
              screen to move between them.
            </p>
          </div>
        </div>
      </section>

      {/* Direction list */}
      <section className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {directions.map((d) => (
          <Link
            key={d.code}
            href={d.href}
            className="group grid grid-cols-12 items-center gap-6 border-b border-line py-10 transition-colors hover:bg-muted/50 lg:py-14"
          >
            <span className="col-span-2 font-sans text-5xl font-black leading-none text-amber lg:col-span-1 lg:text-6xl">
              {d.code}
            </span>
            <div className="col-span-10 lg:col-span-6">
              <h2 className="font-sans text-3xl font-extrabold tracking-tight lg:text-4xl">
                {d.title}
              </h2>
              <p className="mt-3 max-w-md text-pretty leading-relaxed text-ink/70">
                {d.desc}
              </p>
              <span className="mt-4 inline-block font-mono text-[11px] tracking-[0.18em] text-concrete">
                {d.tone} — VIEW DIRECTION{' '}
                <span className="text-amber transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </div>
            <div className="col-span-12 lg:col-span-5">
              {d.image ? (
                <div className="relative aspect-[16/9] w-full overflow-hidden border border-line grayscale transition-all duration-500 group-hover:grayscale-0">
                  <Image
                    src={d.image}
                    alt={`${d.title} direction preview`}
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <DirectionPreview code={d.code} />
              )}
            </div>
          </Link>
        ))}
      </section>

      <footer className="mx-auto max-w-[1400px] px-6 py-12 lg:px-10">
        <p className="font-mono text-[11px] tracking-[0.14em] text-concrete">
          © {new Date().getFullYear()} GRID ENERGY — BRAND & ART DIRECTION STUDY · DHAKA, BANGLADESH
        </p>
      </footer>

      <div className="h-16" />
      <DirectionSwitcher />
    </main>
  )
}

function Note({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-line pt-4">
      <p className="text-amber">{label}</p>
      <p className="mt-1 text-ink/70">{value}</p>
    </div>
  )
}

function DirectionPreview({ code }: { code: string }) {
  if (code === 'A') {
    return (
      <div className="flex aspect-[16/9] w-full flex-col justify-between border border-line bg-paper p-5">
        <span className="font-mono text-[9px] tracking-[0.2em] text-concrete">
          FIG. A
        </span>
        <span className="font-sans text-2xl font-black leading-[0.85] tracking-tight lg:text-3xl">
          ENERGY IS
          <br />
          AN <span className="text-amber">ASSET.</span>
        </span>
        <span className="font-mono text-[9px] tracking-[0.2em] text-concrete">
          ROOF → ASSET → ENERGY → CASH FLOW
        </span>
      </div>
    )
  }
  return (
    <div className="relative flex aspect-[16/9] w-full flex-col justify-between overflow-hidden border border-line bg-ink p-5 text-paper grid-lines-dark [background-size:32px_32px]">
      <span className="font-mono text-[9px] tracking-[0.2em] text-paper/50">
        FIG. B — SCHEMATIC
      </span>
      <span className="font-sans text-2xl font-black leading-[0.85] tracking-tight lg:text-3xl">
        SIX STATES
        <br />
        OF <span className="text-amber-bright">ENERGY.</span>
      </span>
      <span className="font-mono text-[9px] tracking-[0.2em] text-paper/50">
        SUN → SOLAR → GRID → STORAGE → ASSET
      </span>
    </div>
  )
}
