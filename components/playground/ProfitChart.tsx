'use client'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import Card from '@/components/ui/Card'
import { usePlayground } from '@/lib/playground-store'
import { formatShortDate, formatMoney } from '@/lib/utils'

export default function ProfitChart() {
  const dailyStats = usePlayground((s) => s.getDailyStats())

  const chartData = dailyStats.map((day) => ({
    date: formatShortDate(day.date),
    fullDate: day.date,
    'Доходы': day.income,
    'Расходы': day.expenses,
    'Прибыль': day.profit
  }))

  return (
    <Card>
      <h3 className="text-lg font-coolvetica text-slate-900 mb-4">Динамика прибыли</h3>
      
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="date" 
            stroke="#64748b"
            style={{ fontSize: '12px', fontFamily: 'var(--font-navigo)' }}
          />
          <YAxis 
            stroke="#64748b"
            style={{ fontSize: '12px', fontFamily: 'var(--font-navigo)' }}
            tickFormatter={(value) => `${(value / 1000).toFixed(0)}К`}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e2e8f0',
              borderRadius: '12px',
              padding: '12px',
              fontFamily: 'var(--font-navigo)'
            }}
            formatter={(value: number) => formatMoney(value)}
            labelStyle={{ fontWeight: 'bold', marginBottom: '8px' }}
          />
          <Legend 
            wrapperStyle={{
              fontFamily: 'var(--font-navigo)',
              fontSize: '14px'
            }}
          />
          <Line 
            type="monotone" 
            dataKey="Доходы" 
            stroke="#10b981" 
            strokeWidth={2}
            dot={{ fill: '#10b981', r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="Расходы" 
            stroke="#ef4444" 
            strokeWidth={2}
            dot={{ fill: '#ef4444', r: 4 }}
            activeDot={{ r: 6 }}
          />
          <Line 
            type="monotone" 
            dataKey="Прибыль" 
            stroke="#FF0084" 
            strokeWidth={3}
            dot={{ fill: '#FF0084', r: 5 }}
            activeDot={{ r: 7 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}
