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
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />
      <body
        className={`${inter.variable} bg-[#0b0c15] font-sans text-white antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
