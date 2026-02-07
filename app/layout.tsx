import type { Metadata } from "next";
import { coolvetica, daysOne, navigo } from "./fonts";
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
    <html lang="ru" className={`dark ${coolvetica.variable} ${daysOne.variable} ${navigo.variable}`}>
      <body className="antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
