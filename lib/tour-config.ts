export type TourStepPosition = 'top' | 'bottom' | 'left' | 'right' | 'center'

export interface TourStep {
  id: string
  title: string
  description: string
  target: string // CSS selector
  position: TourStepPosition
  highlightPadding?: number // отступ вокруг подсвеченного элемента
}

export const TOUR_STEPS: TourStep[] = [
  {
    id: 'telegram-bot',
    title: 'Telegram-бот для учёта',
    description: 'Это демо версия нашей программы. В основной версии Ваши администраторы, медсестры, менеджеры добавляют транзакции прямо через Telegram. Просто отправьте сообщение в формате: сумма, категория, счёт. Например: "5000 зп нал"',
    target: '.tour-telegram',
    position: 'right', // Справа от бота (на мобильном будет снизу автоматически)
    highlightPadding: 8
  },
  {
    id: 'balance-cards',
    title: 'Общий баланс и счета',
    description: 'Здесь отображается ваш общий баланс, средства на наличных счетах и банковской карте. В основной версии можно добавлять дополнительные счета. Данные обновляются автоматически после каждой транзакции.',
    target: '.tour-balance',
    position: 'bottom', // Подсказка снизу
    highlightPadding: 12
  },
  {
    id: 'stats-cards',
    title: 'Финансовые показатели',
    description: 'Ключевые метрики вашего бизнеса: общая выручка, расходы, чистая прибыль и средняя прибыль в день. Считаются на основе всех ваших транзакций. В основной версии также добавляется отчет о прибылях и убытках - ОПИУ',
    target: '.tour-stats',
    position: 'bottom', // Подсказка снизу
    highlightPadding: 12
  },
  {
    id: 'profit-chart',
    title: 'Динамика прибыли',
    description: 'График показывает как меняются ваши доходы, расходы и прибыль по дням. Помогает отслеживать финансовое здоровье бизнеса.',
    target: '.tour-chart',
    position: 'top', // ВАЖНО: Сверху, чтобы не перекрывать легенду графика
    highlightPadding: 12
  },
  {
    id: 'transactions-table',
    title: 'Google Таблица с транзакциями',
    description: 'Все ваши транзакции хранятся в удобной таблице. Мы создаем таблицу под Вас, передаем Вам владение таблицей. Можно посмотреть детали, удалить ошибочные записи. В реальном боте данные синхронизируются с Google Таблицей.',
    target: '.tour-table',
    position: 'top', // ВАЖНО: Сверху, так как таблица находится низко
    highlightPadding: 12
  },
  {
    id: 'reset-button',
    title: 'Сброс к примеру',
    description: 'Хотите начать сначала? Эта кнопка вернёт песочницу к исходному состоянию с демо-данными.',
    target: '.tour-reset',
    position: 'top', // ВАЖНО: Сверху, так как это самый нижний элемент
    highlightPadding: 8
  }
]

export const TOUR_STORAGE_KEY = 'skolkodeneg-tour-completed'
