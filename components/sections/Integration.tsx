'use client'

export default function Integration() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-5xl">
        
        {/* Серый контейнер-подложка */}
        <div className="bg-[#F4F4F6] rounded-[40px] px-6 py-12 md:p-16 lg:p-20 w-full max-w-3xl mx-auto">
          
          {/* Заголовок */}
          <h2 className="text-center mb-10 md:mb-14">
            <span className="block text-[28px] md:text-4xl text-[#141414] font-sofia-sans mb-1">
              Быстро и безопасно
            </span>
            <span className="block text-[32px] md:text-[42px] text-[#141414] font-museo-sans font-medium leading-tight">
              внедряемся в клинику
            </span>
          </h2>

          {/* Список шагов */}
          <div className="flex flex-col gap-6">
            
            {/* Шаг 1 */}
            <div className="bg-primary rounded-[32px] p-6 md:p-8 flex items-center justify-between gap-4 shadow-sm">
              <div className="flex flex-col">
                <h3 className="text-white text-2xl md:text-3xl font-sofia-sans mb-2">
                  Интеграция бота
                </h3>
                <p className="text-white/90 text-sm md:text-base font-montserrat leading-snug max-w-[280px] md:max-w-md">
                  Интеграция бота по учету финансов в группу. Обучение персонала
                </p>
              </div>
              <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 bg-white rounded-full flex items-center justify-center shadow-sm">
                <span className="text-primary text-2xl md:text-3xl font-bold font-museo-sans">1</span>
              </div>
            </div>

            {/* Шаг 2 */}
            <div className="bg-primary rounded-[32px] p-6 md:p-8 flex items-center justify-between gap-4 shadow-sm">
              <div className="flex flex-col">
                <h3 className="text-white text-2xl md:text-3xl font-sofia-sans mb-2">
                  Доступ к дашборду
                </h3>
                <p className="text-white/90 text-sm md:text-base font-montserrat leading-snug max-w-[280px] md:max-w-md">
                  Обучаем как пользоваться дашбордом и отправляем приглашение на почту.
                </p>
              </div>
              <div className="w-14 h-14 md:w-16 md:h-16 shrink-0 bg-white rounded-full flex items-center justify-center shadow-sm">
                <span className="text-primary text-2xl md:text-3xl font-bold font-museo-sans">2</span>
              </div>
            </div>

            {/* Шаг 3 (Финальный) */}
            <div className="bg-white rounded-[32px] p-8 md:p-10 text-center shadow-sm mt-2">
              <h3 className="text-primary text-2xl md:text-3xl font-sofia-sans mb-4 leading-tight">
                Это все! Мы намеренно<br className="hidden md:block" /> не усложняем сервис!
              </h3>
              <p className="text-primary text-sm md:text-base font-montserrat leading-snug max-w-lg mx-auto">
                В "сколько денег" разберется даже ребенок. Мы знаем, что вы устали от навороченных сервисов, функции которых, зачастую, вам просто не нужны!
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
