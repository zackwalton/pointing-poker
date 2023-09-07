import './globals.css'
import type { Metadata } from 'next'
import Navbar from "@/app/Navbar";
import Footer from "@/app/Footer";
import * as React from "react";
import {CssBaseline} from "@mui/material";
import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";

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
      <body>
      <ThemeRegistry>
        <Navbar />
          <div className={"pt-14 pb-[50px]"}>
            {children}
          </div>
          <Footer />
      </ThemeRegistry>
      </body>
    </html>
  )
}
