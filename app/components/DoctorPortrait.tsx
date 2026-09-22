"use client";

import Image from "next/image";
import { portrait } from "@/lib/site";
import { useLanguage } from "./LanguageProvider";

type DoctorPortraitProps = {
  className?: string;
};

export function DoctorPortrait({ className = "" }: DoctorPortraitProps) {
  const { t } = useLanguage();

  return (
    <figure className={className}>
      <div className="relative aspect-3/2 overflow-hidden rounded-2xl bg-linear-to-br from-brand-100 via-brand-50 to-accent-100 ring-1 ring-brand-200/70 shadow-[0_20px_60px_-25px_rgba(28,104,103,0.45)]">
        <Image
          src={portrait.consultation}
          alt={t.doctor.portraitAlt}
          fill
          sizes="(min-width: 1024px) 28rem, 100vw"
          className="object-cover object-[center_30%]"
        />
      </div>

      <figcaption className="mt-4 text-center text-sm text-ink-500">
        {t.about.caption}
      </figcaption>
    </figure>
  );
}
