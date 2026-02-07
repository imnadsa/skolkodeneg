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
  // Состояние для определения мобильного устройства
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile() // Проверка при загрузке
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Вычисляем позицию
  const getTooltipStyle = () => {
    // 📱 МОБИЛЬНАЯ ВЕРСИЯ: Всегда снизу экрана (как шторка)
    if (isMobile) {
      return {
        position: 'fixed' as const,
        bottom: '24px',
        left: '20px',
        right: '20px',
        zIndex: 60,
        transform: 'none', // Убираем центрирование
        maxWidth: '100%',
        width: 'auto'
      }
    }

    // 🖥 ДЕСКТОП ВЕРСИЯ
    const padding = 24 // Увеличил отступ, чтобы не наезжало на элемент
    const style: React.CSSProperties = { position: 'fixed', zIndex: 60 }

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
      
      default: // Center
        style.top = '50%'
        style.left = '50%'
        style.transform = 'translate(-50%, -50%)'
    }

    return style
  }

  // Стрелочка (только для десктопа)
  const getArrowClass = () => {
    switch (position) {
      case 'right': return 'absolute -left-2 top-1/2 -translate-y-1/2 border-l-2 border-b-2'
      case 'left': return 'absolute -right-2 top-1/2 -translate-y-1/2 border-r-2 border-t-2'
      case 'bottom': return 'absolute -top-2 left-1/2 -translate-x-1/2 border-l-2 border-t-2'
      case 'top': return 'absolute -bottom-2 left-1/2 -translate-x-1/2 border-r-2 border-b-2'
      default: return 'hidden'
    }
  }

  return (
    <div
      className="bg-surface border-2 border-primary/30 rounded-2xl shadow-glow-pink-lg transition-all duration-300"
      style={{
        ...getTooltipStyle(),
        width: isMobile ? 'auto' : '360px' // На десктопе фикс ширина
      }}
    >
      {/* Стрелочку рисуем только на компьютере */}
      {!isMobile && (
        <div className={`w-4 h-4 bg-surface border-primary/30 rotate-45 ${getArrowClass()}`} />
      )}

      <div className="p-6">
        {/* Заголовок и крестик */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-navigo font-semibold text-primary">
                Шаг {currentStep + 1} из {totalSteps}
              </span>
            </div>
            <h3 className="text-xl font-coolvetica text-text-primary pr-2">
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

        {/* Описание */}
        <p className="text-text-secondary font-navigo text-sm leading-relaxed mb-6">
          {description}
        </p>

        {/* Прогресс бар */}
        <div className="h-1.5 bg-surface-light rounded-full overflow-hidden mb-6">
          <div
            className="h-full bg-gradient-to-r from-primary to-primary-light transition-all duration-500"
            style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
          />
        </div>

        {/* Кнопки навигации */}
        <div className="flex items-center justify-between gap-3">
          {currentStep > 0 ? (
            <button
              onClick={onPrev}
              className="flex items-center gap-2 px-4 py-3 rounded-full border border-border hover:bg-surface-light transition-colors font-navigo text-sm text-text-primary"
            >
              <IconArrowLeft size={16} />
              <span className="hidden xs:inline">Назад</span>
            </button>
          ) : (
            <div />
          )}

          <button
            onClick={onNext}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-white font-navigo font-semibold text-sm transition-all shadow-glow-pink active:scale-95"
          >
            {currentStep === totalSteps - 1 ? 'Завершить' : 'Дальше'}
            {currentStep < totalSteps - 1 && <IconArrowRight size={16} />}
          </button>
        </div>
      </div>
    </div>
  )
}
