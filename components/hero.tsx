'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen bg-background flex items-center relative overflow-hidden">
      {/* Декоративные элементы фона */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-success/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Левая часть - текст */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Над-заголовок */}
            <div className="inline-block mb-6">
              <span className="text-sm font-navigo font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                Для владельцев медицинских клиник
              </span>
            </div>

            {/* Главный заголовок */}
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-days-one leading-tight mb-6">
              Ваша клиника работает{' '}
              <span className="text-primary">в плюс</span> или{' '}
              <span className="text-text-secondary">в минус?</span>
            </h1>

            {/* Подзаголовок */}
            <p className="text-lg lg:text-xl font-navigo text-text-secondary mb-8 leading-relaxed max-w-xl">
              Пациенты приходят, врачи принимают, а вы не знаете — где прибыль? 
              <span className="text-text-primary font-medium"> «Сколько Денег» покажет реальную картину</span> вашей клиники без тетрадок и головной боли
            </p>

            {/* Преимущества */}
            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-success" />
                </div>
                <p className="text-base font-navigo text-text-primary">
                  Видите прибыль по каждой услуге и врачу
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-success" />
                </div>
                <p className="text-base font-navigo text-text-primary">
                  Администраторы вносят расходы за 10 секунд в Telegram
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-success" />
                </div>
                <p className="text-base font-navigo text-text-primary">
                  Контролируете финансы клиники из любой точки
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-primary hover:bg-primary-light text-white font-navigo font-medium px-8 py-4 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/25"
              >
                Навести порядок в финансах
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <button className="font-navigo font-medium text-text-primary hover:text-primary px-8 py-4 rounded-2xl border-2 border-gray-200 hover:border-primary/30 transition-all">
                Посмотреть демо
              </button>
            </div>

            {/* Цена под кнопкой */}
            <p className="text-sm font-navigo text-text-secondary mt-4">
              5 000 ₽/месяц • Запуск за 5 минут без бухгалтера
            </p>
          </motion.div>

          {/* Правая часть - визуал */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Тут будет мокап дашборда */}
            <div className="relative">
              {/* Основной дашборд */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-days-one text-2xl text-text-primary">Финансы клиники</h3>
                  <span className="text-xs font-navigo text-text-secondary bg-background px-3 py-1 rounded-full">
                    Сегодня
                  </span>
                </div>
                
                {/* Карточки с цифрами */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-success/10 rounded-2xl p-5">
                    <p className="text-xs font-navigo text-text-secondary mb-1">Выручка</p>
                    <p className="text-2xl font-days-one text-success">+127 000 ₽</p>
                  </div>
                  <div className="bg-primary/10 rounded-2xl p-5">
                    <p className="text-xs font-navigo text-text-secondary mb-1">Расходы</p>
                    <p className="text-2xl font-days-one text-primary">-45 000 ₽</p>
                  </div>
                </div>

                {/* Услуги */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-background rounded-xl">
                    <span className="text-sm font-navigo text-text-primary">Прием терапевта</span>
                    <span className="text-sm font-navigo font-medium text-success">+45 000 ₽</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background rounded-xl">
                    <span className="text-sm font-navigo text-text-primary">Анализы</span>
                    <span className="text-sm font-navigo font-medium text-success">+28 000 ₽</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-background rounded-xl">
                    <span className="text-sm font-navigo text-text-primary">УЗИ</span>
                    <span className="text-sm font-navigo font-medium text-success">+54 000 ₽</span>
                  </div>
                </div>
              </div>

              {/* Телеграм бот (поверх, справа внизу) */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-4 border border-gray-100 max-w-[200px]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-sm">💬</span>
                  </div>
                  <span className="text-xs font-navigo font-medium text-text-primary">Telegram бот</span>
                </div>
                <div className="bg-background/50 rounded-lg p-2">
                  <p className="text-xs font-navigo text-text-secondary">
                    Расход: медикаменты
                  </p>
                  <p className="text-sm font-navigo font-medium text-primary mt-1">
                    12 000 ₽
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
