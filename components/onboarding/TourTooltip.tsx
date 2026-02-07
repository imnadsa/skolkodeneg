'use client'

import { IconArrowLeft, IconArrowRight, IconX } from '@tabler/icons-react'
import { TourStepPosition } from '@/lib/tour-config'
import { useEffect, useState } from 'react'

interface TourTooltipProps {
  title: string
  description: string
  currentStep: number
  totalSteps: number
  position: TourStepPosition
  onNext: () => void
  onPrev: () => void
  onSkip: () => void
  targetRect: DOMRect
}

export default function TourTooltip({
  title,
  description,
  currentStep,
  totalSteps,
  position,
  onNext,
  onPrev,
  onSkip,
  targetRect
}: TourTooltipProps) {
  const [tooltipRect, setTooltipRect] = useState<DOMRect | null>(null)
  const tooltipRef = (node: HTMLDivElement | null) => {
    if (node) {
      setTooltipRect(node.getBoundingClientRect())
    }
  }

  // Вычисляем позицию тултипа относительно элемента
  const getTooltipStyle = () => {
    const padding = 20
    const style: React.CSSProperties = { position: 'fixed' }

    switch (position) {
      case 'right':
        style.top = targetRect.top + targetRect.height / 2
        style.left = targetRect.right + padding
        style.transform = 'translateY(-50%)'
        break
      
      case 'left':
        style.top = targetRect.top + targetRect.height / 2
        style.right = window.innerWidth - targetRect.left + padding
        style.transform = 'translateY(-50%)'
        break
      
      case 'bottom':
        style.top = targetRect.bottom + padding
        style.left = targetRect.left + targetRect.width / 2
        style.transform = 'translateX(-50%)'
        break
      
      case 'top':
        style.bottom = window.innerHeight - targetRect.top + padding
        style.left = targetRect.left + targetRect.width / 2
        style.transform = 'translateX(-50%)'
        break
      
      default:
        style.top = '50%'
        style.left = '50%'
        style.transform = 'translate(-50%, -50%)'
    }

    return style
  }

  const getArrowClass = () => {
    switch (position) {
      case 'right':
        return 'absolute -left-2 top-1/2 -translate-y-1/2 border-l-2 border-b-2'
      case 'left':
        return 'absolute -right-2 top-1/2 -translate-y-1/2 border-r-2 border-t-2'
      case 'bottom':
        return 'absolute -top-2 left-1/2 -translate-x-1/2 border-l-2 border-t-2'
      case 'top':
        return 'absolute -bottom-2 left-1/2 -translate-x-1/2 border-r-2 border-b-2'
      default:
        return 'hidden'
    }
  }

  return (
    <div
      ref={tooltipRef}
      className="z-[60] w-[360px] max-w-[90vw] bg-surface border-2 border-primary/30 rounded-2xl shadow-glow-pink-lg"
      style={getTooltipStyle()}
    >
      {/* Arrow */}
      <div className={`w-4 h-4 bg-surface border-primary/30 rotate-45 ${getArrowClass()}`} />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-navigo font-semibold text-primary">
                Шаг {currentStep + 1} из {totalSteps}
              </span>
            </div>
            <h3 className="text-xl font-coolvetica text-text-primary">
              {title}
            </h3>
          </div>
          <button
            onClick={onSkip}
            className="p-1.5 rounded-lg hover:bg-surface-light transition-colors flex-shrink-0"
          >
            <IconX size={18} className="text-text-tertiary" />
          </button>
        </div>

        {/* Description */}
        <p className="text-text-secondary font-navigo text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Progress bar */}
        <div className="h-1.5 bg-surface-light rounded-full overflow-hidden mb-6">
          <div
            className="h-full bg-gradient-to-r from-primary to-primary-light transition-all duration-500"
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          />
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between gap-3">
          {currentStep > 0 ? (
            <button
              onClick={onPrev}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border hover:bg-surface-light transition-colors font-navigo text-sm text-text-primary"
            >
              <IconArrowLeft size={16} />
              Назад
            </button>
          ) : (
            <div />
          )}

          <button
            onClick={onNext}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-white font-navigo font-semibold text-sm transition-all shadow-glow-pink active:scale-95"
          >
            {currentStep === totalSteps - 1 ? 'Завершить' : 'Дальше'}
            {currentStep < totalSteps - 1 && <IconArrowRight size={16} />}
          </button>
        </div>
      </div>
    </div>
  )
}
