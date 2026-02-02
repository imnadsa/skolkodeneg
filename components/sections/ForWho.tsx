'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Check } from 'lucide-react'

const questions = [
  {
    id: 1,
    question: "У вас нет времени разбираться в сложных системах?",
    answer: "Мы сделали систему, которая понятна с первого взгляда. Без обучения, без инструкций — просто открываете и работаете.",
    emoji: "⏱️"
  },
  {
    id: 2,
    question: "Не хотите платить 100 000 ₽ за внедрение?",
    answer: "У нас внедрение бесплатное. Запускаем систему за 1 день, подключаем telegram-бот — и всё работает.",
    emoji: "💸"
  },
  {
    id: 3,
    question: "Администраторы меняются — каждый раз учить заново?",
    answer: "Новый сотрудник разбирается за 1 день. Telegram-бот настолько прост, что вопросов не возникает.",
    emoji: "👥"
  },
  {
    id: 4,
    question: "Вам не нужны 500 функций для сетевых клиник?",
    answer: "Только то, что нужно малому бизнесу: доходы, расходы, прибыль по услугам, маржинальность. Всё.",
    emoji: "🎯"
  }
]

export default function ForWho() {
  const [activeCard, setActiveCard] = useState<number | null>(null)

  return (
    <section className="py-24 bg-gradient-to-b from-white to-background relative overflow-hidden">
      
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-success/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10">
        
        {/* Заголовок */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-days-one mb-6">
            Это про вашу клинику?
          </h2>
          <p className="text-xl font-navigo text-text-secondary max-w-2xl mx-auto">
            Если хотя бы один вопрос откликнулся — «Сколько Денег» создан для вас
          </p>
        </motion.div>

        {/* Сетка карточек */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {questions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setActiveCard(item.id)}
              onMouseLeave={() => setActiveCard(null)}
              className="group relative"
            >
              <div 
                className={`
                  relative bg-white rounded-3xl p-8 border-2 transition-all duration-500 cursor-pointer
                  ${activeCard === item.id 
                    ? 'border-primary shadow-2xl shadow-primary/10 scale-[1.02]' 
                    : 'border-gray-100 hover:border-gray-200 shadow-lg'
                  }
                `}
              >
                {/* Emoji */}
                <div className="text-5xl mb-4 transition-transform duration-500 group-hover:scale-110">
                  {item.emoji}
                </div>

                {/* Вопрос */}
                <h3 className="text-xl lg:text-2xl font-days-one mb-4 leading-tight">
                  {item.question}
                </h3>

                {/* Ответ с анимацией */}
                <motion.div
                  initial={false}
                  animate={{
                    height: activeCard === item.id ? 'auto' : 0,
                    opacity: activeCard === item.id ? 1 : 0,
                    marginTop: activeCard === item.id ? 16 : 0
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="flex items-start gap-3 bg-primary/5 rounded-2xl p-4">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <p className="font-navigo text-text-primary leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </motion.div>

                {/* Индикатор наведения */}
                {activeCard !== item.id && (
                  <div className="absolute bottom-6 right-6 text-sm font-navigo text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                    Навести →
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Финальный месседж */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16 max-w-3xl mx-auto"
        >
          <div className="bg-white rounded-3xl p-10 border-2 border-primary/20 shadow-xl">
            <h3 className="text-2xl lg:text-3xl font-days-one mb-4">
              Мы создали систему для 90% медицинских клиник
            </h3>
            <p className="text-lg font-navigo text-text-secondary mb-6 leading-relaxed">
              Для тех, кому нужна простота, а не избыточность. <br/>
              Без заморочек. Без головной боли. Без месяцев ожидания.
            </p>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary hover:bg-primary-light text-white font-navigo font-medium text-lg px-10 py-4 rounded-full transition-all shadow-lg shadow-primary/20"
            >
              Попробовать бесплатно
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
