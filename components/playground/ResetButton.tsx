'use client'

import { IconRefresh } from '@tabler/icons-react'
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
    <div >
      <Button
      variant="outline"
      size="sm"
      onClick={handleReset}
      className="gap-2 tour-reset"
    >
      <IconRefresh size={16} stroke={2} />
      Сбросить к примеру
    </Button>
    </div>
  )
}
