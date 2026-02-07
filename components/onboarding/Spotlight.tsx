'use client'

interface SpotlightProps {
  targetRect: DOMRect
  padding?: number
}

export default function Spotlight({ targetRect, padding = 8 }: SpotlightProps) {
  return (
    <>
      {/* Overlay с вырезом */}
      <div className="fixed inset-0 z-50 pointer-events-none">
        {/* Top */}
        <div
          className="absolute left-0 right-0 bg-background/80 backdrop-blur-sm"
          style={{
            top: 0,
            height: Math.max(0, targetRect.top - padding)
          }}
        />
        
        {/* Right */}
        <div
          className="absolute bg-background/80 backdrop-blur-sm"
          style={{
            top: Math.max(0, targetRect.top - padding),
            bottom: Math.max(0, window.innerHeight - targetRect.bottom - padding),
            left: targetRect.right + padding,
            right: 0
          }}
        />
        
        {/* Bottom */}
        <div
          className="absolute left-0 right-0 bg-background/80 backdrop-blur-sm"
          style={{
            top: targetRect.bottom + padding,
            bottom: 0
          }}
        />
        
        {/* Left */}
        <div
          className="absolute bg-background/80 backdrop-blur-sm"
          style={{
            top: Math.max(0, targetRect.top - padding),
            bottom: Math.max(0, window.innerHeight - targetRect.bottom - padding),
            left: 0,
            right: window.innerWidth - targetRect.left + padding
          }}
        />
      </div>

      {/* Пульсирующая рамка */}
      <div
        className="fixed z-[55] rounded-2xl pointer-events-none animate-pulse-border"
        style={{
          top: targetRect.top - padding,
          left: targetRect.left - padding,
          width: targetRect.width + padding * 2,
          height: targetRect.height + padding * 2
        }}
      />
    </>
  )
}
