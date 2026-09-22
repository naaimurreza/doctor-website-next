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
      <div className="relative aspect-[5/4] overflow-hidden rounded-3xl bg-linear-to-br from-brand-100 via-brand-50 to-accent-100 ring-1 ring-brand-200/70 shadow-[0_40px_90px_-28px_rgba(111,91,136,0.4)] sm:aspect-[4/3]">
        <Image
          src={portrait.consultation}
          alt={t.doctor.portraitAlt}
          fill
          sizes="(min-width: 1024px) 44rem, 100vw"
          className="object-cover object-[center_28%]"
        />
      </div>

      <figcaption className="mt-4 text-center text-sm text-ink-500">
        {t.about.caption}
      </figcaption>
    </figure>
  );
}
