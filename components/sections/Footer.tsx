'use client'

export default function Footer() {
  return (
    <footer className="bg-[#141414] text-white">
      <div className="container mx-auto px-4 max-w-7xl py-12 md:py-16">
        
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10 md:gap-16 mb-12">
          
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-xs">
            <span className="text-white text-2xl font-days-one">
              Сколько Денег
            </span>
            <p className="text-[#999] text-sm leading-relaxed">
              Финансовый учёт для медицинских клиник. Просто, быстро, безопасно.
            </p>
            <p className="text-[#FF0084] font-sofia-sans font-semibold text-sm">
              5 000 ₽/мес • Внедрение бесплатно
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-col sm:flex-row gap-8 md:gap-16">
            <div className="flex flex-col gap-3">
              <p className="text-[#999] text-xs uppercase tracking-widest mb-1">Сервис</p>
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">Возможности</a>
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">Цены</a>
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">Безопасность</a>
              <a href="#" className="text-white/80 hover:text-white text-sm transition-colors">FAQ</a>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-[#999] text-xs uppercase tracking-widest mb-1">Контакты</p>
              <a
                href="https://t.me/skolkodeneg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white text-sm transition-colors flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248-2.01 9.476c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.48 14.697l-2.95-.924c-.642-.2-.654-.642.136-.953l11.527-4.448c.535-.194 1.003.13.37.876z"/>
                </svg>
                Telegram
              </a>
              <a
                href="mailto:hello@skolkodeneg.ru"
                className="text-white/80 hover:text-white text-sm transition-colors"
              >
                hello@skolkodeneg.ru
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col gap-4">
            <p className="text-white/80 text-sm leading-snug max-w-[200px]">
              Готовы начать? Внедрим за 1–2 дня.
            </p>
            <a
              href="#"
              className="inline-block bg-[#FF0084] hover:bg-[#e8006e] active:scale-[0.98] transition-all duration-200 text-white text-base font-sofia-sans font-semibold rounded-full py-3 px-7 text-center"
            >
              стать клиентом
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-[#666] text-xs">
          <p>© {new Date().getFullYear()} Сколько Денег. Все права защищены.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition-colors">Оферта</a>
          </div>
        </div>

      </div>
    </footer>
  )
}
