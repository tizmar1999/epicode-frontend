"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";

type Locale = "en" | "it";

const translations = {
  en: {
    searchPlaceholder: "Search in course",
    theme: "Theme",
    toggleTheme: "Toggle theme",
    notifications: "Notifications",
    user: "User",
    aiTutor: "AI Tutor",
    language: "Language",
  },
  it: {
    searchPlaceholder: "Cerca nel corso",
    theme: "Tema",
    toggleTheme: "Cambia tema",
    notifications: "Notifiche",
    user: "Utente",
    aiTutor: "Tutor AI",
    language: "Lingua",
  },
} as const;

type MessageKey = keyof typeof translations.en;
type Messages = Record<MessageKey, string>;

type I18nContextValue = {
  locale: Locale;
  setLocale: (loc: Locale) => void;
  t: (key: MessageKey) => string;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const stored = localStorage.getItem("locale") as Locale | null;
    if (stored) {
      setLocale(stored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("locale", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo<I18nContextValue>(() => {
    const current: Messages =
      translations[locale] ?? (translations.en as Messages);
    return {
      locale,
      setLocale,
      t: (key) => current[key] ?? translations.en[key],
    };
  }, [locale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}
