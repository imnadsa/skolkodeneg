'use client'

import { useState, useEffect, useCallback } from 'react'
import { TOUR_STEPS, TOUR_STORAGE_KEY } from '@/lib/tour-config'
import WelcomeModal from './WelcomeModal'
import TourTooltip from './TourTooltip'
import Spotlight from './Spotlight'
import CompletionModal from './CompletionModal'

interface OnboardingOverlayProps {
  onComplete?: () => void
}

export default function OnboardingOverlay({ onComplete }: OnboardingOverlayProps) {
  const [mounted, setMounted] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  const [showTour, setShowTour] = useState(false)
  const [showCompletion, setShowCompletion] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const tourCompleted = localStorage.getItem(TOUR_STORAGE_KEY)
    if (!tourCompleted) {
      setTimeout(() => setShowWelcome(true), 500)
    }
  }, [mounted])

  // ФУНКЦИЯ ОБНОВЛЕНИЯ ПОЗИЦИИ (СУПЕР ВАЖНАЯ)
  const updateTargetRect = useCallback(() => {
    if (!showTour) return

    const step = TOUR_STEPS[currentStep]
    const element = document.querySelector(step.target)
    
    if (element) {
      const rect = element.getBoundingClientRect()
      // Проверяем, изменились ли координаты, чтобы не рендерить лишний раз
      setTargetRect(prev => {
        if (prev && 
            prev.top === rect.top && 
            prev.left === rect.left && 
            prev.width === rect.width && 
            prev.height === rect.height) {
          return prev
        }
        return rect
      })
    }
  }, [showTour, currentStep])

  // Эффект для слежения за скроллом и ресайзом
  useEffect(() => {
    if (!showTour) return

    // Сразу скроллим к элементу
    const step = TOUR_STEPS[currentStep]
    const element = document.querySelector(step.target)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    // Запускаем обновление позиции
    updateTargetRect()
    
    // Добавляем слушатели событий (чтобы подсветка не уезжала при скролле)
    window.addEventListener('resize', updateTargetRect)
    window.addEventListener('scroll', updateTargetRect, true) // true для захвата скролла вложенных элементов

    // Небольшой хак: проверяем позицию еще раз через небольшие промежутки времени, 
    // пока идет анимация скролла
    const interval = setInterval(updateTargetRect, 100)
    const timeout = setTimeout(() => clearInterval(interval), 1000)

    return () => {
      window.removeEventListener('resize', updateTargetRect)
      window.removeEventListener('scroll', updateTargetRect, true)
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [showTour, currentStep, updateTargetRect])

  const handleStartTour = () => {
    setShowWelcome(false)
    setTimeout(() => setShowTour(true), 300)
  }

  const handleNextStep = () => {
    if (currentStep < TOUR_STEPS.length - 1) {
      setCurrentStep(prev => prev + 1)
    } else {
      handleCompleteTour()
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleSkipTour = () => {
    setShowTour(false)
    setShowWelcome(false)
    if (mounted) {
      localStorage.setItem(TOUR_STORAGE_KEY, 'true')
    }
    onComplete?.()
  }

  const handleCompleteTour = () => {
    setShowTour(false)
    setTimeout(() => setShowCompletion(true), 300)
  }

  const handleCloseCompletion = () => {
    setShowCompletion(false)
    if (mounted) {
      localStorage.setItem(TOUR_STORAGE_KEY, 'true')
    }
    window.dispatchEvent(new Event('main-tour-completed'))
    onComplete?.()
  }

  const restartTour = () => {
    setCurrentStep(0)
    setShowWelcome(true)
    if (mounted) {
      localStorage.removeItem(TOUR_STORAGE_KEY)
    }
  }

  useEffect(() => {
    if (mounted) {
      (window as any).__restartTour = restartTour
      return () => {
        delete (window as any).__restartTour
      }
    }
  }, [mounted])

  if (!mounted) return null

  const step = TOUR_STEPS[currentStep]

  return (
    <>
      {showWelcome && <WelcomeModal onStart={handleStartTour} />}

      {showTour && targetRect && (
        <>
          <Spotlight 
            targetRect={targetRect} 
            padding={step.highlightPadding || 8}
          />
          <TourTooltip
            title={step.title}
            description={step.description}
            currentStep={currentStep}
            totalSteps={TOUR_STEPS.length}
            position={step.position}
            targetRect={targetRect}
            onNext={handleNextStep}
            onPrev={handlePrevStep}
            onSkip={handleSkipTour}
          />
        </>
      )}

      {showCompletion && <CompletionModal onClose={handleCloseCompletion} />}
    </>
  )
}
