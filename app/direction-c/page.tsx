import type { Metadata } from 'next'
import Image from 'next/image'
import { Wordmark } from '@/components/wordmark'
import { DirectionSwitcher } from '@/components/direction-switcher'
import { ConversionSequence } from '@/components/direction-c/conversion-sequence'
import { EngineeringSchematic } from '@/components/direction-c/engineering-schematic'
import { CapitalModels } from '@/components/direction-c/capital-models'
import { TechnologyReadout } from '@/components/direction-c/technology-readout'
import { BuildoutLadder } from '@/components/direction-c/buildout-ladder'

export const metadata: Metadata = {
  title: 'GRID ENERGY — Energy is an asset',
}

const nav = ['ASSETS', 'ENGINEERING', 'CAPITAL', 'TECHNOLOGY', 'PLATFORM']

function SectionTag({ code, title }: { code: string; title: string }) {
  return (
    <div className="flex items-center gap-4 font-mono text-[11px] tracking-[0.24em] text-paper/40">
      <span className="text-amber">{code}</span>
      <span>{title}</span>
    </div>
  )
}

export default function DirectionC() {
  return (
    <main className="min-h-screen bg-ink text-paper">
      {/* Hero — full bleed */}
      <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
        <Image
          src="/images/rooftop-array.png"
          alt="Aerial view of a large industrial rooftop solar plant in the Dhaka industrial belt"
          fill
          priority
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(23,25,29,0.74) 0%, rgba(23,25,29,0.28) 38%, rgba(23,25,29,0.55) 74%, rgba(23,25,29,0.94) 100%)',
          }}
        />

        <div className="relative flex h-full flex-col">
          <header className="mx-auto flex w-full max-w-[1500px] items-center justify-between px-6 py-6 lg:px-10">
            <Wordmark tone="paper" />
            <nav className="hidden gap-8 font-mono text-[11px] tracking-[0.18em] text-paper/70 md:flex">
              {nav.map((item) => (
                <span key={item} className="transition-colors hover:text-paper">
                  {item}
                </span>
              ))}
            </nav>
          </header>

          <div className="mx-auto mt-auto w-full max-w-[1500px] px-6 pb-14 lg:px-10">
            <p className="mb-6 font-mono text-[11px] tracking-[0.24em] text-amber-bright">
              COMMERCIAL &amp; INDUSTRIAL ENERGY INFRASTRUCTURE — BANGLADESH
            </p>
            <h1 className="max-w-[14ch] text-balance font-sans text-[clamp(3rem,10vw,9rem)] font-black uppercase leading-[0.84] tracking-[-0.04em]">
              Energy is an asset.
            </h1>
            <p className="mt-8 max-w-xl text-pretty text-base leading-relaxed text-paper/70 lg:text-lg">
              GRID ENERGY builds, owns and operates the infrastructure that turns
              idle industrial rooftops into productive energy assets — beginning
              with rooftop solar, building toward an energy infrastructure
              platform.
            </p>
          </div>

          <div className="border-t border-paper/15">
            <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-3 font-mono text-[10px] tracking-[0.18em] text-paper/55 lg:px-10">
              <span>PLATE 01 — ROOFTOP SOLAR PLANT, DHAKA INDUSTRIAL BELT</span>
              <span className="hidden sm:block">GRID ENERGY</span>
            </div>
          </div>
        </div>
      </section>

      {/* 001 — Thesis: the system is changing */}
      <section className="border-b border-line-dark">
        <div className="mx-auto grid max-w-[1500px] grid-cols-12 gap-y-8 px-6 py-20 lg:px-10 lg:py-32">
          <div className="col-span-12 lg:col-span-3">
            <SectionTag code="001" title="THE SHIFT" />
          </div>
          <h2 className="col-span-12 text-balance font-sans text-[clamp(1.9rem,4.4vw,3.6rem)] font-semibold leading-[1.06] tracking-[-0.01em] lg:col-span-9">
            The energy system is being rebuilt closer to where energy is used.
            The infrastructure is physical. The return is financial. We stand
            between an idle roof and{' '}
            <span className="text-amber-bright">a productive asset.</span>
          </h2>
          <div className="col-span-12 mt-4 lg:col-span-9 lg:col-start-4">
            <p className="max-w-2xl text-pretty leading-relaxed text-paper/60">
              GRID ENERGY sits at the intersection of energy, engineering,
              capital and technology. Not a solar installer — an energy
              infrastructure company that treats generation as an asset class.
            </p>
          </div>
        </div>
      </section>

      {/* 002 — The conversion */}
      <section className="border-b border-line-dark">
        <div className="mx-auto max-w-[1500px] px-6 pt-16 lg:px-10 lg:pt-24">
          <div className="flex flex-col gap-4 pb-4 md:flex-row md:items-end md:justify-between">
            <SectionTag code="002" title="THE CONVERSION" />
            <p className="max-w-md text-pretty text-sm leading-relaxed text-paper/55">
              One sequence defines the company. Every asset moves through the
              same four states.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-[1500px] px-6 pb-16 lg:px-10 lg:pb-24">
          <ConversionSequence />
        </div>
      </section>

      {/* 003 — Physical infrastructure (facility) */}
      <section className="mx-auto grid max-w-[1500px] grid-cols-1 items-stretch border-b border-line-dark lg:grid-cols-2">
        <figure className="relative aspect-[4/3] w-full lg:aspect-auto">
          <Image
            src="/images/facility.png"
            alt="Long industrial warehouse roofline with edge-mounted solar in a Bangladesh industrial estate"
            fill
            className="object-cover"
          />
          <figcaption className="absolute bottom-0 left-0 right-0 border-t border-paper/15 bg-ink/70 px-4 py-2 font-mono text-[10px] tracking-[0.18em] text-paper/60 backdrop-blur-sm">
            PLATE 02 — MANUFACTURING FACILITY, C&amp;I ESTATE
          </figcaption>
        </figure>
        <div className="flex flex-col justify-center border-t border-line-dark px-6 py-14 lg:border-l lg:border-t-0 lg:px-14 lg:py-20">
          <SectionTag code="003" title="PHYSICAL INFRASTRUCTURE" />
          <h3 className="mt-6 text-balance font-sans text-3xl font-extrabold leading-tight tracking-tight lg:text-5xl">
            We build on what is already there.
          </h3>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-paper/70">
            Every factory, warehouse and processing plant in Bangladesh carries
            an unused structural surface. GRID ENERGY engineers that surface into
            a generating asset — sized to the facility&apos;s load and held to
            grid standard.
          </p>
        </div>
      </section>

      {/* 004 — Engineering */}
      <section className="border-b border-line-dark">
        <div className="mx-auto grid max-w-[1500px] grid-cols-1 items-stretch lg:grid-cols-2">
          <figure className="relative order-1 aspect-[4/3] w-full lg:aspect-auto">
            <Image
              src="/images/hardware.png"
              alt="Close-up of industrial solar mounting rails, structural clamps and a storage cabinet"
              fill
              className="object-cover"
            />
            <figcaption className="absolute bottom-0 left-0 right-0 border-t border-paper/15 bg-ink/70 px-4 py-2 font-mono text-[10px] tracking-[0.18em] text-paper/60 backdrop-blur-sm">
              PLATE 03 — MOUNTING &amp; STORAGE HARDWARE
            </figcaption>
          </figure>
          <div className="order-2 flex flex-col justify-center border-t border-line-dark px-6 py-14 lg:border-l lg:border-t-0 lg:px-14 lg:py-20">
            <SectionTag code="004" title="ENGINEERING" />
            <h3 className="mt-6 text-balance font-sans text-3xl font-extrabold leading-tight tracking-tight lg:text-5xl">
              Engineered to grid standard.
            </h3>
            <p className="mt-6 max-w-md text-pretty leading-relaxed text-paper/70">
              Structure, electrical design, protection and performance are held
              to the standard of infrastructure that must run for decades. The
              asset is only as durable as the engineering underneath it.
            </p>
          </div>
        </div>
        <div className="border-t border-line-dark">
          <div className="mx-auto max-w-[1500px] px-6 py-12 lg:px-10 lg:py-16">
            <p className="mb-8 font-mono text-[10px] tracking-[0.2em] text-paper/45">
              FIG. 04 — C&amp;I ROOFTOP SYSTEM ARCHITECTURE
            </p>
            <EngineeringSchematic />
          </div>
        </div>
      </section>

      {/* 005 — Beyond the roof (substation, full bleed) */}
      <section className="relative h-[80svh] min-h-[520px] w-full overflow-hidden border-b border-line-dark">
        <Image
          src="/images/substation.png"
          alt="Electrical substation and transmission towers at dusk"
          fill
          className="object-cover"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(90deg, rgba(23,25,29,0.9) 0%, rgba(23,25,29,0.4) 55%, rgba(23,25,29,0.2) 100%)',
          }}
        />
        <div className="relative flex h-full items-end">
          <div className="mx-auto w-full max-w-[1500px] px-6 pb-14 lg:px-10">
            <p className="mb-5 font-mono text-[11px] tracking-[0.24em] text-amber-bright">
              BEYOND THE ROOF
            </p>
            <h2 className="max-w-[18ch] text-balance font-sans text-[clamp(2rem,5.5vw,4.75rem)] font-black uppercase leading-[0.92] tracking-[-0.02em]">
              From the meter to the grid.
            </h2>
            <p className="mt-6 max-w-lg text-pretty leading-relaxed text-paper/70">
              Rooftop generation is the first asset class. Storage, energy
              management, EV infrastructure and distributed generation follow —
              one build-out toward an energy infrastructure platform.
            </p>
          </div>
        </div>
      </section>

      {/* 006 — Capital */}
      <section className="border-b border-line-dark">
        <div className="mx-auto max-w-[1500px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid grid-cols-12 gap-y-8">
            <div className="col-span-12 lg:col-span-3">
              <SectionTag code="006" title="CAPITAL" />
            </div>
            <div className="col-span-12 lg:col-span-9">
              <h3 className="text-balance font-sans text-3xl font-extrabold leading-tight tracking-tight lg:text-5xl">
                Own the asset, or access it.
              </h3>
              <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-paper/65">
                An energy asset can be financed two ways. GRID ENERGY can fund,
                own and operate the infrastructure and sell the energy — or
                engineer and build a system the facility owns outright. Either
                way, the sequence holds: ROOF → ASSET → ENERGY → CASH FLOW.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <CapitalModels />
          </div>
        </div>
      </section>

      {/* 007 — Technology */}
      <section className="border-b border-line-dark">
        <div className="mx-auto max-w-[1500px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid grid-cols-12 gap-y-8">
            <div className="col-span-12 lg:col-span-3">
              <SectionTag code="007" title="TECHNOLOGY" />
            </div>
            <div className="col-span-12 lg:col-span-9">
              <h3 className="text-balance font-sans text-3xl font-extrabold leading-tight tracking-tight lg:text-5xl">
                An asset you can measure.
              </h3>
              <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-paper/65">
                Every system is instrumented. Generation, consumption, export and
                availability are monitored continuously — so performance is
                accountable and the asset is operated, not just installed.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <TechnologyReadout />
          </div>
        </div>
      </section>

      {/* 008 — The build-out */}
      <section className="border-b border-line-dark">
        <div className="mx-auto max-w-[1500px] px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid grid-cols-12 gap-y-8">
            <div className="col-span-12 lg:col-span-3">
              <SectionTag code="008" title="THE BUILD-OUT" />
            </div>
            <div className="col-span-12 lg:col-span-9">
              <h3 className="text-balance font-sans text-3xl font-extrabold leading-tight tracking-tight lg:text-5xl">
                From one roof to an energy platform.
              </h3>
              <p className="mt-6 max-w-2xl text-pretty leading-relaxed text-paper/65">
                Rooftop solar is the entry point, not the destination. Each phase
                compounds on the last — assets, data and grid presence building
                toward energy infrastructure at scale.
              </p>
            </div>
          </div>
          <div className="mt-12">
            <BuildoutLadder />
          </div>
        </div>
      </section>

      {/* Closing statement */}
      <section className="border-b border-line-dark">
        <div className="mx-auto max-w-[1500px] px-6 py-24 lg:px-10 lg:py-36">
          <p className="font-mono text-[11px] tracking-[0.24em] text-amber">
            GRID ENERGY
          </p>
          <h2 className="mt-8 max-w-[16ch] text-balance font-sans text-[clamp(2.75rem,9vw,8rem)] font-black uppercase leading-[0.85] tracking-[-0.04em]">
            Energy is an asset.
          </h2>
          <p className="mt-8 max-w-md text-pretty leading-relaxed text-paper/60">
            Commercial &amp; industrial energy infrastructure, engineered and
            owned. Dhaka, Bangladesh.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="mx-auto flex max-w-[1500px] flex-col gap-8 px-6 py-12 font-mono text-[11px] tracking-[0.14em] text-paper/45 lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <div className="space-y-3">
            <Wordmark tone="paper" />
            <p className="max-w-xs leading-relaxed">
              GRID ENERGY LTD · ENERGY INFRASTRUCTURE · DHAKA, BANGLADESH
            </p>
          </div>
          <p className="lg:text-right">
            © {new Date().getFullYear()} GRID ENERGY — ENERGY IS AN ASSET
          </p>
        </div>
      </footer>

      <div className="h-16" />
      <DirectionSwitcher />
    </main>
  )
}
