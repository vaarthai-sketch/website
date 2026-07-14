export interface ChurchConfig {
  name: string;
  shortName: string;
  tagline: string;
  denomination: string;
  bibleTranslation: string;
  foundedYear: number;
  contact: {
    email: string;
    phone: string;
    officeHours: string;
    address: {
      street: string;
      city: string;
      state: string;
      zip: string;
      mapUrl: string; // Google Maps embed or direction link placeholder
    };
  };
  services: {
    day: string;
    times: string[];
    details: string;
  }[];
  socials: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
    twitter?: string;
  };
  links: {
    give: string;
    livestream: string;
  };
  newsletterForm: {
    actionUrl: string;
    entryNameId: string;
    entryEmailId: string;
  };
  prayerForm?: {
    actionUrl?: string;
    entryNameId?: string;
    entryEmailId?: string;
    entryPhoneId?: string;
    entryPrayerTextId?: string;
    entryPrivacyLevelId?: string;
    entryIsUrgentId?: string;
  };
  planVisitForm?: {
    actionUrl?: string;
    entryNameId?: string;
    entryEmailId?: string;
    entryPhoneId?: string;
    entryDateId?: string;
  };
  theme: {
    primary: string; // e.g. navy blue
    accent: string;  // e.g. gold
    neutralBg: string; // warm neutral
  };
}

export const churchConfig: ChurchConfig = {
  name: "Vaarthai Evangelical Church",
  shortName: "Vaarthai Church",
  tagline: "வார்த்தையை கேட்போம் வார்த்தையின்படி நடப்போம் வார்த்தையை சுமந்து செல்வோம்",
  denomination: "Evangelical Christian",
  bibleTranslation: "ESV (English Standard Version)",
  foundedYear: 2005,
  contact: {
    email: "info@vaarthaichurch.org",
    phone: "0485 07 77 11",
    officeHours: "Thursday & Friday 9:00 AM - 4:00 PM",
    address: {
      street: "389 Old Logan Rd",
      city: "Springfield",
      state: "QLD",
      zip: "4300",
      mapUrl: "https://www.google.com/maps?q=389+Old+Logan+Rd,+Springfield+QLD+4300&output=embed"
    }
  },
  services: [
    {
      day: "Sunday",
      times: ["10:00 AM"],
      details: "In-person worship, kids ministry programs (nursery through 5th grade), and online streaming available."
    }
  ],
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61590272413124",
    instagram: "https://instagram.com/vaarthaichurch",
    youtube: "https://youtube.com/c/vaarthaichurch",
    twitter: "https://twitter.com/vaarthaichurch"
  },
  links: {
    give: "https://vaarthaichurch.org/give", // Mock external platform URL
    livestream: "https://youtube.com/c/vaarthaichurch/live"
  },
  newsletterForm: {
    actionUrl: "https://docs.google.com/forms/d/e/1FAIpQLSckkROVclnNhbbWj0hn-SOsz4dCH7cYCEfl4VWlqSybOdxd3g/formResponse",
    entryNameId: "entry.10155832",
    entryEmailId: "entry.124012456"
  },
  prayerForm: {
    actionUrl: "https://docs.google.com/forms/d/e/1FAIpQLScw_CGGl8jGm6hm41wcctuY0TK_jJx2pAGepw-0GsM1pOdiOg/formResponse",
    entryNameId: "entry.248116002",
    entryEmailId: "entry.1222618129",
    entryPhoneId: "entry.175680748",
    entryPrayerTextId: "entry.858849767"
  },
  planVisitForm: {
    actionUrl: "",
    entryNameId: "",
    entryEmailId: "",
    entryPhoneId: "",
    entryDateId: ""
  },
  theme: {
    primary: "#0F172A", // Dignified Deep Navy Blue
    accent: "#C5A059",  // Restrained Warm Gold/Amber
    neutralBg: "#FDFBF7" // Warm Neutral / Soft Cream
  }
};
