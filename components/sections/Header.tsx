'use client'

import { useState } from 'react'

interface HeaderProps {
  onCta?: () => void
}

export default function Header({ onCta }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b border-[#F0F0F0] sticky top-0 z-50">
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between h-16 md:h-20">

        <a href="/" className="flex items-center gap-2 shrink-0">
          <span className="text-[#141414] text-xl md:text-2xl font-days-one leading-none">
            Сколько Денег
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#integration" className="text-[#141414] text-base hover:text-[#FF0084] transition-colors">
            Внедрение
          </a>
          <a href="#pricing" className="text-[#141414] text-base hover:text-[#FF0084] transition-colors">
            Цены
          </a>
        </nav>

        <button
          onClick={onCta}
          className="hidden md:inline-flex items-center bg-[#FF0084] hover:bg-[#e8006e] active:scale-[0.98] transition-all duration-200 text-white font-sofia-sans font-semibold text-base rounded-full px-6 py-3"
        >
          стать клиентом
        </button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-[5px] p-2"
          aria-label="Меню"
        >
          <span className={`block h-0.5 w-6 bg-[#141414] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block h-0.5 w-6 bg-[#141414] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-6 bg-[#141414] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-[#F0F0F0] px-4 py-6 flex flex-col gap-5">
          <a href="#integration" onClick={() => setMenuOpen(false)} className="text-[#141414] text-lg hover:text-[#FF0084] transition-colors">Внедрение</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)} className="text-[#141414] text-lg hover:text-[#FF0084] transition-colors">Цены</a>
          <button
            onClick={() => { setMenuOpen(false); onCta?.() }}
            className="inline-flex justify-center bg-[#FF0084] text-white font-sofia-sans font-semibold text-base rounded-full px-6 py-3"
          >
            стать клиентом
          </button>
        </div>
      )}
    </header>
  )
}
