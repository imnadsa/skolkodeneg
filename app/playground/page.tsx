import TelegramSimulator from '@/components/playground/TelegramSimulator'
import BalanceCards from '@/components/playground/BalanceCards'
import StatsCards from '@/components/playground/StatsCards'
import ProfitChart from '@/components/playground/ProfitChart'
import TransactionsTable from '@/components/playground/TransactionsTable'
import ResetButton from '@/components/playground/ResetButton'
import ThemeToggle from '@/components/playground/ThemeToggle'
import OnboardingOverlay from '@/components/onboarding/OnboardingOverlay'
import RestartTourButton from '@/components/RestartTourButton'
import { IconSparkles } from '@tabler/icons-react'

export default function PlaygroundPage() {
  return (
    <>
      <OnboardingOverlay />
      <ThemeToggle />
      <RestartTourButton />
      
      <main className="min-h-screen bg-background py-12 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
          {/* Заголовок */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4 border border-primary/20">
              <IconSparkles size={16} stroke={2} />
              <span className="text-sm font-navigo font-medium">Интерактивная демо</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-coolvetica text-text-primary mb-4">
              Попробуйте прямо сейчас
            </h1>
            
            <p className="text-text-secondary font-navigo text-lg max-w-2xl mx-auto">
              Добавляйте транзакцию через «Telegram-бот» и посмотрите как она отобразится в дашборде. Все данные хранятся локально в вашем браузере.
            </p>
          </div>

          {/* Основная сетка */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Telegram Simulator */}
            <div className="lg:col-span-1">
              <TelegramSimulator />
            </div>

            {/* Дашборд */}
            <div className="lg:col-span-2 space-y-8">
              {/* Баланс карточки */}
              <BalanceCards />

              {/* Финансовые показатели */}
              <StatsCards />

              {/* График */}
              <ProfitChart />
            </div>
          </div>

          {/* Google Таблица */}
          <div className="mb-8">
            <TransactionsTable />
          </div>

          {/* Кнопка сброса */}
          <div className="flex justify-center">
            <ResetButton />
          </div>

          {/* CTA блок */}
          <div className="mt-16 bg-gradient-to-r from-primary to-primary-light rounded-3xl p-8 md:p-12 text-center shadow-glow-pink-lg">
            <h2 className="text-3xl md:text-4xl font-coolvetica text-white mb-4">
              Понравилось? Внедрите в свою клинику!
            </h2>
            <p className="text-white/90 font-navigo text-lg mb-6 max-w-2xl mx-auto">
              Бесплатное внедрение за 1 день. Без обязательств.
            </p>
            <button className="bg-white text-primary hover:bg-white/90 font-navigo font-semibold py-4 px-8 rounded-full transition-all active:scale-95 shadow-lg">
              Оставить заявку
            </button>
          </div>
        </div>
      </main>
    </>
  )
}
