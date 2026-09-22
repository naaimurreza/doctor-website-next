"use client";

import { MapPin, Phone, Stethoscope } from "lucide-react";
import { chambers, phones } from "@/lib/site";
import { navItems, type LocationId } from "@/lib/i18n";
import { useLanguage } from "./LanguageProvider";

export function Footer() {
  const { locale, t } = useLanguage();
  const year = new Date().getFullYear();
  const headingClass =
    locale === "bn"
      ? "text-sm font-semibold text-white"
      : "text-sm font-semibold tracking-[0.14em] text-white uppercase";

  return (
    <footer className="bg-[#1a2124] text-ink-300">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-600 text-white">
                <Stethoscope className="size-5" aria-hidden="true" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-serif text-lg font-semibold text-white">
                  {t.doctor.name}
                </span>
                <span className="text-[0.7rem] tracking-wide text-ink-400">
                  {t.doctor.qualifications}
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-400">
              {t.footer.blurb}
            </p>
          </div>

          <nav aria-label={t.nav.ariaFooter}>
            <h2 className={headingClass}>{t.footer.quickLinks}</h2>
            <ul className="mt-5 space-y-3">
              {navItems.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-400 transition-colors hover:text-white"
                  >
                    {t.nav[link.labelKey]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className={headingClass}>{t.footer.contact}</h2>
            <ul className="mt-5 space-y-4 text-sm">
              {chambers.map((location) => {
                const copy = t.chambers.locations[location.id as LocationId];

                return (
                  <li key={location.id} className="flex items-start gap-2.5">
                    <MapPin
                      className="mt-0.5 size-4 shrink-0 text-brand-400"
                      aria-hidden="true"
                    />
                    <address className="not-italic text-ink-400">
                      {copy.shortName}
                      <span className="mt-0.5 block">{copy.days}</span>
                    </address>
                  </li>
                );
              })}
              {phones.map((phone) => (
                <li key={phone.href} className="flex items-start gap-2.5">
                  <Phone
                    className="mt-0.5 size-4 shrink-0 text-brand-400"
                    aria-hidden="true"
                  />
                  <a
                    href={phone.href}
                    className="font-semibold text-white transition-colors hover:text-brand-300"
                  >
                    {phone.display}
                    {phone.place ? ` (${t.hero[phone.place]})` : ""}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-ink-800 pt-8">
          <p className="rounded-xl bg-ink-800/60 px-5 py-4 text-sm leading-relaxed text-ink-300">
            <strong className="font-semibold text-white">
              {t.footer.disclaimerLabel}
            </strong>{" "}
            {t.footer.disclaimer}
          </p>
          <p className="mt-6 text-sm text-ink-400">
            &copy; {year} {t.doctor.name}. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
