"use client";

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { useLanguage } from "./LanguageProvider";
import { conditionGroups, phones } from "@/lib/site";
import type { ConditionId } from "@/lib/i18n";

export function Conditions() {
  const { t } = useLanguage();

  return (
    <section
      id="conditions"
      aria-labelledby="conditions-heading"
      className="scroll-mt-24 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          id="conditions-heading"
          eyebrow={t.conditions.eyebrow}
          title={t.conditions.title}
          description={t.conditions.description}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {conditionGroups.map((group, index) => {
            const copy = t.conditions.groups[group.id as ConditionId];

            return (
              <Reveal key={group.id} delay={index * 0.08}>
                <div className="h-full rounded-2xl bg-linear-to-br from-brand-50/80 to-white p-7 ring-1 ring-brand-100">
                  <h3 className="font-serif text-xl font-semibold text-ink-900">
                    {copy.title}
                  </h3>
                  <ul className="mt-5 flex flex-wrap gap-2.5">
                    {copy.items.map((condition) => (
                      <li key={condition}>
                        <span className="inline-flex rounded-full bg-white px-4 py-2 text-sm font-medium text-ink-700 shadow-sm ring-1 ring-brand-200/80">
                          {condition}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-10 text-center text-sm text-ink-500">
            {t.conditions.unsure}{" "}
            {phones.map((phone, index) => (
              <span key={phone.href}>
                {index > 0 ? " / " : null}
                <a
                  href={phone.href}
                  className="font-semibold text-brand-700 underline underline-offset-4 hover:text-brand-800"
                >
                  {phone.display}
                  {phone.place ? ` (${t.hero[phone.place]})` : ""}
                </a>
              </span>
            ))}{" "}
            {t.conditions.unsureAfter}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
