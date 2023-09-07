import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";

const roboto = Roboto({weight: "400", subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Planning Poker',
  description: 'Planning poker app for agile scrum development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className + " bg-slate-800"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
