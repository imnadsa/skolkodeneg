'use client'

import Image from 'next/image'

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex flex-col justify-center relative overflow-hidden py-20">
      
      {/* Декоративный элемент (размытый круг на фоне) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl relative z-10">
        
        {/* Текстовый блок по центру */}
        <div className="text-center mb-12 lg:mb-16">
          
          {/* Главный заголовок */}
          <h1 className="text-4xl lg:text-5xl font-days-one leading-tight mb-6 max-w-4xl mx-auto text-[#0f172a]">
            Систематизируйте финансы клиники. Принимайте решения на основе цифр.
          </h1>

          {/* Подзаголовок (остался большим, как вы просили) */}
          <p className="text-xl lg:text-2xl font-navigo font-normal text-slate-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            Без тетрадок, таблиц и финансового образования. Просто открываете дашборд — и видите, где прибыль, где убыток и{' '}
            <span className="text-primary font-semibold">сколько денег</span> в клинике
          </p>

          {/* Кнопка CTA */}
          <button className="bg-primary hover:bg-primary-dark text-white font-navigo font-medium text-lg px-10 py-4 rounded-full transition-all shadow-xl shadow-primary/20 transform active:scale-95">
            Внедрить бесплатно
          </button>
        </div>

        {/* Блок с картинкой дашборда */}
        <div className="w-full max-w-6xl mx-auto">
          <Image
            src="/dashboard.png"
            alt="Дашборд аналитики клиники"
            width={1200}
            height={800}
            quality={100}
            priority
            className="w-full h-auto rounded-3xl shadow-2xl border border-gray-100"
          />
        </div>

      </div>
    </section>
  )
}
