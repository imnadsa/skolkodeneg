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
            height: targetRect.top - padding
          }}
        />
        
        {/* Right */}
        <div
          className="absolute top-0 bottom-0 bg-background/80 backdrop-blur-sm"
          style={{
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
          className="absolute top-0 bottom-0 bg-background/80 backdrop-blur-sm"
          style={{
            left: 0,
            right: window.innerWidth - (targetRect.left - padding)
          }}
        />
      </div>

      {/* Пульсирующая рамка вокруг элемента */}
      <div
        className="fixed z-[55] rounded-2xl pointer-events-none animate-pulse-border"
        style={{
          top: targetRect.top - padding,
          left: targetRect.left - padding,
          width: targetRect.width + padding * 2,
          height: targetRect.height + padding * 2,
          boxShadow: '0 0 0 3px rgba(255, 0, 132, 0.5), 0 0 30px rgba(255, 0, 132, 0.3)'
        }}
      />
    </>
  )
}
