"use client";

import { useLanguage } from "./LanguageProvider";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  id,
}: SectionHeadingProps) {
  const { locale } = useLanguage();
  const alignment =
    align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl";
  const eyebrowClass =
    locale === "bn"
      ? "text-sm font-semibold text-brand-600"
      : "text-sm font-semibold tracking-[0.18em] text-brand-600 uppercase";

  return (
    <div className={alignment}>
      <p className={eyebrowClass}>{eyebrow}</p>
      <h2
        id={id}
        className="mt-3 font-serif text-3xl leading-tight text-ink-900 sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
