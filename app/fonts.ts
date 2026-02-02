import localFont from 'next/font/local'

export const coolvetica = localFont({
  src: '../public/fonts/coolvetica rg.ttf',
  variable: '--font-coolvetica',
  display: 'swap',
})

export const daysOne = localFont({
  src: '../public/fonts/DaysOne-Regular.ttf',
  variable: '--font-days-one',
  display: 'swap',
})

export const navigo = localFont({
  src: [
    {
      path: '../public/fonts/Navigo-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Navigo-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Navigo-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-navigo',
  display: 'swap',
})
