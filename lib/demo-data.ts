import { Transaction } from '@/types/transaction'

// ФИКСИРОВАННЫЕ даты вместо динамических!
const DEMO_DATES = {
  day7: '2026-01-31',
  day6: '2026-02-01',
  day5: '2026-02-02',
  day4: '2026-02-03',
  day3: '2026-02-04',
  day2: '2026-02-05',
  day1: '2026-02-06',
}

export const DEMO_TRANSACTIONS: Transaction[] = [
  // День 1 (7 дней назад)
  {
    id: 'demo-1',
    date: DEMO_DATES.day7,
    category: 'Оплата пациентов',
    amount: 85000,
    account: 'card',
    type: 'income',
    note: 'Пациент Иванов И.И.',
    addedBy: 'Администратор Мария'
  },
  {
    id: 'demo-2',
    date: DEMO_DATES.day7,
    category: 'Расходники',
    amount: 12000,
    account: 'cash',
    type: 'expense',
    note: 'Медикаменты',
    addedBy: 'Администратор Мария'
  },
  
  // День 2 (6 дней назад)
  {
    id: 'demo-3',
    date: DEMO_DATES.day6,
    category: 'Оплата пациентов',
    amount: 120000,
    account: 'card',
    type: 'income',
    note: 'Пациент Петров С.А.',
    addedBy: 'Администратор Анна'
  },
  {
    id: 'demo-4',
    date: DEMO_DATES.day6,
    category: 'ЗТЛ',
    amount: 35000,
    account: 'card',
    type: 'expense',
    note: 'Оплата зуботехнической лаборатории',
    addedBy: 'Главврач'
  },
  
  // День 3 (5 дней назад)
  {
    id: 'demo-5',
    date: DEMO_DATES.day5,
    category: 'Оплата пациентов',
    amount: 95000,
    account: 'cash',
    type: 'income',
    note: 'Пациент Сидорова М.В.',
    addedBy: 'Администратор Мария'
  },
  {
    id: 'demo-6',
    date: DEMO_DATES.day5,
    category: 'Маркетинг',
    amount: 25000,
    account: 'card',
    type: 'expense',
    note: 'Таргетированная реклама ВКонтакте',
    addedBy: 'Главврач'
  },
  
  // День 4 (4 дня назад)
  {
    id: 'demo-7',
    date: DEMO_DATES.day4,
    category: 'Продажа товаров',
    amount: 15000,
    account: 'cash',
    type: 'income',
    note: 'Продажа зубных щёток',
    addedBy: 'Администратор Анна'
  },
  {
    id: 'demo-8',
    date: DEMO_DATES.day4,
    category: 'ЗП',
    amount: 80000,
    account: 'card',
    type: 'expense',
    note: 'Зарплата стоматолога',
    addedBy: 'Бухгалтер'
  },
  
  // День 5 (3 дня назад)
  {
    id: 'demo-9',
    date: DEMO_DATES.day3,
    category: 'Оплата пациентов',
    amount: 150000,
    account: 'card',
    type: 'income',
    note: 'Пациент Козлов А.П. - имплантация',
    addedBy: 'Администратор Мария'
  },
  
  // День 6 (2 дня назад)
  {
    id: 'demo-10',
    date: DEMO_DATES.day2,
    category: 'Оплата пациентов',
    amount: 78000,
    account: 'cash',
    type: 'income',
    note: 'Пациент Николаев Д.С.',
    addedBy: 'Администратор Анна'
  },
  {
    id: 'demo-11',
    date: DEMO_DATES.day2,
    category: 'Коммунальные платежи',
    amount: 18000,
    account: 'card',
    type: 'expense',
    note: 'Аренда помещения',
    addedBy: 'Бухгалтер'
  },
  
  // День 7 (вчера)
  {
    id: 'demo-12',
    date: DEMO_DATES.day1,
    category: 'Оплата пациентов',
    amount: 110000,
    account: 'card',
    type: 'income',
    note: 'Пациент Морозова Е.И.',
    addedBy: 'Администратор Мария'
  },
  {
    id: 'demo-13',
    date: DEMO_DATES.day1,
    category: 'Эквайринг',
    amount: 3500,
    account: 'card',
    type: 'expense',
    note: 'Комиссия банка',
    addedBy: 'Автоматически'
  }
]
