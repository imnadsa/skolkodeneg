'use client'

import { motion } from 'framer-motion'

interface CtaProps {
  onCta?: () => void
}

export default function Cta({ onCta }: CtaProps) {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-8"
        >
          <h2 className="text-[#141414] text-[32px] md:text-[52px] leading-[1.1] font-days-one">
            У вас еще остались вопросы?{' '}
            <br className="hidden md:block" />
            Напишите нам!
          </h2>

          {/* Form placeholder / contact form */}
          <div className="w-full bg-[#F2F2F2] rounded-[24px] p-8 md:p-12 flex flex-col gap-4">
            <input
              type="text"
              placeholder="Ваше имя"
              className="w-full rounded-2xl border border-[#E5E5E5] bg-white px-5 py-4 text-[#141414] text-base md:text-lg outline-none focus:border-[#FF0084] transition-colors"
            />
            <input
              type="tel"
              placeholder="Номер телефона"
              className="w-full rounded-2xl border border-[#E5E5E5] bg-white px-5 py-4 text-[#141414] text-base md:text-lg outline-none focus:border-[#FF0084] transition-colors"
            />
            <textarea
              placeholder="Ваш вопрос"
              rows={4}
              className="w-full rounded-2xl border border-[#E5E5E5] bg-white px-5 py-4 text-[#141414] text-base md:text-lg outline-none focus:border-[#FF0084] transition-colors resize-none"
            />
            <button onClick={onCta} className="w-full bg-[#FF0084] hover:bg-[#e8006e] active:scale-[0.98] transition-all duration-200 text-white text-xl font-sofia-sans font-semibold rounded-full py-5 px-8 mt-2">
              отправить вопрос
            </button>
            <p className="text-[#999] text-sm">
              Нажимая кнопку, вы соглашаетесь с{' '}
              <a href="#" className="underline hover:text-[#FF0084] transition-colors">
                политикой обработки персональных данных
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
