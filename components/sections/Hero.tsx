'use client'

export default function Hero() {
  return (
    <section className="min-h-screen bg-white flex items-center relative overflow-hidden py-20">
      
      {/* Декоративный элемент (оставил, так как он не мешает) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 lg:px-16 max-w-6xl relative z-10">
        
        {/* Текстовый блок по центру */}
        <div className="text-center mb-16">
          
          {/* Главный заголовок (Сделал меньше: было text-7xl, стало text-4xl/5xl) */}
          <h1 className="text-4xl lg:text-5xl font-days-one leading-[1.2] mb-8 max-w-4xl mx-auto">
            Систематизируйте финансы клиники. Принимайте решения на основе цифр.
          </h1>

          {/* Подзаголовок (Размер оставил прежним text-xl/2xl) */}
          <p className="text-xl lg:text-2xl font-navigo font-normal text-text-primary mb-12 leading-relaxed max-w-3xl mx-auto">
            Без тетрадок, таблиц и финансового образования. Просто открываете дашборд — и видите, где прибыль, где убыток и{' '}
            <span className="text-primary font-medium">сколько денег</span> в клинике
          </p>

          {/* CTA Кнопка (без анимаций) */}
          <button className="bg-primary hover:bg-primary-light text-white font-navigo font-medium text-lg px-12 py-5 rounded-full transition-all shadow-lg shadow-primary/20">
            Внедрить бесплатно
          </button>
        </div>

        {/* Дашборд (без анимаций появления) */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl shadow-2xl p-12 border border-gray-100">
            
            {/* Заголовок дашборда */}
            <div className="mb-10 text-left"> {/* Или text-center, если нужно центрировать и внутри */}
              <h3 className="font-days-one text-5xl text-text-primary">82 000 ₽</h3>
              <p className="text-base font-navigo text-text-secondary mt-2">Чистая прибыль за сегодня</p>
            </div>
            
            {/* Карточки */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
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
        </div>

      </div>
    </section>
  )
}
