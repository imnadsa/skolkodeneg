'use client'

import { useState, useEffect } from 'react'
import { TOUR_STEPS, TOUR_STORAGE_KEY } from '@/lib/tour-config'
import WelcomeModal from './WelcomeModal'
import TourTooltip from './TourTooltip'
import Spotlight from './Spotlight'
import CompletionModal from './CompletionModal'

interface OnboardingOverlayProps {
  onComplete?: () => void
}

export default function OnboardingOverlay({ onComplete }: OnboardingOverlayProps) {
  const [showWelcome, setShowWelcome] = useState(false)
  const [showTour, setShowTour] = useState(false)
  const [showCompletion, setShowCompletion] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null)

  // Проверяем, проходил ли пользователь тур
  useEffect(() => {
    const tourCompleted = localStorage.getItem(TOUR_STORAGE_KEY)
    if (!tourCompleted) {
      // Задержка для загрузки DOM
      setTimeout(() => setShowWelcome(true), 500)
    }
  }, [])

  // Обновляем позицию подсвеченного элемента
  useEffect(() => {
    if (!showTour) return

    const updateTargetRect = () => {
      const step = TOUR_STEPS[currentStep]
      const element = document.querySelector(step.target)
      
      if (element) {
        const rect = element.getBoundingClientRect()
        setTargetRect(rect)
        
        // Скроллим к элементу если он не в видимости
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }

    updateTargetRect()

    // Обновляем при ресайзе окна
    window.addEventListener('resize', updateTargetRect)
    return () => window.removeEventListener('resize', updateTargetRect)
  }, [showTour, currentStep])

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
    localStorage.setItem(TOUR_STORAGE_KEY, 'true')
    onComplete?.()
  }

  const handleCompleteTour = () => {
    setShowTour(false)
    setTimeout(() => setShowCompletion(true), 300)
  }

  const handleCloseCompletion = () => {
    setShowCompletion(false)
    localStorage.setItem(TOUR_STORAGE_KEY, 'true')
    
    // Отправляем событие что тур завершён
    window.dispatchEvent(new Event('main-tour-completed'))
    
    onComplete?.()
  }

  // Функция для повторного запуска тура (вызывается из родителя)
  const restartTour = () => {
    setCurrentStep(0)
    setShowWelcome(true)
    localStorage.removeItem(TOUR_STORAGE_KEY)
  }

  // Экспортируем функцию для внешнего использования
  useEffect(() => {
    (window as any).__restartTour = restartTour
    return () => {
      delete (window as any).__restartTour
    }
  }, [])

  const step = TOUR_STEPS[currentStep]

  return (
    <>
      {/* Welcome Modal */}
      {showWelcome && (
        <WelcomeModal onStart={handleStartTour} />
      )}

      {/* Tour */}
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

      {/* Completion Modal */}
      {showCompletion && (
        <CompletionModal onClose={handleCloseCompletion} />
      )}
    </>
  )
}
