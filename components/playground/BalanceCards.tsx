'use client'

import { IconWallet, IconCreditCard, IconTrendingUp } from '@tabler/icons-react'
import Card from '@/components/ui/Card'
import { formatMoney } from '@/lib/utils'
import { usePlayground } from '@/lib/playground-store'

export default function BalanceCards() {
  const stats = usePlayground((s) => s.getStats())

  const cards = [
    {
      title: 'Всего средств',
      amount: stats.totalBalance,
      Icon: IconWallet,
      gradient: true
    },
    {
      title: 'Наличные',
      amount: stats.cashBalance,
      Icon: IconWallet,
      iconColor: '#FF4DA6', // розовый светлый
      gradient: false
    },
    {
      title: 'Банковский счёт',
      amount: stats.cardBalance,
      Icon: IconCreditCard,
      iconColor: '#00D9A3', // зелёный
      gradient: false
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 tour-balance" >
      {cards.map((card, index) => {
        const { Icon } = card
        
        return (
          <Card
            key={index}
            variant={card.gradient ? 'gradient' : 'default'}
          >
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <p className={`text-sm font-navigo ${card.gradient ? 'text-white/80' : 'text-text-secondary'}`}>
                  {card.title}
                </p>
                {/* Иконка БЕЗ фона - просто цветная */}
                <Icon 
                  size={24} 
                  className={card.gradient ? 'text-white' : ''} 
                  stroke={2}
                  style={!card.gradient && card.iconColor ? { color: card.iconColor } : {}}
                />
              </div>
              
              <p className={`text-3xl font-coolvetica ${card.gradient ? 'text-white' : 'text-text-primary'}`}>
                {formatMoney(card.amount)}
              </p>
              
              {card.gradient && (
                <div className="mt-4 flex items-center gap-2 text-white/90">
                  <IconTrendingUp size={16} stroke={2} />
                  <span className="text-sm font-navigo">Чистая прибыль: {formatMoney(stats.netProfit)}</span>
                </div>
              )}
            </div>
          </Card>
        )
      })}
    </div>
  )
}
