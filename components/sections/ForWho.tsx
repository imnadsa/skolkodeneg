'use client'

export default function Mission() {
  return (
    <section className="bg-slate-50 py-20 lg:py-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 max-w-7xl">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Левая часть: Эмоциональный текст (Боли и Философия) */}
          <div>
            
            <h2 className="text-4xl lg:text-2xl font-coolvetica text-[#0f172a] mb-8 leading-[1.15]">
              Мы делаем сервис для тех, кто лечит, а не внедряет IT.
            </h2>

            <div className="space-y-6 text-xl text-slate-600 font-navigo leading-relaxed">
              <p>
                Мы знаем, как выглядит ваш бизнес. Это не огромная корпорация с IT-отделом. 
                Это уютная клиника на 3–5 кресел. Вы знаете каждого врача по имени, вы сами 
                переживаете за пациентов, и часто у вас просто нет времени разбираться в сложных таблицах.
              </p>
              
              <p>
                Рынок переполнен «космическими кораблями» — сложными программами, которые требуют 
                месяцев настройки и стоят как крыло самолета. Малому бизнесу это не нужно. 
                Вы не должны тратить выходные на попытки понять, куда нажала администратор Маша.
              </p>

              <p className="font-medium text-slate-900 border-l-4 border-primary pl-4">
                Наша цель — дать инструмент, который подойдет 90% небольших клиник. 
                Без лишних кнопок. Без оплаты за внедрение. Без головной боли.
              </p>
            </div>
          </div>

          {/* Правая часть: Факты и Преимущества (сетка) */}
          <div className="grid sm:grid-cols-2 gap-6">
            
            {/* Карточка 1: Про внедрение */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-coolvetica text-slate-800 mb-3">
                Внедрение за 1 день
              </h3>
              <p className="text-slate-500 font-navigo text-base">
                Никаких долгих интеграций. Мы подключаем сервис, и уже к вечеру вы видите свои цифры. Это быстрее, чем настроить новый телефон.
              </p>
            </div>

            {/* Карточка 2: Про персонал */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <h3 className="text-xl font-coolvetica text-slate-800 mb-3">
                Персонал поймет сразу
              </h3>
              <p className="text-slate-500 font-navigo text-base">
                Администраторы и медсестры осваивают сервис за одну смену. Мы убрали всё лишнее, чтобы в программе невозможно было запутаться.
              </p>
            </div>

            {/* Карточка 3: Бесплатно */}
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow sm:col-span-2">
              <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <div>
                  <h3 className="text-xl font-coolvetica text-slate-800 mb-2">
                    0 ₽ за внедрение
                  </h3>
                  <p className="text-slate-500 font-navigo text-base">
                    Мы не берем деньги за «воздух». Помогаем настроить всё под ключ бесплатно, 
                    потому что верим: вы должны платить только за результат, который приносит сервис.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
