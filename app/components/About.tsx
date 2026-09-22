"use client";

import { GraduationCap } from "lucide-react";
import { DoctorPortrait } from "./DoctorPortrait";
import { Reveal } from "./Reveal";
import { useLanguage } from "./LanguageProvider";

export function About() {
  const { locale, t } = useLanguage();
  const eyebrowClass =
    locale === "bn"
      ? "text-sm font-semibold text-brand-600"
      : "text-sm font-semibold tracking-[0.18em] text-brand-600 uppercase";

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-24 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
        <Reveal direction="left">
          <DoctorPortrait className="mx-auto w-full max-w-sm" />
        </Reveal>

        <div>
          <Reveal>
            <p className={eyebrowClass}>{t.about.eyebrow}</p>
            <h2
              id="about-heading"
              className="mt-3 font-serif text-3xl leading-tight text-ink-900 sm:text-4xl"
            >
              {t.about.title}
            </h2>
          </Reveal>

          {/*
            TODO(bio): Keep this paragraph aligned with verified sources only
            (Ibn Sina Trust profile, the Dhanmondi directory listing, and
            details confirmed by the site owner). Do not add years of
            experience, awards, or testimonials without a source.
          */}
          <Reveal delay={0.1}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-600 sm:text-lg">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {t.doctor.degrees.map((degree) => (
                <li
                  key={degree.abbr}
                  className="rounded-2xl bg-brand-50/70 p-4 ring-1 ring-brand-100"
                >
                  <GraduationCap
                    className="size-5 text-brand-600"
                    aria-hidden="true"
                  />
                  <p className="mt-2.5 font-serif text-lg font-semibold text-ink-900">
                    {degree.abbr}
                  </p>
                  <p className="mt-1 text-sm leading-snug text-ink-600">
                    {degree.full}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
