interface TelegramButtonProps {
  text: string
  icon?: string
  onClick: () => void
}

export function TelegramButton({ text, icon, onClick }: TelegramButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-surface hover:bg-surface-light border border-border rounded-lg px-4 py-3 text-text-primary font-navigo text-sm transition-colors text-left flex items-center gap-2"
    >
      {icon && <span className="text-lg">{icon}</span>}
      <span>{text}</span>
    </button>
  )
}

interface TelegramButtonsProps {
  buttons: { text: string; icon?: string; action: string }[]
  onButtonClick: (action: string) => void
}

export default function TelegramButtons({ buttons, onButtonClick }: TelegramButtonsProps) {
  return (
    <div className="grid grid-cols-2 gap-2 mt-2">
      {buttons.map((button, index) => (
        <TelegramButton
          key={index}
          text={button.text}
          icon={button.icon}
          onClick={() => onButtonClick(button.action)}
        />
      ))}
    </div>
  )
}
