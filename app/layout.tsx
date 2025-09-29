import type React from "react"
import type { Metadata } from "next"
import { Bitter, Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/header"
import Footer from "./components/footer"
import ScrollToTop from "./components/scroll-to-top"

const bitter = Bitter({
  subsets: ["latin"],
  variable: "--font-bitter",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Faith Vineyard Church - Growing Faith in Comber",
  description:
    "A welcoming church family in Comber, Northern Ireland. Join us for Sunday gatherings, life groups, and community events.",
  keywords: ["church", "Comber", "Northern Ireland", "Vineyard", "faith", "community", "worship"],
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bitter.variable} ${inter.variable}`}>
      <body className="font-body antialiased">
        <ScrollToTop />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
