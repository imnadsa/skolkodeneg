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
  const [mounted, setMounted] = useState(false)
  const [showWelcome, setShowWelcome] = useState(false)
  const [showTour, setShowTour] = useState(false)
  const [showCompletion, setShowCompletion] = useState(false)
  const [currentStep, setCurrentStep] = useState(0)
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null)

  // Ждём монтирования на клиенте
  useEffect(() => {
    setMounted(true)
  }, [])

  // Проверяем localStorage только на клиенте
  useEffect(() => {
    if (!mounted) return
    
    const tourCompleted = localStorage.getItem(TOUR_STORAGE_KEY)
    if (!tourCompleted) {
      setTimeout(() => setShowWelcome(true), 500)
    }
  }, [mounted])

  // Обновляем позицию подсвеченного элемента
  useEffect(() => {
    if (!showTour || !mounted) return

    const updateTargetRect = () => {
      const step = TOUR_STEPS[currentStep]
      const element = document.querySelector(step.target)
      
      if (element) {
        const rect = element.getBoundingClientRect()
        setTargetRect(rect)
        element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }

    updateTargetRect()
    window.addEventListener('resize', updateTargetRect)
    return () => window.removeEventListener('resize', updateTargetRect)
  }, [showTour, currentStep, mounted])

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
    
    // Отправляем событие что тур завершён
    window.dispatchEvent(new Event('main-tour-completed'))
    
    onComplete?.()
  }

  // Функция для повторного запуска тура
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

  // Не рендерим ничего до монтирования
  if (!mounted) return null

  const step = TOUR_STEPS[currentStep]

  return (
    <>
      {showWelcome && (
        <WelcomeModal onStart={handleStartTour} />
      )}

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

      {showCompletion && (
        <CompletionModal onClose={handleCloseCompletion} />
      )}
    </>
  )
}
