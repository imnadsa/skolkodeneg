'use client'

import { IconRoute } from '@tabler/icons-react'

export default function RestartTourButton() {
  const handleRestart = () => {
    if (typeof window !== 'undefined' && (window as any).__restartTour) {
      (window as any).__restartTour()
    }
  }

  return (
    <button
      onClick={handleRestart}
      className="fixed bottom-6 right-6 z-40 p-4 bg-surface border border-border hover:bg-surface-light hover:border-primary/30 rounded-full shadow-lg transition-all group"
      title="Повторить тур"
    >
      <IconRoute size={24} className="text-primary group-hover:scale-110 transition-transform" stroke={2} />
    </button>
  )
}
