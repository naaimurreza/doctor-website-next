"use client";

import { useLanguage } from "./LanguageProvider";

export function LanguageToggle() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.nav.language}
      className="inline-flex rounded-full bg-ink-50 p-0.5 text-xs ring-1 ring-ink-300 sm:text-sm"
    >
      <button
        type="button"
        onClick={() => setLocale("bn")}
        aria-pressed={locale === "bn"}
        className={`rounded-full px-2 py-1 font-semibold transition-colors sm:px-2.5 sm:py-1.5 ${
          locale === "bn"
            ? "bg-brand-600 text-white shadow-sm"
            : "text-ink-600 hover:text-brand-700"
        }`}
      >
        <span className="sr-only">{t.nav.switchToBengali}</span>
        <span aria-hidden="true">{t.nav.bengali}</span>
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`rounded-full px-2 py-1 font-semibold tracking-wide transition-colors sm:px-2.5 sm:py-1.5 ${
          locale === "en"
            ? "bg-brand-600 text-white shadow-sm"
            : "text-ink-600 hover:text-brand-700"
        }`}
      >
        <span className="sr-only">{t.nav.switchToEnglish}</span>
        <span aria-hidden="true">{t.nav.english}</span>
      </button>
    </div>
  );
}
