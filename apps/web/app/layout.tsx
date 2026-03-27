import { Inter } from "next/font/google";

import "@workspace/design-system/globals.css";
import { Providers } from "@/components/providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          rel="stylesheet"
          precedence="default"
        />
      </head>
      <body
        className={`${inter.variable} bg-[var(--color-background)] text-[var(--color-foreground)] font-sans antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
