'use client'

export default function Integration() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">

        <div className="bg-[#F4F4F6] rounded-[40px] p-8 md:p-12 lg:p-16">

          <h2 className="text-center mb-12 lg:mb-16">
            <span className="block text-[28px] md:text-4xl font-sofia-sans text-[#141414] mb-1">
              Быстро и безопасно
            </span>
            <span className="block text-[32px] md:text-[42px] font-museo-sans font-medium text-[#141414] leading-tight">
              внедряемся в клинику
            </span>
          </h2>

          <div className="flex flex-col lg:flex-row gap-4 lg:gap-5">

            {/* Шаг 1 */}
            <div className="relative overflow-hidden bg-[#8547FF] rounded-[28px] p-7 md:p-8 lg:flex-1 min-h-[180px] lg:min-h-[260px]">
              <span className="absolute -bottom-3 -right-1 text-[9rem] leading-none font-bold font-museo-sans text-white/[0.07] pointer-events-none select-none">
                1
              </span>
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-5">
                  <span className="text-white text-sm font-bold font-museo-sans">01</span>
                </div>
                <h3 className="text-white text-xl md:text-2xl font-sofia-sans mb-2 leading-tight">
                  Интеграция бота
                </h3>
                <p className="text-white/75 text-sm md:text-[15px] font-museo-sans leading-snug">
                  Интеграция бота по учету финансов в группу. Обучение персонала
                </p>
              </div>
            </div>

            {/* Шаг 2 */}
            <div className="relative overflow-hidden bg-[#8547FF] rounded-[28px] p-7 md:p-8 lg:flex-1 min-h-[180px] lg:min-h-[260px]">
              <span className="absolute -bottom-3 -right-1 text-[9rem] leading-none font-bold font-museo-sans text-white/[0.07] pointer-events-none select-none">
                2
              </span>
              <div className="relative z-10">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center mb-5">
                  <span className="text-white text-sm font-bold font-museo-sans">02</span>
                </div>
                <h3 className="text-white text-xl md:text-2xl font-sofia-sans mb-2 leading-tight">
                  Доступ к дашборду
                </h3>
                <p className="text-white/75 text-sm md:text-[15px] font-museo-sans leading-snug">
                  Обучаем как пользоваться дашбордом и отправляем приглашение на почту.
                </p>
              </div>
            </div>

            {/* Финал */}
            <div className="relative overflow-hidden bg-white rounded-[28px] p-7 md:p-8 lg:flex-1 min-h-[180px] lg:min-h-[260px] flex flex-col justify-center">
              <div className="w-10 h-10 bg-[#8547FF]/10 rounded-full flex items-center justify-center mb-5">
                <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-[#8547FF]">
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="text-[#141414] text-xl md:text-2xl font-sofia-sans mb-3 leading-tight">
                Это все! Мы намеренно не усложняем сервис!
              </h3>
              <p className="text-[#141414]/60 text-sm md:text-[15px] font-museo-sans leading-snug">
                В «сколько денег» разберется даже ребенок. Мы знаем, что вы устали от навороченных сервисов, функции которых вам просто не нужны!
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
