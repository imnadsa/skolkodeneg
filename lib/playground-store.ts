import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { Transaction, PlaygroundStats, DailyStats } from '@/types/transaction'
import { DEMO_TRANSACTIONS } from './demo-data'

interface PlaygroundStore {
  // Данные
  transactions: Transaction[]
  
  // Действия
  addTransaction: (tx: Omit<Transaction, 'id' | 'addedBy'>) => void
  removeTransaction: (id: string) => void
  reset: () => void
  
  // Вычисляемые значения
  getStats: () => PlaygroundStats
  getDailyStats: () => DailyStats[]
  getTransactionsByDate: (date: string) => Transaction[]
}

export const usePlayground = create<PlaygroundStore>()(
  persist(
    (set, get) => ({
      // Начальное состояние с демо-данными
      transactions: DEMO_TRANSACTIONS,
      
      // Добавить транзакцию
      addTransaction: (tx) => {
        const newTransaction: Transaction = {
          ...tx,
          id: `tx-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          addedBy: 'Вы'
        }
        
        set((state) => ({
          transactions: [...state.transactions, newTransaction]
        }))
      },
      
      // Удалить транзакцию
      removeTransaction: (id) => {
        set((state) => ({
          transactions: state.transactions.filter((t) => t.id !== id)
        }))
      },
      
      // Сбросить к демо-данным
      reset: () => {
        set({ transactions: DEMO_TRANSACTIONS })
      },
      
      // Получить статистику
      getStats: () => {
        const transactions = get().transactions
        
        // Считаем доходы
        const totalIncome = transactions
          .filter((t) => t.type === 'income')
          .reduce((sum, t) => sum + t.amount, 0)
        
        // Считаем расходы
        const totalExpenses = transactions
          .filter((t) => t.type === 'expense')
          .reduce((sum, t) => sum + t.amount, 0)
        
        // Считаем балансы по счетам
        const cashBalance = transactions.reduce((sum, t) => {
          if (t.account === 'cash') {
            return sum + (t.type === 'income' ? t.amount : -t.amount)
          }
          return sum
        }, 0)
        
        const cardBalance = transactions.reduce((sum, t) => {
          if (t.account === 'card') {
            return sum + (t.type === 'income' ? t.amount : -t.amount)
          }
          return sum
        }, 0)
        
        const totalBalance = cashBalance + cardBalance
        const netProfit = totalIncome - totalExpenses
        
        // Получаем уникальные даты для расчёта среднего
        const uniqueDates = new Set(transactions.map(t => t.date))
        const daysCount = uniqueDates.size || 1
        const avgDailyProfit = netProfit / daysCount
        
        return {
          totalBalance,
          cashBalance,
          cardBalance,
          totalIncome,
          totalExpenses,
          netProfit,
          avgDailyProfit
        }
      },
      
      // Получить статистику по дням
      getDailyStats: () => {
        const transactions = get().transactions
        
        // Группируем по датам
        const dailyMap = new Map<string, DailyStats>()
        
        transactions.forEach((t) => {
          const existing = dailyMap.get(t.date) || {
            date: t.date,
            income: 0,
            expenses: 0,
            profit: 0
          }
          
          if (t.type === 'income') {
            existing.income += t.amount
          } else {
            existing.expenses += t.amount
          }
          
          existing.profit = existing.income - existing.expenses
          
          dailyMap.set(t.date, existing)
        })
        
        // Сортируем по дате
        return Array.from(dailyMap.values()).sort((a, b) => 
          a.date.localeCompare(b.date)
        )
      },
      
      // Получить транзакции за конкретную дату
      getTransactionsByDate: (date) => {
        return get().transactions.filter((t) => t.date === date)
      }
    }),
    {
      name: 'skolkodeneg-playground',
      storage: createJSONStorage(() => localStorage),
    }
  )
)
