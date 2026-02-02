import type { Metadata } from "next";
import { daysOne, navigo } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Сколько Денег — Финансовый учет для медицинских клиник",
  description: "Простая система учета финансов для вашей клиники. Контролируйте прибыль без тетрадок и головной боли.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${daysOne.variable} ${navigo.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
