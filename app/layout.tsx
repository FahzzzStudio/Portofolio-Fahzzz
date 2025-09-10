import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

// const poppins = Poppins({
//   subsets: ["latin"],
//   variable: "--font-inter",
// })

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"], // sesuaikan kebutuhan
})


export const metadata: Metadata = {
  title: "Portfolio - Freelance Graphic Designer",
  description: "Portfolio showcasing Fahzzz Freelance Graphic Designer",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${poppins.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
