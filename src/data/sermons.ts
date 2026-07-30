export interface Sermon {
  id: string;
  title: string;
  englishTitle?: string;
  speaker: string;
  englishSpeaker?: string;
  date: string;
  scriptureReference: string;
  englishScriptureReference?: string;
  series: string;
  englishSeries?: string;
  topic: string;
  englishTopic?: string;
  description: string;
  englishDescription?: string;
  videoPlaceholder: string;
  englishVideoPlaceholder?: string;
  youtubeId?: string;
  audioUrl: string;
  notesUrl: string;
  duration: string;
  thumbnail: string;
}

export const sermonsData: Sermon[] = [
  {
    id: "gods-hand-upon-us",
    title: "தேவனுடைய கரம் நம்மீது இருக்கிறது!",
    speaker: "Ps Weslyn",
    date: "2026-07-26",
    scriptureReference: "1 இராஜாக்கள் 18",
    series: "கிருபையின் தாளங்கள்",
    topic: "தேவனுடைய ஆசீர்வாதம்",
    description: "மனிதனுடைய கரங்கள் பல ஆச்சரியமான காரியங்களைச் செய்யும் ஆற்றல் கொண்டவை. ஆனால், மனிதனுடைய சுய முயற்சிகள் (6 விரற்கடை அளவு) உலகளாவிய காரியங்களை மட்டுமே கட்டும்; தேவனுடைய 7வது கரம் நம்முடைய முயற்சிகளின் மேல் அமரும்போது மட்டுமே அதற்கு நித்திய பலனும் ஆசீர்வாதமும் உண்டாகிறது.\n\nஎலியா தீர்க்கதரிசியின் காலத்தில் வறட்சியைப் போக்க வந்த \"உள்ளங்கை அளவிலான மேகம்\" போல, உங்கள் சோர்வான சூழ்நிலைகளை மாற்ற தேவனுடைய வல்லமையுள்ள கரம் வந்து கொண்டிருக்கிறது. நீங்கள் செய்யும் நற்காரியங்களில் உங்கள் முயற்சிகளை கைவிடாதீர்கள்; கர்த்தர் தாமே உங்கள் குடும்பத்தையும், உங்கள் உழைப்பையும் ஆசீர்வதிப்பாராக!",
    videoPlaceholder: "தேவனுடைய கரம் நம்மீது இருக்கிறது! பிரசங்க வீடியோ",
    youtubeId: "veZ48lw-MO0",
    audioUrl: "#",
    notesUrl: "#",
    duration: "45:00",
    thumbnail: "sermon-selah-1"
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
