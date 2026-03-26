import { Inter } from "next/font/google"

import "@workspace/design-system/globals.css"
import { Providers } from "@/components/providers"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
      />
      <body className={`${inter.variable} font-sans antialiased bg-[#0b0c15] text-white`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
