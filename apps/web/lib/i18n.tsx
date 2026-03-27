"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Locale = "en" | "it";

type Messages = Record<string, string>;

const translations: Record<Locale, Messages> = {
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
};

type I18nContextValue = {
  locale: Locale;
  setLocale: (loc: Locale) => void;
  t: (key: keyof typeof translations.en) => string;
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

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t: (key) => translations[locale][key] ?? translations.en[key],
    }),
    [locale]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}
