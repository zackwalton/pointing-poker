import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";
import * as React from "react";

const font = Inter({subsets: ['latin']})

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
      <body className={font.className}>
        <Navbar />
          <div className={"pt-14 pb-[50px]"}>
            {children}
          </div>
          <Footer />
      </body>
    </html>
  )
}
