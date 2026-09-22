/**
 * Single source of truth for every fact shown on the site.
 *
 * Sources:
 *  1. Dr. Ferdous's public directory listing (Dhanmondi Clinic chamber).
 *  2. Her Ibn Sina Trust profile:
 *     https://www.ibnsinatrust.com/view_doctor_profile_up.php?id=3156
 *  3. Details confirmed directly by the site owner (Dhaka Medical College
 *     Hospital daily duty, and Fridays at Asmat Ali Khan Central Hospital).
 *
 * Nothing here is inferred or embellished — no testimonials, awards, or
 * years-of-experience figures. If you add to this file, add only what you can
 * point to a source for.
 */

export const doctor = {
  name: "Dr. Dilruba Ferdous",
  shortName: "Dr. Ferdous",
  // Per the Ibn Sina Trust profile, which lists more than the original
  // directory entry (that one showed only MBBS, MCPS, DGO).
  qualifications: "MBBS, BCS (Health), MCPS, DGO, MS (Gynae & Obs.)",
  specialty: "Gynecologist and Surgeon",
  designation: "Senior Consultant",
  department: "Gynecology & Obstetrics",
  primaryInstitute: "Dhaka Medical College Hospital",
  languages: ["Bangla", "English"],
  tagline: "Compassionate Gynecological Care in Dhaka",
  degrees: [
    { abbr: "MBBS", full: "Bachelor of Medicine, Bachelor of Surgery" },
    { abbr: "BCS (Health)", full: "Bangladesh Civil Service, Health Cadre" },
    { abbr: "MCPS", full: "Member, College of Physicians and Surgeons" },
    { abbr: "DGO", full: "Diploma in Obstetrics & Gynaecology" },
    { abbr: "MS (Gynae & Obs.)", full: "Master of Surgery, Gynaecology & Obstetrics" },
  ],
} as const;

export const contact = {
  /** Primary appointment line, displayed in local Bangladeshi format. */
  phoneDisplay: "01970476626",
  /** E.164 form so `tel:` links also work for callers outside Bangladesh. */
  phoneHref: "tel:+8801970476626",
} as const;

export type PracticeLocation = {
  id: string;
  name: string;
  /** Short label used in tight spaces like the hero card. */
  shortName: string;
  address: string;
  /** Role or room detail, shown under the address. */
  detail?: string;
  days: string;
  hours: string;
  phoneDisplay?: string;
  phoneHref?: string;
  /** Distinguishes her salaried hospital post from private evening chambers. */
  kind: "hospital" | "chamber";
};

/**
 * Ordered from her full-time hospital post outwards to private chambers.
 *
 * TODO(friday): There is an unresolved overlap on Fridays — the Dhanmondi
 * Clinic directory lists Friday 5:00–7:00 PM, while Asmat Ali Khan Central
 * Hospital is listed as all day Friday. Confirm with the chamber which one is
 * current and remove whichever is stale.
 */
export const practiceLocations: readonly PracticeLocation[] = [
  {
    id: "dhaka-medical",
    name: "Dhaka Medical College Hospital",
    shortName: "Dhaka Medical",
    address: "Secretariat Road, Dhaka",
    detail: "Senior Consultant, Gynecology & Obstetrics",
    days: "Every day except Friday",
    hours: "Hospital duty hours",
    kind: "hospital",
  },
  {
    id: "ibn-sina-keraniganj",
    name: "Ibn Sina Diagnostic & Consultation Center, Keraniganj Ltd.",
    shortName: "Ibn Sina, Keraniganj",
    address: "Maa Plaza, Kadomtoli Mor, Zinzira, Keraniganj, Dhaka-1310",
    detail: "4th floor, Room 411",
    // The profile lists off days as Sunday, Tuesday, Thursday and Friday.
    days: "Monday, Wednesday, Saturday",
    hours: "2:30 PM – 5:00 PM",
    phoneDisplay: "096100009619",
    phoneHref: "tel:096100009619",
    kind: "chamber",
  },
  {
    id: "dhanmondi-clinic",
    name: "Dhanmondi Clinic Pvt. Ltd.",
    shortName: "Dhanmondi Clinic",
    address: "Green Road, Dhaka",
    days: "Thursday, Friday, Saturday",
    hours: "5:00 PM – 7:00 PM",
    phoneDisplay: contact.phoneDisplay,
    phoneHref: contact.phoneHref,
    kind: "chamber",
  },
  {
    id: "asmat-ali-khan",
    name: "Asmat Ali Khan Central Hospital Ltd.",
    shortName: "Asmat Ali Khan Central",
    // TODO(address): Full street address not yet confirmed — add it here.
    address: "Dhaka",
    days: "Friday",
    hours: "All day",
    kind: "chamber",
  },
];

/** The Dhanmondi chamber, referenced on its own in a few places. */
export const dhanmondiChamber = practiceLocations.find(
  (location) => location.id === "dhanmondi-clinic",
)!;

export const hospitalPost = practiceLocations.find(
  (location) => location.kind === "hospital",
)!;

export const chambers = practiceLocations.filter(
  (location) => location.kind === "chamber",
);

export type ServiceGroup = {
  id: string;
  title: string;
  description: string;
  items: readonly string[];
};

export const services: readonly ServiceGroup[] = [
  {
    id: "obstetric-care",
    title: "Obstetric Care",
    description:
      "Care through pregnancy and delivery, from routine checkups to pregnancies that need closer monitoring.",
    items: [
      "Regular pregnancy checkups",
      "High-risk pregnancy management",
      "Normal delivery",
      "C-section",
      "Miscarriage-related complications",
    ],
  },
  {
    id: "gynecological-surgery",
    title: "Gynecological Surgery",
    description:
      "Surgical treatment for gynecological conditions, including laparoscopic (keyhole) procedures.",
    items: [
      "Hysterectomy",
      "Ovarian cyst surgery",
      "Laparoscopic gynecological surgery",
      "Fibroid surgery",
      "Cancer-related gynecological surgery",
    ],
  },
  {
    id: "infertility",
    title: "Infertility & Reproductive Health",
    description:
      "Evaluation and guidance for couples having difficulty conceiving, including treatment counselling.",
    items: [
      "Female infertility evaluation",
      "Ovulation disorders",
      "Hormonal infertility",
      "IVF / fertility treatment counselling",
    ],
  },
  {
    id: "general-gynecology",
    title: "General Gynecology",
    description:
      "Day-to-day women's health concerns that are common, treatable, and worth getting checked.",
    items: [
      "Menstrual disorders",
      "PCOS",
      "Vaginal infections",
      "Hormonal disorders",
    ],
  },
];

export type ConditionGroup = {
  id: string;
  title: string;
  conditions: readonly string[];
};

/** The ten listed conditions, grouped by the part of the body they affect. */
export const conditionGroups: readonly ConditionGroup[] = [
  {
    id: "uterine",
    title: "Uterine & Menstrual",
    conditions: [
      "Uterine Fibroids",
      "Abnormal Uterine Bleeding",
      "Uterine Prolapse",
      "Endometriosis",
    ],
  },
  {
    id: "ovarian",
    title: "Ovarian",
    conditions: ["Ovarian Cysts", "Ovarian Tumors"],
  },
  {
    id: "pregnancy",
    title: "Pregnancy-Related",
    conditions: ["Ectopic Pregnancy"],
  },
  {
    id: "pelvic-cervical",
    title: "Pelvic & Cervical Health",
    conditions: [
      "Pelvic Inflammatory Disease",
      "Cervical Dysplasia",
      "Gynecological Cancers (early stage)",
    ],
  },
];

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#conditions", label: "Conditions Treated" },
  { href: "#chambers", label: "Chambers" },
  { href: "#appointment", label: "Appointment" },
] as const;

/**
 * Photographs of Dr. Ferdous, supplied by the site owner.
 *
 * `cutout` is generated from `faceshot.JPG` with the white studio background
 * made transparent, so she can sit directly on the hero gradient. Regenerate it
 * if the source photo is ever replaced.
 *
 * Note: `public/face-with-apron.JPG` is an OGSB election campaign poster rather
 * than a plain photograph, so it is deliberately not used as site imagery.
 */
export const portrait = {
  cutout: "/dr-dilruba-ferdous-cutout.png",
  photo: "/faceshot.JPG",
  alt: `${doctor.name}, ${doctor.specialty}`,
  width: 472,
  height: 591,
} as const;

/**
 * Royalty-free stock photography under the Unsplash License, used only for
 * ambient/contextual imagery. None of these depict Dr. Ferdous.
 */
export const stockImages = {
  maternity: {
    src: "https://images.unsplash.com/photo-1493894473891-10fc1e5dbd22?auto=format&fit=crop&w=1000&q=70",
    alt: "An expectant mother forming a heart shape with her hands over her belly.",
  },
  reception: {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=70",
    alt: "The clean, well-lit reception desk of a medical clinic.",
  },
} as const;

export const disclaimer =
  "This website is for informational purposes and does not replace in-person medical consultation.";
