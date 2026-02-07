'use client'

interface SpotlightProps {
  targetRect: DOMRect
  padding?: number
}

export default function Spotlight({ targetRect, padding = 8 }: SpotlightProps) {
  return (
    <div
      className="fixed z-50 rounded-2xl pointer-events-none transition-all duration-300 ease-out"
      style={{
        // Позиционируем саму "дырку"
        top: targetRect.top - padding,
        left: targetRect.left - padding,
        width: targetRect.width + padding * 2,
        height: targetRect.height + padding * 2,
        // МАГИЯ: Гигантская тень создает затемнение вокруг
        boxShadow: '0 0 0 9999px rgba(0, 0, 0, 0.75)', 
      }}
    >
      {/* Пульсирующая розовая рамка (наложена сверху) */}
      <div className="absolute inset-0 rounded-2xl border-2 border-primary animate-pulse-border shadow-[0_0_20px_rgba(255,0,132,0.5)]" />
    </div>
  )
}
