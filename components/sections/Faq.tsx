'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    question: 'Сколько стоит сервис?',
    answer: '5 000 ₽ в месяц. Внедрение — бесплатно. Никаких скрытых платежей и комиссий.',
  },
  {
    question: 'Как быстро можно начать работу?',
    answer: 'Мы интегрируем бота в вашу группу и обучаем персонал. Весь процесс занимает 1–2 дня. Уже на следующий день вы видите финансовую картину клиники.',
  },
  {
    question: 'Нужно ли специальное оборудование или программы?',
    answer: 'Нет. Всё работает через Telegram или Max на любом смартфоне. Дашборд открывается в браузере — никаких установок.',
  },
  {
    question: 'Мои данные в безопасности?',
    answer: 'Да. Дашборд видит только собственник или руководитель. Администраторы вносят данные через бот, но не имеют доступа к финансовой картине. Данные хранятся в облаке и не передаются третьим лицам.',
  },
  {
    question: 'Подходит ли сервис для небольшой клиники?',
    answer: 'Да, сервис создан специально для небольших клиник, где всё держится на руководителе. Всё понятно без финансового образования.',
  },
  {
    question: 'Есть ли интеграция с банками?',
    answer: 'Интеграция со всеми банками РФ уже в разработке и скоро появится. Пока операции вносятся через удобный бот за 10 секунд.',
  },
]

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-[#E5E5E5] last:border-none">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="text-[#141414] text-base md:text-[18px] font-medium leading-snug">
          {question}
        </span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full bg-[#FF0084] flex items-center justify-center transition-transform duration-300 ${
            open ? 'rotate-45' : ''
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1v12M1 7h12" stroke="#fff" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="text-[#6B6B6B] text-base md:text-[17px] leading-relaxed pb-5">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Faq() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[#141414] text-[28px] md:text-[40px] font-days-one leading-tight mb-8">
            Часто задаваемые вопросы:
          </h2>

          <div className="bg-[#F2F2F2] rounded-[24px] px-6 md:px-10">
            {faqs.map((faq, i) => (
              <FaqItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
