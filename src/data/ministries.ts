export interface Ministry {
  id: string;
  name: string;
  englishName: string;
  purpose: string;
  audience: string;
  schedule?: string;
  location: string;
  leaderName: string;
  leaderTitle: string;
  leaderEmail: string;
  image: string;
  scripture?: string;
  scriptureReference?: string;
  description: string;
  features: string[];
}

export const ministriesData: Ministry[] = [
  {
    id: "children",
    englishName: "Vaarthai Kids Ministry",
    name: "வார்த்தை சிறுவர் ஊழியம்",
    purpose: "At Varthai Church, we provide a safe, welcoming, and joyful environment for children aged 4 to 12 years.",
    audience: "Children aged 4 to 12 years (4 முதல் 12 வயது சிறுவர்கள்)",
    schedule: "Every Sunday at 10:00 AM",
    location: "Kids Ministry Area (ஆலய சிறுவர் பிரிவு)",
    leaderName: "Megan Miller",
    leaderTitle: "Kids Ministry Coordinator",
    leaderEmail: "info@vaarthai.org.au",
    image: "/ministry-children-detail.jpg",
    scripture: "\"But Jesus said, 'Let the little children come to Me, and do not forbid them; for of such is the kingdom of heaven.'\"",
    scriptureReference: "Matthew 19:14",
    description: "At Varthai Church, we provide a safe, welcoming, and joyful environment for children aged 4 to 12 years. Our Kids Ministry is dedicated to helping children grow in their faith in Christ and develop a personal love for Jesus by enjoying the Word through age-appropriate Bible teaching, creative arts and crafts, worship, engaging games, and fun-filled activities.",
    features: [
      "Age-appropriate Bible teaching & storytelling",
      "Creative arts, crafts, and worship songs",
      "Engaging games and fun-filled group activities",
      "Safe, welcoming, and joyful environment (ages 4–12)"
    ]
  },
  {
    id: "youth",
    englishName: "Vaarthai Youth Ministry",
    name: "வார்த்தை இளைஞர் ஊழியம்",
    purpose: "இளம்பருவத்தினர் கிறிஸ்துவுக்குள் வளரவும், நல்ல நட்பு வட்டாரத்தை வளர்க்கவும் உதவுதல்.",
    audience: "7 முதல் 12-ம் வகுப்பு வரையிலான மாணவர்கள்",
    location: "இளைஞர் அரங்கு",
    leaderName: "கேலப் வான்ஸ்",
    leaderTitle: "இளைஞர் இயக்குனர்",
    leaderEmail: "caleb@vaarthaichurch.org",
    image: "ministry-youth",
    description: "இளைஞர்கள் தங்களது கேள்விகளைக் கேட்கவும், விசுவாசத்தில் தைரியமாக நிற்கவும் இது ஒரு சிறந்த தளம். வேடிக்கையான விளையாட்டுகள், பிரசங்கங்கள் மற்றும் சிறிய குழு விவாதங்கள் மூலம் மாணவர்கள் வேதாகமச் சத்தியங்களை அறிந்துகொள்கிறார்கள்.",
    features: [
      "இளைய தலைமுறைக்கான விவிலியக் கலந்துரையாடல்கள்",
      "தனிப்பட்ட ஆலோசனை மற்றும் வழிகாட்டுதல் குழுக்கள்",
      "மாதாந்திர சமூகக் கூடுகைகள் மற்றும் சேவைத் திட்டங்கள்",
      "கோடைகால முகாம்கள் மற்றும் தங்குமிட கூட்டங்கள்"
    ]
  },
  {
    id: "young-adults",
    englishName: "Vaarthai Young Adults",
    name: "வார்த்தை வாலிபர் ஊழியம்",
    purpose: "கல்லூரி மாணவர்கள் மற்றும் இளம் பணியாளர்கள் தேவனுடைய அன்பில் வளரவும், திருச்சபையில் சேவை செய்யவும் உதவுதல்.",
    audience: "18 முதல் 30 வயது வரையிலான இளைஞர்கள்",

    location: "வீடுகள் மற்றும் உள்ளூர் காபி கடைகள்",
    leaderName: "கேலப் & ஹன்னா வான்ஸ்",
    leaderTitle: "இளவாலி ஒருங்கிணைப்பாளர்கள்",
    leaderEmail: "caleb@vaarthaichurch.org",
    image: "ministry-young-adults",
    description: "கல்லூரி மற்றும் பணி வாழ்க்கைக்கு மாறும் காலம் சவாலானது. இளவாலிகள் விசுவாசம், வேலை மற்றும் தனிப்பட்ட உறவுகள் குறித்து விவாதிக்கவும், இணைந்து செயல்படவும் ஒரு தளம்.",
    features: [
      "வேலையிட சவால்கள் மற்றும் கிறிஸ்தவ ஒழுக்கங்கள் பற்றிய விவாதம்",
      "மாதாந்திர கூடுகை உணவுகள் மற்றும் ஐக்கியங்கள்",
      "சமூக சேவை மற்றும் நற்செய்தி அறிவிப்புகள்",
      "மூத்த சபை உறுப்பினர்களின் வழிகாட்டுதல்"
    ]
  },
  {
    id: "small-groups",
    englishName: "Vaarthai Life Groups",
    name: "வார்த்தை இல்லக் கூட்டங்கள்",
    purpose: "வாராந்திர சிறு குழுக்கள் மூலம் விசுவாசத்தில் வளரவும், ஒருவருக்கொருவர் ஜெபிக்கவும் தாங்கவும் உதவுதல்.",
    audience: "அனைத்து பெரியவர்கள் மற்றும் தம்பதியினர்",

    location: "உறுப்பினர்களின் இல்லங்கள் மற்றும் ஆன்லைன்",
    leaderName: "சாரா ஜென்கின்ஸ்",
    leaderTitle: "சமூக ஐக்கிய உதவி போதகர்",
    leaderEmail: "sarah@vaarthaichurch.org",
    image: "ministry-groups",
    description: "ஞாயிறு ஆராதனைகள் கூடுவதற்கானவை, ஆனால் இல்லக் கூட்டங்கள் வாழ்வைப் பகிர்வதற்கானவை. 8 முதல் 15 பேர் கொண்ட சிறிய குழுக்களாக வீடுகளில் கூடி, பரிசுத்த வேதாகமம் படித்து, ஜெபம் செய்கிறோம்.",
    features: [
      "பல்வேறு பகுதிகளில் நடைபெறும் 25-க்கும் மேற்பட்ட குழுக்கள்",
      "ஞாயிறு பிரசங்கத்தின் அடிப்படையில் விவிலியக் கேள்விகள்",
      "உதவி மற்றும் ஜெப ஆதரவு வளையங்கள்",
      "குடும்பங்கள் மற்றும் தனிநபர்களுக்கான தனித்தனி குழுக்கள்"
    ]
  },
  {
    id: "men",
    englishName: "Vaarthai Men",
    name: "வார்த்தை ஆண்கள் ஊழியம்",
    purpose: "ஆண்களை ஆன்மீகத் தலைவர்களாக வளர்க்கவும், குடும்பத்திலும் சமூகத்திலும் பொறுப்புடன் செயல்படவும்Equip செய்தல்.",
    audience: "அனைத்து வயது ஆண்கள்",
    schedule: "மாதாந்திர காலை உணவுக் கூட்டங்கள் மற்றும் வாராந்திர வேதப் படிப்பு",
    location: "ஐக்கிய அரங்கு",
    leaderName: "போதகர் டேவிட் வான்ஸ்",
    leaderTitle: "தலைமை போதகர்",
    leaderEmail: "david@vaarthaichurch.org",
    image: "ministry-men",
    description: "குடும்பத்திலும் பணியிடத்திலும் விவிலிய அடிப்படையிலான நற்பண்புகளுடன் ஆண்கள் செயல்பட உதவுகிறோம். மாதாந்திரக் காலை உணவுக் கூட்டங்கள் மற்றும் ஆண்டு ஆண்கள் முகாம்கள் மூலம் ஐக்கியத்தை வளர்க்கிறோம்.",
    features: [
      "வெள்ளிக்கிழமை காலை 6:00 மணி வேத ஆராய்ச்சி",
      "மாதாந்திர சனிக்கிழமை காலை உணவுக் கூட்டம்",
      "ஆண்டு ஆண்கள் விசேஷ முகாம்",
      "ஒருவருக்கொருவர் வழிகாட்டும் நட்புறவுகள்"
    ]
  },
  {
    id: "women",
    englishName: "Vaarthai Women",
    name: "வார்த்தை பெண்கள் ஊழியம்",
    purpose: "பெண்களை விசுவாசத்தில் பலப்படுத்தவும், கிறிஸ்தவ நட்புறவை வளர்க்கவும், சமூகத்தில் சேவை செய்யவும் ஊக்கப்படுத்துதல்.",
    audience: "அனைத்து வயது பெண்கள்",
    schedule: "செவ்வாய்க்கிழமை காலை மற்றும் மாலை வேதப் படிப்புகள்",
    location: "ஐக்கிய அரங்கு / வகுப்பறைகள்",
    leaderName: "சாரா ஜென்கின்ஸ்",
    leaderTitle: "உதவி போதகர்",
    leaderEmail: "sarah@vaarthaichurch.org",
    image: "ministry-women",
    description: "பெண்கள் தேவனுடைய வார்த்தையை ஆழமாகப் படிக்கவும், ஒருவருக்கொருவர் ஜெபித்துக் கொள்ளவும் இது ஒரு அன்பான ஐக்கியம். பல்வேறு சமூகப் பணிகளையும் ஆராதனைகளையும் ஒருங்கிணைக்கிறோம்.",
    features: [
      "ஆண்டிற்கு இருமுறை நடைபெறும் விவிலியப் பாடத் தொடர்கள்",
      "செவ்வாய் காலைக் கூட்டங்களில் சிறுவர் கவனிப்பு வசதி",
      "வருடாந்திர பெண்கள் மாநாடுகள்",
      "பிரசவக் கால மற்றும் நோய்வாய்ப்பட்டோருக்கான உதவித் திட்டங்கள்"
    ]
  },
  {
    id: "worship",
    englishName: "Vaarthai Worship & Music Ministry",
    name: "வார்த்தை ஆராதனை மற்றும் இசை ஊழியம்",
    purpose: "இசை மற்றும் கலைகள் மூலம் சபை மக்கள் தேவனை ஆராதிக்க வழிகாட்டுதல்.",
    audience: "பாடகர்கள், வாசிப்பாளர்கள் மற்றும் தொழில்நுட்ப வல்லுநர்கள்",

    location: "ஆராதனை அரங்கு",
    leaderName: "ஹன்னா வான்ஸ்",
    leaderTitle: "ஆராதனை இயக்குனர்",
    leaderEmail: "hannah@vaarthaichurch.org",
    image: "ministry-worship",
    description: "ஞாயிறு ஆராதனைகளில் மக்கள் பக்திவிருத்தியுடன் பாடித் துதிக்க இசைக்குழு வழிநடத்துகிறது. ஒலி மற்றும் ஒளி அமைப்பாளர்கள், கேமரா இயக்குனர்கள் எனப் பலரின் பங்களிப்பு இதில் அடங்கும்.",
    features: [
      "இசைக்குழு, பாடல் குழு மற்றும் கலைப் பங்களிப்புகள்",
      "ஒலி, ஒளி மற்றும் கேமரா இயக்கப் பயிற்சிகள்",
      "புதிய பாடல் உருவாக்கப் பட்டறைகள்",
      "இளைஞர் ஆராதனை இசைக்குழு வழிகாட்டல்"
    ]
  },
  {
    id: "missions",
    englishName: "Vaarthai Global Evangelical Work",
    name: "வார்த்தை உலகளாவிய சுவிசேஷ ஊழியம்",
    purpose: "உலகமெங்கும் நற்செய்தியைக் கொண்டு செல்லும் மிஷனரிகளை ஆதரித்தல் மற்றும் அனுப்புதல்.",
    audience: "சுவிசேஷப் பணியில் ஆர்வம் கொண்ட அனைவரும்",
    schedule: "காலாண்டு கூட்டங்கள் மற்றும் வருடாந்திர மிஷனரி பயணங்கள்",
    location: "சபைக் கூட்ட அரங்கு / மிஷனரி தளங்கள்",
    leaderName: "டாக்டர் மார்கஸ் ஹேஸ்",
    leaderTitle: "மிஷனரி குழுத் தலைவர்",
    leaderEmail: "missions@vaarthaichurch.org",
    image: "ministry-missions",
    description: "நாம் வாழும் இடத்தைத் தாண்டி நற்செய்தியைக் கொண்டு செல்வதை நம்புகிறோம். ஆறு நாடுகளில் உள்ள மிஷனரி பங்காளர்களை ஆதரிக்கிறோம், கல்வி மற்றும் மருத்துவ உதவிகளைச் செய்கிறோம்.",
    features: [
      "மிஷனரிகளுக்கான மாதாந்திர நிதி ஆதரவு",
      "வருடாந்திர மருத்துவ மற்றும் சிறுவர் மிஷனரி பயணங்கள்",
      "மிஷனரி ஜெபக் கூட்டங்கள் மற்றும் அறிமுகங்கள்",
      "சுவிசேஷப் பணிகளுக்கான பயிற்சி வகுப்புகள்"
    ]
  },
  {
    id: "community-outreach",
    englishName: "Vaarthai Social Service Ministry",
    name: "வார்த்தை சமூக நற்பணி ஊழியம்",
    purpose: "ஏழைகளுக்கும் தேவையிலுள்ளோருக்கும் உதவிக்கரம் நீட்டி கிறிஸ்துவின் அன்பை வெளிப்படுத்துதல்.",
    audience: "சேவை செய்ய விரும்பும் அனைத்து சபை மக்கள்",

    location: "பல்வேறு தொண்டு நிறுவனங்கள் மற்றும் வீதிகள்",
    leaderName: "சாரா ஜென்கின்ஸ்",
    leaderTitle: "உதவி போதகர்",
    leaderEmail: "sarah@vaarthaichurch.org",
    image: "ministry-outreach",
    description: "உள்ளூர் பள்ளிகள், முதியோர் இல்லங்கள் மற்றும் உணவுப் பாங்க்குகளுடன் இணைந்து பல்வேறு உதவிகளைச் செய்கிறோம். குளிர்கால உடைகள், கல்வி உபகரணங்கள் மற்றும் உணவு விநியோகம் செய்கிறோம்.",
    features: [
      "வாரம் தோறும் சேகரிக்கப்படும் உலர் உணவுக் கொடைகள்",
      "பள்ளி மாணவர்களுக்கான கல்விப் பொருட்கள் வழங்கல்",
      "முதியோர் மற்றும் ஆதரவற்றோர் இல்ல உதவிகள்",
      "அவசர கால மற்றும் பேரிடர் நிவாரண உதவிகள்"
    ]
  },
  {
    id: "pastoral-care",
    englishName: "Vaarthai Pastoral Care & Counselling",
    name: "வார்த்தை போதக பராமரிப்பு மற்றும் ஆலோசனை",
    purpose: "துக்கங்கள், சவால்கள் மற்றும் ஆன்மீகக் கேள்விகளுக்கு மத்தியில் தனிநபர்களையும் குடும்பங்களையும் பராமரித்தல்.",
    audience: "ஜெபம் மற்றும் ஆலோசனைகள் தேவைப்படும் அனைவரும்",
    schedule: "நேரம் முன்பதிவு செய்தல் அவசியம்",
    location: "சபை அலுவலகங்கள்",
    leaderName: "போதகர் டேவிட் வான்ஸ்",
    leaderTitle: "தலைமை போதகர்",
    leaderEmail: "care@vaarthaichurch.org",
    image: "ministry-care",
    description: "வாழ்வின் சவாலான காலங்களில் போதகர்கள் உங்களுக்கு வழிகாட்டவும், ஜெபிக்கவும், வேதாகம ஆலோசனைகளை வழங்கவும் தயாராக உள்ளனர். மருத்துவமனை சந்திப்புகளும் செய்யப்படுகின்றன.",
    features: [
      "தனிநபர் மற்றும் குடும்ப வேத ஆலோசனைகள்",
      "மருத்துவமனை மற்றும் இல்ல பராமரிப்பு சந்திப்புகள்",
      "திருமணத்திற்கு முந்தைய விவிலிய ஆலோசனைகள்",
      "துக்க மற்றும் சோகக் கால ஆதரவுக் குழுக்கள்"
    ]
  }
];
