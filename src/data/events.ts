export interface ChurchEvent {
  id: string;
  title: string;
  englishTitle: string;
  date: string;
  time: string;
  englishTime: string;
  location: string;
  englishLocation: string;
  category: "Community" | "Youth" | "Children" | "Worship" | "All-Church" | "Groups";
  englishCategory: string;
  description: string;
  englishDescription: string;
  scripture?: string;
  englishScripture?: string;
  organizer: string;
  englishOrganizer: string;
  organizerEmail: string;
  image: string;
  registrationUrl?: string;
  isFeatured?: boolean;
}

export const eventsData: ChurchEvent[] = [
  {
    id: "mid-week-online-prayer",
    title: "வாராந்திர ஆன்லைன் ஜெபம் (Mid-Week Online Prayer)",
    englishTitle: "Mid-Week Online Prayer",
    date: "2026-07-22",
    time: "புதன்கிழமை இரவுகள்",
    englishTime: "Wednesday Nights",
    location: "ஆன்லைன் (Zoom வழியாக - இணைப்பிற்கு எங்களைத் தொடர்பு கொள்ளவும்)",
    englishLocation: "Online via Zoom (Contact us for the meeting link)",
    category: "Groups",
    englishCategory: "Prayer & Fellowship",
    scripture: "\"தம்மை நோக்கிக் கூப்பிடுகிற யாவருக்கும், உண்மையாய்த் தம்மை நோக்கிக் கூப்பிடுகிற யாவருக்கும், கர்த்தர் சமீபமாயிருக்கிறார்.\" – சங்கீதம் 145:18",
    englishScripture: "\"The Lord is near to all who call on Him, to all who call on Him in truth.\" – Psalm 145:18",
    description: "\"தம்மை நோக்கிக் கூப்பிடுகிற யாவருக்கும், உண்மையாய்த் தம்மை நோக்கிக் கூப்பிடுகிற யாவருக்கும், கர்த்தர் சமீபமாயிருக்கிறார்.\" – சங்கீதம் 145:18\n\nஒவ்வொரு புதன்கிழமை இரவும் எங்கள் வாராந்திர ஆன்லைன் ஜெபக் கூட்டத்தில் கலந்து கொள்ள உங்களை அன்புடன் அழைக்கிறோம். தற்போது, நாங்கள் சங்கீதப் புத்தகத்தின் வழியாகப் பயணம் செய்து கொண்டிருக்கிறோம்—தேவனுடைய வார்த்தையை ஆழமாகத் தியானிக்கவும், சங்கீதங்களின் வழியாக இணைந்து ஜெபிக்கவும் நேரம் ஒதுக்குகிறோம். உங்களுக்கு ஒரு குறிப்பிட்ட ஜெப விண்ணப்பம் இருந்தாலும், வார நடுவில் ஆன்மீகப் புத்துணர்ச்சி தேவைப்பட்டாலும், அல்லது சபையாரோடு இணைந்து தேவனைத் தேட விரும்பினாலும், எங்களோடு ஜெபத்தில் இணைய உங்களை அன்புடன் வரவேற்கிறோம்.\n\nநிகழ்வு விவரங்கள்:\n* எப்பொழுது: புதன்கிழமை இரவுகள்\n* எங்கே: ஆன்லைன் (Zoom வழியாக - இணைப்பிற்கு எங்களைத் தொடர்பு கொள்ளவும்)\n* நோக்கம்: சங்கீதங்களைத் தியானித்தல் மற்றும் ஜெபித்தல்.",
    englishDescription: "\"The Lord is near to all who call on Him, to all who call on Him in truth.\" – Psalm 145:18\n\nJoin us every Wednesday night for our Mid-Week Online Prayer meeting. Currently, we are journeying through the book of Psalms—taking time to meditate deeply on God's Word and to pray through the Psalms together. Whether you have a specific prayer request, need a mid-week spiritual refresh, or simply want to seek the Lord in community, we warmly invite you to join us in prayer.\n\nEvent Details:\n* When: Wednesday Nights\n* Where: Online via Zoom (Contact us for the meeting link)\n* Focus: Meditating on and praying through the Psalms.",
    organizer: "Ps Weslyn",
    englishOrganizer: "Ps Weslyn",
    organizerEmail: "info@vaarthai.org.au",
    image: "event-worship-night",
    isFeatured: true
  },
  {
    id: "monthly-after-church-lunch",
    title: "மாதாந்திர ஆராதனைக்குப் பிந்தைய மதிய உணவு (Monthly After-Church Lunch)",
    englishTitle: "Monthly After-Church Lunch",
    date: "2026-07-26",
    time: "ஒவ்வொரு மாதமும் 4-வது வாரம் (ஞாயிறு ஆராதனை முடிந்த உடனே)",
    englishTime: "The 4th week of each month (Immediately following the Sunday Service)",
    location: "லயன்ஸ் பார்க் (Lions Park), ஸ்பிரிங்ஃபீல்ட் லேக்ஸ்",
    englishLocation: "Lions Park, Springfield Lakes",
    category: "Community",
    englishCategory: "Community & Fellowship",
    scripture: "\"வீடுகள்தோறும் அப்பம்பிட்டு, மகிழ்ச்சியோடும் கபடமற்ற இருதயத்தோடும் போஜனம் பண்ணி...\" – அப்போஸ்தலர் 2:46",
    englishScripture: "\"They broke bread in their homes and ate together with glad and sincere hearts.\" – Acts 2:46",
    description: "\"வீடுகள்தோறும் அப்பம்பிட்டு, மகிழ்ச்சியோடும் கபடமற்ற இருதயத்தோடும் போஜனம் பண்ணி...\" – அப்போஸ்தலர் 2:46\n\nஞாயிறு ஆராதனை முடிந்தவுடன் நமது ஐக்கியம் முடிந்துவிடுவதில்லை! ஒவ்வொரு மாதத்தின் நான்காவது ஞாயிற்றுக்கிழமையிலும், எங்கள் மாதாந்திர ஆராதனைக்குப் பிந்தைய மதிய உணவு ஒன்றுகூடலுடன் அந்த மகிழ்ச்சியைத் தொடர்கிறோம். ஸ்பிரிங்ஃபீல்ட் லேக்ஸில் உள்ள லயன்ஸ் பார்க்கிற்குச் சென்று, உணவைப் பகிர்ந்து கொண்டு, அழகான இயற்கைச் சூழலை ரசித்து, நமது திருச்சபைக் குடும்பத்திற்குள் நிலையான நட்பை உருவாக்குகிறோம். பழைய நண்பர்களோடு இணையவும் புதியவர்களை வரவேற்கவும் இது ஒரு அற்புதமான, நிதானமான நேரம்.\n\nநிகழ்வு விவரங்கள்:\n* எப்பொழுது: ஒவ்வொரு மாதமும் 4-வது வாரம் (ஞாயிறு ஆராதனை முடிந்த உடனே)\n* எங்கே: லயன்ஸ் பார்க் (Lions Park), ஸ்பிரிங்ஃபீல்ட் லேக்ஸ்\n* கொண்டு வர வேண்டியவை: மகிழ்ச்சியான இருதயம் மற்றும் பகிர்ந்து கொள்ள உங்களுக்குப் பிடித்த உணவு அல்லது தின்பண்டங்கள்!",
    englishDescription: "\"They broke bread in their homes and ate together with glad and sincere hearts.\" – Acts 2:46\n\nFellowship doesn't have to end when the Sunday service is over! On the fourth Sunday of every month, we keep the joy going with our Monthly After-Church Lunch get-together. We head over to Lions Park in Springfield Lakes to share a meal, enjoy the beautiful outdoors, and build lasting friendships within our church family. It is a wonderful, relaxed time to connect with old friends and welcome new ones.\n\nEvent Details:\n* When: The 4th week of each month (Immediately following the Sunday Service)\n* Where: Lions Park, Springfield Lakes\n* What to Bring: A joyful heart and your favourite dish or snacks to share!",
    organizer: "Mr Devairakkam Paul",
    englishOrganizer: "Mr Devairakkam Paul",
    organizerEmail: "info@vaarthai.org.au",
    image: "/event-after-church-lunch.jpg",
    isFeatured: false
  }
];
