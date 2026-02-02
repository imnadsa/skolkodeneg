'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center relative overflow-hidden">
      
      {/* Тонкий декоративный элемент */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Левая часть - текст */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Главный заголовок */}
            <h1 className="text-5xl lg:text-6xl font-days-one leading-[1.15] mb-8">
              Систематизируйте финансы клиники. Принимайте решения на основе цифр.
            </h1>

            {/* Подзаголовок */}
            <p className="text-lg font-navigo text-text-secondary mb-10 leading-relaxed max-w-xl">
              Без тетрадок, таблиц и финансового образования. Просто открываете дашборд — и видите, где прибыль, где убыток и{' '}
              <span className="text-primary font-medium">сколько денег</span> в клинике
            </p>

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary hover:bg-primary-light text-white font-navigo font-medium text-lg px-12 py-5 rounded-full transition-all shadow-lg shadow-primary/20"
            >
              Внедрить бесплатно
            </motion.button>
          </motion.div>

          {/* Правая часть - увеличенный мокап */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-12 border border-gray-100">
              
              {/* Заголовок дашборда */}
              <div className="mb-10">
                <h3 className="font-days-one text-5xl text-text-primary">82 000 ₽</h3>
                <p className="text-base font-navigo text-text-secondary mt-2">Чистая прибыль за сегодня</p>
              </div>
              
              {/* Две карточки */}
              <div className="grid grid-cols-2 gap-5">
                <div className="bg-white rounded-2xl p-7 border border-gray-100">
                  <p className="text-sm font-navigo text-text-secondary mb-3">Выручка</p>
                  <p className="text-3xl font-days-one text-success">+127 000</p>
                </div>
                <div className="bg-white rounded-2xl p-7 border border-gray-100">
                  <p className="text-sm font-navigo text-text-secondary mb-3">Расходы</p>
                  <p className="text-3xl font-days-one text-primary">-45 000</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
