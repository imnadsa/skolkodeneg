'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import HeroAnimation from '@/components/sections/HeroAnimation'

const phrases = [
  "просто",
  "с удовольствием",
  "системно",
  "без тетрадок",
  "за 5 минут в день"
]

interface HeroProps {
  onCta?: () => void
}

export default function Hero({ onCta }: HeroProps) {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen bg-white flex flex-col justify-center relative overflow-hidden py-12 lg:py-0">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* ЛЕВАЯ КОЛОНКА: ТЕКСТ */}
          <div className="flex flex-col items-start text-left w-full max-w-2xl mx-auto lg:mx-0">
            
            <h1 className="text-[38px] sm:text-5xl lg:text-[54px] xl:text-[60px] text-[#141414] leading-[1.1] mb-10 font-days-one">
              Считайте финансы<br />
              клиники{' '}
              <span className="inline-flex overflow-hidden align-bottom h-[1.2em] min-w-[300px] lg:min-w-[380px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentPhraseIndex}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -30, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="text-primary font-sofia-sans whitespace-nowrap"
                  >
                    {phrases[currentPhraseIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <ul className="space-y-5 mb-12 text-lg lg:text-[20px] font-museo-sans text-[#141414] w-full">
              <li className="flex items-start gap-4">
                <CheckIcon />
                <span className="leading-tight mt-1">Удобный дашборд</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckIcon />
                <span className="leading-tight mt-1">Автоматизация учета через телеграмм/Max</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckIcon />
                <span className="leading-tight mt-1">Калькулятор маржинальной прибыли<br/>услуг клиники</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckIcon />
                <span className="leading-tight mt-1">Интеграция с банками</span>
              </li>
              <li className="flex items-start gap-4">
                <CheckIcon />
                <span className="leading-tight mt-1">
                  И <span className="text-primary">много других</span> решение для{' '}
                  <span className="underline decoration-1 underline-offset-4">медицинского бизнеса</span>
                </span>
              </li>
            </ul>

            <div className="flex flex-col items-start w-full sm:w-auto">
              <button
                onClick={onCta}
                className="bg-primary hover:bg-primary-dark text-white font-sofia-sans text-xl lg:text-2xl px-14 py-4 rounded-full transition-all shadow-glow-pink transform active:scale-95 w-full sm:w-auto mb-4"
              >
                стать клиентом
              </button>
              <p className="text-[#141414] font-sofia-sans text-lg lg:text-xl italic ml-2">
                Внедрение бесплатно • 5 000 ₽/мес
              </p>
            </div>
          </div>

          {/* ПРАВАЯ КОЛОНКА: АНИМАЦИЯ (только десктоп) */}
          <div className="hidden lg:flex justify-end items-center w-full h-full">
            <div className="w-full max-w-[580px] xl:max-w-[660px]">
              <HeroAnimation />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <div className="shrink-0 mt-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" fill="none" viewBox="0 0 27 27">
        <path stroke="#ff0084" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M24.141 6.66 12.487 19.98l-4.995-4.996m0 4.995-4.995-4.995m16.65-8.324-7.076 8.116"/>
        <path stroke="#ff0084" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M24.141 6.66 12.487 19.98l-4.995-4.996m0 4.995-4.995-4.995m16.65-8.324-7.076 8.116"/>
      </svg>
    </div>
  )
}
