export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  scriptureReference: string;
  series: string;
  topic: string;
  description: string;
  videoPlaceholder: string;
  youtubeId?: string;
  audioUrl: string;
  notesUrl: string;
  duration: string;
  thumbnail: string;
}

export const sermonsData: Sermon[] = [
  {
    id: "restoring-the-soul",
    title: "ஆத்துமாவைத் தேற்றுதல்: அமைதியற்ற உலகில் சமாதானம்",
    speaker: "போதகர் டேவிட் வான்ஸ்",
    date: "2026-06-21",
    scriptureReference: "சங்கீதம் 23:1-6",
    series: "கிருபையின் தாளங்கள்",
    topic: "ஆவிக்குரிய சுகம்",
    description: "நமது அதிவேகமான சமுதாயத்தில், சோர்வு என்பது ஒரு கௌரவச் சின்னமாகப் பார்க்கப்படுகிறது. சங்கீதம் 23-ஐ ஆராய்ந்து, தேவனுடைய முன்னிலையில் நாம் ஓய்வெடுக்கும்போது அவர் எவ்வாறு நமது ஆத்துமாவைத் தேற்றுகிறார் என்பதைப் பற்றிப் பேசுவோம்.",
    videoPlaceholder: "ஆத்துமாவைத் தேற்றுதல் பிரசங்க வீடியோ",
    youtubeId: "dQw4w9WgXcQ",
    audioUrl: "#",
    notesUrl: "#",
    duration: "34:12",
    thumbnail: "sermon-selah-1"
  },
  {
    id: "the-anatomy-of-grace",
    title: "கிருபையின் மேன்மை: நம் எல்லைகளைத் தாண்டி அன்பு செய்தல்",
    speaker: "போதகர் டேவிட் வான்ஸ்",
    date: "2026-06-14",
    scriptureReference: "எபேசியர் 2:1-10",
    series: "விசுவாசத்தின் அடித்தளம்",
    topic: "கிருபையும் இரட்சிப்பும்",
    description: "கிருபை என்பது வெறும் தியாலஜி கோட்பாடு அல்ல—அது கிறிஸ்தவ வாழ்வின் மூச்சுக்காற்று. கிருபை நம்மை எவ்வாறு நம்பிக்கையின்மையிலிருந்து மீட்டு, பிறருக்கு அன்பு செய்ய தூண்டுகிறது என்பதை இந்த செய்தி விளக்குகிறது.",
    videoPlaceholder: "கிருபையின் மேன்மை பிரசங்க வீடியோ",
    youtubeId: "dQw4w9WgXcQ",
    audioUrl: "#",
    notesUrl: "#",
    duration: "38:45",
    thumbnail: "sermon-foundations-1"
  },
  {
    id: "walking-in-wisdom",
    title: "ஞானமாய் நடத்தல்: கடினமான உறவுகளைக் கையாளுதல்",
    speaker: "போதகர் டேவிட் வான்ஸ்",
    date: "2026-06-07",
    scriptureReference: "யாக்கோபு 3:13-18",
    series: "அன்றாட விசுவாசம்",
    topic: "ஞானம்",
    description: "ஞானம் என்பது நமது அறிவைப் பற்றியது மட்டுமல்ல, நாம் வாழும் முறையைப் பற்றியது. தூய்மையான, அமைதியான, சாந்தமுள்ள பரலோக ஞானத்திற்கும் உலக ஞானத்திற்கும் உள்ள வேறுபாடுகளைக் கற்றுக்கொள்ளுங்கள்.",
    videoPlaceholder: "ஞானமாய் நடத்தல் பிரசங்க வீடியோ",
    youtubeId: "dQw4w9WgXcQ",
    audioUrl: "#",
    notesUrl: "#",
    duration: "36:18",
    thumbnail: "sermon-james-1"
  },
  {
    id: "the-art-of-neighboring",
    title: "அயலானை நேசிப்பது எப்படி? உண்மை அன்பின் விளக்கம்",
    speaker: "உதவி போதகர் சாரா ஜென்கின்ஸ்",
    date: "2026-05-31",
    scriptureReference: "லூக்கா 10:25-37",
    series: "சமூகமே முதல்",
    topic: "அன்பும் சேவையும்",
    description: "நம்மில் பலருக்கு நம்மைப் போலவே பிறரையும் நேசிக்க வேண்டும் என்று தெரியும். ஆனால் இந்த பிளவுபட்ட உலகில் அதை எப்படி செய்வது? நல்ல சமாரியன் உவமையின் மூலம் அயலான் அன்பை போதகர் சாரா விளக்குகிறார்.",
    videoPlaceholder: "அயலானை நேசிப்பது எப்படி பிரசங்க வீடியோ",
    youtubeId: "dQw4w9WgXcQ",
    audioUrl: "#",
    notesUrl: "#",
    duration: "31:50",
    thumbnail: "sermon-community-1"
  },
  {
    id: "rooted-and-grounded",
    title: "வேரூன்றி நிலைபெறுதல்: குடும்பங்களை சத்தியத்தில் காத்தல்",
    speaker: "போதகர் டேவிட் வான்ஸ்",
    date: "2026-05-24",
    scriptureReference: "கொலோசெயர் 2:6-7",
    series: "விசுவாசத்தின் அடித்தளம்",
    topic: "குடும்பம்",
    description: "புயல்கள் தாக்கும்போது, ஒரு மரத்தின் பிழைப்பு அதன் வேர்களின் ஆழத்தைச் சார்ந்துள்ளது. மாறும் இந்த உலக கலாச்சாரத்தில் உங்கள் குடும்பத்தை கிறிஸ்துவின் மாறாத சத்தியத்தில் எவ்வாறு வேரூன்றச் செய்வது?",
    videoPlaceholder: "வேரூன்றி நிலைபெறுதல் பிரசங்க வீடியோ",
    youtubeId: "dQw4w9WgXcQ",
    audioUrl: "#",
    notesUrl: "#",
    duration: "40:02",
    thumbnail: "sermon-foundations-2"
  },
  {
    id: "the-joy-of-generosity",
    title: "கொடுப்பதின் மகிழ்ச்சி: தாராள மனப்பான்மையுடன் வாழ்தல்",
    speaker: "விருந்தினர் போதகர் மார்கஸ் ஹேஸ்",
    date: "2026-05-17",
    scriptureReference: "2 கொரிந்தியர் 9:6-15",
    series: "சமூகமே முதல்",
    topic: "தாராள குணம்",
    description: "உதவி செய்வது ஒரு கடமை அல்ல, அது தேவனிடமிருந்து வரும் ஒரு அழைப்பு. கொடுப்பது எவ்வாறு நமது இருதயங்களை பயத்திலிருந்து விடுவித்து, பரலோக சந்தோஷத்தால் நிரப்புகிறது என்பதை இந்த செய்தி விளக்குகிறது.",
    videoPlaceholder: "கொடுப்பதின் மகிழ்ச்சி பிரசங்க வீடியோ",
    youtubeId: "dQw4w9WgXcQ",
    audioUrl: "#",
    notesUrl: "#",
    duration: "35:40",
    thumbnail: "sermon-community-2"
  },
  {
    id: "rhythms-of-prayer",
    title: "ஜெபத்தின் ஒழுக்கங்கள்: அன்றாட வாழ்வில் தேவனோடு இணைதல்",
    speaker: "உதவி போதகர் சாரா ஜென்கின்ஸ்",
    date: "2026-05-10",
    scriptureReference: "மத்தேயு 6:5-15",
    series: "கிருபையின் தாளங்கள்",
    topic: "ஜெபம்",
    description: "ஜெபம் என்பது ஒரு சடங்கு அல்ல, அது தந்தையோடு பேசும் உரையாடல். உங்கள் பிஸியான அன்றாட வேலைகளுக்கு மத்தியிலும் எளிய, ஆழமான ஜெப வாழ்க்கையை எவ்வாறு வளர்த்துக் கொள்வது என்று கற்றுக்கொள்ளுங்கள்.",
    videoPlaceholder: "ஜெபத்தின் ஒழுக்கங்கள் பிரசங்க வீடியோ",
    youtubeId: "dQw4w9WgXcQ",
    audioUrl: "#",
    notesUrl: "#",
    duration: "29:45",
    thumbnail: "sermon-selah-2"
  },
  {
    id: "living-unashamed",
    title: "வெட்கப்படாமல் வாழ்தல்: அன்றாட வாழ்வில் தைரியம்",
    speaker: "இளைஞர் இயக்குனர் கேலப் வான்ஸ்",
    date: "2026-05-03",
    scriptureReference: "ரோமர் 1:16-17",
    series: "அன்றாட விசுவாசம்",
    topic: "விசுவாச தைரியம்",
    description: "சுவிசேஷம் நமக்கு பயத்திலிருந்து விடுதலையைத் தருகிறது. பள்ளி, கல்லூரி, வேலை செய்யும் இடம் மற்றும் சமூக வலைத்தளங்களில் நமது விசுவாசத்தை எப்படி தைரியமாக வாழ்ந்து காட்டுவது என்று கேலப் வான்ஸ் பேசுகிறார்.",
    videoPlaceholder: "வெட்கப்படாமல் வாழ்தல் பிரசங்க வீடியோ",
    youtubeId: "dQw4w9WgXcQ",
    audioUrl: "#",
    notesUrl: "#",
    duration: "33:10",
    thumbnail: "sermon-james-2"
  }
];

export const sermonSeries = [
  {
    title: "கிருபையின் தாளங்கள்",
    description: "அன்றாட வாழ்வில் அமைதி, ஜெபம் மற்றும் எளிய விசுவாச பழக்கங்களைப் பற்றிய தொடர் சொற்பொழிவுகள்.",
    count: 2,
    image: "series-selah"
  },
  {
    title: "விசுவாசத்தின் அடித்தளம்",
    description: "கிருபை, வேதாகமம், குடும்பம் மற்றும் மீட்பு பற்றிய நமது திருச்சபையின் அடிப்படை விசுவாச விளக்கங்கள்.",
    count: 2,
    image: "series-foundations"
  },
  {
    title: "சமூகமே முதல்",
    description: "அயலானை நேசித்தல், நகருக்குச் சேவை செய்தல் மற்றும் தாராள மனப்பான்மையைக் கடைப்பிடித்தல் பற்றிய தொடர்.",
    count: 2,
    image: "series-community"
  },
  {
    title: "அன்றாட விசுவாசம்",
    description: "யாக்கோபு எழுதிய நிருபத்திலிருந்து விசுவாசத்தின் செயல்கள் மற்றும் ஞானமான வாழ்க்கை பற்றிய நடைமுறைப் படிப்புகள்.",
    count: 2,
    image: "series-james"
  }
];
