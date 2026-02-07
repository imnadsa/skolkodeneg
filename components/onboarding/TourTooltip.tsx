'use client'

import { IconArrowLeft, IconArrowRight, IconX } from '@tabler/icons-react'
import { TourStepPosition } from '@/lib/tour-config'

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
  // Вычисляем позицию тултипа относительно элемента
  const getTooltipPosition = () => {
    const padding = 20
    const tooltipWidth = 360
    const tooltipMaxHeight = 300

    switch (position) {
      case 'right':
        return {
          top: targetRect.top + targetRect.height / 2,
          left: targetRect.right + padding,
          transform: 'translateY(-50%)'
        }
      case 'left':
        return {
          top: targetRect.top + targetRect.height / 2,
          left: targetRect.left - tooltipWidth - padding,
          transform: 'translateY(-50%)'
        }
      case 'bottom':
        return {
          top: targetRect.bottom + padding,
          left: targetRect.left + targetRect.width / 2,
          transform: 'translateX(-50%)'
        }
      case 'top':
        return {
          top: targetRect.top - padding,
          left: targetRect.left + targetRect.width / 2,
          transform: 'translate(-50%, -100%)'
        }
      default:
        return {
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }
    }
  }

  const tooltipStyle = getTooltipPosition()

  return (
    <div
      className="fixed z-[60] w-[360px] bg-surface border-2 border-primary/30 rounded-2xl shadow-glow-pink-lg animate-in fade-in slide-in-from-bottom-4 duration-300"
      style={tooltipStyle}
    >
      {/* Arrow pointer */}
      <div className={`absolute w-4 h-4 bg-surface border-primary/30 rotate-45 ${
        position === 'right' ? '-left-2 top-1/2 -translate-y-1/2 border-l-2 border-b-2' :
        position === 'left' ? '-right-2 top-1/2 -translate-y-1/2 border-r-2 border-t-2' :
        position === 'bottom' ? '-top-2 left-1/2 -translate-x-1/2 border-l-2 border-t-2' :
        position === 'top' ? '-bottom-2 left-1/2 -translate-x-1/2 border-r-2 border-b-2' :
        'hidden'
      }`} />

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
