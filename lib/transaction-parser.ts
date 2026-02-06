import { Transaction, AccountType } from '@/types/transaction'
import { findCategory } from './categories'

export interface ParseResult {
  success: boolean
  transaction?: Omit<Transaction, 'id' | 'addedBy'>
  error?: string
}

/**
 * Парсит команду вида "5000 зп нал Примечание"
 * Формат: <сумма> <категория> <счёт> [примечание]
 */
export function parseTransaction(input: string): ParseResult {
  // Удаляем лишние пробелы
  const trimmed = input.trim()
  
  if (!trimmed) {
    return {
      success: false,
      error: 'Команда не может быть пустой'
    }
  }

  // Разбиваем на части
  const parts = trimmed.split(/\s+/)
  
  if (parts.length < 3) {
    return {
      success: false,
      error: 'Неверный формат. Используйте: <сумма> <категория> <счёт> [примечание]'
    }
  }

  // 1. Парсим сумму
  const amountStr = parts[0].replace(/[^\d]/g, '') // Убираем всё кроме цифр
  const amount = parseInt(amountStr, 10)
  
  if (isNaN(amount) || amount <= 0) {
    return {
      success: false,
      error: 'Неверная сумма. Введите число больше 0'
    }
  }

  // 2. Парсим категорию
  const categoryInput = parts[1]
  const category = findCategory(categoryInput)
  
  if (!category) {
    return {
      success: false,
      error: `Категория "${categoryInput}" не найдена. Проверьте правильность написания`
    }
  }

  // 3. Парсим счёт
  const accountInput = parts[2].toLowerCase()
  let account: AccountType
  
  if (accountInput.includes('нал')) {
    account = 'cash'
  } else if (accountInput.includes('безнал') || accountInput.includes('карт') || accountInput.includes('б/н')) {
    account = 'card'
  } else {
    return {
      success: false,
      error: 'Неверный счёт. Используйте "нал" или "безнал"'
    }
  }

  // 4. Примечание (всё что после 3-го слова)
  const note = parts.slice(3).join(' ') || undefined

  // Успешный результат
  return {
    success: true,
    transaction: {
      date: new Date().toISOString().split('T')[0],
      category: category.name,
      amount,
      account,
      type: category.type,
      note
    }
  }
}

/**
 * Проверяет, является ли команда запросом на просмотр категорий
 */
export function isCategoriesCommand(input: string): boolean {
  const normalized = input.toLowerCase().trim()
  return normalized === 'категории' || normalized === '/категории' || normalized === 'categories'
}

/**
 * Проверяет, является ли команда запросом на помощь
 */
export function isHelpCommand(input: string): boolean {
  const normalized = input.toLowerCase().trim()
  return normalized === 'помощь' || normalized === '/help' || normalized === '/start'
}
