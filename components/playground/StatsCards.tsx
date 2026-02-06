'use client'

import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react'
import Card from '@/components/ui/Card'
import { formatMoney } from '@/lib/utils'
import { usePlayground } from '@/lib/playground-store'

export default function StatsCards() {
  const stats = usePlayground((s) => s.getStats())

  const items = [
    {
      label: 'Выручка',
      value: stats.totalIncome,
      icon: TrendingUp,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      label: 'Расходы',
      value: stats.totalExpenses,
      icon: TrendingDown,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      label: 'Чистая прибыль',
      value: stats.netProfit,
      icon: DollarSign,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      label: 'Средняя прибыль/день',
      value: stats.avgDailyProfit,
      icon: DollarSign,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ]

  return (
    <Card>
      <h3 className="text-lg font-coolvetica text-slate-900 mb-4">Финансовые показатели</h3>
      
      <div className="grid grid-cols-2 gap-4">
        {items.map((item, index) => {
          const Icon = item.icon
          
          return (
            <div key={index} className="flex items-start gap-3">
              <div className={`p-2 rounded-lg ${item.bgColor}`}>
                <Icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <div>
                <p className="text-xs text-gray-600 font-navigo">{item.label}</p>
                <p className="text-xl font-coolvetica text-slate-900">{formatMoney(item.value)}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
