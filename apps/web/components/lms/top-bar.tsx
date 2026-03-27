"use client";

import { useTheme } from "next-themes";

import { useI18n } from "@/lib/i18n";

export function TopBar() {
  const { theme, setTheme } = useTheme();
  const { t, locale, setLocale } = useI18n();

  const nextTheme = theme === "light" ? "dark" : "light";

  return (
    <div className="flex items-center justify-between px-10 pt-6">
      <div className="w-[360px]">
        <div className="relative">
          <input
            className="w-full rounded-lg border border-[var(--color-border)] bg-[var(--color-muted)] px-4 py-2 pl-10 text-[var(--color-foreground)] text-sm focus:outline-none"
            placeholder={t("searchPlaceholder")}
          />
          <i className="fas fa-search absolute top-3 left-3 text-[var(--color-foreground-muted)] text-sm" />
          <span className="absolute top-2.5 right-3 rounded border border-[var(--color-border)] bg-[var(--color-background-secondary)] px-2 py-0.5 text-[var(--color-foreground-muted)] text-xs">
            ⌘K
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4 text-[var(--color-foreground-muted)]">
        <button
          aria-label={t("toggleTheme")}
          className="flex items-center gap-2 rounded-md border border-[var(--color-border)] bg-[var(--color-background-secondary)] px-3 py-2 text-sm hover:bg-[var(--color-muted)]"
          onClick={() => setTheme(nextTheme)}
          type="button"
        >
          <i className="fas fa-adjust text-xs" />
          <span>{nextTheme === "light" ? "Light" : "Dark"}</span>
        </button>
        <select
          aria-label={t("language")}
          className="rounded-md border border-[var(--color-border)] bg-[var(--color-background-secondary)] px-2 py-1 text-sm text-[var(--color-foreground)]"
          onChange={(e) => setLocale(e.target.value as "en" | "it")}
          value={locale}
        >
          <option value="en">EN</option>
          <option value="it">IT</option>
        </select>
        <div className="relative">
          <i className="fas fa-bell" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#ff4d6d] text-[10px] text-white">
            1
          </span>
        </div>
        <i className="fas fa-user" />
      </div>
    </div>
  );
}
