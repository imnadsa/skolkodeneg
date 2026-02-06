import { Category } from '@/types/transaction'

export const INCOME_CATEGORIES: Category[] = [
  {
    name: 'Оплата пациентов',
    aliases: ['оплата', 'выручка', 'доход', 'пациент', 'пациенты'],
    emoji: '💰',
    type: 'income'
  },
  {
    name: 'Продажа товаров',
    aliases: ['товары', 'товар', 'продажа'],
    emoji: '🛍️',
    type: 'income'
  },
  {
    name: 'Прочие доходы',
    aliases: ['прочее', 'другое'],
    emoji: '💵',
    type: 'income'
  }
]

export const EXPENSE_CATEGORIES: Category[] = [
  {
    name: 'ЗП',
    aliases: ['зп', 'зарплата', 'заработная'],
    emoji: '💼',
    type: 'expense'
  },
  {
    name: 'ЗТЛ',
    aliases: ['зтл', 'лаборатория', 'зуботехническая'],
    emoji: '🦷',
    type: 'expense'
  },
  {
    name: 'Маркетинг',
    aliases: ['маркетинг', 'реклама', 'продвижение', 'таргет'],
    emoji: '📢',
    type: 'expense'
  },
  {
    name: 'Налоги',
    aliases: ['налоги', 'налог'],
    emoji: '🏛️',
    type: 'expense'
  },
  {
    name: 'Коммунальные платежи',
    aliases: ['коммуналка', 'коммунальные', 'аренда'],
    emoji: '🏠',
    type: 'expense'
  },
  {
    name: 'Эквайринг',
    aliases: ['эквайринг', 'комиссия'],
    emoji: '💳',
    type: 'expense'
  },
  {
    name: 'Расходники',
    aliases: ['расходники', 'материалы', 'медикаменты'],
    emoji: '💊',
    type: 'expense'
  },
  {
    name: 'Прочие расходы',
    aliases: ['прочее', 'другое'],
    emoji: '📦',
    type: 'expense'
  }
]

export const ALL_CATEGORIES = [...INCOME_CATEGORIES, ...EXPENSE_CATEGORIES]

// Функция для поиска категории по синониму
export function findCategory(input: string): Category | null {
  const normalized = input.toLowerCase().trim()
  
  return ALL_CATEGORIES.find(cat => 
    cat.aliases.some(alias => normalized.includes(alias))
  ) || null
}

// Функция для получения всех категорий определенного типа
export function getCategoriesByType(type: 'income' | 'expense'): Category[] {
  return type === 'income' ? INCOME_CATEGORIES : EXPENSE_CATEGORIES
}
