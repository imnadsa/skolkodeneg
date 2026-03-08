import localFont from 'next/font/local'
import { Montserrat, Comfortaa } from 'next/font/google'

export const daysOne = localFont({
  src: '../public/fonts/DaysOne-Regular.ttf',
  variable: '--font-days-one',
  display: 'swap',
})

export const museoSans = localFont({
  src: '../public/fonts/Museo Sans Cyrl 500.ttf',
  variable: '--font-museo-sans',
  display: 'swap',
})

export const montserrat = Montserrat({
  subsets: ['cyrillic', 'latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export const sofiaSans = Comfortaa({
  subsets: ['cyrillic'],
  variable: '--font-sofia-sans',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})
