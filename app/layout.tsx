import type { Metadata } from "next";
import { Geist, Hind_Siliguri, Lora, Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageProvider";
import { chambers, contact, hospitalPost } from "@/lib/site";
import { dictionary, defaultLocale } from "@/lib/i18n";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const hindSiliguri = Hind_Siliguri({
  variable: "--font-hind-siliguri",
  subsets: ["bengali", "latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSerifBengali = Noto_Serif_Bengali({
  variable: "--font-noto-serif-bn",
  subsets: ["bengali", "latin"],
  weight: ["400", "600", "700"],
});

// TODO(domain): Point this at the real domain once the site is live, so that
// Open Graph images and canonical URLs resolve absolutely.
const siteUrl = "https://drdilrubaferdous.com";
const meta = dictionary[defaultLocale].meta;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: meta.title,
    template: `%s | ${dictionary.bn.doctor.name}`,
  },
  description: meta.description,
  keywords: [
    "ঢাকায় গাইনি ডাক্তার",
    "স্ত্রীরোগ বিশেষজ্ঞ ঢাকা",
    "gynecologist in Dhaka",
    "gynecologist Green Road",
    dictionary.bn.doctor.name,
    dictionary.en.doctor.name,
    hospitalPost.name,
  ],
  authors: [{ name: dictionary.en.doctor.name }],
  openGraph: {
    type: "website",
    locale: "bn_BD",
    alternateLocale: ["en_US"],
    url: siteUrl,
    siteName: dictionary.bn.doctor.name,
    title: meta.title,
    description: meta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: dictionary.en.doctor.name,
  alternateName: dictionary.bn.doctor.name,
  medicalSpecialty: "Gynecologic",
  description: `${dictionary.en.doctor.specialty} — ${dictionary.en.doctor.qualifications}`,
  telephone: contact.phoneDisplay,
  url: siteUrl,
  availableLanguage: ["bn", "en"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Dhaka",
    addressCountry: "BD",
  },
  worksFor: {
    "@type": "Hospital",
    name: hospitalPost.name,
  },
  location: chambers.map((location) => ({
    "@type": "MedicalClinic",
    name: location.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address,
      addressLocality: "Dhaka",
      addressCountry: "BD",
    },
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={defaultLocale}
      className={`${geistSans.variable} ${lora.variable} ${hindSiliguri.variable} ${notoSerifBengali.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-white font-sans">
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
