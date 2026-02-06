'use client'

import { useState, useRef, useEffect } from 'react'
import { IconSend } from '@tabler/icons-react'
import Image from 'next/image'
import { usePlayground } from '@/lib/playground-store'
import { parseTransaction, isCategoriesCommand, isHelpCommand } from '@/lib/transaction-parser'
import { INCOME_CATEGORIES, EXPENSE_CATEGORIES } from '@/lib/categories'
import Button from '@/components/ui/Button'
import Card from '@/components/ui/Card'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
}

export default function TelegramSimulator() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '0',
      text: 'Привет! 👋 Я бот "Сколько Денег". Добавляйте транзакции в формате:\n\n<сумма> <категория> <счёт> [примечание]\n\nНапример: 5000 зп нал\n\nНапишите "категории" чтобы увидеть список категорий',
      sender: 'bot',
      timestamp: new Date()
    }
  ])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const addTransaction = usePlayground((s) => s.addTransaction)

  // Автоскролл только при первой загрузке
  useEffect(() => {
    if (messages.length === 1) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'auto' })
    }
  }, [])

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date()
    }
    setMessages((prev) => [...prev, newMessage])
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
        const incomeList = INCOME_CATEGORIES.map(c => `${c.emoji} ${c.name}`).join('\n')
        const expenseList = EXPENSE_CATEGORIES.map(c => `${c.emoji} ${c.name}`).join('\n')
        addMessage(
          `📥 ДОХОДЫ:\n${incomeList}\n\n📤 РАСХОДЫ:\n${expenseList}`,
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
            `✅ Записано!\n\n${result.transaction.type === 'income' ? '📥' : '📤'} ${result.transaction.category}\n💰 ${result.transaction.amount.toLocaleString('ru-RU')}₽\n🏦 ${result.transaction.account === 'cash' ? 'Наличные' : 'Карта'}${result.transaction.note ? `\n📝 ${result.transaction.note}` : ''}`,
            'bot'
          )
        } else {
          addMessage(`❌ ${result.error}\n\nНапишите "помощь" для примеров`, 'bot')
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
    <Card className="flex flex-col h-[600px]">
      {/* Шапка чата */}
      <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 bg-white border-2 border-primary/20">
          <Image
            src="/logo-12.png"
            alt="Сколько Денег"
            width={48}
            height={48}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-lg font-coolvetica">Сколько Денег</p>
          <p className="text-xs text-green-500 flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            онлайн
          </p>
        </div>
      </div>

      {/* Сообщения */}
      <div className="flex-1 overflow-y-auto py-4 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] px-4 py-3 rounded-2xl whitespace-pre-line ${
                msg.sender === 'user'
                  ? 'bg-primary text-white rounded-br-sm'
                  : 'bg-gray-100 text-gray-900 rounded-bl-sm'
              }`}
            >
              <p className="text-sm font-navigo">{msg.text}</p>
              <p className={`text-[10px] mt-1 ${msg.sender === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                {msg.timestamp.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Инпут */}
      <div className="pt-4 border-t border-gray-100">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="5000 зп нал..."
            className="flex-1 px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent font-navigo"
          />
          <Button
            onClick={handleSend}
            disabled={!input.trim()}
            size="md"
            className="rounded-full w-12 h-12 p-0"
          >
            <IconSend size={20} stroke={2} />
          </Button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Формат: <span className="font-mono">сумма категория счёт примечание</span>
        </p>
      </div>
    </Card>
  )
}
