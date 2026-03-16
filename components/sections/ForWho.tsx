'use client'

import Image from 'next/image'

export default function ForWho() {
  const pains = [
    "Платить бухгалтеру за то, что можно\nавтоматизировать",
    "Разбираться в 1С и сложных сервисах",
    "Узнавать о кассовом разрыве\nпостфактум",
    "Тратить вечера на сведение цифр"
  ]

  const solutions = [
    "Администратор вносит расход за 10\nсекунд в Telegram",
    "Вы видите картину по деньгам в\nлюбой момент",
    "Всё понятно без финансового\nобразования",
    "5 000 ₽/мес — и больше никакой\nтетрадки"
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        <h2 className="text-[32px] sm:text-4xl lg:text-5xl xl:text-[56px] text-[#141414] font-museo-sans font-medium leading-[1.1] mb-12 lg:mb-16 text-center lg:text-left tracking-tight">
          Для клиник, где всё <br className="hidden sm:block" /> держится на тебе
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* ЛЕВАЯ КОЛОНКА (Боли) */}
          <div className="flex flex-col">
            <div className="w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] rounded-3xl mb-8 lg:mb-10 overflow-hidden relative">
              <Image
                src="/Forclinic1.png"
                alt="Проблемы финансового учёта в клинике"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            <h3 className="text-2xl lg:text-[28px] font-museo-sans font-medium text-[#141414] mb-6 lg:mb-8">
              Мы знаем, что вы не хотите:
            </h3>
            
            <ul className="flex flex-col gap-5 lg:gap-6">
              {pains.map((text, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="shrink-0 mt-1">
                    <CrossIcon />
                  </div>
                  <span className="text-lg lg:text-[20px] font-museo-sans text-[#141414] leading-tight whitespace-pre-line">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* ПРАВАЯ КОЛОНКА (Решения) */}
          <div className="flex flex-col">
            <div className="w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/3] rounded-3xl mb-8 lg:mb-10 overflow-hidden relative">
              <Image
                src="/Forclinic2.png"
                alt="Решение для финансового учёта клиники"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            
            <h3 className="text-2xl lg:text-[28px] font-museo-sans font-medium text-[#141414] mb-6 lg:mb-8">
              Поэтому мы сделали иначе:
            </h3>
            
            <ul className="flex flex-col gap-5 lg:gap-6">
              {solutions.map((text, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="shrink-0 mt-1">
                    <CheckCircleIcon />
                  </div>
                  <span className="text-lg lg:text-[20px] font-museo-sans text-[#141414] leading-tight whitespace-pre-line">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

function CrossIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
      <path fill="#ff473e" d="m13.306 9.961 6.143-6.143a1.617 1.617 0 0 0 0-2.287L18.392.474a1.617 1.617 0 0 0-2.287 0L9.961 6.617 3.818.474a1.617 1.617 0 0 0-2.287 0L.474 1.53a1.617 1.617 0 0 0 0 2.287L6.617 9.96.474 16.105a1.617 1.617 0 0 0 0 2.287L1.53 19.45a1.617 1.617 0 0 0 2.287 0l6.143-6.143 6.144 6.143a1.617 1.617 0 0 0 2.287 0l1.057-1.057a1.617 1.617 0 0 0 0-2.287z"/>
    </svg>
  )
}

function CheckCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path fill="url(#a)" d="M0 12a12 12 0 1 1 24 0 12 12 0 0 1-24 0"/>
      <path fill="url(#b)" d="m16.24 8.328-5.74 5.756-2.792-2.792a1 1 0 1 0-1.416 1.416l3.5 3.5a1 1 0 0 0 1.416 0l6.448-6.468a1 1 0 0 0-1.416-1.412"/>
      <defs>
        <linearGradient id="a" x1=".858" x2="17.42" y1="4.5" y2="21.708" gradientUnits="userSpaceOnUse">
          <stop stopColor="#52d17c"/>
          <stop offset="1" stopColor="#22918b"/>
        </linearGradient>
        <linearGradient id="b" x1="8.24" x2="10.152" y1="8.898" y2="18.42" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff"/>
          <stop offset="1" stopColor="#e3ffd9"/>
        </linearGradient>
      </defs>
    </svg>
  )
}
