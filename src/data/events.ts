export interface ChurchEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  category: "Community" | "Youth" | "Children" | "Worship" | "All-Church" | "Groups";
  description: string;
  organizer: string;
  organizerEmail: string;
  image: string;
  registrationUrl?: string;
  isFeatured?: boolean;
}

export const eventsData: ChurchEvent[] = [
  {
    id: "summer-worship-night",
    title: "ஆராதனை மற்றும் ஜெப மாலை",
    date: "2026-06-28",
    time: "மாலை 6:30 - இரவு 8:00 மணி",
    location: "பிரதான ஆராதனை அரங்கு",
    category: "Worship",
    description: "சபையாக இணைந்து பாடல்கள் பாடி, தேவனைத் துதித்து, ஜெபத்திலும் திருவிருந்திலும் பங்கேற்கும் ஒரு விசேஷித்த மாலை நேரம். குழந்தைகளுக்கான பாதுகாப்பு கவனிப்பு வசதி உண்டு. அனுமதி இலவசம்.",
    organizer: "ஆராதனை இயக்குனர் ஹன்னா வான்ஸ்",
    organizerEmail: "hannah@vaarthaichurch.org",
    image: "event-worship-night",
    isFeatured: true
  },
  {
    id: "community-food-drive",
    title: "நகர ஏழைகளுக்கான உணவு விநியோகம்",
    date: "2026-07-04",
    time: "காலை 8:30 - மதியம் 12:30 மணி",
    location: "ஆஸ்டின் ஹோப் மையம் (வெளிவிநியோகம்)",
    category: "Community",
    description: "நமது நகர மக்களுக்கு உலர் உணவுப் பொருட்களைச் சேகரித்து பேக் செய்து விநியோகிக்கும் சமூக சேவை. காலை 8:00 மணிக்கு திருச்சபை வாகன நிறுத்துமிடத்தில் கூடி காரில் செல்வோம். அனைவரும் பங்கேற்கலாம்.",
    organizer: "சாரா ஜென்கின்ஸ்",
    organizerEmail: "sarah@vaarthaichurch.org",
    image: "event-outreach",
    registrationUrl: "#register-food-drive"
  },
  {
    id: "youth-summer-camp",
    title: "இளைஞர் கோடைகால முகாம் 2026",
    date: "2026-07-15",
    time: "காலை 8:00 மணி முதல் - ஜூலை 19, மாலை 5:00 மணி வரை",
    location: "கேம்ப் ஈகிள் (ஹில் கன்ட்ரி, டெக்சாஸ்)",
    category: "Youth",
    description: "7 முதல் 12-ம் வகுப்பு மாணவர்களுக்கான 5 நாட்கள் சாகசங்கள், விவிலியக் கலந்துரையாடல்கள் மற்றும் ஆராதனை நிறைந்த தங்குமிட முகாம். கட்டணம் போக்குவரத்து, தங்குமிடம் மற்றும் உணவு அனைத்தையும் உள்ளடக்கியது.",
    organizer: "இளைஞர் இயக்குனர் கேலப் வான்ஸ்",
    organizerEmail: "caleb@vaarthaichurch.org",
    image: "event-youth-camp",
    registrationUrl: "#register-youth-camp"
  },
  {
    id: "grace-kids-fun-day",
    title: "சிறுவர் விளையாட்டு தினம் மற்றும் சுற்றுலா",
    date: "2026-07-22",
    time: "காலை 10:00 - மதியம் 1:00 மணி",
    location: "ஆலய புல்வெளி மைதானம்",
    category: "Children",
    description: "சிறுவர்களுக்கான நீர் விளையாட்டு சறுக்கல்கள், விளையாட்டுகள் மற்றும் மதிய உணவுப் பகிர்வு. துண்டு மற்றும் கூடுதல் உடைகளைக் கொண்டு வரவும். மதிய உணவைத் திட்டமிட முன்பதிவு செய்யக் கேட்டுக் கொள்ளப்படுகிறது.",
    organizer: "சிறுவர் ஊழிய இயக்குனர் மேகன் மில்லர்",
    organizerEmail: "megan@vaarthaichurch.org",
    image: "event-kids-day",
    registrationUrl: "#register-kids-fun"
  },
  {
    id: "new-members-luncheon",
    title: "புதிய உறுப்பினர்கள் அறிமுக மதிய உணவு",
    date: "2026-07-12",
    time: "மதியம் 12:30 - மதியம் 2:00 மணி",
    location: "ஐக்கிய அரங்கு",
    category: "All-Church",
    description: "நமது வார்த்தை சபை நற்செய்தி குடும்பத்திற்குப் புதியவரா? எங்களது போதகர்களைச் சந்திக்கவும், சபையின் வரலாறு மற்றும் விசுவாச அறிக்கை குறித்து அறிந்து கொள்ளவும் இந்த அன்பின் விருந்தில் பங்கெடுக்கவும்.",
    organizer: "வரவேற்பு பொறுப்பாளர் மார்கஸ் கோல்",
    organizerEmail: "marcus@vaarthaichurch.org",
    image: "event-new-members",
    registrationUrl: "#register-luncheon"
  },
  {
    id: "mens-breakfast-study",
    title: "ஆண்கள் வேத ஆராய்ச்சி மற்றும் காலை உணவு",
    date: "2026-07-25",
    time: "காலை 7:30 - காலை 9:00 மணி",
    location: "ஐக்கிய அரங்கு",
    category: "Groups",
    description: "சூடான காபி, காலை உணவு மற்றும் கிறிஸ்தவ சகோதரத்துவ ஐக்கியத்துடன் உங்கள் வார இறுதியைத் தொடங்குங்கள். குடும்பத் தலைமை மற்றும் விவிலியப் பொறுப்புகள் குறித்த வேதப் படிப்பைத் தொடங்குகிறோம்.",
    organizer: "போதகர் டேவிட் வான்ஸ்",
    organizerEmail: "david@vaarthaichurch.org",
    image: "event-mens-breakfast",
    registrationUrl: "#register-mens-breakfast"
  }
];
