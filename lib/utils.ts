import { format, parseISO } from 'date-fns'
import { ru } from 'date-fns/locale'

/**
 * Форматирует число в рубли с пробелами
 * 100000 → "100 000₽"
 */
export function formatMoney(amount: number): string {
  return `${amount.toLocaleString('ru-RU')}₽`
}

/**
 * Форматирует большие суммы компактно
 * 1500000 → "1.5М₽"
 */
export function formatCompactMoney(amount: number): string {
  if (amount >= 1000000) {
    return `${(amount / 1000000).toFixed(1)}М₽`
  }
  if (amount >= 1000) {
    return `${(amount / 1000).toFixed(0)}К₽`
  }
  return formatMoney(amount)
}

/**
 * Форматирует дату в удобочитаемый формат
 * "2026-02-07" → "7 февраля"
 */
export function formatDate(dateStr: string): string {
  try {
    const date = parseISO(dateStr)
    return format(date, 'd MMMM', { locale: ru })
  } catch {
    return dateStr
  }
}

/**
 * Форматирует дату в короткий формат
 * "2026-02-07" → "07.02"
 */
export function formatShortDate(dateStr: string): string {
  try {
    const date = parseISO(dateStr)
    return format(date, 'dd.MM')
  } catch {
    return dateStr
  }
}

/**
 * Проверяет, является ли дата сегодняшней
 */
export function isToday(dateStr: string): boolean {
  const today = new Date().toISOString().split('T')[0]
  return dateStr === today
}

/**
 * Проверяет, является ли дата вчерашней
 */
export function isYesterday(dateStr: string): boolean {
  const yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return dateStr === yesterday.toISOString().split('T')[0]
}

/**
 * Возвращает текстовое представление даты
 * "2026-02-07" → "Сегодня" | "Вчера" | "7 февраля"
 */
export function formatRelativeDate(dateStr: string): string {
  if (isToday(dateStr)) return 'Сегодня'
  if (isYesterday(dateStr)) return 'Вчера'
  return formatDate(dateStr)
}

/**
 * Объединяет классы CSS (аналог clsx)
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ')
}
