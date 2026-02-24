import "./globals.css"
import type { Metadata } from "next"
import Header from "@/components/Header"

export const metadata: Metadata = {
  title: "Sunlike South Service",
  description: "Solar energy solutions in Tunisia – Sunlike South Service",
  icons: {
    icon: "/app/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}