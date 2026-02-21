import "./globals.css"
import Header from "@/components/Header"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">
        <Header />

        {/* Important à cause du header fixed */}
        <main>
          {children}
        </main>

      </body>
    </html>
  )
}
