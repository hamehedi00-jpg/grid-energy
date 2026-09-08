import type { Metadata } from 'next'
import Image from 'next/image'
import { Wordmark } from '@/components/wordmark'
import { DirectionSwitcher } from '@/components/direction-switcher'

export const metadata: Metadata = {
  title: 'GRID ENERGY — Turning roofs into energy assets',
}

const nav = ['ASSETS', 'ENGINEERING', 'CAPITAL', 'COMPANY']

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
              'linear-gradient(180deg, rgba(23,25,29,0.72) 0%, rgba(23,25,29,0.25) 38%, rgba(23,25,29,0.55) 78%, rgba(23,25,29,0.92) 100%)',
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
              COMMERCIAL &amp; INDUSTRIAL ROOFTOP SOLAR — BANGLADESH
            </p>
            <h1 className="max-w-[16ch] text-balance font-sans text-[clamp(2.5rem,8vw,7.5rem)] font-black uppercase leading-[0.88] tracking-[-0.03em]">
              Turning roofs into energy assets
            </h1>
          </div>

          <div className="border-t border-paper/15">
            <div className="mx-auto flex max-w-[1500px] items-center justify-between px-6 py-3 font-mono text-[10px] tracking-[0.18em] text-paper/55 lg:px-10">
              <span>PLATE 01 — ROOFTOP SOLAR PLANT, DHAKA INDUSTRIAL BELT</span>
              <span className="hidden sm:block">GRID ENERGY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Statement */}
      <section className="border-b border-line-dark">
        <div className="mx-auto grid max-w-[1500px] grid-cols-12 gap-y-8 px-6 py-20 lg:px-10 lg:py-32">
          <p className="col-span-12 font-mono text-[11px] tracking-[0.24em] text-paper/40 lg:col-span-3">
            001 — THESIS
          </p>
          <h2 className="col-span-12 text-balance font-sans text-[clamp(1.9rem,4.4vw,3.6rem)] font-semibold leading-[1.06] tracking-[-0.01em] lg:col-span-9">
            The infrastructure is physical. The return is financial. We build,
            own and operate the hardware that stands between an idle roof and{' '}
            <span className="text-amber-bright">a productive asset.</span>
          </h2>
        </div>
      </section>

      {/* Image + text: existing surface */}
      <section className="mx-auto grid max-w-[1500px] grid-cols-1 items-stretch lg:grid-cols-2">
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
          <p className="font-mono text-[11px] tracking-[0.24em] text-amber">
            002 — THE SURFACE
          </p>
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

      {/* Full bleed: substation */}
      <section className="relative h-[80svh] min-h-[520px] w-full overflow-hidden border-y border-line-dark">
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
              003 — BEYOND THE ROOF
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

      {/* Image + text: engineering detail */}
      <section className="mx-auto grid max-w-[1500px] grid-cols-1 items-stretch lg:grid-cols-2">
        <div className="order-2 flex flex-col justify-center px-6 py-14 lg:order-1 lg:px-14 lg:py-20">
          <p className="font-mono text-[11px] tracking-[0.24em] text-amber">
            004 — ENGINEERING
          </p>
          <h3 className="mt-6 text-balance font-sans text-3xl font-extrabold leading-tight tracking-tight lg:text-5xl">
            Engineered to grid standard.
          </h3>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-paper/70">
            Structure, electrical design, protection and performance are held to
            the standard of infrastructure that must run for decades. The asset
            is only as durable as the engineering underneath it.
          </p>
        </div>
        <figure className="relative order-1 aspect-[4/3] w-full border-t border-line-dark lg:order-2 lg:aspect-auto lg:border-l lg:border-t-0">
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
      </section>

      {/* Footer */}
      <footer className="border-t border-line-dark">
        <div className="mx-auto flex max-w-[1500px] flex-col gap-8 px-6 py-12 font-mono text-[11px] tracking-[0.14em] text-paper/45 lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <div className="space-y-3">
            <Wordmark tone="paper" />
            <p className="max-w-xs leading-relaxed">
              GRID ENERGY LTD · ENERGY INFRASTRUCTURE · DHAKA, BANGLADESH
            </p>
          </div>
          <p className="lg:text-right">
            © {new Date().getFullYear()} GRID ENERGY — TURNING ROOFS INTO ENERGY ASSETS
          </p>
        </div>
      </footer>

      <div className="h-16" />
      <DirectionSwitcher />
    </main>
  )
}
