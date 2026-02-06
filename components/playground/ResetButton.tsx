'use client'

import { RotateCcw } from 'lucide-react'
import Button from '@/components/ui/Button'
import { usePlayground } from '@/lib/playground-store'

export default function ResetButton() {
  const reset = usePlayground((s) => s.reset)

  const handleReset = () => {
    if (confirm('Вы уверены? Все добавленные вами транзакции будут удалены, и песочница вернётся к исходному состоянию.')) {
      reset()
    }
  }

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={handleReset}
      className="gap-2"
    >
      <RotateCcw className="w-4 h-4" />
      Сбросить к примеру
    </Button>
  )
}
