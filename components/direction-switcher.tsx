'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const routes = [
  { href: '/', label: 'INDEX', code: '00' },
  { href: '/direction-a', label: 'INFRASTRUCTURE', code: 'A' },
  { href: '/direction-b', label: 'THE SYSTEM', code: 'B' },
  { href: '/direction-c', label: 'INDUSTRIAL', code: 'C' },
]

export function DirectionSwitcher() {
  const pathname = usePathname()

  return (
    <nav
      aria-label="Art direction switcher"
      className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2"
    >
      <div className="flex items-stretch border border-ink/80 bg-paper/90 font-mono text-[10px] tracking-[0.14em] backdrop-blur-sm">
        <span className="hidden items-center border-r border-ink/20 px-3 py-2 text-concrete sm:flex">
          GRID ENERGY / DIRECTIONS
        </span>
        {routes.map((route) => {
          const active = pathname === route.href
          return (
            <Link
              key={route.href}
              href={route.href}
              className={`flex items-center gap-1.5 border-r border-ink/20 px-3 py-2 transition-colors last:border-r-0 ${
                active
                  ? 'bg-ink text-paper'
                  : 'text-ink hover:bg-ink hover:text-paper'
              }`}
            >
              <span className={active ? 'text-amber-bright' : 'text-amber'}>
                {route.code}
              </span>
              <span className="hidden md:inline">{route.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
