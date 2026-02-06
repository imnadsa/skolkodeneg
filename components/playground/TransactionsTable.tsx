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
          <IconTable size={20} className="text-green-600" stroke={2} />
          <h3 className="text-lg font-coolvetica text-slate-900">Google Таблица</h3>
        </div>
        <p className="text-sm text-gray-500">Последние 10 транзакций</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-green-50 border-b-2 border-green-200">
              <th className="text-left py-3 px-4 text-sm font-semibold text-green-800 font-navigo">Дата</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-green-800 font-navigo">Категория</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-green-800 font-navigo">Сумма</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-green-800 font-navigo">Счёт</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-green-800 font-navigo">Тип</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-green-800 font-navigo">Примечание</th>
              <th className="text-left py-3 px-4 text-sm font-semibold text-green-800 font-navigo"></th>
            </tr>
          </thead>
          <tbody>
            {sortedTransactions.map((tx) => (
              <tr key={tx.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-3 px-4 text-sm font-navigo text-gray-700">
                  {formatShortDate(tx.date)}
                </td>
                <td className="py-3 px-4 text-sm font-navigo text-gray-900 font-medium">
                  {tx.category}
                </td>
                <td className="py-3 px-4 text-sm font-navigo text-gray-900 font-semibold">
                  {formatMoney(tx.amount)}
                </td>
                <td className="py-3 px-4 text-sm font-navigo text-gray-700">
                  {tx.account === 'cash' ? '💵 Наличные' : '💳 Карта'}
                </td>
                <td className="py-3 px-4">
                  <Badge type={tx.type}>
                    {tx.type === 'income' ? 'Доход' : 'Расход'}
                  </Badge>
                </td>
                <td className="py-3 px-4 text-sm font-navigo text-gray-600 max-w-xs truncate">
                  {tx.note || '—'}
                </td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => removeTransaction(tx.id)}
                    className="p-2 hover:bg-red-50 rounded-lg transition-colors group"
                    title="Удалить"
                  >
                    <IconTrash size={16} className="text-gray-400 group-hover:text-red-600" stroke={2} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {transactions.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p className="font-navigo">Пока нет транзакций</p>
          <p className="text-sm">Добавьте первую через Telegram-бот слева</p>
        </div>
      )}
    </Card>
  )
}
