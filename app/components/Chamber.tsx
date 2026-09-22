"use client";

import { Building2, CalendarDays, Clock, MapPin, Phone } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";
import {
  contact,
  practiceLocations,
  type PracticeLocation,
} from "@/lib/site";
import type { LocationId } from "@/lib/i18n";

/*
  TODO(map): Pins are area-level, not door-level. Once exact coordinates are
  confirmed, replace each `mapQuery` with a Google Maps embed URL from Share
  → Embed a map.
*/

function mapEmbedSrc(location: PracticeLocation) {
  return `https://www.google.com/maps?q=${encodeURIComponent(location.address)}&z=14&output=embed`;
}

export function Chamber() {
  const { locale, t } = useLanguage();
  const featured = practiceLocations.find(
    (location) => location.id === "ibn-sina-keraniganj",
  )!;
  const featuredCopy = t.chambers.locations[featured.id as LocationId];
  const kindClass =
    locale === "bn"
      ? "text-xs font-semibold text-brand-600"
      : "text-xs font-semibold tracking-[0.14em] text-brand-600 uppercase";

  return (
    <section
      id="chambers"
      aria-labelledby="chamber-heading"
      className="scroll-mt-24 bg-ink-50/60 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="chamber-heading"
          eyebrow={t.chambers.eyebrow}
          title={t.chambers.title}
          description={t.chambers.description}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {practiceLocations.map((location, index) => {
            const copy = t.chambers.locations[location.id as LocationId];
            const phoneHref = location.phoneHref ?? contact.phoneHref;
            const phoneDisplay = location.phoneDisplay ?? contact.phoneDisplay;

            return (
              <Reveal key={location.id} delay={index * 0.06}>
                <article className="flex h-full flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-ink-200/70 sm:p-7">
                  <div className="flex items-start gap-3">
                    <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                      {location.kind === "hospital" ? (
                        <Building2 className="size-5" aria-hidden="true" />
                      ) : (
                        <MapPin className="size-5" aria-hidden="true" />
                      )}
                    </span>
                    <div>
                      <p className={kindClass}>
                        {location.kind === "hospital"
                          ? t.chambers.hospitalKind
                          : t.chambers.chamberKind}
                      </p>
                      <h3 className="mt-1 font-serif text-xl font-semibold text-ink-900">
                        {copy.name}
                      </h3>
                      <address className="mt-1 text-sm not-italic leading-relaxed text-ink-600">
                        {copy.address}
                        {copy.detail ? (
                          <span className="mt-1 block">{copy.detail}</span>
                        ) : null}
                      </address>
                    </div>
                  </div>

                  <dl className="mt-5 space-y-3 border-t border-ink-100 pt-5">
                    <div className="flex items-start gap-2.5">
                      <CalendarDays
                        className="mt-0.5 size-4 shrink-0 text-brand-600"
                        aria-hidden="true"
                      />
                      <div>
                        <dt className="sr-only">{t.chambers.days}</dt>
                        <dd className="text-sm font-semibold text-ink-800">
                          {copy.days}
                        </dd>
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5">
                      <Clock
                        className="mt-0.5 size-4 shrink-0 text-brand-600"
                        aria-hidden="true"
                      />
                      <div>
                        <dt className="sr-only">{t.chambers.hours}</dt>
                        <dd className="text-sm text-ink-700">{copy.hours}</dd>
                      </div>
                    </div>
                  </dl>

                  {location.kind === "chamber" ? (
                    <a
                      href={phoneHref}
                      className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                    >
                      <Phone className="size-4" aria-hidden="true" />
                      {t.hero.call} {phoneDisplay}
                    </a>
                  ) : (
                    <p className="mt-6 text-sm text-ink-500">
                      {t.chambers.hospitalNote}
                    </p>
                  )}
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-6 text-center text-sm text-ink-500">
            {t.chambers.holidayNote}
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="mt-10 overflow-hidden rounded-2xl shadow-sm ring-1 ring-ink-200/70">
            <iframe
              src={mapEmbedSrc(featured)}
              title={`${t.chambers.mapTitle} ${featuredCopy.shortName}`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="h-80 w-full border-0"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
