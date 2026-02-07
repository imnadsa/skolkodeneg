'use client'

import { IconTrash, IconTable } from '@tabler/icons-react'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import { usePlayground } from '@/lib/playground-store'
import { formatMoney, formatShortDate } from '@/lib/utils'

export default function TransactionsTable() {
  const transactions = usePlayground((s) => s.transactions)
  const removeTransaction = usePlayground((s) => s.removeTransaction)

  // Сортируем по дате (новые сверху)
  const sortedTransactions = [...transactions].sort((a, b) => 
    b.date.localeCompare(a.date)
  ).slice(0, 10) // Показываем последние 10

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <IconTable size={20} className="text-success" stroke={2} />
          <h3 className="text-lg font-coolvetica text-text-primary">Google Таблица</h3>
        </div>
        <p className="text-sm text-text-secondary">Последние 10 транзакций</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-success/10 border-b-2 border-success/30">
              <th className="text-left py-3 px-4 text-sm font-semibold text-success font-navigo">Дата</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-success font-navigo">Категория</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-success font-navigo">Сумма</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-success font-navigo">Счёт</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-success font-navigo">Тип</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-success font-navigo">Примечание</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-success font-navigo"></th>
            </tr>
          </thead>
          <tbody>
            {sortedTransactions.map((tx) => (
              <tr key={tx.id} className="border-b border-border hover:bg-surface-light transition-colors">
                <td className="py-3 px-4 text-sm font-navigo text-text-secondary">
                  {formatShortDate(tx.date)}
                </td>
                <td className="py-3 px-4 text-sm font-navigo text-text-primary font-medium">
                  {tx.category}
                </td>
                <td className="py-3 px-4 text-sm font-navigo text-text-primary font-semibold">
                  {formatMoney(tx.amount)}
                </td>
                <td className="py-3 px-4 text-sm font-navigo text-text-secondary">
                  {tx.account === 'cash' ? '💵 Наличные' : '💳 Карта'}
                </td>
                <td className="py-3 px-4">
                  <Badge type={tx.type}>
                    {tx.type === 'income' ? 'Доход' : 'Расход'}
                  </Badge>
                </td>
                <td className="py-3 px-4 text-sm font-navigo text-text-tertiary max-w-xs truncate">
                  {tx.note || '—'}
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => removeTransaction(tx.id)}
                    className="p-2 hover:bg-primary/10 rounded-lg transition-colors group"
                    title="Удалить"
                  >
                    <IconTrash size={16} className="text-text-tertiary group-hover:text-primary" stroke={2} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {transactions.length === 0 && (
        <div className="text-center py-8 text-text-secondary">
          <p className="font-navigo">Пока нет транзакций</p>
          <p className="text-sm">Добавьте первую через Telegram-бот слева</p>
        </div>
      )}
    </Card>
  )
}
