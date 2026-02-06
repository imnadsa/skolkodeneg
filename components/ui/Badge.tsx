import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { TransactionType } from '@/types/transaction'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  type?: TransactionType | 'neutral'
}

export default function Badge({ type = 'neutral', className, children, ...props }: BadgeProps) {
  const variants = {
    income: 'bg-green-100 text-green-700 border-green-200',
    expense: 'bg-red-100 text-red-700 border-red-200',
    neutral: 'bg-slate-100 text-slate-700 border-slate-200'
  }
  
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-xs font-navigo font-medium border',
        variants[type],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
