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
    id: "the-good-hand-of-my-god",
    title: "என் தேவனுடைய நல்ல கரம் | The Good Hand of My God",
    speaker: "Ps Weslyn",
    date: "2026-08-02",
    scriptureReference: "எஸ்றா 8:22",
    series: "கர்த்தருடைய கை",
    topic: "தேவனுடைய கரம்",
    description: "எஸ்றா தன் புத்தகத்தில் ஒரே ஒரு வார்த்தையை மறுபடி மறுபடி சொல்கிறான் — \"என் தேவனுடைய நல்ல கரம் என்மேல் இருந்தது.\"\n\n\"கர்த்தருடைய கை\" தொடர் செய்தியின் இரண்டாம் பாகமான இந்தச் செய்தியில், அந்த நல்ல கரத்தின் மூன்று தருணங்களைப் பார்க்கிறோம் — அது கதவைத் திறக்கிறது, நமக்குள் தைரியத்தைக் கொடுத்து ஒரு ஜனத்தைச் சேர்க்கிறது, நாம் எல்லாவற்றையும் பணயம் வைத்து நம்பும் கரமாக இருக்கிறது. படைக்குப் பதிலாக முழங்காலில் விழுந்த எஸ்றாவின் துணிவு நமக்குக் கற்பிக்கிறது: நம்மிடம் படை இல்லாவிட்டாலும், அவரைத் தேடுகிறவர்கள்மேல் நல்ல கரம் இருக்கிறது.\n\n\"எங்கள் தேவனுடைய கரம் அவரைத் தேடுகிற யாவர்மேலும் நன்மைக்கென்று இருக்கிறது.\" (எஸ்றா 8:22)",
    videoPlaceholder: "என் தேவனுடைய நல்ல கரம் பிரசங்க வீடியோ",
    youtubeId: "MAQKhvBj_ZI",
    audioUrl: "#",
    notesUrl: "#",
    duration: "45:00",
    thumbnail: "",
  },
  {
    id: "gods-hand-upon-us",
    title: "தேவனுடைய கரம் நம்மீது இருக்கிறது!",
    speaker: "Ps Weslyn",
    date: "2026-07-26",
    scriptureReference: "1 இராஜாக்கள் 18",
    series: "கர்த்தருடைய கை",
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
    title: "கர்த்தருடைய கை",
    description: "அன்றாட வாழ்வில் அமைதி, ஜெபம் மற்றும் எளிய விசுவாச பழக்கங்களைப் பற்றிய தொடர் சொற்பொழிவுகள்.",
    count: 2,
    image: "series-selah"
  }
];
