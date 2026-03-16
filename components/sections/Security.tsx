'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const securitySlides = [
  {
    id: 1,
    title: "Доступ только у руководителей",
    description: "Доступ к дашборду — только у собственника или руководителя!",
    subDescription: "Администраторы вносят данные через бот, но видеть картину целиком может только владелец.",
    footerText: "Никаких утечек внутри команды.",
    icon: (
      <svg width="87" height="87" viewBox="0 0 87 87" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#a_sec1)">
          <path fillRule="evenodd" clipRule="evenodd" d="M83.049 9.87C70.36-4.012 25.056-2.127 5.049 8.567a1.305 1.305 0 0 0 1.197 2.32C26.002.772 69.314.265 80.152 12.48c1.958 2.247-1.45 32.618-3.335 40.738S58.692 75.694 50.645 80.515c-5.293 3.19-5.909 3.081-11.093 0-9.856-6.018-28.376-23.128-28.992-27.369 0-.616-6.634-34.832-6.018-37.261a1.16 1.16 0 0 0-2.211-.58c-.689 3.081 5.292 36.794 5.365 37.99.471 6.63 28.996 33.778 37.551 33.705s33.238-21.424 35.848-32.621c1.269-5.873 6.159-39.872 1.954-44.508" fill="#fff"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M40.354 43.797c5.22 3.045 14.246-1.776 11.455-7.504a1.31 1.31 0 1 0-2.43.979c.943 2.828-4.53 4.531-6.633 2.936a3.625 3.625 0 0 1 0-5.038 5.87 5.87 0 0 1 5.981-.508 1.16 1.16 0 0 0 .979-2.03c-10.15-5.764-16.494 6.38-9.353 11.165" fill="#e3ffd9"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M25.817 49.63c.435.689 2.429 3.625 2.755 4.024a3.99 3.99 0 0 0 4.133.47 24 24 0 0 0 3.625-2.102q.97.545 1.994.98c0 2.863-.617 5.98 1.703 7.25a11.46 11.46 0 0 0 5.547.833c.87 0 4.458-.399 4.857-.508a3.84 3.84 0 0 0 2.429-2.9 15.1 15.1 0 0 0 0-4.785c.507-.253.761-.362 1.305-.688a9.84 9.84 0 0 0 5.184 1.812c3.95-.435 5.288-5.075 6.702-7.504a2.14 2.14 0 0 0-.181-2.465c-5.546-6.488-5.184-3.226-5.329-6.452 1.16-.834 4.06-2.32 4.785-4.133 1.414-3.625-1.957-6.775-3.407-9.204a1.7 1.7 0 0 0-1.813-.797q-2.026.45-3.987 1.124c-4.17 1.413-1.45 1.45-4.785.181-.508-3.009.326-6.887-4.133-7.576a34 34 0 0 0-6.235.362 1.27 1.27 0 0 0-1.16.87 34 34 0 0 0-1.196 6.127 9.8 9.8 0 0 0-2.244 1.05c-4.314-2.863-5.909-4.82-9.679 1.487-.399.689-2.03 3.843-2.139 4.241-.833 2.936 3.626 4.821 5.148 5.728a25 25 0 0 0 0 2.755c-5.184 2.61-7.866 3.226-3.879 9.823m6.344-7.25a1.7 1.7 0 0 0 .87-1.74c-.87-5.654 1.776-4.422-3.117-7.032-.472-.254-2.103-.942-2.466-1.595a22.5 22.5 0 0 1 3.625-6.195c1.74.435 4.423 3.625 5.837 2.537 1.957-1.486 3.842-1.413 3.879-2.718-.033-1.9.273-3.79.906-5.583 7.721-.616 6.162-.326 6.706 6.126a1.56 1.56 0 0 0 1.015 1.305c6.126 3.19 1.921 1.595 10.15-.29.725 1.088 2.791 3.625 2.284 5.003-6.126 4.096-5.293 2.537-5.293 8.192 0 1.885 1.197 1.197 5.075 5.51-.435.907-1.812 3.88-2.827 3.988-7.25-3.625-3.625-2.139-8.954-.363-2.538.834-1.087 4.06-1.196 6.92a8.7 8.7 0 0 1-3.372.508 9.8 9.8 0 0 1-2.718 0v-5.111a2.066 2.066 0 0 0-1.486-2.03c-3.626-1.015-4.097-2.755-5.8-1.631-4.93 3.19-3.988 2.9-4.713 1.92a18.1 18.1 0 0 1-2.9-5.002 32.6 32.6 0 0 1 4.495-2.791z" fill="#e3ffd9"/>
        </g>
        <defs>
          <clipPath id="a_sec1">
            <path fill="#fff" d="M0 0h87v87H0z"/>
          </clipPath>
        </defs>
      </svg>
    )
  },
  {
    id: 2,
    title: "Данные хранятся в облаке",
    description: "Данные хранятся в облаке Ничего не потеряется если сломается телефон или уволится администратор.",
    subDescription: "",
    footerText: "Вся история всегда с вами.",
    icon: (
       <svg width="87" height="87" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <path d="M12 18h.01" />
        <path d="M17 12s1.5 0 1.5-1.5V9a3 3 0 0 0-6 0v1.5c0 1.5 1.5 1.5 1.5 1.5" stroke="#e3ffd9" />
        <path d="M12 9v2" stroke="#e3ffd9" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Разделение ролей",
    description: "Линейный сотрудник видит только то, что нужно для работы — кнопки в боте.",
    subDescription: "",
    footerText: "Финансовая картина закрыта.",
    icon: (
      <svg width="87" height="87" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <rect x="15" y="2" width="7" height="9" rx="1" stroke="#e3ffd9" />
        <path d="M18.5 5.5v2" stroke="#e3ffd9" />
      </svg>
    )
  },
  {
    id: 4,
    title: "Данные не передаются третьим лицам",
    description: "Ваши данные не передаются третьим лицам Никакой рекламы, никаких партнёров.",
    subDescription: "",
    footerText: "Только вы и ваши цифры.",
    icon: (
      <svg width="87" height="87" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <circle cx="12" cy="12" r="3" stroke="#e3ffd9" />
        <path d="M12 9v6M9 12h6" stroke="#e3ffd9" />
      </svg>
    )
  },
  {
    id: 5,
    title: "Защищённое соединение",
    description: "Защищённое соединение Все данные передаются по зашифрованным протоколам.",
    subDescription: "Резервные копии создаются автоматически.",
    footerText: "Сервис работает на enterprise-инфраструктуре с высоким уровнем надёжности.",
    icon: (
      <svg width="87" height="87" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" stroke="#e3ffd9" />
      </svg>
    )
  }
]

export default function Security() {
  const [activeSlide, setActiveSlide] = useState(0)

  return (
    <section className="py-12 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#8547FF] rounded-[48px] p-8 md:p-16 relative shadow-2xl overflow-hidden min-h-[700px] flex flex-col"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-white text-[32px] md:text-[56px] leading-[1.1] font-comfortaa font-bold mb-4">
              Мы гарантируем<br />
              <span className="font-days-one font-normal">безопасность финансов</span>
            </h2>
          </div>

          {/* Slider Controls */}
          <div className="relative mb-16 max-w-2xl mx-auto w-full">
             <div className="flex bg-white rounded-2xl overflow-hidden shadow-lg p-1 relative">
                {securitySlides.map((slide, index) => (
                    <button
                        key={slide.id}
                        onClick={() => setActiveSlide(index)}
                        className={`flex-1 py-4 text-2xl md:text-3xl font-bold transition-all duration-300 relative z-10 ${
                            activeSlide === index ? 'text-white' : 'text-[#141414]'
                        }`}
                    >
                        {slide.id}
                    </button>
                ))}
                {/* Active Indicator Background */}
                <motion.div 
                    className="absolute top-1 bottom-1 bg-primary rounded-xl z-0"
                    initial={false}
                    animate={{ 
                        left: `${(activeSlide / securitySlides.length) * 100}%`,
                        width: `${100 / securitySlides.length}%`
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
            </div>
          </div>

          {/* Content Area */}
          <div className="relative flex-grow flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-[120px_1fr] gap-8 md:gap-12 items-start w-full max-w-4xl"
              >
                {/* Icon Column */}
                <div className="flex justify-center lg:justify-start">
                  <div className="w-20 h-20 md:w-[87px] md:h-[87px]">
                    {securitySlides[activeSlide].icon}
                  </div>
                </div>

                {/* Text Column */}
                <div className="text-white">
                  <h3 className="text-2xl md:text-[40px] font-bold mb-6 leading-tight">
                    {securitySlides[activeSlide].title}
                  </h3>
                  
                  <div className="space-y-6 text-lg md:text-2xl opacity-90 leading-snug">
                    <p>{securitySlides[activeSlide].description}</p>
                    {securitySlides[activeSlide].subDescription && (
                      <p>{securitySlides[activeSlide].subDescription}</p>
                    )}
                  </div>

                  <div className="mt-12 text-lg md:text-2xl font-comfortaa font-medium pt-8 border-t border-white/20 inline-block">
                    {securitySlides[activeSlide].footerText}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
