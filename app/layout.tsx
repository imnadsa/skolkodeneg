import type { Metadata } from "next";
import { daysOne, museoSans, sofiaSans } from "./fonts"; // Обновили импорт шрифтов
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-context";

export const metadata: Metadata = {
  title: "Сколько Денег — Финансовый учет для медицинских клиник",
  description: "Простая система учета финансов для вашей клиники.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Заменили переменные старых шрифтов на новые
    <html lang="ru" className={`dark ${daysOne.variable} ${museoSans.variable} ${sofiaSans.variable}`}>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
