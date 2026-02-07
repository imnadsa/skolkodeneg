'use client'

import { IconCheck, IconSparkles } from '@tabler/icons-react'

interface CompletionModalProps {
  onClose: () => void
}

export default function CompletionModal({ onClose }: CompletionModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
      
      {/* Modal */}
      <div className="relative bg-surface border-2 border-success/20 rounded-3xl p-8 md:p-12 max-w-lg w-full shadow-xl animate-in fade-in zoom-in duration-300">
        {/* Content */}
        <div className="text-center space-y-6">
          {/* Success Icon */}
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-success to-success/80 rounded-full flex items-center justify-center shadow-lg">
            <IconCheck size={40} className="text-white" stroke={3} />
          </div>
          
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-coolvetica text-text-primary">
            Отлично! Вы готовы!
          </h2>
          
          {/* Description */}
          <div className="space-y-3">
            <p className="text-text-primary font-navigo text-lg leading-relaxed">
              Спасибо за прохождение тура!
            </p>
            <p className="text-text-secondary font-navigo leading-relaxed">
              Теперь вы знаете как работать с сервисом "Сколько Денег". Попробуйте добавить свои первые данные в отчёт ДДС.
            </p>
          </div>
          
          {/* Features recap */}
          <div className="bg-surface-light rounded-2xl p-6 text-left space-y-3">
            <div className="flex items-center gap-3">
              <IconSparkles size={20} className="text-primary flex-shrink-0" />
              <p className="text-text-primary font-navigo text-sm">
                Добавляйте транзакции через симулятор Telegram-бота
              </p>
            </div>
            <div className="flex items-center gap-3">
              <IconSparkles size={20} className="text-primary flex-shrink-0" />
              <p className="text-text-primary font-navigo text-sm">
                Следите за балансом в реальном времени
              </p>
            </div>
            <div className="flex items-center gap-3">
              <IconSparkles size={20} className="text-primary flex-shrink-0" />
              <p className="text-text-primary font-navigo text-sm">
                Анализируйте доходы и расходы
              </p>
            </div>
          </div>
          
          {/* CTA Button */}
          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-success to-success/80 hover:from-success/90 hover:to-success/70 text-white font-navigo font-semibold py-4 px-8 rounded-full transition-all active:scale-95"
          >
            Начать работу
          </button>
        </div>
      </div>
    </div>
  )
}
