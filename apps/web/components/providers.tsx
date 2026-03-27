"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type * as React from "react";

import { I18nProvider } from "@/lib/i18n";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange
      enableColorScheme
      enableSystem
    >
      <I18nProvider>{children}</I18nProvider>
    </NextThemesProvider>
  );
}
