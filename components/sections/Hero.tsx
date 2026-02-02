'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center relative overflow-hidden py-20">
      
      {/* Тонкий декоративный элемент */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-16 max-w-6xl relative z-10">
        
        {/* Текстовый блок по центру */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Главный заголовок */}
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-days-one leading-[1.15] mb-8 max-w-4xl mx-auto">
            Систематизируйте финансы клиники. Принимайте решения на основе цифр.
          </h1>

          {/* Подзаголовок */}
          <p className="text-xl lg:text-2xl font-navigo font-normal text-text-primary mb-12 leading-relaxed max-w-3xl mx-auto">
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

        {/* Дашборд внизу */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-12 border border-gray-100">
            
            {/* Заголовок дашборда */}
            <div className="mb-10">
              <h3 className="font-days-one text-5xl text-text-primary">82 000 ₽</h3>
              <p className="text-base font-navigo text-text-secondary mt-2">Чистая прибыль за сегодня</p>
            </div>
            
            {/* Две карточки */}
            <div className="grid grid-cols-2 gap-6 max-w-2xl">
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
    </section>
  )
}
