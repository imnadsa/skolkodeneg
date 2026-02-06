import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'gradient'
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const variants = {
      default: 'bg-white border border-gray-100',
      gradient: 'bg-gradient-to-br from-primary to-primary-light text-white'
    }
    
    return (
      <div
        ref={ref}
        className={cn(
          'rounded-3xl p-6 shadow-lg transition-shadow hover:shadow-xl',
          variants[variant],
          className
        )}
        {...props}
      >
        {children}
      </div>
    )
  }
)

Card.displayName = 'Card'

export default Card
