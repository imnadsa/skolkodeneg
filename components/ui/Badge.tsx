import { HTMLAttributes } from 'react'
import { cn } from '@/lib/utils'
import { TransactionType } from '@/types/transaction'

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  type?: TransactionType | 'neutral'
}

export default function Badge({ type = 'neutral', className, children, ...props }: BadgeProps) {
  const variants = {
    income: 'bg-success/20 text-success border-success/30',
    expense: 'bg-primary/20 text-primary-light border-primary/30',
    neutral: 'bg-surface-light text-text-secondary border-border'
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
