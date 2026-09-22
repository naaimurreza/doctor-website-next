"use client";

import Image from "next/image";
import { CalendarDays, MapPin, Phone, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";
import { useLanguage } from "./LanguageProvider";
import { phones, portrait, practiceLocations } from "@/lib/site";
import type { LocationId } from "@/lib/i18n";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-linear-to-b from-brand-50 via-white to-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute -top-32 -left-24 size-96 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute top-40 -right-24 size-96 rounded-full bg-accent-100/60 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-10 lg:px-8 lg:py-16">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1.5 text-sm font-medium text-brand-700 ring-1 ring-brand-200">
              <ShieldCheck className="size-4" aria-hidden="true" />
              {t.doctor.designation}, {t.doctor.department}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1
              id="hero-heading"
              className="mt-6 font-serif text-4xl leading-[1.15] text-ink-900 sm:text-5xl lg:text-6xl"
            >
              {t.doctor.name}
            </h1>
            <p className="mt-3 text-lg font-medium text-brand-700 sm:text-xl">
              {t.doctor.qualifications
                .replace("BCS (Health)", "BCS")
                .replace(", FCPS", "")
                .concat(", FCPS (Gynae Oncology)")}
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-600 sm:text-xl">
              {t.doctor.tagline} — {t.doctor.heroLead}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href="#appointment"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent-600/20 transition-colors hover:bg-accent-700"
              >
                <CalendarDays className="size-5" aria-hidden="true" />
                {t.nav.book}
              </a>
              {phones.map((phone) => (
                <a
                  key={phone.href}
                  href={phone.href}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-accent-700 ring-1 ring-accent-300 transition-colors hover:bg-accent-50"
                >
                  <Phone className="size-5" aria-hidden="true" />
                  {t.hero.call} {phone.display}
                  {phone.place ? ` (${t.hero[phone.place]})` : ""}
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal
          direction="right"
          delay={0.15}
          className="lg:col-start-2 lg:row-span-2 lg:row-start-1"
        >
          <div className="relative">
            <div className="relative aspect-square overflow-hidden rounded-3xl bg-linear-to-br from-brand-100 via-brand-50 to-accent-100 shadow-[0_40px_90px_-28px_rgba(111,91,136,0.4)] sm:aspect-5/4">
              <Image
                src={portrait.hero}
                alt={t.doctor.portraitAlt}
                fill
                sizes="(min-width: 1024px) 52rem, 100vw"
                className="object-contain object-center"
                priority
              />
            </div>

            <div className="relative z-10 -mt-8 mx-4 rounded-2xl bg-white/95 p-4 shadow-xl ring-1 ring-ink-200/70 backdrop-blur-sm sm:mx-6 sm:w-80 lg:absolute lg:bottom-6 lg:left-6 lg:mx-0 lg:mt-0">
              <p className="text-xs font-semibold text-accent-700">
                {t.hero.urgent}
              </p>
              <ul className="mt-2 space-y-1.5">
                {phones.map((phone) => (
                  <li key={phone.href}>
                    <a
                      href={phone.href}
                      className="flex items-center gap-2 text-lg font-semibold text-ink-900 transition-colors hover:text-brand-700"
                    >
                      <Phone className="size-4 shrink-0 text-accent-600" aria-hidden="true" />
                      <span>
                        {phone.display}
                        {phone.place ? (
                          <span className="ml-1.5 text-sm font-medium text-ink-500">
                            ({t.hero[phone.place]})
                          </span>
                        ) : null}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.32} className="lg:col-start-1">
          <dl className="grid gap-5 border-t border-ink-200 pt-6 sm:grid-cols-2">
            {practiceLocations.map((location) => {
              const copy = t.chambers.locations[location.id as LocationId];
              const isHospital = location.kind === "hospital";

              return (
                <div key={location.id} className="flex items-start gap-3">
                  {isHospital ? (
                    <MapPin
                      className="mt-0.5 size-5 shrink-0 text-brand-600"
                      aria-hidden="true"
                    />
                  ) : (
                    <CalendarDays
                      className="mt-0.5 size-5 shrink-0 text-brand-600"
                      aria-hidden="true"
                    />
                  )}
                  <div>
                    <dt className="text-sm text-ink-500">
                      {isHospital ? t.hero.hospitalPost : t.chambers.chamberKind}
                    </dt>
                    <dd className="text-sm font-semibold text-ink-800">
                      {copy.shortName}
                      <span className="block font-normal text-ink-600">
                        {isHospital ? copy.days : `${copy.days} · ${copy.hours}`}
                      </span>
                    </dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </Reveal>
      </div>

      <div className="h-8" />
    </section>
  );
}
