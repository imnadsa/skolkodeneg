export type TransactionType = 'income' | 'expense'
export type AccountType = 'cash' | 'card'

export interface Transaction {
  id: string
  date: string // ISO формат "2026-02-07"
  category: string
  amount: number
  account: AccountType
  type: TransactionType
  note?: string
  addedBy?: string // Кто добавил (для реализма)
}

export interface Category {
  name: string
  aliases: string[]
  emoji: string
  type: TransactionType
}

export interface PlaygroundStats {
  totalBalance: number
  cashBalance: number
  cardBalance: number
  totalIncome: number
  totalExpenses: number
  netProfit: number
  avgDailyProfit: number
}

export interface DailyStats {
  date: string
  income: number
  expenses: number
  profit: number
}
