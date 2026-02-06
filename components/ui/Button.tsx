import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-navigo font-medium transition-all rounded-full disabled:opacity-50 disabled:cursor-not-allowed active:scale-95'
    
    const variants = {
      primary: 'bg-primary hover:bg-primary-light text-white shadow-lg shadow-primary/20',
      secondary: 'bg-slate-200 hover:bg-slate-300 text-slate-900',
      outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
      ghost: 'hover:bg-slate-100 text-slate-700'
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    }
    
    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
