"use client";

import Image from "next/image";
import {
  HeartHandshake,
  Microscope,
  SearchCheck,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { useLanguage } from "./LanguageProvider";
import { portrait } from "@/lib/site";

const reasonIcons: Record<string, LucideIcon> = {
  surgeon: Stethoscope,
  diagnosis: SearchCheck,
  continuity: HeartHandshake,
  fertility: Microscope,
};

export function WhyChoose() {
  const { locale, t } = useLanguage();
  const eyebrowClass =
    locale === "bn"
      ? "text-sm font-semibold text-brand-200"
      : "text-sm font-semibold tracking-[0.18em] text-brand-200 uppercase";

  return (
    <section
      aria-labelledby="why-heading"
      className="relative isolate overflow-hidden bg-brand-800 py-20 sm:py-24"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image
          src={portrait.consultation}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-linear-to-br from-brand-900/95 to-brand-800/90" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/*
          TODO(trust): These four points summarise how Dr. Ferdous is described
          in her public directory listing. They are intentionally written
          without numbers, ratings, or quoted patient reviews, because none
          have been verified. If you later collect real patient feedback (with
          written consent), that is the right place to add a testimonials
          section — not here.
        */}
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className={eyebrowClass}>{t.why.eyebrow}</p>
          <h2
            id="why-heading"
            className="mt-3 font-serif text-3xl leading-tight text-white sm:text-4xl"
          >
            {t.why.title}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.why.items.map((reason, index) => {
            const Icon = reasonIcons[reason.id] ?? Stethoscope;

            return (
              <Reveal key={reason.id} delay={index * 0.08}>
                <div className="h-full rounded-2xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur-sm">
                  <span className="inline-flex size-11 items-center justify-center rounded-xl bg-white/15 text-brand-100">
                    <Icon className="size-5.5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-semibold text-white">
                    {reason.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-100/90">
                    {reason.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
