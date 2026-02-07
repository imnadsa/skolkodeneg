'use client'

import { IconRocket, IconX } from '@tabler/icons-react'

interface WelcomeModalProps {
  onStart: () => void
  onClose?: () => void
}

export default function WelcomeModal({ onStart, onClose }: WelcomeModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
      
      {/* Modal */}
      <div className="relative bg-surface border-2 border-primary/20 rounded-3xl p-8 md:p-12 max-w-lg w-full shadow-glow-pink-lg animate-in fade-in zoom-in duration-300">
        {/* Close button (optional) */}
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-surface-light transition-colors"
          >
            <IconX size={20} className="text-text-tertiary" />
          </button>
        )}
        
        {/* Content */}
        <div className="text-center space-y-6">
          {/* Icon */}
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center shadow-glow-pink">
            <IconRocket size={40} className="text-white" stroke={2} />
          </div>
          
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-coolvetica text-text-primary">
            Добро пожаловать в песочницу "Сколько Денег"!
          </h2>
          
          {/* Description */}
          <p className="text-text-secondary font-navigo text-lg leading-relaxed">
            Попробуйте базовые функции сервиса "Сколько Денег" по учёту движения денежных средств
          </p>
          
          {/* Features */}
          <div className="space-y-3 text-left bg-surface-light rounded-2xl p-6">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary text-sm font-bold">1</span>
              </div>
              <p className="text-text-primary font-navigo text-sm">
                Добавляйте транзакции через симулятор Telegram-бота 
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary text-sm font-bold">2</span>
              </div>
              <p className="text-text-primary font-navigo text-sm">
                Следите за балансом и финансовыми показателями
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-primary text-sm font-bold">3</span>
              </div>
              <p className="text-text-primary font-navigo text-sm">
                Смотрите аналитику и историю операций
              </p>
            </div>
          </div>
          
          {/* CTA Button */}
          <button
            onClick={onStart}
            className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-white font-navigo font-semibold py-4 px-8 rounded-full transition-all shadow-glow-pink hover:shadow-glow-pink-lg active:scale-95"
          >
            Начать тур
          </button>
        </div>
      </div>
    </div>
  )
}
