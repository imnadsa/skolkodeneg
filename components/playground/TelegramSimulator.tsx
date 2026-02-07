'use client'

import { useState, useRef, useEffect } from 'react'
import { IconSend } from '@tabler/icons-react'
import Image from 'next/image'
import { usePlayground } from '@/lib/playground-store'
import { parseTransaction, isCategoriesCommand, isHelpCommand } from '@/lib/transaction-parser'
import { INCOME_CATEGORIES, EXPENSE_CATEGORIES } from '@/lib/categories'
import Card from '@/components/ui/Card'
import TelegramButtons from './TelegramButtons'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  buttons?: { text: string; icon?: string; action: string }[]
}

// Шаги онбординга ВНУТРИ бота (после главного тура)
const BOT_ONBOARDING_STEPS = [
  {
    step: 0,
    title: 'Формат транзакции',
    message: 'Чтобы добавить транзакцию, напишите:\n\n<сумма> <категория> <счёт> [примечание]\n\nНапример:\n5000 зп нал Петров',
  },
  {
    step: 1,
    title: 'Попробуйте сами',
    message: 'Отлично! Теперь попробуйте сами.\n\nДобавьте расход на зарплату:\nНапишите: 5000 зп нал',
  },
  {
    step: 2,
    title: 'Категории',
    message: 'Отлично! Вы добавили первую транзакцию!\n\nИспользуйте кнопки ниже чтобы посмотреть категории, счета или получить помощь.',
  }
]

export default function TelegramSimulator() {
  const [input, setInput] = useState('')
  const [botOnboardingActive, setBotOnboardingActive] = useState(false)
  const [botOnboardingStep, setBotOnboardingStep] = useState(0)
  const [showStartButton, setShowStartButton] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])

  // Добавляем приветственное сообщение только на клиенте
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{
        id: '0',
        text: 'Привет! Я бот "Сколько Денег".\n\nГотовы научиться добавлять транзакции?',
        sender: 'bot',
        timestamp: new Date()
      }])
    }
  }, [])


  const messagesEndRef = useRef<HTMLDivElement>(null)
  const addTransaction = usePlayground((s) => s.addTransaction)

  // Слушаем событие завершения главного тура
  useEffect(() => {
    const handleTourComplete = () => {
      setShowStartButton(true)
    }

    window.addEventListener('main-tour-completed', handleTourComplete)
    return () => window.removeEventListener('main-tour-completed', handleTourComplete)
  }, [])

  // Автоскролл при добавлении сообщений
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const addMessage = (text: string, sender: 'user' | 'bot', buttons?: { text: string; icon?: string; action: string }[]) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date(),
      buttons
    }
    setMessages((prev) => [...prev, newMessage])
  }

  const startBotOnboarding = () => {
    setShowStartButton(false)
    setBotOnboardingActive(true)
    setBotOnboardingStep(0)
    
    setTimeout(() => {
      addMessage(BOT_ONBOARDING_STEPS[0].message, 'bot')
    }, 300)
  }

  const nextBotOnboardingStep = () => {
    if (botOnboardingStep < BOT_ONBOARDING_STEPS.length - 1) {
      setBotOnboardingStep(prev => prev + 1)
      setTimeout(() => {
        addMessage(BOT_ONBOARDING_STEPS[botOnboardingStep + 1].message, 'bot')
      }, 300)
    } else {
      // Завершение онбординга бота
      setBotOnboardingActive(false)
    }
  }

  const handleButtonClick = (action: string) => {
    if (action === 'show_expenses') {
      const expenseList = EXPENSE_CATEGORIES.map(c => `• ${c.name}`).join('\n')
      addMessage('Категории расходов:\n\n' + expenseList, 'bot')
    } else if (action === 'show_income') {
      const incomeList = INCOME_CATEGORIES.map(c => `• ${c.name}`).join('\n')
      addMessage('Категории доходов:\n\n' + incomeList, 'bot')
    } else if (action === 'show_accounts') {
      addMessage('Счета бизнеса:\n\n• Наличные (нал)\n• Банковская карта (безнал, карта)', 'bot')
    } else if (action === 'help') {
      addMessage(
        'Формат добавления транзакции:\n\n<сумма> <категория> <счёт> [примечание]\n\nПримеры:\n• 5000 зп нал Петров\n• 100000 оплата карта Иванов\n• 20000 маркетинг безнал Реклама ВК',
        'bot'
      )
    }
  }

  const handleSend = () => {
    if (!input.trim()) return

    // Добавляем сообщение пользователя
    addMessage(input, 'user')

    // Обрабатываем команду
    if (isHelpCommand(input)) {
      setTimeout(() => {
        addMessage(
          'Формат команды:\n<сумма> <категория> <счёт> [примечание]\n\nПримеры:\n• 5000 зп нал Петрова\n• 100000 оплата карта Иванов\n• 20000 маркетинг безнал Реклама ВК',
          'bot'
        )
      }, 300)
    } else if (isCategoriesCommand(input)) {
      setTimeout(() => {
        const incomeList = INCOME_CATEGORIES.map(c => `${c.name}`).join('\n')
        const expenseList = EXPENSE_CATEGORIES.map(c => `${c.name}`).join('\n')
        addMessage(
          `ДОХОДЫ:\n${incomeList}\n\nРАСХОДЫ:\n${expenseList}`,
          'bot'
        )
      }, 300)
    } else {
      // Пробуем парсить транзакцию
      const result = parseTransaction(input)
      
      setTimeout(() => {
        if (result.success && result.transaction) {
          addTransaction(result.transaction)
          addMessage(
            `Записано!\n\n${result.transaction.type === 'income' ? 'Доход' : 'Расход'}: ${result.transaction.category}\nСумма: ${result.transaction.amount.toLocaleString('ru-RU')}₽\nСчёт: ${result.transaction.account === 'cash' ? 'Наличные' : 'Карта'}${result.transaction.note ? `\nПримечание: ${result.transaction.note}` : ''}`,
            'bot'
          )

          // Если в режиме онбординга бота на шаге 1 (попробуйте сами)
          if (botOnboardingActive && botOnboardingStep === 1) {
            setTimeout(() => nextBotOnboardingStep(), 1000)
          }
        } else {
          addMessage(`Ошибка: ${result.error}\n\nНапишите "помощь" для примеров`, 'bot')
        }
      }, 300)
    }

    setInput('')
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <Card className="flex flex-col h-[600px] tour-telegram relative">
      {/* Overlay с кнопкой "Начать работу с ботом" */}
      {showStartButton && (
        <div className="absolute inset-0 z-10 bg-background/80 backdrop-blur-sm rounded-2xl flex items-center justify-center">
          <div className="text-center space-y-4 p-8">
            <h3 className="text-2xl font-coolvetica text-text-primary">
              Теперь попробуйте с ботом!
            </h3>
            <p className="text-text-secondary font-navigo">
              Научитесь добавлять транзакции через Telegram
            </p>
            <button
              onClick={startBotOnboarding}
              className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-white font-navigo font-semibold py-3 px-8 rounded-full transition-all shadow-glow-pink active:scale-95"
            >
              Начать работу с ботом
            </button>
          </div>
        </div>
      )}

      {/* Шапка чата */}
      <div className="pb-4 border-b border-border">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-surface-light border-2 border-primary/30">
            <Image
              src="/logo-12.png"
              alt="Сколько Денег"
              width={48}
              height={48}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <p className="font-semibold text-lg font-coolvetica text-text-primary">Сколько Денег</p>
            <p className="text-xs text-success flex items-center gap-1">
              <span className="w-2 h-2 bg-success rounded-full animate-pulse" />
              онлайн
            </p>
          </div>
        </div>
        
        {/* Прогресс-бар онбординга БОТА */}
        {botOnboardingActive && (
          <div className="mt-3">
            <div className="flex items-center justify-between mb-1">
              <p className="text-xs text-text-secondary font-navigo">
                {BOT_ONBOARDING_STEPS[botOnboardingStep]?.title}
              </p>
              <p className="text-xs text-primary font-navigo font-semibold">
                {botOnboardingStep + 1}/{BOT_ONBOARDING_STEPS.length}
              </p>
            </div>
            <div className="h-1.5 bg-surface-light rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-primary-light transition-all duration-500 rounded-full"
                style={{ width: `${((botOnboardingStep + 1) / BOT_ONBOARDING_STEPS.length) * 100}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Сообщения */}
      <div className="flex-1 overflow-y-auto py-4 space-y-3">
        {messages.map((msg) => (
          <div key={msg.id} className="space-y-2">
            <div
              className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] px-4 py-3 rounded-2xl whitespace-pre-line ${
                  msg.sender === 'user'
                    ? 'bg-primary text-white rounded-br-sm shadow-glow-pink'
                    : 'bg-surface-light text-text-primary rounded-bl-sm'
                }`}
              >
                <p className="text-sm font-navigo">{msg.text}</p>
                <p className={`text-[10px] mt-1 ${msg.sender === 'user' ? 'text-white/70' : 'text-text-tertiary'}`}>
                  {msg.timestamp.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
            
            {/* Кнопки под сообщением бота */}
            {msg.sender === 'bot' && msg.buttons && (
              <div className="flex justify-start">
                <div className="max-w-[80%] w-full">
                  <TelegramButtons buttons={msg.buttons} onButtonClick={handleButtonClick} />
                </div>
              </div>
            )}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Инпут */}
      <div className="pt-4 border-t border-border">
        <div className="flex gap-2 mb-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="5000 зп нал..."
            className="flex-1 px-4 py-3 bg-surface-light border border-border rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-navigo text-text-primary placeholder:text-text-tertiary"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="w-12 h-12 rounded-full bg-primary hover:bg-primary-light disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-all shadow-glow-pink active:scale-95"
          >
            <IconSend size={20} stroke={2} className="text-white" />
          </button>
        </div>

        {/* ФИКСИРОВАННЫЕ кнопки клавиатуры внизу */}
        <TelegramButtons 
          buttons={[
            { text: 'Категории расходов', action: 'show_expenses' },
            { text: 'Категории доходов', action: 'show_income' },
            { text: 'Счета бизнеса', action: 'show_accounts' },
            { text: 'Помощь', action: 'help' },
          ]} 
          onButtonClick={handleButtonClick} 
        />
        
        <p className="text-xs text-text-tertiary mt-2 text-center">
          Формат: <span className="font-mono text-primary">сумма категория счёт примечание</span>
        </p>
      </div>
    </Card>
  )
}
