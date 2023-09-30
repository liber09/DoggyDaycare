import './globals.scss'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/components/header/header'
import Menu from '@/components/menu/menu'
import Footer from '@/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Doggy Daycare',
  description: 'A daycare center for dogs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header></Header>
        <Menu></Menu>
        {children}
        <Footer></Footer>
        </body>
       
    </html>
  )
}
