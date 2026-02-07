'use client'

import { IconSun, IconMoon } from '@tabler/icons-react'
import { useTheme } from '@/lib/theme-context'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-surface border border-border hover:bg-surface-light transition-all shadow-lg"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <IconSun size={20} className="text-primary" stroke={2} />
      ) : (
        <IconMoon size={20} className="text-primary" stroke={2} />
      )}
    </button>
  )
}
