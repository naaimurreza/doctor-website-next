"use client";

import { AnimatePresence, motion } from "motion/react";
import { Menu, Phone, Stethoscope, X } from "lucide-react";
import { useEffect, useState } from "react";
import { contact } from "@/lib/site";
import { navItems } from "@/lib/i18n";
import { LanguageToggle } from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";

export function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-ink-200 bg-white transition-shadow duration-300 ${
        isScrolled || isOpen
          ? "shadow-[0_8px_24px_-12px_rgba(27,35,35,0.28)]"
          : "shadow-[0_4px_16px_-10px_rgba(27,35,35,0.18)]"
      }`}
    >
      <div className="h-1 bg-brand-600" aria-hidden="true" />
      <nav
        aria-label={t.nav.ariaPrimary}
        className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8"
      >
        <a
          href="#home"
          className="flex shrink-0 items-center gap-2.5 rounded-lg sm:gap-3"
          onClick={() => setIsOpen(false)}
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white shadow-sm shadow-brand-600/30 sm:size-11">
            <Stethoscope className="size-5 sm:size-5.5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-serif text-base font-semibold whitespace-nowrap text-ink-900 sm:text-lg xl:text-xl">
              {t.doctor.name}
            </span>
            <span className="text-xs font-medium whitespace-nowrap text-ink-500">
              {t.doctor.specialty}
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 xl:flex">
          {navItems.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="rounded-lg px-3 py-2 text-[0.9375rem] font-semibold whitespace-nowrap text-ink-800 transition-colors hover:bg-brand-50 hover:text-brand-700"
              >
                {t.nav[link.labelKey]}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2.5">
          <LanguageToggle />
          <a
            href="#appointment"
            className="hidden items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-600/25 transition-colors hover:bg-brand-700 sm:inline-flex"
          >
            {t.nav.book}
          </a>
          <a
            href={contact.phoneHref}
            aria-label={t.nav.callAria}
            className="inline-flex size-11 items-center justify-center rounded-full bg-brand-50 text-brand-700 ring-1 ring-brand-200 transition-colors hover:bg-brand-100 sm:hidden"
          >
            <Phone className="size-5" aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? t.nav.closeMenu : t.nav.openMenu}
            className="inline-flex size-11 items-center justify-center rounded-full bg-ink-50 text-ink-800 ring-1 ring-ink-200 transition-colors hover:bg-ink-100 xl:hidden"
          >
            {isOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-ink-200/70 bg-white xl:hidden"
          >
            <ul className="mx-auto max-w-6xl space-y-1 px-4 py-4 sm:px-6">
              {navItems.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-xl px-4 py-3 text-base font-medium text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-700"
                  >
                    {t.nav[link.labelKey]}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="#appointment"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-xl bg-brand-600 px-4 py-3 text-center text-base font-semibold text-white transition-colors hover:bg-brand-700"
                >
                  {t.nav.book}
                </a>
              </li>
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
