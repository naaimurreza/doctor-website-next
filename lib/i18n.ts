export const locales = ["bn", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "bn";
export const LANGUAGE_STORAGE_KEY = "df-lang";

const en = {
  meta: {
    title: "Dr. Dilruba Ferdous — Gynecologist and Surgeon in Dhaka",
    description:
      "Dr. Dilruba Ferdous (MBBS, BCS (Health), MCPS, DGO, MS) is a gynecologist and surgeon and Senior Consultant at Dhaka Medical College Hospital. Private chambers in Keraniganj, Dhanmondi, and Dhaka. Call 01970476626 for appointments.",
  },
  doctor: {
    name: "Dr. Dilruba Ferdous",
    shortName: "Dr. Ferdous",
    qualifications: "MBBS, BCS (Health), MCPS, DGO, MS (Gynae & Obs.)",
    specialty: "Gynecologist and Surgeon",
    designation: "Senior Consultant",
    department: "Gynecology & Obstetrics",
    primaryInstitute: "Dhaka Medical College Hospital",
    tagline: "Compassionate Gynecological Care in Dhaka",
    heroLead:
      "from pregnancy and gynecological surgery to fertility and everyday women’s health concerns.",
    portraitAlt: "Dr. Dilruba Ferdous, Gynecologist and Surgeon",
    degrees: [
      { abbr: "MBBS", full: "Bachelor of Medicine, Bachelor of Surgery" },
      { abbr: "BCS (Health)", full: "Bangladesh Civil Service, Health Cadre" },
      { abbr: "MCPS", full: "Member, College of Physicians and Surgeons" },
      { abbr: "DGO", full: "Diploma in Obstetrics & Gynaecology" },
      {
        abbr: "MS (Gynae & Obs.)",
        full: "Master of Surgery, Gynaecology & Obstetrics",
      },
    ],
  },
  nav: {
    ariaPrimary: "Primary",
    ariaFooter: "Footer",
    home: "Home",
    about: "About",
    services: "Services",
    conditions: "Conditions Treated",
    chambers: "Chambers",
    appointment: "Appointment",
    book: "Book an Appointment",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    callAria: "Call Dr. Ferdous at 01970476626",
    language: "Language",
    bengali: "বাং",
    english: "EN",
    switchToBengali: "বাংলায় দেখুন",
    switchToEnglish: "View in English",
  },
  hero: {
    hospitalPost: "Hospital post",
    eveningChamber: "Evening chamber",
    urgent: "For urgent appointments",
    call: "Call",
  },
  about: {
    eyebrow: "About",
    title: "Care built on listening first",
    p1: "Dr. Dilruba Ferdous is a gynecologist and surgeon practising in Dhaka. She is Senior Consultant in Gynecology & Obstetrics at Dhaka Medical College Hospital, and holds an MBBS, BCS (Health), MCPS, DGO, and MS in Gynaecology & Obstetrics.",
    p2: "Alongside her hospital post she holds private chambers in Keraniganj, Dhanmondi, and at Asmat Ali Khan Central Hospital. Consultations are in Bangla and English. Her work spans obstetric care, gynecological surgery including laparoscopic procedures, infertility evaluation, and everyday gynecological concerns.",
    p3: "Many of the conditions she treats — fibroids, ovarian cysts, endometriosis, irregular bleeding — are common and treatable, and usually more straightforward to manage when they’re looked at early. If something doesn’t feel right, it is worth booking a visit.",
    caption: "Dr. Dilruba Ferdous — Gynecologist and Surgeon",
  },
  services: {
    eyebrow: "Services",
    title: "What Dr. Ferdous treats",
    description:
      "Four areas of practice, covering pregnancy, surgery, fertility, and routine gynecological health.",
    groups: {
      "obstetric-care": {
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
      "gynecological-surgery": {
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
      infertility: {
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
      "general-gynecology": {
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
    },
  },
  conditions: {
    eyebrow: "Conditions Treated",
    title: "Clinical focus areas",
    description:
      "Grouped by the part of the body they affect. If your concern isn't listed here, it's still worth calling to ask.",
    groups: {
      uterine: {
        title: "Uterine & Menstrual",
        items: [
          "Uterine Fibroids",
          "Abnormal Uterine Bleeding",
          "Uterine Prolapse",
          "Endometriosis",
        ],
      },
      ovarian: {
        title: "Ovarian",
        items: ["Ovarian Cysts", "Ovarian Tumors"],
      },
      pregnancy: {
        title: "Pregnancy-Related",
        items: ["Ectopic Pregnancy"],
      },
      "pelvic-cervical": {
        title: "Pelvic & Cervical Health",
        items: [
          "Pelvic Inflammatory Disease",
          "Cervical Dysplasia",
          "Gynecological Cancers (early stage)",
        ],
      },
    },
    unsure: "Not sure which applies to you? Call",
    unsureAfter: "and describe your symptoms.",
  },
  why: {
    eyebrow: "Why Choose Dr. Ferdous",
    title: "Straightforward care, start to finish",
    items: [
      {
        id: "surgeon",
        title: "A gynecologist and surgeon in Dhaka",
        body: "Both medical and surgical gynecology under one practice, so care doesn't have to be handed off elsewhere when an operation is needed.",
      },
      {
        id: "diagnosis",
        title: "A clear diagnosis, explained",
        body: "Symptoms are investigated and the findings are explained in plain language, so you leave the chamber understanding what is happening and why.",
      },
      {
        id: "continuity",
        title: "A specialist patients return to",
        body: "Women's health is often ongoing rather than a single visit. Continuity matters, and follow-up care is part of the practice.",
      },
      {
        id: "fertility",
        title: "Fertility care and counselling",
        body: "Infertility evaluation, ovulation and hormonal assessment, and guidance on IVF and fertility treatment options.",
      },
    ],
  },
  chambers: {
    eyebrow: "Chambers & Visiting Hours",
    title: "Where and when to find her",
    description:
      "Hospital duty at Dhaka Medical, with private chambers in Keraniganj, Dhanmondi, and at Asmat Ali Khan Central Hospital. Please call ahead to confirm your slot.",
    hospitalKind: "Hospital post",
    chamberKind: "Private chamber",
    days: "Days",
    hours: "Hours",
    hospitalNote:
      "Hospital duty is not a private appointment slot. Please book a chamber visit instead.",
    holidayNote:
      "Hours may change on public holidays. Calling ahead is the surest way to confirm.",
    mapTitle: "Map showing",
    locations: {
      "dhaka-medical": {
        name: "Dhaka Medical College Hospital",
        shortName: "Dhaka Medical",
        address: "Secretariat Road, Dhaka",
        detail: "Senior Consultant, Gynecology & Obstetrics",
        days: "Every day except Friday",
        hours: "Hospital duty hours",
      },
      "ibn-sina-keraniganj": {
        name: "Ibn Sina Diagnostic & Consultation Center, Keraniganj Ltd.",
        shortName: "Ibn Sina, Keraniganj",
        address: "Maa Plaza, Kadomtoli Mor, Zinzira, Keraniganj, Dhaka-1310",
        detail: "4th floor, Room 411",
        days: "Monday, Wednesday, Saturday",
        hours: "2:30 PM – 5:00 PM",
      },
      "dhanmondi-clinic": {
        name: "Dhanmondi Clinic Pvt. Ltd.",
        shortName: "Dhanmondi Clinic",
        address: "Green Road, Dhaka",
        detail: "",
        days: "Thursday, Friday, Saturday",
        hours: "5:00 PM – 7:00 PM",
      },
      "asmat-ali-khan": {
        name: "Asmat Ali Khan Central Hospital Ltd.",
        shortName: "Asmat Ali Khan Central",
        address: "Dhaka",
        detail: "",
        days: "Friday",
        hours: "All day",
      },
    },
  },
  appointment: {
    eyebrow: "Appointment",
    title: "Book a visit",
    description:
      "Send a request below, or call a chamber directly — calling is faster.",
    urgent: "For urgent appointments",
    urgentBody:
      "Please call {phone}. The form is not monitored, so a phone call is the only way to reach the chamber quickly.",
    privateChambers: "Private chambers",
    recordsAlt:
      "Dr. Dilruba Ferdous reviewing clinical notes at her desk.",
    form: {
      name: "Full name",
      namePlaceholder: "Your name",
      phone: "Phone number",
      date: "Preferred date",
      dateHint:
        "Chamber days differ by location — see visiting hours above, or call to confirm.",
      message: "What would you like to be seen for?",
      optional: "(optional)",
      messagePlaceholder: "A short description of your symptoms or concern.",
      submit: "Request Appointment",
      sending: "Sending…",
      noConfirm: "Submitting this form does not confirm a booking.",
      successTitle: "Request noted",
      successBody:
        "Your details were logged to the browser console. This form is not connected to the chamber yet, so please call to confirm an actual appointment.",
      another: "Submit another request",
    },
  },
  footer: {
    blurb:
      "Senior Consultant in Gynecology & Obstetrics at Dhaka Medical College Hospital. Private chambers in Keraniganj, Dhanmondi, and Dhaka.",
    quickLinks: "Quick links",
    contact: "Contact",
    disclaimerLabel: "Disclaimer:",
    disclaimer:
      "This website is for informational purposes and does not replace in-person medical consultation.",
    copyright: "All rights reserved.",
  },
} as const;

const bn = {
  meta: {
    title: "ডা. দিলরুবা ফেরদৌস — ঢাকায় স্ত্রীরোগ বিশেষজ্ঞ ও সার্জন",
    description:
      "ডা. দিলরুবা ফেরদৌস (এমবিবিএস, বিসিএস (হেলথ), এমসিপিএস, ডিজিও, এমএস) ঢাকা মেডিকেল কলেজ হাসপাতালের সিনিয়র কনসালটেন্ট এবং স্ত্রীরোগ বিশেষজ্ঞ ও সার্জন। কেরানীগঞ্জ, ধানমন্ডি ও ঢাকায় প্রাইভেট চেম্বার। অ্যাপয়েন্টমেন্টের জন্য কল করুন ০১৯৭০৪৭৬৬২৬।",
  },
  doctor: {
    name: "ডা. দিলরুবা ফেরদৌস",
    shortName: "ডা. ফেরদৌস",
    qualifications: "MBBS, BCS (Health), MCPS, DGO, MS (Gynae & Obs.)",
    specialty: "স্ত্রীরোগ বিশেষজ্ঞ ও সার্জন",
    designation: "সিনিয়র কনসালটেন্ট",
    department: "গাইনি ও অবস",
    primaryInstitute: "ঢাকা মেডিকেল কলেজ হাসপাতাল",
    tagline: "ঢাকায় সহমর্মী স্ত্রীরোগ সেবা",
    heroLead:
      "গর্ভাবস্থা ও স্ত্রীরোগ সার্জারি থেকে শুরু করে বন্ধ্যাত্ব এবং নিত্যদিনের নারীস্বাস্থ্যের যত্ন।",
    portraitAlt: "ডা. দিলরুবা ফেরদৌস, স্ত্রীরোগ বিশেষজ্ঞ ও সার্জন",
    degrees: [
      { abbr: "MBBS", full: "ব্যাচেলর অব মেডিসিন, ব্যাচেলর অব সার্জারি" },
      { abbr: "BCS (Health)", full: "বাংলাদেশ সিভিল সার্ভিস, হেলথ ক্যাডার" },
      { abbr: "MCPS", full: "মেম্বার, কলেজ অব ফিজিশিয়ানস অ্যান্ড সার্জনস" },
      { abbr: "DGO", full: "ডিপ্লোমা ইন অবস্টেট্রিক্স অ্যান্ড গাইনোকোলজি" },
      {
        abbr: "MS (Gynae & Obs.)",
        full: "মাস্টার অব সার্জারি, গাইনোকোলজি ও অবস্টেট্রিক্স",
      },
    ],
  },
  nav: {
    ariaPrimary: "প্রধান নেভিগেশন",
    ariaFooter: "ফুটার",
    home: "হোম",
    about: "পরিচিতি",
    services: "সেবাসমূহ",
    conditions: "রোগ ও সমস্যা",
    chambers: "চেম্বার",
    appointment: "অ্যাপয়েন্টমেন্ট",
    book: "অ্যাপয়েন্টমেন্ট নিন",
    openMenu: "মেনু খুলুন",
    closeMenu: "মেনু বন্ধ করুন",
    callAria: "ডা. ফেরদৌসকে কল করুন ০১৯৭০৪৭৬৬২৬",
    language: "ভাষা",
    bengali: "বাং",
    english: "EN",
    switchToBengali: "বাংলায় দেখুন",
    switchToEnglish: "View in English",
  },
  hero: {
    hospitalPost: "হাসপাতাল পোস্ট",
    eveningChamber: "সন্ধ্যার চেম্বার",
    urgent: "জরুরি অ্যাপয়েন্টমেন্টের জন্য",
    call: "কল করুন",
  },
  about: {
    eyebrow: "পরিচিতি",
    title: "আগে শোনা, তারপর চিকিৎসা",
    p1: "ডা. দিলরুবা ফেরদৌস ঢাকায় কর্মরত একজন স্ত্রীরোগ বিশেষজ্ঞ ও সার্জন। তিনি ঢাকা মেডিকেল কলেজ হাসপাতালের গাইনি ও অবস বিভাগে সিনিয়র কনসালটেন্ট, এবং এমবিবিএস, বিসিএস (হেলথ), এমসিপিএস, ডিজিও ও এমএস (গাইনি ও অবস) ডিগ্রিধারী।",
    p2: "হাসপাতালের দায়িত্বের পাশাপাশি তিনি কেরানীগঞ্জ, ধানমন্ডি এবং আসমত আলী খান সেন্ট্রাল হাসপাতালে প্রাইভেট চেম্বার করেন। পরামর্শ বাংলা ও ইংরেজিতে হয়। তাঁর কাজের পরিসর গর্ভাবস্থার সেবা, ল্যাপারোস্কোপিকসহ স্ত্রীরোগ সার্জারি, বন্ধ্যাত্ব মূল্যায়ন এবং নিত্যদিনের স্ত্রীরোগ সমস্যা।",
    p3: "তিনি যেসব সমস্যা দেখেন — ফাইব্রয়েড, ওভারিয়ান সিস্ট, এন্ডোমেট্রিওসিস, অনিয়মিত রক্তস্রাব — সেগুলো সাধারণত চিকিৎসাযোগ্য, এবং আগে ধরা পড়লে সামলানো সহজ হয়। কিছু ঠিক মনে না হলে চেম্বারে দেখানোই ভালো।",
    caption: "ডা. দিলরুবা ফেরদৌস — স্ত্রীরোগ বিশেষজ্ঞ ও সার্জন",
  },
  services: {
    eyebrow: "সেবাসমূহ",
    title: "ডা. ফেরদৌস যে সেবা দেন",
    description:
      "চারটি ক্ষেত্র: গর্ভাবস্থা, সার্জারি, বন্ধ্যাত্ব এবং নিয়মিত স্ত্রীরোগ সেবা।",
    groups: {
      "obstetric-care": {
        title: "প্রসূতি সেবা",
        description:
          "নিয়মিত চেকআপ থেকে শুরু করে যেসব গর্ভাবস্থায় বাড়তি নজরদারি লাগে, প্রসব পর্যন্ত যত্ন।",
        items: [
          "নিয়মিত প্রেগন্যান্সি চেকআপ",
          "ঝুঁকিপূর্ণ গর্ভাবস্থা ব্যবস্থাপনা",
          "নরমাল ডেলিভারি",
          "সিজারিয়ান (সি-সেকশন)",
          "গর্ভপাতজনিত জটিলতা",
        ],
      },
      "gynecological-surgery": {
        title: "স্ত্রীরোগ সার্জারি",
        description:
          "স্ত্রীরোগজনিত সমস্যার অস্ত্রোপচার, ল্যাপারোস্কোপিক (কিহোল) পদ্ধতিসহ।",
        items: [
          "হিস্টেরেক্টমি",
          "ওভারিয়ান সিস্টের অস্ত্রোপচার",
          "ল্যাপারোস্কোপিক স্ত্রীরোগ সার্জারি",
          "ফাইব্রয়েড সার্জারি",
          "ক্যান্সার-সংক্রান্ত স্ত্রীরোগ সার্জারি",
        ],
      },
      infertility: {
        title: "বন্ধ্যাত্ব ও প্রজনন স্বাস্থ্য",
        description:
          "সন্তানধারণে অসুবিধা হলে মূল্যায়ন ও পরামর্শ, চিকিৎসার পথনির্দেশসহ।",
        items: [
          "নারী বন্ধ্যাত্ব মূল্যায়ন",
          "ওভুলেশনজনিত সমস্যা",
          "হরমোনজনিত বন্ধ্যাত্ব",
          "আইভিএফ / ফার্টিলিটি চিকিৎসার পরামর্শ",
        ],
      },
      "general-gynecology": {
        title: "সাধারণ স্ত্রীরোগ সেবা",
        description:
          "প্রতিদিনের নারীস্বাস্থ্যের সমস্যা, যেগুলো সাধারণ, চিকিৎসাযোগ্য এবং দেখানো দরকার।",
        items: [
          "মাসিকের সমস্যা",
          "পিসিওএস",
          "যোনি সংক্রমণ",
          "হরমোনজনিত সমস্যা",
        ],
      },
    },
  },
  conditions: {
    eyebrow: "রোগ ও সমস্যা",
    title: "যেসব সমস্যায় চিকিৎসা দেন",
    description:
      "শরীরের যে অংশ জড়িত, সেই অনুসারে সাজানো। তালিকায় না থাকলেও ফোন করে জিজ্ঞেস করতে পারেন।",
    groups: {
      uterine: {
        title: "জরায়ু ও মাসিক",
        items: [
          "জরায়ুর ফাইব্রয়েড",
          "অস্বাভাবিক জরায়ু রক্তস্রাব",
          "জরায়ু প্রোল্যাপস",
          "এন্ডোমেট্রিওসিস",
        ],
      },
      ovarian: {
        title: "ডিম্বাশয়",
        items: ["ওভারিয়ান সিস্ট", "ওভারিয়ান টিউমার"],
      },
      pregnancy: {
        title: "গর্ভাবস্থা-সংক্রান্ত",
        items: ["একটোপিক প্রেগন্যান্সি"],
      },
      "pelvic-cervical": {
        title: "পেলভিক ও সার্ভিকাল স্বাস্থ্য",
        items: [
          "পেলভিক ইনফ্লামেটরি ডিজিজ",
          "সার্ভিকাল ডিসপ্লাসিয়া",
          "স্ত্রীরোগ ক্যান্সার (প্রাথমিক পর্যায়)",
        ],
      },
    },
    unsure: "কোনটা প্রযোজ্য নিশ্চিত না? কল করুন",
    unsureAfter: "এবং লক্ষণগুলো বলুন।",
  },
  why: {
    eyebrow: "কেন ডা. ফেরদৌস",
    title: "শুরু থেকে শেষ পর্যন্ত সরল যত্ন",
    items: [
      {
        id: "surgeon",
        title: "ঢাকায় স্ত্রীরোগ বিশেষজ্ঞ ও সার্জন",
        body: "চিকিৎসা ও অস্ত্রোপচার একই চর্চায়, তাই অপারেশন লাগলে অন্যত্র পাঠাতে হয় না।",
      },
      {
        id: "diagnosis",
        title: "রোগ নির্ণয় পরিষ্কার করে বোঝানো",
        body: "লক্ষণ দেখে খোঁজ হয়, ফলাফল সহজ ভাষায় বলা হয়, যাতে চেম্বার থেকে বেরোনোর সময় আপনি বুঝতে পারেন কী হচ্ছে এবং কেন।",
      },
      {
        id: "continuity",
        title: "যে বিশেষজ্ঞের কাছে রোগী ফিরে আসেন",
        body: "নারীস্বাস্থ্য প্রায়ই একবারের ভিজিট নয়। ধারাবাহিক ফলোআপ এই চর্চার অংশ।",
      },
      {
        id: "fertility",
        title: "বন্ধ্যাত্ব সেবা ও পরামর্শ",
        body: "বন্ধ্যাত্ব মূল্যায়ন, ওভুলেশন ও হরমোন পরীক্ষা, এবং আইভিএফসহ ফার্টিলিটি চিকিৎসার পথনির্দেশ।",
      },
    ],
  },
  chambers: {
    eyebrow: "চেম্বার ও সময়সূচি",
    title: "কোথায়, কখন পাবেন",
    description:
      "ঢাকা মেডিকেলে হাসপাতাল ডিউটি, এবং কেরানীগঞ্জ, ধানমন্ডি ও আসমত আলী খান সেন্ট্রাল হাসপাতালে প্রাইভেট চেম্বার। স্লট নিশ্চিত করতে আগে ফোন করুন।",
    hospitalKind: "হাসপাতাল পোস্ট",
    chamberKind: "প্রাইভেট চেম্বার",
    days: "দিন",
    hours: "সময়",
    hospitalNote:
      "হাসপাতাল ডিউটি প্রাইভেট অ্যাপয়েন্টমেন্টের স্লট নয়। চেম্বারে সময় নিন।",
    holidayNote:
      "সরকারি ছুটির দিনে সময় বদলাতে পারে। নিশ্চিত হতে আগে ফোন করাই ভালো।",
    mapTitle: "মানচিত্র",
    locations: {
      "dhaka-medical": {
        name: "ঢাকা মেডিকেল কলেজ হাসপাতাল",
        shortName: "ঢাকা মেডিকেল",
        address: "সেক্রেটারিয়েট রোড, ঢাকা",
        detail: "সিনিয়র কনসালটেন্ট, গাইনি ও অবস",
        days: "শুক্রবার ছাড়া প্রতিদিন",
        hours: "হাসপাতালের ডিউটি সময়",
      },
      "ibn-sina-keraniganj": {
        name: "ইবনে সিনা ডায়াগনস্টিক অ্যান্ড কনসালটেশন সেন্টার, কেরানীগঞ্জ লিমিটেড",
        shortName: "ইবনে সিনা, কেরানীগঞ্জ",
        address: "মা প্লাজা, কদমতলী মোড়, জিঞ্জিরা, কেরানীগঞ্জ, ঢাকা-১৩১০",
        detail: "৪র্থ তলা, রুম ৪১১",
        days: "সোমবার, বুধবার, শনিবার",
        hours: "২:৩০ অপরাহ্ন – ৫:০০ অপরাহ্ন",
      },
      "dhanmondi-clinic": {
        name: "ধানমন্ডি ক্লিনিক প্রাইভেট লিমিটেড",
        shortName: "ধানমন্ডি ক্লিনিক",
        address: "গ্রিন রোড, ঢাকা",
        detail: "",
        days: "বৃহস্পতিবার, শুক্রবার, শনিবার",
        hours: "৫:০০ অপরাহ্ন – ৭:০০ অপরাহ্ন",
      },
      "asmat-ali-khan": {
        name: "আসমত আলী খান সেন্ট্রাল হাসপাতাল লিমিটেড",
        shortName: "আসমত আলী খান সেন্ট্রাল",
        address: "ঢাকা",
        detail: "",
        days: "শুক্রবার",
        hours: "সারাদিন",
      },
    },
  },
  appointment: {
    eyebrow: "অ্যাপয়েন্টমেন্ট",
    title: "ভিজিটের সময় নিন",
    description:
      "নিচের ফর্ম পাঠান, অথবা সরাসরি চেম্বারে কল করুন — কল করলেই দ্রুত হয়।",
    urgent: "জরুরি অ্যাপয়েন্টমেন্টের জন্য",
    urgentBody:
      "অনুগ্রহ করে {phone} নম্বরে কল করুন। ফর্মটি মনিটর করা হয় না, তাই দ্রুত যোগাযোগের একমাত্র উপায় ফোন।",
    privateChambers: "প্রাইভেট চেম্বার",
    recordsAlt: "ডা. দিলরুবা ফেরদৌস ডেস্কে ক্লিনিকাল নোট দেখছেন।",
    form: {
      name: "পুরো নাম",
      namePlaceholder: "আপনার নাম",
      phone: "মোবাইল নম্বর",
      date: "পছন্দের তারিখ",
      dateHint:
        "চেম্বারভেদে দিন আলাদা — উপরের সময়সূচি দেখুন, অথবা নিশ্চিত হতে কল করুন।",
      message: "কী সমস্যায় দেখাতে চান?",
      optional: "(ঐচ্ছিক)",
      messagePlaceholder: "লক্ষণ বা সমস্যার সংক্ষিপ্ত বিবরণ।",
      submit: "অ্যাপয়েন্টমেন্টের অনুরোধ",
      sending: "পাঠানো হচ্ছে…",
      noConfirm: "ফর্ম জমা দিলেই অ্যাপয়েন্টমেন্ট নিশ্চিত হয় না।",
      successTitle: "অনুরোধ নোট করা হয়েছে",
      successBody:
        "আপনার তথ্য ব্রাউজার কনসোলে লগ হয়েছে। ফর্মটি এখনো চেম্বারের সঙ্গে যুক্ত নয়, তাই আসল অ্যাপয়েন্টমেন্টের জন্য অনুগ্রহ করে কল করুন।",
      another: "আরেকটি অনুরোধ পাঠান",
    },
  },
  footer: {
    blurb:
      "ঢাকা মেডিকেল কলেজ হাসপাতালের গাইনি ও অবস বিভাগে সিনিয়র কনসালটেন্ট। কেরানীগঞ্জ, ধানমন্ডি ও ঢাকায় প্রাইভেট চেম্বার।",
    quickLinks: "দ্রুত লিংক",
    contact: "যোগাযোগ",
    disclaimerLabel: "দাবিত্যাগ:",
    disclaimer:
      "এই ওয়েবসাইট শুধু তথ্যের জন্য। এটি সরাসরি চিকিৎসকের পরামর্শের বিকল্প নয়।",
    copyright: "সর্বস্বত্ব সংরক্ষিত।",
  },
} as const;

export const dictionary = {
  bn,
  en,
} as const;

export type Dictionary = (typeof dictionary)[Locale];
export type LocationId = keyof Dictionary["chambers"]["locations"];
export type ServiceId = keyof Dictionary["services"]["groups"];
export type ConditionId = keyof Dictionary["conditions"]["groups"];

export const navItems: { href: string; labelKey: keyof Dictionary["nav"] }[] = [
  { href: "#home", labelKey: "home" },
  { href: "#about", labelKey: "about" },
  { href: "#services", labelKey: "services" },
  { href: "#conditions", labelKey: "conditions" },
  { href: "#chambers", labelKey: "chambers" },
  { href: "#appointment", labelKey: "appointment" },
];
