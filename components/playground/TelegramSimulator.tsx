'use client'

import { useState, useRef, useEffect } from 'react'
import { IconSend, IconRobot } from '@tabler/icons-react'
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

// Шаги онбординга ВНУТРИ бота
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
    message: 'Супер! Вы добавили первую транзакцию!\n\nИспользуйте кнопки внизу (свайпайте их!), чтобы посмотреть категории или получить помощь.',
  }
]

export default function TelegramSimulator() {
  const [input, setInput] = useState('')
  const [botOnboardingActive, setBotOnboardingActive] = useState(false)
  const [botOnboardingStep, setBotOnboardingStep] = useState(0)
  const [showStartButton, setShowStartButton] = useState(false)
  
  // 🔥 FIX #418: Начальное состояние пустое, чтобы сервер и клиент совпадали
  const [messages, setMessages] = useState<Message[]>([])

  const messagesEndRef = useRef<HTMLDivElement>(null)
  const addTransaction = usePlayground((s) => s.addTransaction)

  // 🔥 FIX #418: Загружаем приветствие только на клиенте
  useEffect(() => {
    setMessages([
      {
        id: '0',
        text: 'Привет! Я бот "Сколько Денег".\n\nГотовы научиться добавлять транзакции?',
        sender: 'bot',
        timestamp: new Date()
      }
    ])
  }, [])

  // Слушаем событие завершения главного тура
  useEffect(() => {
    const handleTourComplete = () => {
      setShowStartButton(true)
    }
    window.addEventListener('main-tour-completed', handleTourComplete)
    return () => window.removeEventListener('main-tour-completed', handleTourComplete)
  }, [])

  // Автоскролл
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
      }, 500)
    } else {
      setBotOnboardingActive(false)
    }
  }

  const handleButtonClick = (action: string) => {
    if (action === 'show_expenses') {
      const expenseList = EXPENSE_CATEGORIES.map(c => `• ${c.name}`).join('\n')
      addMessage('📉 Категории расходов:\n\n' + expenseList, 'bot')
    } else if (action === 'show_income') {
      const incomeList = INCOME_CATEGORIES.map(c => `• ${c.name}`).join('\n')
      addMessage('📈 Категории доходов:\n\n' + incomeList, 'bot')
    } else if (action === 'show_accounts') {
      addMessage('💳 Счета бизнеса:\n\n• Наличные (нал)\n• Банковская карта (безнал, карта)', 'bot')
    } else if (action === 'help') {
      addMessage(
        'ℹ️ Помощь по командам:\n\nФормат:\n<сумма> <категория> <счёт> [прим]\n\nПримеры:\n• 5000 зп нал Петров\n• 100000 оплата карта Иванов\n• 20000 маркетинг безнал ВК',
        'bot'
      )
    }
  }

  const handleSend = () => {
    if (!input.trim()) return

    addMessage(input, 'user')

    if (isHelpCommand(input)) {
      setTimeout(() => {
        addMessage('ℹ️ Напишите сумму, категорию и счет.\nПример: 5000 зп нал', 'bot')
      }, 300)
    } else if (isCategoriesCommand(input)) {
      setTimeout(() => {
        handleButtonClick('show_expenses')
      }, 300)
    } else {
      const result = parseTransaction(input)
      
      setTimeout(() => {
        if (result.success && result.transaction) {
          addTransaction(result.transaction)
          addMessage(
            `✅ Записано!\n\n${result.transaction.type === 'income' ? '📈 Доход' : '📉 Расход'}: ${result.transaction.category}\n💰 Сумма: ${result.transaction.amount.toLocaleString('ru-RU')}₽\n💳 Счёт: ${result.transaction.account === 'cash' ? 'Наличные' : 'Карта'}${result.transaction.note ? `\n📝 Примечание: ${result.transaction.note}` : ''}`,
            'bot'
          )

          if (botOnboardingActive && botOnboardingStep === 1) {
            setTimeout(() => nextBotOnboardingStep(), 1000)
          }
        } else {
          addMessage(`❌ Ошибка: ${result.error}\n\nНажмите кнопку "Помощь" для примеров`, 'bot')
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
    <Card className="flex flex-col h-[600px] tour-telegram relative overflow-hidden bg-[#0E1621] border-[#182533]">
      
      {/* Background Pattern (Telegram-like) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://web.telegram.org/img/bg_0.png')] bg-repeat" />

      {/* Overlay: Start Bot Tour */}
      {showStartButton && (
        <div className="absolute inset-0 z-20 bg-black/60 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-300">
          <div className="text-center space-y-5 p-8 max-w-sm">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-2 animate-bounce">
              <IconRobot size={32} className="text-primary" />
            </div>
            <h3 className="text-2xl font-coolvetica text-white">
              Попробуйте сами!
            </h3>
            <p className="text-gray-300 font-navigo leading-relaxed">
              Пройдите короткое обучение и научитесь добавлять операции за 3 секунды.
            </p>
            <button
              onClick={startBotOnboarding}
              className="w-full bg-primary hover:bg-primary-dark text-white font-navigo font-semibold py-4 px-8 rounded-xl transition-all shadow-glow-pink active:scale-95"
            >
              Запустить обучение
            </button>
          </div>
        </div>
      )}

      {/* Header */}
      <div className="relative z-10 px-4 py-3 bg-[#17212B] border-b border-[#0E1621] flex items-center justify-between shadow-md">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-light border border-white/10">
            <Image src="/logo-12.png" alt="Bot" width={40} height={40} className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-bold text-base font-navigo text-white leading-tight">Сколько Денег</p>
            <p className="text-xs text-[#3B9DE6]">бот</p>
          </div>
        </div>
        
        {/* Onboarding Progress */}
        {botOnboardingActive && (
          <div className="text-right">
             <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 rounded">
                {botOnboardingStep + 1} / 3
             </span>
          </div>
        )}
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 relative z-10 scrollbar-thin scrollbar-thumb-[#2B5278] scrollbar-track-transparent">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-300`}>
            <div
              className={`max-w-[85%] px-4 py-2 rounded-2xl text-[15px] leading-snug shadow-sm ${
                msg.sender === 'user'
                  ? 'bg-[#2B5278] text-white rounded-br-none'
                  : 'bg-[#182533] text-white rounded-bl-none border border-[#0E1621]'
              }`}
            >
              <p className="whitespace-pre-line font-navigo">{msg.text}</p>
              <p className={`text-[10px] mt-1 text-right ${msg.sender === 'user' ? 'text-[#7FAAC9]' : 'text-[#6C7883]'}`}>
                {msg.timestamp.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area + Chips */}
      <div className="relative z-10 bg-[#17212B] border-t border-[#0E1621]">
        
        {/* Chips (Quick Actions) - Horizontal Scroll */}
        <div className="pt-3 pb-1">
             <TelegramButtons 
              buttons={[
                { text: '💸 Расходы', action: 'show_expenses' },
                { text: '💰 Доходы', action: 'show_income' },
                { text: '💳 Счета', action: 'show_accounts' },
                { text: '❓ Помощь', action: 'help' },
              ]} 
              onButtonClick={handleButtonClick} 
            />
        </div>

        {/* Input Field */}
        <div className="p-3 pt-1 flex gap-2 items-end">
          <div className="flex-1 bg-[#0E1621] rounded-2xl flex items-center border border-[#26313C] focus-within:border-[#3B9DE6] transition-colors">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="5000 зп нал..."
              className="w-full bg-transparent border-none text-white px-4 py-3 focus:ring-0 placeholder:text-[#53616F] font-navigo"
            />
          </div>
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="w-12 h-12 rounded-full bg-[#3B9DE6] hover:bg-[#348AC9] disabled:opacity-50 disabled:bg-[#26313C] flex items-center justify-center text-white shadow-lg transition-all active:scale-95 flex-shrink-0"
          >
            <IconSend size={22} />
          </button>
        </div>
        
        <div className="pb-2 text-center">
             <p className="text-[10px] text-[#53616F]">
                 Формат: сумма категория счёт
             </p>
        </div>
      </div>
    </Card>
  )
}
