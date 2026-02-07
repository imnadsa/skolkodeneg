'use client'

import { useState, useRef, useEffect } from 'react'
import { IconSend, IconRobot, IconFolders, IconCreditCard } from '@tabler/icons-react'
import { usePlayground } from '@/lib/playground-store'
import { parseTransaction, isCategoriesCommand, isHelpCommand } from '@/lib/transaction-parser'
import { INCOME_CATEGORIES, EXPENSE_CATEGORIES } from '@/lib/categories'
import Card from '@/components/ui/Card'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

// Константы цветов Telegram (Dark)
const TG_COLORS = {
  bg: '#0E1621',          // Основной фон
  surface: '#17212B',     // Шапка, инпут и кнопки
  userMsg: '#2B5278',     // Сообщение юзера
  botMsg: '#182533',      // Сообщение бота
  text: '#FFFFFF',        // Текст
  accent: '#5288C1',      // Акцент (кнопка отправки)
  border: '#0E1621'       // Границы
}

// Шаги онбординга
const BOT_ONBOARDING_STEPS = [
  { step: 0, title: 'Формат', message: 'Чтобы добавить транзакцию, напишите:\n\n<сумма> <категория> <счёт> [примечание]\n\nНапример:\n5000 зп нал Петров' },
  { step: 1, title: 'Проба', message: 'Попробуйте сами.\n\nДобавьте расход:\nНапишите: 5000 зп нал' },
  { step: 2, title: 'Готово', message: 'Супер! Используйте кнопки меню внизу для просмотра справочников.' }
]

export default function TelegramSimulator() {
  const [input, setInput] = useState('')
  const [showStartButton, setShowStartButton] = useState(false)
  const [botOnboardingStep, setBotOnboardingStep] = useState(0)
  const [botOnboardingActive, setBotOnboardingActive] = useState(false)
  
  // Сообщения
  const [messages, setMessages] = useState<Message[]>([])
  
  // Рефы для скролла
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const addTransaction = usePlayground((s) => s.addTransaction)

  // 1. Инициализация
  useEffect(() => {
    setMessages([{
      id: 'init',
      text: 'Привет! Я бот "Сколько Денег".\nНажмите кнопку "Категории" или "Счета".',
      sender: 'bot',
      timestamp: new Date()
    }])
  }, [])

  // 2. Локальный скролл (Fix Page Jump)
  useEffect(() => {
    if (messagesContainerRef.current) {
      const container = messagesContainerRef.current
      container.scrollTop = container.scrollHeight
    }
  }, [messages])

  // 3. Листенер окончания главного тура
  useEffect(() => {
    const handleTourComplete = () => setShowStartButton(true)
    window.addEventListener('main-tour-completed', handleTourComplete)
    return () => window.removeEventListener('main-tour-completed', handleTourComplete)
  }, [])

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    const newMessage: Message = {
      id: Date.now().toString() + Math.random(),
      text,
      sender,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
  }

  const startBotOnboarding = () => {
    setShowStartButton(false)
    setBotOnboardingActive(true)
    setBotOnboardingStep(0)
    setTimeout(() => addMessage(BOT_ONBOARDING_STEPS[0].message, 'bot'), 300)
  }

  const handleButtonClick = (action: string) => {
    // 1. Сначала показываем, что нажал юзер
    let userText = ''
    switch(action) {
      case 'show_categories': userText = '📂 Категории'; break;
      case 'show_accounts': userText = '💳 Счета'; break;
    }
    addMessage(userText, 'user')

    // 2. Ответ бота
    setTimeout(() => {
      if (action === 'show_categories') {
        // Формируем единый список
        const incomeList = INCOME_CATEGORIES.map(c => `• ${c.name}`).join('\n')
        const expenseList = EXPENSE_CATEGORIES.map(c => `• ${c.name}`).join('\n')
        
        addMessage(
          `📉 **РАСХОДЫ:**\n${expenseList}\n\n➖➖➖➖➖➖\n\n📈 **ДОХОДЫ:**\n${incomeList}`, 
          'bot'
        )
      } else if (action === 'show_accounts') {
        addMessage('💳 **СЧЕТА БИЗНЕСА:**\n\n• Наличные (нал)\n• Карта (безнал, карта, б/н)', 'bot')
      }
    }, 400)
  }

  const handleSend = () => {
    if (!input.trim()) return

    // Добавляем сообщение юзера
    addMessage(input, 'user')
    const currentInput = input
    setInput('')

    // Логика ответа
    setTimeout(() => {
      if (isHelpCommand(currentInput)) {
        addMessage('ℹ️ Формат:\n<сумма> <категория> <счёт>\n\nПример: 5000 зп нал', 'bot')
      } else if (isCategoriesCommand(currentInput)) {
        handleButtonClick('show_categories')
      } else {
        const result = parseTransaction(currentInput)
        
        if (result.success && result.transaction) {
          addTransaction(result.transaction)
          addMessage(
            `✅ **Сохранено!**\n\n💰 ${result.transaction.amount.toLocaleString()}₽\n📂 ${result.transaction.category}\n💳 ${result.transaction.account === 'cash' ? 'Наличные' : 'Карта'}`,
            'bot'
          )
          
          // Логика онбординга
          if (botOnboardingActive && botOnboardingStep < 2) {
             const nextStep = botOnboardingStep + 1
             setBotOnboardingStep(nextStep)
             setTimeout(() => addMessage(BOT_ONBOARDING_STEPS[nextStep].message, 'bot'), 600)
             if (nextStep === 2) setBotOnboardingActive(false)
          }
        } else {
          addMessage(`❌ Ошибка: ${result.error}`, 'bot')
        }
      }
    }, 400)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  // Компонент кнопки клавиатуры
  const KeyboardButton = ({ text, icon: Icon, action }: any) => (
    <button
      onClick={() => handleButtonClick(action)}
      className="flex items-center justify-center gap-2 bg-[#2B5278]/20 hover:bg-[#2B5278]/40 active:bg-[#2B5278]/60 transition-colors py-3 rounded-lg border border-white/5 group h-12"
    >
      <Icon size={20} className="text-[#5288C1] group-hover:text-white transition-colors" />
      <span className="text-sm font-navigo text-white font-medium">{text}</span>
    </button>
  )

  return (
    <Card className="flex flex-col h-[650px] relative overflow-hidden p-0 border-none shadow-2xl" style={{ backgroundColor: TG_COLORS.bg }}>
      
      {/* Фоновый паттерн Telegram */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://web.telegram.org/img/bg_0.png')] bg-repeat" />

      {/* Оверлей запуска обучения */}
      {showStartButton && (
        <div className="absolute inset-0 z-30 bg-black/60 backdrop-blur-sm flex items-center justify-center animate-in fade-in">
          <div className="text-center p-6 max-w-xs">
            <div className="w-16 h-16 bg-[#5288C1] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/20">
              <IconRobot size={32} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Обучение боту</h3>
            <button
              onClick={startBotOnboarding}
              className="w-full bg-[#5288C1] hover:bg-[#4176ad] text-white py-3 rounded-xl font-medium transition-all"
            >
              Начать
            </button>
          </div>
        </div>
      )}

      {/* 1. Header (Шапка) */}
      <div className="relative z-10 px-4 py-3 flex items-center gap-4 shadow-md" style={{ backgroundColor: TG_COLORS.surface }}>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#FF0084] to-[#FF4DA6] flex items-center justify-center text-white font-bold text-lg">
          СД
        </div>
        <div className="flex-1">
          <p className="text-white font-bold text-base leading-none mb-1">Сколько Денег</p>
          <p className="text-[#5288C1] text-xs">бот</p>
        </div>
        {/* Индикатор обучения */}
        {botOnboardingActive && (
          <div className="bg-[#5288C1]/10 px-2 py-1 rounded text-xs text-[#5288C1] font-mono">
            {botOnboardingStep + 1}/3
          </div>
        )}
      </div>

      {/* 2. Messages List (Список сообщений) */}
      <div 
        ref={messagesContainerRef}
        className="flex-1 overflow-y-auto p-4 space-y-3 relative z-10 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
      >
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2`}>
            <div
              className="max-w-[85%] px-4 py-2 rounded-2xl text-[15px] leading-relaxed shadow-sm relative group"
              style={{
                backgroundColor: msg.sender === 'user' ? TG_COLORS.userMsg : TG_COLORS.botMsg,
                borderRadius: msg.sender === 'user' ? '16px 16px 0 16px' : '16px 16px 16px 0',
              }}
            >
              <p className="text-white whitespace-pre-wrap font-navigo">{msg.text}</p>
              <div className="flex justify-end mt-1">
                <span className="text-[11px] opacity-60">
                  {msg.timestamp.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 3. Keyboard & Input (Клавиатура и ввод) */}
      <div className="relative z-20" style={{ backgroundColor: TG_COLORS.surface }}>
        
        {/* 2 Кнопки - СТРОГО 2 */}
        <div className="px-2 pt-2 pb-2 grid grid-cols-2 gap-2">
          <KeyboardButton text="Категории" icon={IconFolders} action="show_categories" />
          <KeyboardButton text="Счета" icon={IconCreditCard} action="show_accounts" />
        </div>

        {/* Input Area */}
        <div className="p-3 pt-1 flex gap-3 items-end border-t border-black/10">
          <div className="flex-1 bg-[#0E1621] rounded-2xl flex items-center min-h-[48px] border border-transparent focus-within:border-[#5288C1] transition-colors">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Сообщение..."
              className="w-full bg-transparent border-none text-white px-4 py-2 focus:ring-0 placeholder:text-[#7F91A4] font-navigo"
            />
          </div>
          
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ backgroundColor: TG_COLORS.accent }}
          >
            <IconSend size={24} className="text-white ml-0.5 mt-0.5" />
          </button>
        </div>
      </div>
    </Card>
  )
}
