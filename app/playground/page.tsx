import TelegramSimulator from '@/components/playground/TelegramSimulator'
import BalanceCards from '@/components/playground/BalanceCards'
import StatsCards from '@/components/playground/StatsCards'
import ProfitChart from '@/components/playground/ProfitChart'
import TransactionsTable from '@/components/playground/TransactionsTable'
import ResetButton from '@/components/playground/ResetButton'
import { Sparkles } from 'lucide-react'

export default function PlaygroundPage() {
  return (
    <main className="min-h-screen bg-background py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        
        {/* Заголовок */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-navigo font-medium">Интерактивная демо</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-coolvetica text-slate-900 mb-4">
            Попробуйте прямо сейчас
          </h1>
          
          <p className="text-lg text-gray-600 font-navigo max-w-2xl mx-auto">
            Добавьте транзакцию через «Telegram-бот» и посмотрите как она отобразится в дашборде.
            Все данные хранятся локально в вашем браузере.
          </p>
        </div>

        {/* Основной контент: Telegram + Дашборд */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          
          {/* Левая колонка: Telegram */}
          <div>
            <div className="mb-4">
              <h2 className="text-2xl font-coolvetica text-slate-900 mb-2">
                1️⃣ Добавьте транзакцию
              </h2>
              <p className="text-gray-600 font-navigo">
                Напишите команду в формате: <span className="font-mono text-primary">сумма категория счёт</span>
              </p>
            </div>
            <TelegramSimulator />
          </div>

          {/* Правая колонка: Дашборд */}
          <div className="space-y-6">
            <div className="mb-4">
              <h2 className="text-2xl font-coolvetica text-slate-900 mb-2">
                2️⃣ Смотрите результат
              </h2>
              <p className="text-gray-600 font-navigo">
                Данные автоматически попадают в дашборд с аналитикой
              </p>
            </div>
            
            <BalanceCards />
            <StatsCards />
          </div>
        </div>

        {/* График */}
        <div className="mb-8">
          <ProfitChart />
        </div>

        {/* Таблица транзакций */}
        <div>
          <TransactionsTable />
        </div>

        {/* Кнопка сброса */}
        <div className="flex justify-center mt-8">
          <ResetButton />
        </div>

        {/* Призыв к действию */}
        <div className="mt-16 text-center bg-gradient-to-br from-primary to-primary-light rounded-3xl p-12 text-white">
          <h2 className="text-3xl font-coolvetica mb-4">
            Понравилось? Внедрите в свою клинику!
          </h2>
          <p className="text-lg mb-6 opacity-90">
            Бесплатное внедрение за 1 день. Без обязательств.
          </p>
          <button className="bg-white text-primary px-8 py-4 rounded-full font-navigo font-semibold text-lg hover:bg-gray-100 transition-all shadow-xl">
            Оставить заявку
          </button>
        </div>

      </div>
    </main>
  )
}
