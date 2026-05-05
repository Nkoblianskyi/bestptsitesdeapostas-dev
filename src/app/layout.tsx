import type React from "react"
import type { Metadata } from "next"
import { Inter, Bebas_Neue } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const bebasNeue = Bebas_Neue({ subsets: ["latin"], weight: "400", variable: "--font-bebas" })

export const metadata: Metadata = {
  title: "topptsitesdeapostas.com - Melhores Sites de Apostas em Portugal 2026",
  description:
    "Descubra os melhores sites de apostas desportivas licenciados em Portugal. Rankings atualizados, bónus exclusivos e análises independentes para apostadores portugueses.",
  metadataBase: new URL("https://topptsitesdeapostas.com"),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={`${inter.variable} ${bebasNeue.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}

