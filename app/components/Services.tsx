"use client";

import {
  Baby,
  BriefcaseMedical,
  Check,
  Microscope,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";
import { services } from "@/lib/site";
import type { ServiceId } from "@/lib/i18n";

const serviceIcons: Record<ServiceId, LucideIcon> = {
  "obstetric-care": Baby,
  "gynecological-surgery": BriefcaseMedical,
  infertility: Microscope,
  "general-gynecology": Stethoscope,
};

export function Services() {
  const { t } = useLanguage();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="scroll-mt-24 bg-ink-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="services-heading"
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          description={t.services.description}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => {
            const id = service.id as ServiceId;
            const copy = t.services.groups[id];
            const Icon = serviceIcons[id] ?? Stethoscope;

            return (
              <Reveal key={service.id} delay={index * 0.08}>
                <article className="h-full rounded-2xl bg-white p-7 shadow-sm ring-1 ring-ink-200/70 transition-shadow duration-300 hover:shadow-lg hover:shadow-brand-900/5">
                  <span className="inline-flex size-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 ring-1 ring-brand-100">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>

                  <h3 className="mt-5 font-serif text-xl font-semibold text-ink-900">
                    {copy.title}
                  </h3>
                  <p className="mt-2.5 text-base leading-relaxed text-ink-600">
                    {copy.description}
                  </p>

                  <ul className="mt-5 space-y-2.5 border-t border-ink-100 pt-5">
                    {copy.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-ink-700"
                      >
                        <Check
                          className="mt-0.5 size-4 shrink-0 text-brand-500"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
