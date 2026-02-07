'use client'

import { IconTrendingUp, IconTrendingDown, IconCurrencyDollar } from '@tabler/icons-react'
import Card from '@/components/ui/Card'
import { formatMoney } from '@/lib/utils'
import { usePlayground } from '@/lib/playground-store'

export default function StatsCards() {
  const stats = usePlayground((s) => s.getStats())

  const items = [
    {
      label: 'Выручка',
      value: stats.totalIncome,
      Icon: IconTrendingUp,
      color: '#00D9A3', // зелёный
    },
    {
      label: 'Расходы',
      value: stats.totalExpenses,
      Icon: IconTrendingDown,
      color: '#FF4DA6', // розовый светлый
    },
    {
      label: 'Чистая прибыль',
      value: stats.netProfit,
      Icon: IconCurrencyDollar,
      color: '#00D9A3', // зелёный
    },
    {
      label: 'Средняя прибыль/день',
      value: stats.avgDailyProfit,
      Icon: IconCurrencyDollar,
      color: '#FF0084', // розовый основной
    }
  ]

  return (
    <Card className="tour-stats">
      <h3 className="text-lg font-coolvetica text-text-primary mb-4">Финансовые показатели</h3>
      
      <div className="grid grid-cols-2 gap-4">
        {items.map((item, index) => {
          const { Icon } = item
          
          return (
            <div key={index} className="flex items-start gap-3">
              {/* Иконка БЕЗ фона - просто цветная */}
              <Icon size={24} style={{ color: item.color }} stroke={2} />
              <div>
                <p className="text-xs text-text-secondary font-navigo">{item.label}</p>
                <p className="text-xl font-coolvetica text-text-primary">{formatMoney(item.value)}</p>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}
