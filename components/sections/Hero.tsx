'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center relative overflow-hidden">
      
      {/* Очень тонкий декоративный элемент */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Левая часть - текст */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Главный заголовок */}
            <h1 className="text-6xl lg:text-7xl font-days-one leading-[1.1] mb-8">
              Ваша клиника работает{' '}
              <span className="text-primary">в плюс</span>
              <br />
              или в минус?
            </h1>

            {/* Подзаголовок */}
            <p className="text-xl font-navigo text-text-secondary mb-12 leading-relaxed max-w-lg">
              «Сколько Денег» покажет реальную картину вашей клиники без тетрадок и головной боли
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary hover:bg-primary-light text-white font-navigo font-medium text-lg px-10 py-5 rounded-full flex items-center justify-center gap-2 transition-all"
              >
                Навести порядок
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>

            {/* Цена */}
            <p className="text-sm font-navigo text-text-secondary">
              5 000 ₽/месяц • Запуск за 5 минут
            </p>
          </motion.div>

          {/* Правая часть - один чистый мокап */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-10 border border-gray-100">
              
              {/* Заголовок дашборда */}
              <div className="mb-8">
                <h3 className="font-days-one text-3xl text-text-primary">82 000 ₽</h3>
                <p className="text-sm font-navigo text-text-secondary mt-1">Чистая прибыль за сегодня</p>
              </div>
              
              {/* Две карточки */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <p className="text-xs font-navigo text-text-secondary mb-2">Выручка</p>
                  <p className="text-2xl font-days-one text-success">+127 000</p>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-100">
                  <p className="text-xs font-navigo text-text-secondary mb-2">Расходы</p>
                  <p className="text-2xl font-days-one text-primary">-45 000</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
