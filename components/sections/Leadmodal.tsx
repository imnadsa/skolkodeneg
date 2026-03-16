'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const roles = [
  'Собственник клиники',
  'Маркетолог',
  'Руководитель',
  'Врач',
  'Другое',
]

interface LeadModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function LeadModal({ isOpen, onClose }: LeadModalProps) {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')
  const [roleOpen, setRoleOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const roleRef = useRef<HTMLDivElement>(null)

  // Закрытие дропдауна при клике вне
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (roleRef.current && !roleRef.current.contains(e.target as Node)) {
        setRoleOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  // Блокировка скролла фона
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Закрытие по Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !phone || !role) return
    setSubmitted(true)
  }

  const handleClose = () => {
    onClose()
    setTimeout(() => {
      setName('')
      setPhone('')
      setEmail('')
      setRole('')
      setSubmitted(false)
      setRoleOpen(false)
    }, 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]"
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[101] flex items-center justify-center p-4"
            onClick={e => e.stopPropagation()}
          >
            <div className="bg-white rounded-[28px] w-full max-w-[520px] p-8 md:p-10 relative shadow-2xl max-h-[90vh] overflow-y-auto">

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-full bg-[#F2F2F2] hover:bg-[#E5E5E5] transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M1 1l12 12M13 1L1 13" stroke="#141414" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Title */}
                    <h2 className="font-museo-sans font-bold text-[28px] md:text-[36px] text-[#141414] leading-tight mb-3 pr-8">
                      Станьте клиентом сервиса<br />
                      <span className="text-[#FF0084]">"Сколько Денег"</span>
                    </h2>
                    <p className="text-[#6B6B6B] text-base md:text-[17px] font-museo-sans leading-snug mb-8">
                      Мы свяжемся с вами и подсветим возможности сервиса для вашей клиники
                    </p>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">

                      {/* Name */}
                      <input
                        type="text"
                        placeholder="Ваше имя"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                        className="w-full bg-[#F4F6F8] rounded-2xl px-5 py-4 text-[#141414] text-base font-museo-sans outline-none focus:ring-2 focus:ring-[#FF0084]/30 transition-all placeholder:text-[#A0A0A0]"
                      />

                      {/* Phone */}
                      <div className="flex items-center bg-[#F4F6F8] rounded-2xl px-5 py-4 gap-3 focus-within:ring-2 focus-within:ring-[#FF0084]/30 transition-all">
                        <span className="text-lg">🇷🇺</span>
                        <span className="text-[#141414] font-museo-sans text-base">+7</span>
                        <input
                          type="tel"
                          placeholder="(000) 000-00-00"
                          value={phone}
                          onChange={e => setPhone(e.target.value)}
                          required
                          className="flex-1 bg-transparent text-[#141414] text-base font-museo-sans outline-none placeholder:text-[#A0A0A0]"
                        />
                      </div>

                      {/* Email */}
                      <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full bg-[#F4F6F8] rounded-2xl px-5 py-4 text-[#141414] text-base font-museo-sans outline-none focus:ring-2 focus:ring-[#FF0084]/30 transition-all placeholder:text-[#A0A0A0]"
                      />

                      {/* Role dropdown */}
                      <div ref={roleRef} className="relative">
                        <button
                          type="button"
                          onClick={() => setRoleOpen(!roleOpen)}
                          className={`w-full bg-[#F4F6F8] rounded-2xl px-5 py-4 text-base font-museo-sans outline-none text-left flex items-center justify-between transition-all ${
                            roleOpen ? 'ring-2 ring-[#FF0084]/30' : ''
                          } ${role ? 'text-[#141414]' : 'text-[#A0A0A0]'}`}
                        >
                          <span>{role || 'Ваша роль'}</span>
                          <motion.svg
                            animate={{ rotate: roleOpen ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            width="16" height="16" viewBox="0 0 16 16" fill="none"
                          >
                            <path d="M3 6l5 5 5-5" stroke="#A0A0A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </motion.svg>
                        </button>

                        <AnimatePresence>
                          {roleOpen && (
                            <motion.div
                              initial={{ opacity: 0, y: -8 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -8 }}
                              transition={{ duration: 0.15 }}
                              className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-[#F0F0F0] overflow-hidden z-10"
                            >
                              {roles.map((r) => (
                                <button
                                  key={r}
                                  type="button"
                                  onClick={() => {
                                    setRole(r)
                                    setRoleOpen(false)
                                  }}
                                  className={`w-full text-left px-5 py-3.5 text-base font-museo-sans transition-colors flex items-center gap-3
                                    ${role === r
                                      ? 'bg-[#FF0084]/5 text-[#FF0084]'
                                      : 'text-[#141414] hover:bg-[#F4F6F8]'
                                    }`}
                                >
                                  {role === r && (
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                      <path d="M2 7l4 4 6-7" stroke="#FF0084" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                  )}
                                  {role !== r && <span className="w-[14px]" />}
                                  {r}
                                </button>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={!name || !phone || !role}
                        className="w-full bg-[#FF0084] hover:bg-[#e8006e] disabled:bg-[#FFB3D9] disabled:cursor-not-allowed active:scale-[0.98] transition-all duration-200 text-white text-lg font-sofia-sans font-semibold rounded-full py-4 px-8 mt-2"
                      >
                        отправить заявку
                      </button>

                      <p className="text-[#999] text-xs text-center font-museo-sans mt-1">
                        Нажимая кнопку, вы соглашаетесь с{' '}
                        <a href="#" className="underline hover:text-[#FF0084] transition-colors">
                          политикой обработки персональных данных
                        </a>
                      </p>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-8 gap-6"
                  >
                    <div className="w-20 h-20 bg-[#FF0084]/10 rounded-full flex items-center justify-center">
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                        <path d="M6 18l9 9 15-15" stroke="#FF0084" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-museo-sans font-bold text-[26px] text-[#141414] mb-2">
                        Заявка отправлена!
                      </h3>
                      <p className="text-[#6B6B6B] font-museo-sans text-base leading-relaxed">
                        Мы свяжемся с вами в ближайшее время и подберём лучший формат внедрения для вашей клиники.
                      </p>
                    </div>
                    <button
                      onClick={handleClose}
                      className="bg-[#FF0084] hover:bg-[#e8006e] text-white font-sofia-sans font-semibold text-base rounded-full px-8 py-3 transition-all"
                    >
                      закрыть
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
