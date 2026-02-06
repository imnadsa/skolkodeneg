'use client'

import { Wallet, CreditCard, TrendingUp } from 'lucide-react'
import Card from '@/components/ui/Card'
import { formatMoney } from '@/lib/utils'
import { usePlayground } from '@/lib/playground-store'

export default function BalanceCards() {
  const stats = usePlayground((s) => s.getStats())

  const cards = [
    {
      title: 'Всего средств',
      amount: stats.totalBalance,
      icon: Wallet,
      gradient: true
    },
    {
      title: 'Наличные',
      amount: stats.cashBalance,
      icon: Wallet,
      gradient: false
    },
    {
      title: 'Банковский счёт',
      amount: stats.cardBalance,
      icon: CreditCard,
      gradient: false
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cards.map((card, index) => {
        const Icon = card.icon
        
        return (
          <Card
            key={index}
            variant={card.gradient ? 'gradient' : 'default'}
            className={card.gradient ? 'relative overflow-hidden' : ''}
          >
            {card.gradient && (
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
            )}
            
            <div className="relative">
              <div className="flex items-center justify-between mb-4">
                <p className={`text-sm font-navigo ${card.gradient ? 'text-white/80' : 'text-gray-600'}`}>
                  {card.title}
                </p>
                <div className={`p-2 rounded-xl ${card.gradient ? 'bg-white/20' : 'bg-primary/10'}`}>
                  <Icon className={`w-5 h-5 ${card.gradient ? 'text-white' : 'text-primary'}`} />
                </div>
              </div>
              
              <p className={`text-3xl font-coolvetica ${card.gradient ? 'text-white' : 'text-slate-900'}`}>
                {formatMoney(card.amount)}
              </p>
              
              {card.gradient && (
                <div className="mt-4 flex items-center gap-2 text-white/90">
                  <TrendingUp className="w-4 h-4" />
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
