"use client";

import Image from "next/image";
import { CalendarDays, MapPin, Phone } from "lucide-react";
import { AppointmentForm } from "./AppointmentForm";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";
import { chambers, phones, portrait } from "@/lib/site";
import type { LocationId } from "@/lib/i18n";

export function Appointment() {
  const { locale, t } = useLanguage();
  const urgentEyebrowClass =
    locale === "bn"
      ? "text-sm font-semibold text-accent-700"
      : "text-sm font-semibold tracking-[0.14em] text-accent-700 uppercase";
  const urgentBody = t.appointment.urgentBody.replace(
    "{phone}",
    phones
      .map((phone) =>
        phone.place ? `${phone.display} (${t.hero[phone.place]})` : phone.display,
      )
      .join(" / "),
  );

  return (
    <section
      id="appointment"
      aria-labelledby="appointment-heading"
      className="scroll-mt-24 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="appointment-heading"
          eyebrow={t.appointment.eyebrow}
          title={t.appointment.title}
          description={t.appointment.description}
        />

        <div
          id="contact"
          className="mt-14 grid scroll-mt-24 gap-8 lg:grid-cols-[0.9fr_1.1fr]"
        >
          <div className="flex flex-col gap-6">
            <Reveal direction="left">
              <div className="rounded-2xl bg-accent-50 p-7 ring-1 ring-accent-200/70 sm:p-8">
                <p className={urgentEyebrowClass}>{t.appointment.urgent}</p>
                <p className="mt-3 text-base leading-relaxed text-ink-700">
                  {urgentBody}
                </p>
                <div className="mt-5 flex flex-col gap-2">
                  {phones.map((phone) => (
                    <a
                      key={phone.href}
                      href={phone.href}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent-600 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-accent-600/20 transition-colors hover:bg-accent-700"
                    >
                      <Phone className="size-5" aria-hidden="true" />
                      {t.hero.call} {phone.display}
                      {phone.place ? ` (${t.hero[phone.place]})` : ""}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.08}>
              <dl className="rounded-2xl bg-ink-50/80 p-7 ring-1 ring-ink-200/70 sm:p-8">
                <dt className="flex items-center gap-2 text-sm text-ink-500">
                  <MapPin className="size-4 text-brand-600" aria-hidden="true" />
                  {t.appointment.privateChambers}
                </dt>
                <dd className="mt-4 space-y-4">
                  {chambers.map((location) => {
                    const copy =
                      t.chambers.locations[location.id as LocationId];

                    return (
                      <div
                        key={location.id}
                        className="border-t border-ink-200 pt-4 first:border-t-0 first:pt-0"
                      >
                        <p className="font-semibold text-ink-800">
                          {copy.shortName}
                        </p>
                        <p className="text-sm text-ink-600">{copy.address}</p>
                        <p className="mt-1 flex items-center gap-2 text-sm text-ink-700">
                          <CalendarDays
                            className="size-3.5 shrink-0 text-brand-600"
                            aria-hidden="true"
                          />
                          {copy.days} · {copy.hours}
                        </p>
                      </div>
                    );
                  })}
                </dd>
              </dl>
            </Reveal>

            <Reveal direction="left" delay={0.16}>
              <div className="relative aspect-16/10 overflow-hidden rounded-2xl">
                <Image
                  src={portrait.records}
                  alt={t.appointment.recordsAlt}
                  fill
                  sizes="(min-width: 1024px) 26rem, 100vw"
                  className="object-cover object-[center_40%]"
                />
              </div>
            </Reveal>
          </div>

          <Reveal direction="right" delay={0.1}>
            <AppointmentForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
