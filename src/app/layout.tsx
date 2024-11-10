import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Footer, Header } from "@/components/shared"
import "~/scss/chaos.scss"
import "@/scss/main.scss"
import { ReactNode } from "react"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title:
    "ChaosCSS - Easily create beautiful, modern websites using only HTML classes.",
  description: "regular and simple css frame-work",
  keywords: "css, sass, framework, frame-work",
  icons: [
    '/public/favicon.ico',
    '/public/favicon-32x32.png',
    '/public/favicon-16x16.png',
    '/public/apple-touch-icon.png',
    '/public/android-chrome-512x512.png',
    '/public/android-chrome-192x192.png'
  ]
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
