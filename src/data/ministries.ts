export interface Ministry {
  id: string;
  name: string;
  englishName: string;
  purpose: string;
  englishPurpose?: string;
  audience: string;
  englishAudience?: string;
  schedule?: string;
  englishSchedule?: string;
  location: string;
  englishLocation?: string;
  leaderName: string;
  englishLeaderName?: string;
  leaderTitle: string;
  englishLeaderTitle?: string;
  leaderEmail: string;
  image: string;
  imagePosition?: string;
  scripture?: string;
  scriptureReference?: string;
  englishScripture?: string;
  englishScriptureReference?: string;
  description: string;
  englishDescription?: string;
  features: string[];
  englishFeatures?: string[];
}

export const ministriesData: Ministry[] = [
  {
    id: "children",
    englishName: "Vaarthai Kids Ministry",
    name: "வார்த்தை சிறுவர் ஊழியம்",
    purpose: "வார்த்தை திருச்சபையில், 4 முதல் 12 வயது வரையிலான சிறுவர்களுக்கு பாதுகாப்பான, அன்பான மற்றும் மகிழ்ச்சியான சூழலை நாங்கள் வழங்குகிறோம்.",
    englishPurpose: "At Varthai Church, we provide a safe, welcoming, and joyful environment for children ages 4 to 12.",
    audience: "4 முதல் 12 வயது சிறுவர்கள்",
    englishAudience: "Children ages 4 to 12",
    schedule: "ஒவ்வொரு ஞாயிற்றுக்கிழமையும் காலை 10:30 மணிக்கு",
    englishSchedule: "Every Sunday at 10:30 AM",
    location: "திருச்சபை அரங்கு (Church Hall)",
    englishLocation: "Church Hall",
    leaderName: "Mrs Gracy Kershoem",
    englishLeaderName: "Mrs Gracy Kershoem",
    leaderTitle: "சிறுவர் ஊழிய ஒருங்கிணைப்பாளர்",
    englishLeaderTitle: "Kids Ministry Coordinator",
    leaderEmail: "info@vaarthai.org.au",
    image: "/ministry-children-detail.jpg",
    imagePosition: "center 15%",
    scripture: "\"இயேசு: 'சிறுபிள்ளைகளை என்னிடத்தில் வரவிடுங்கள், அவர்களைத் தடைசெய்யாதிருங்கள்; பரலோகராஜ்யம் அப்படிப்பட்டவர்களுடையது' என்றார்.\"",
    scriptureReference: "மத்தேயு 19:14",
    englishScripture: "\"But Jesus said, 'Let the little children come to Me, and do not forbid them; for of such is the kingdom of heaven.'\"",
    englishScriptureReference: "Matthew 19:14",
    description: "வார்த்தை திருச்சபையில், 4 முதல் 12 வயது வரையிலான சிறுவர்களுக்கு பாதுகாப்பான, அன்பான மற்றும் மகிழ்ச்சியான சூழலை நாங்கள் வழங்குகிறோம். எங்கள் சிறுவர் ஊழியம், பிள்ளைகள் விசுவாசத்தில் வளரவும், இயேசுவுடன் ஆழமான தனிப்பட்ட உறவை ஏற்படுத்திக்கொள்ளவும் அர்ப்பணிக்கப்பட்டுள்ளது. வயதுக்கு ஏற்ற வேதாகமப் போதனைகள், ஆக்கப்பூர்வமான கலை மற்றும் கைவினைப் பொருள்கள், உற்சாகமான ஆராதனை மற்றும் ஈர்க்கக்கூடிய விளையாட்டுகள் மூலம் தேவனுடைய வார்த்தையை உயிரோட்டமாக மாற்றுகிறோம்—கிறிஸ்துவைப் பற்றி அறிந்துகொள்வதை மகிழ்ச்சி நிறைந்த ஒரு பயணமாக ஆக்குகிறோம்!",
    englishDescription: "At Varthai Church, we provide a safe, welcoming, and joyful environment for children ages 4 to 12. Our Kids Ministry is dedicated to helping children grow in their faith and develop a deep, personal relationship with Jesus. We bring God's Word to life through age-appropriate Bible teaching, creative arts and crafts, vibrant worship, and engaging games—making learning about Christ a fun-filled adventure!",
    features: [
      "வயதுக்கு ஏற்ற வேதாகமப் போதனைகள் மற்றும் கதைகள்",
      "ஆக்கப்பூர்வமான கலை, கைவினைப் பொருள்கள் மற்றும் உற்சாகமான ஆராதனை",
      "ஈர்க்கக்கூடிய விளையாட்டுகள் மற்றும் மகிழ்ச்சி நிறைந்த குழு செயல்பாடுகள்",
      "4 முதல் 12 வயது சிறுவர்களுக்கான பாதுகாப்பான மற்றும் அன்பான சூழல்"
    ],
    englishFeatures: [
      "Age-appropriate Bible teaching & storytelling",
      "Creative arts, crafts, and vibrant worship",
      "Engaging games and fun-filled group activities",
      "Safe, welcoming, and joyful environment (ages 4–12)"
    ]
  },
  {
    id: "youth",
    englishName: "Vaarthai Youth Ministry",
    name: "வார்த்தை இளைஞர் ஊழியம்",
    purpose: "7 முதல் 12-ம் வகுப்பு வரையிலான மாணவர்களுக்காக வடிவமைக்கப்பட்ட எங்கள் இளைஞர் ஊழியம், இளைஞர்கள் ஒன்றிணையவும் விசுவாசத்தில் வளரவும் ஒரு சிறப்புத் தளத்தை வழங்குகிறது.",
    englishPurpose: "Designed for students in Years 7 to 12, our Youth Ministry provides a dedicated space for teens to connect and grow.",
    audience: "7 முதல் 12-ம் வகுப்பு வரையிலான மாணவர்கள்",
    englishAudience: "Students in Years 7 to 12",
    schedule: "ஆலய ஆராதனைக்கு பிறகு",
    englishSchedule: "After the main service",
    location: "திருச்சபை அரங்கு (Church Hall)",
    englishLocation: "Church Hall",
    leaderName: "Dr Arivu Weslyn",
    englishLeaderName: "Dr Arivu Weslyn",
    leaderTitle: "இளைஞர் ஊழிய இயக்குனர்",
    englishLeaderTitle: "Youth Director",
    leaderEmail: "info@vaarthai.org.au",
    image: "/ministry-youth-detail.jpg",
    imagePosition: "center 20%",
    scripture: "\"வாலிபன் தன் வழியை எதினால் சுத்தம்பண்ணுவான்? உமது வசனத்தின்படி தன்னைக் காத்துக்கொள்ளுகிறதினால்தானே.\"",
    scriptureReference: "சங்கீதம் 119:9",
    englishScripture: "\"Wherewithal shall a young man cleanse his way? By taking heed thereto according to Thy word.\"",
    englishScriptureReference: "Psalm 119:9",
    description: "7 முதல் 12-ம் வகுப்பு வரையிலான மாணவர்களுக்காக வடிவமைக்கப்பட்ட எங்கள் இளைஞர் ஊழியம், இளைஞர்கள் ஒன்றிணையவும் ஆவிக்குரிய வாழ்க்கையில் வளரவும் ஒரு அர்ப்பணிக்கப்பட்ட தளத்தை வழங்குகிறது. ஒவ்வொரு தமிழ் ஆராதனைக்குப் பிறகும், மாணவர்கள் தேவனுடைய வார்த்தையைத் தியானிக்கவும் கலந்துரையாடவும் கூடிவருகிறார்கள்; தங்கள் விசுவாசத்தில் ஆழமடைந்து, வேதாகமச் சத்தியங்களைத் தங்கள் அன்றாட வாழ்க்கையில் எவ்வாறு பயன்படுத்துவது என்பதைக் கற்றுக்கொள்கிறார்கள். அடுத்த தலைமுறையினர் கிறிஸ்துவுக்குள் உறுதியாக நிற்கவும், தேவனுடைய மகிமைக்காகத் தங்கள் உலகத்தில் நம்பிக்கையுடன் நல்மாற்றத்தை ஏற்படுத்தவும் அவர்களை ஆயத்தப்படுத்துவதே எங்கள் இதயத்தின் வாஞ்சையாகும்.",
    englishDescription: "Designed for students in Years 7 to 12, our Youth Ministry provides a dedicated space for teens to connect and grow. Following each Tamil service, students gather to reflect on and discuss God's Word, deepening their faith and learning how to apply biblical truths to their everyday lives. Our heart is to equip and empower the next generation to stand firm in Christ and confidently impact their world for His glory.",
    features: [
      "ஒவ்வொரு ஆராதனைக்குப் பிறகும் தேவனுடைய வார்த்தையைத் தியானித்தல் மற்றும் கலந்துரையாடல்",
      "விசுவாசத்தில் ஆழமடைதல் மற்றும் வேதாகமச் சத்தியங்களை அன்றாட வாழ்வில் பயன்படுத்துதல்",
      "7 முதல் 12-ம் வகுப்பு மாணவர்கள் ஒன்றிணையவும் வளரவும் சிறப்புத் தளம்",
      "அடுத்த தலைமுறையினர் கிறிஸ்துவுக்குள் உறுதியாக நிற்க ஆயத்தப்படுத்துதல்"
    ],
    englishFeatures: [
      "Reflecting on and discussing God's Word after Sunday service",
      "Deepening faith and applying biblical truths to everyday life",
      "Dedicated space for teens in Years 7 to 12 to connect and grow",
      "Equipping the next generation to stand firm in Christ"
    ]
  },
  {
    id: "young-adults",
    englishName: "Vaarthai Young Adults",
    name: "வார்த்தை வாலிபர் ஊழியம்",
    purpose: "கல்லூரி மாணவர்கள் மற்றும் இளம் பணியாளர்கள் இயேசுவின் மீதான அன்பில் நிலைத்திருந்து, விசுவாசம், வேலை மற்றும் உறவுகள் குறித்து கலந்துரையாடி ஒன்றாக இணைந்து வாழ உதவுதல்.",
    englishPurpose: "Providing a welcoming, open space for college students and young professionals to dive deep into discussions about faith, work, relationships, and finding your God-given purpose.",
    audience: "கல்லூரி மாணவர்கள் மற்றும் இளம் பணியாளர்கள்",
    englishAudience: "College students & young adults",
    location: "வீடுகள் மற்றும் உள்ளூர் காபி கடைகள்",
    englishLocation: "Home Fellowships & Local Cafes",
    leaderName: "Ps Weslyn",
    englishLeaderName: "Ps Weslyn",
    leaderTitle: "வாலிபர் ஊழிய ஒருங்கிணைப்பாளர்",
    englishLeaderTitle: "Young Adults Coordinator",
    leaderEmail: "info@vaarthai.org.au",
    image: "ministry-young-adults",
    scripture: "\"உன் சுயபுத்தியின்மேல் சாயாமல், உன் முழு இருதயத்தோடும் கர்த்தரில் நம்பிக்கையாயிருந்து, உன் வழிகளிலெல்லாம் அவரை நினைத்துக்கொள்; அப்பொழுது அவர் உன் பாதைகளைச் செவ்வைப்படுத்துவார்.\"",
    scriptureReference: "நீதிமொழிகள் 3:5-6",
    englishScripture: "\"Trust in the Lord with all your heart, and lean not on your own understanding; in all your ways acknowledge Him, and He shall direct your paths.\"",
    englishScriptureReference: "Proverbs 3:5-6",
    description: "பள்ளியிலிருந்து கல்லூரி மற்றும் பணி வாழ்க்கைக்கு மாறும் இந்தக் காலகட்டம் உற்சாகமானதாகவும், அதே நேரத்தில் பல சவால்கள் நிறைந்ததாகவும் இருக்கிறது. எங்கள் வாலிபர் ஊழியம் குறிப்பாக வாழ்க்கையின் இந்தப் பருவத்திற்காகவே வடிவமைக்கப்பட்டுள்ளது. விசுவாசம், வேலை, உறவுகள் மற்றும் தேவன் உங்களுக்கு அளித்த நோக்கத்தைக் கண்டறிவது குறித்த ஆழமான கலந்துரையாடல்களில் ஈடுபட ஒரு திறந்த, அன்பான சூழலை நாங்கள் வழங்குகிறோம். சக வாலிபர்களோடு வாழ்க்கையைப் பகிர்ந்துகொண்டு, வேதாகமத்தில் நம்மை வேரூன்றச் செய்வதன் மூலம், இயேசுவின் மீதான அன்பில் நிலைத்திருந்து வயதுவந்தோர் வாழ்க்கையை நாம் ஒன்றாக இணைந்து எதிர்கொள்ள இலக்கு வைத்துள்ளோம்.",
    englishDescription: "The transition from school to college and the workforce is an exciting yet often challenging season. Our Young Adults Ministry is designed specifically for this phase of life. We provide a welcoming, open space to dive deep into discussions about faith, work, relationships, and finding your God-given purpose. By sharing life with peers and grounding ourselves in Scripture, we aim to navigate adulthood together, anchored by our love for Jesus.",
    features: [
      "விசுவாசம், வேலை, உறவுகள் மற்றும் நோக்கம் குறித்த ஆழமான கலந்துரையாடல்கள்",
      "பள்ளியிலிருந்து கல்லூரி மற்றும் பணி வாழ்க்கைக்கு மாறும் சவால்களை ஒன்றாக எதிர்கொள்ளுதல்",
      "சக வாலிபர்களோடு வாழ்க்கையைப் பகிர்ந்துகொண்டு வேதாகமத்தில் வேரூன்றுதல்",
      "இயேசுவின் மீதான அன்பில் நிலைத்திருந்து வாழ்க்கையை வழிநடத்துதல்"
    ],
    englishFeatures: [
      "Welcoming open space for discussions on faith, work, relationships, and purpose",
      "Navigating the transition from school to college and workforce together",
      "Grounding ourselves in Scripture and sharing life with peers",
      "Anchored by our deep love for Jesus in every phase of adulthood"
    ]
  },
  {
    id: "small-groups",
    englishName: "Vaarthai Life Groups",
    name: "வார்த்தை இல்லக் கூட்டங்கள்",
    purpose: "ஞாயிறு ஆராதனைகள் கூடி ஆராதிப்பதற்கானவை; ஆனால் இல்லக் கூட்டங்கள் நம் வாழ்க்கையை உண்மையிலேயே பகிர்ந்துகொள்வதற்கானவை.",
    englishPurpose: "While our Sunday services are a time for corporate worship, Life Groups are where life is truly shared, serving as the heartbeat of our church's prayer life.",
    audience: "திருச்சபை குடும்பங்கள் மற்றும் விசுவாசிகள்",
    englishAudience: "Church Members & Families",
    location: "ஆன்லைனில் (Zoom வழியாக)",
    englishLocation: "Online via Zoom",
    schedule: "வாராந்திர ஆன்லைன் ஜெபம் மற்றும் தியானம்",
    englishSchedule: "Weekly Zoom Prayer & Meditation",
    leaderName: "Ps Weslyn",
    englishLeaderName: "Ps Weslyn",
    leaderTitle: "இல்லக் கூட்டங்களின் ஒருங்கிணைப்பாளர்",
    englishLeaderTitle: "Life Groups Coordinator",
    leaderEmail: "info@vaarthai.org.au",
    image: "/ministry-life-groups-detail.jpg",
    description: "ஞாயிறு ஆராதனைகள் நாம் அனைவரும் கூடி ஆராதிப்பதற்கானவை; ஆனால் இல்லக் கூட்டங்கள் நம் வாழ்க்கையை உண்மையிலேயே பகிர்ந்துகொள்வதற்கானவை. இந்தக் கூட்டங்கள் நம் திருச்சபையின் ஜெப வாழ்க்கையின் இதயத்துடிப்பாக விளங்குகின்றன. தற்பொழுது, நாம் ஜூம் (Zoom) வழியாக ஆன்லைனில் கூடிவந்து, தேவனுடைய வார்த்தையைத் தியானித்து, சங்கீதப் புஸ்தகத்தின் வழியாக இணைந்து ஜெபிக்கிறோம்—விசுவாசத்திலும் ஐக்கியத்திலும் ஒருவரையொருவர் தாங்கிக்கொள்கிறோம்.",
    englishDescription: "While our Sunday services are a time for corporate worship, Life Groups are where life is truly shared. These groups serve as the heartbeat of our church's prayer life. Currently, we gather online via Zoom to meditate on God's Word and pray through the book of Psalms together—supporting one another in faith and fellowship.",
    features: [
      "நம் திருச்சபையின் ஜெப வாழ்க்கையின் இதயத்துடிப்பாக விளங்கும் ஐக்கியம்",
      "ஜூம் (Zoom) வழியாக ஆன்லைனில் கூடி தேவ வசனத்தைத் தியானித்தல்",
      "சங்கீதப் புஸ்தகத்தின் வழியாக இணைந்து ஆழமாக ஜெபித்தல்",
      "விசுவாசத்திலும் ஐக்கியத்திலும் ஒருவரையொருவர் தாங்கிக்கொள்ளுதல்"
    ],
    englishFeatures: [
      "Heartbeat of our church's prayer life and fellowship",
      "Gathering online via Zoom to meditate on God's Word together",
      "Praying and studying through the book of Psalms as a community",
      "Supporting one another in faith, shared life, and intimate prayer"
    ]
  },
  {
    id: "men",
    englishName: "Vaarthai Men",
    name: "வார்த்தை ஆண்கள் ஊழியம்",
    purpose: "குடும்பத்திலும் பணியிடத்திலும் தெய்வீக நற்பண்புகள், மனத்தாழ்மை மற்றும் பலத்துடன் வழிநடத்த ஆண்களை ஊக்குவித்தல்.",
    englishPurpose: "Encouraging men to lead with godly character, humility, and strength both at home and in the workplace through authentic brotherhood.",
    audience: "அனைத்து வயது ஆண்கள்",
    englishAudience: "Men of all ages",
    schedule: "மாதாந்திர காலை உணவுக் கூட்டங்கள்",
    englishSchedule: "Monthly breakfast fellowships",
    location: "உள்ளூர் காபி கடைகள்",
    englishLocation: "Local Coffee Shops",
    leaderName: "Ps Weslyn",
    englishLeaderName: "Ps Weslyn",
    leaderTitle: "ஆண்கள் ஊழிய இயக்குனர்",
    englishLeaderTitle: "Men's Ministry Leader",
    leaderEmail: "info@vaarthai.org.au",
    image: "/ministry-men-detail.jpg",
    scripture: "\"இரும்பை இரும்பு கூர்மையாக்கிடும்; அப்படியே மனிதனும் தன்னுடைய நண்பனைக் கூர்மையாக்குகிறான்.\"",
    scriptureReference: "நீதிமொழிகள் 27:17",
    englishScripture: "\"As iron sharpens iron, so one man sharpens another.\"",
    englishScriptureReference: "Proverbs 27:17",
    description: "குடும்பத்திலும் பணியிடத்திலும் தெய்வீக நற்பண்புகள், மனத்தாழ்மை மற்றும் பலத்துடன் வழிநடத்த ஆண்களை ஊக்குவிப்பதில் நாங்கள் மிகுந்த ஆர்வம் கொண்டுள்ளோம். எங்கள் ஆண்கள் ஊழியம், உண்மையான சகோதரத்துவத்தை உருவாக்கவும், இணைந்து உணவு அருந்துதல், ஜெபம் மற்றும் சீஷத்துவத்தின் மூலம் ஆவிக்குரிய வளர்ச்சியை ஆதரிக்கவும் வடிவமைக்கப்பட்டுள்ளது.",
    englishDescription: "We are passionate about encouraging men to lead with godly character, humility, and strength—both at home and in the workplace. Our Men's Ministry is designed to build authentic brotherhood and support spiritual growth through shared meals, prayer, and intentional discipleship.",
    features: [
      "சனிக்கிழமை காலை உணவுக் கூட்டங்கள்: மாதம் ஒருமுறை உள்ளூர் காபி கடைகளில் உணவு, ஐக்கியம் மற்றும் ஜெபத்திற்காகக் கூடுதல்",
      "வருடாந்திர சீஷத்துவ முகாம்: ஆவிக்குரிய வாழ்வில் புத்துணர்ச்சி பெறவும், விசுவாசத்தில் ஆழமடையவும் சிறப்பு வார இறுதி முகாம்",
      "இணைந்து உணவு அருந்துதல், ஜெபம் மற்றும் சீஷத்துவம் மூலம் உண்மையான சகோதரத்துவத்தை உருவாக்குதல்",
      "குடும்பத்திலும் பணியிடத்திலும் தெய்வீக நற்பண்புகளுடன் வழிநடத்த ஆண்களை ஊக்குவித்தல்"
    ],
    englishFeatures: [
      "Saturday Morning Breakfasts: Monthly gatherings at local coffee shops for great food, fellowship, and prayer",
      "Annual Discipleship Retreat: Dedicated weekend getaway to refresh your spirit and deepen faith",
      "Building authentic brotherhood and supporting spiritual growth through intentional discipleship",
      "Encouraging men to lead with godly character, humility, and strength at home and work"
    ]
  },
  {
    id: "women",
    englishName: "Vaarthai Women",
    name: "வார்த்தை பெண்கள் ஊழியம்",
    purpose: "அனைத்து வயது பெண்களும் தேவனுடைய வார்த்தையில் ஆழமாக வேரூன்றவும், ஒருவருக்கொருவர் ஊக்கத்துடன் ஜெபிக்கவும் உதவும் ஒரு அன்பான சமூகம்.",
    englishPurpose: "A vibrant, loving community designed for women of all ages to dive deeply into God's Word, pray fervently, and build lifelong friendships.",
    audience: "அனைத்து வயது பெண்கள்",
    englishAudience: "Women of all ages",
    schedule: "இரண்டு வாரங்களுக்கு ஒருமுறை வெள்ளிக்கிழமை இரவு ஜூம் வேதக் கலந்துரையாடல் | மாதாந்திர சனிக்கிழமை காலை உணவுக் கூடுகை",
    englishSchedule: "Fortnightly Friday night Zoom The Word Discussion | Monthly Saturday Breakfast catchups",
    location: "ஜூம் தளம் & உள்ளூர் காபி கடைகள்",
    englishLocation: "Zoom Room & Local Coffee Shops",
    leaderName: "Mrs Buvna Jeyendran",
    englishLeaderName: "Mrs Buvna Jeyendran",
    leaderTitle: "பெண்கள் ஊழிய ஒருங்கிணைப்பாளர்",
    englishLeaderTitle: "Women's Ministry Coordinator",
    leaderEmail: "info@vaarthai.org.au",
    image: "/ministry-women-detail.jpg",
    scripture: "\"தேவன் அவளின் நடுவில் இருக்கிறார், அவள் அசையமாட்டாள்; அதிகாலையிலே தேவன் அவளுக்குச் சகாயம்பண்ணுவார்.\"",
    scriptureReference: "சங்கீதம் 46:5",
    englishScripture: "\"God is within her, she will not fall; God will help her at break of day.\"",
    englishScriptureReference: "Psalm 46:5",
    description: "எங்கள் பெண்கள் ஊழியம் அனைத்து வயது மற்றும் வாழ்க்கையின் பல்வேறு காலகட்டங்களில் உள்ள பெண்களுக்காக வடிவமைக்கப்பட்ட ஒரு துடிப்பான, அன்பான சமூகமாகும். தேவனுடைய வார்த்தையில் ஆழமாக மூழ்கவும், ஒருவருக்கொருவர் ஊக்கத்துடன் ஜெபிக்கவும், உண்மையான மற்றும் வாழ்நாள் முழுவதுமான நட்புறவுகளை உருவாக்கவும் நாங்கள் மிகுந்த ஆர்வம் கொண்டுள்ளோம். எங்கள் வழக்கமான கூடுகைகளுக்கு அப்பால், உள்ளூர் நற்செய்தி மற்றும் உதவித் திட்டங்கள் மூலம் எங்கள் விசுவாசத்தைச் செயலில் காட்டுகிறோம்; சிறப்பு ஆராதனை நிகழ்வுகள் மூலம் எங்கள் திருச்சபையை தாங்குகிறோம்.",
    englishDescription: "Our Women’s Ministry is a vibrant, loving community designed for women of all ages and stages of life. We are passionate about diving deeply into God’s Word, praying fervently for one another, and building authentic, lifelong friendships. Beyond our regular gatherings, we put our faith into action through local outreach initiatives and uplift our church through special worship events.",
    features: [
      "வேதக் கலந்துரையாடல் (இரண்டு வாரங்களுக்கு ஒருமுறை): வெள்ளிக்கிழமை இரவுகளில் ஜூம் (Zoom) வழியாக இணைந்து வேதாகமம் படித்தல்",
      "சனிக்கிழமை காலை உணவுக் கூடுகை (மாதாந்திரம்): ஐக்கிய அரங்கு மற்றும் வகுப்பறைகளில் காலை உணவுடன் அனுபவங்களைப் பகிர்தல்",
      "ஆவிக்குரிய புத்துணர்ச்சி மாநாடு (வருடாந்திரம்): வாழ்க்கையின் பரபரப்பிலிருந்து விலகி தேவ சமூகத்தில் புத்துணர்ச்சி பெறும் சிறப்பு வார இறுதி",
      "உணவுப் பகிர்வு ஊழியம் (Meal Train): புதிய தாய்மார்கள் மற்றும் சவாலான சூழ்நிலைகளில் உள்ள குடும்பங்களுக்கு புதிய உணவு வழங்கி ஆசீர்வதிக்கும் திட்டம்"
    ],
    englishFeatures: [
      "Word & Discussion (Fortnightly): Friday night Zoom sessions studying Scripture together",
      "Saturday Breakfast Catch-ups (Monthly): Warm breakfast, shared stories, and deep connection in the Fellowship Hall & Classrooms",
      "Spiritual Renewal Conference (Annual): A powerful weekend dedicated to being refreshed in God's presence",
      "Meal Train Ministry: Hands-on care delivering fresh meals to bless new mothers and families navigating challenging seasons"
    ]
  },
  {
    id: "worship",
    englishName: "Vaarthai Worship & Music Ministry",
    name: "வார்த்தை ஆராதனை மற்றும் இசை ஊழியம்",
    purpose: "ஒவ்வொரு ஞாயிறும் ஆராதனை, இசை மற்றும் ஊடகத் தொழில்நுட்பம் மூலம் சபை மக்களை தேவ சமூகத்திற்குள் வழிநடத்துதல்.",
    englishPurpose: "Leading the congregation into God's presence every Sunday through collaborative worship, live production, and media arts.",
    audience: "பாடகர்கள், இசைக் கலைஞர்கள், மற்றும் ஊடகத் தொழில்நுட்ப வல்லுநர்கள்",
    englishAudience: "Vocalists, Instrumentalists & Media Tech Specialists",
    location: "முக்கிய ஆராதனை அரங்கு",
    englishLocation: "Main Sanctuary Auditorium",
    schedule: "ஞாயிறு ஆராதனை மற்றும் வாராந்திரப் பயிற்சிகள்",
    englishSchedule: "Sunday Service & Weekly Rehearsals",
    leaderName: "Ps Weslyn",
    englishLeaderName: "Ps Weslyn",
    leaderTitle: "ஆராதனை இயக்குனர்",
    englishLeaderTitle: "Worship Director",
    leaderEmail: "info@vaarthai.org.au",
    image: "/ministry-worship-detail.jpg",
    scripture: "\"அவருக்குப் புதுப்பாட்டைப் பாடுங்கள்; கெம்பீர சத்தத்தோடே நேர்த்தியாய் வாசியுங்கள்.\"",
    scriptureReference: "சங்கீதம் 33:3",
    englishScripture: "\"Sing to Him a new song; play skillfully with a shout of joy.\"",
    englishScriptureReference: "Psalm 33:3",
    description: "வார்த்தை ஆராதனை மற்றும் தயாரிப்பு ஊழியம்: ஒவ்வொரு ஞாயிற்றுக்கிழமையும், எங்கள் ஆராதனைக் குழு மனமார்ந்த துதியின் மூலம் சபை மக்களை தேவ சமூகத்திற்குள் வழிநடத்தும் பாக்கியத்தைப் பெற்றுள்ளது. இந்த ஊழியம் பாடகர்கள், இசைக்கலைஞர்கள், ஒலிப் பொறியாளர்கள், ஒளி வடிவமைப்பாளர்கள், நேரலை இயக்குனர்கள் மற்றும் காட்சி விளக்க உருவாக்குனர்கள் அடங்கிய ஒரு கூட்டு முயற்சியான குடும்பமாகும்—ஒவ்வொருவரும் தங்கள் தனித்துவமான வரங்களைப் பயன்படுத்தி திருச்சபைக்குச் சேவை செய்து தேவனை மகிமைப்படுத்துகிறார்கள்.",
    englishDescription: "Vaarthai Worship & Production Every Sunday, our worship team has the privilege of leading the congregation into God's presence through heartfelt praise. This ministry is a collaborative family of singers, musicians, audio engineers, lighting designers, live stream operators, and visual presentation creators—each using their unique gifts to serve the church and glorify God.",
    features: [
      "ஆராதனை மற்றும் ஆக்கப்பூர்வமான கலைகள்: எங்கள் ஆராதனை இசைக்குழு அல்லது பாடகர் குழுவுடன் மேடையில் உங்கள் இசை வரங்களைப் பயன்படுத்தி சேவை செய்தல்.",
      "தயாரிப்பு மற்றும் ஊடகத் தொழில்நுட்பம்: நேரலை ஒலி அமைப்பு, மேடை ஒளி அமைப்பு மற்றும் கேமரா இயக்கத்தில் விரிவான, நேரடிப் பயிற்சி பெற்று திரைக்குப் பின்னால் சேவை செய்தல். ஆராதனைப் பாடல்கள் மற்றும் பிரசங்கங்களுக்கான பவர்பாயிண்ட் ஸ்லைடுகளை உருவாக்குதல் மற்றும் இயக்குதலும் இந்தக் குழுவில் அடங்கும்.",
      "அடுத்த தலைமுறை வழிகாட்டல்: இளைஞர் ஆராதனை இசைக்குழு வழிகாட்டல் மற்றும் வாத்தியப் பயிற்சிகள் மூலம் அடுத்த தலைமுறையை உருவாக்குதல்."
    ],
    englishFeatures: [
      "Worship & Creative Arts: Use your musical gifts by serving on stage with our worship band or choir.",
      "Production & Visual Media: Step behind the scenes with comprehensive, hands-on training in live audio, lighting, and camera operation. This team also includes serving as a PowerPoint slides creator and operator for worship songs and sermons.",
      "Next-Gen Mentoring: Help raise up the next generation through youth worship band mentoring and instrumental coaching."
    ]
  },
  {
    id: "missions",
    englishName: "Vaarthai Global Evangelical Work",
    name: "வார்த்தை உலகளாவிய சுவிசேஷ ஊழியம்",
    purpose: "உலகமெங்கும் நற்செய்தியைக் கொண்டு செல்லும் மிஷனரிகளை ஆதரித்தல் மற்றும் அனுப்புதல்.",
    englishPurpose: "Supporting, equipping, and sending missionaries to proclaim the Gospel across the nations.",
    audience: "சுவிசேஷப் பணியில் ஆர்வம் கொண்ட அனைவரும்",
    englishAudience: "Everyone passionate about global missions and evangelism",
    schedule: "காலாண்டு கூட்டங்கள் மற்றும் வருடாந்திர மிஷனரி பயணங்கள்",
    englishSchedule: "Quarterly meetings & annual short-term mission trips",
    location: "சபைக் கூட்ட அரங்கு / மிஷனரி தளங்கள்",
    englishLocation: "Church Auditorium & Global Mission Fields",
    leaderName: "டாக்டர் மார்கஸ் ஹேஸ்",
    englishLeaderName: "Dr. Marcus Hayes",
    leaderTitle: "மிஷனரி குழுத் தலைவர்",
    englishLeaderTitle: "Missions Team Director",
    leaderEmail: "missions@vaarthaichurch.org",
    image: "ministry-missions",
    description: "நாம் வாழும் இடத்தைத் தாண்டி நற்செய்தியைக் கொண்டு செல்வதை நம்புகிறோம். ஆறு நாடுகளில் உள்ள மிஷனரி பங்காளர்களை ஆதரிக்கிறோம், கல்வி மற்றும் மருத்துவ உதவிகளைச் செய்கிறோம்.",
    englishDescription: "We believe in taking the Good News far beyond our local borders. We actively partner with and support indigenous missionaries across six nations, providing essential education, medical aid, and church planting support.",
    features: [
      "மிஷனரிகளுக்கான மாதாந்திர நிதி ஆதரவு",
      "வருடாந்திர மருத்துவ மற்றும் சிறுவர் மிஷனரி பயணங்கள்",
      "மிஷனரி ஜெபக் கூட்டங்கள் மற்றும் அறிமுகங்கள்",
      "சுவிசேஷப் பணிகளுக்கான பயிற்சி வகுப்புகள்"
    ],
    englishFeatures: [
      "Monthly financial and prayer sponsorship for global missionaries",
      "Annual medical, educational, and children's mission trips",
      "Quarterly missionary updates and global prayer rallies",
      "Practical evangelism and cross-cultural training workshops"
    ]
  },
  {
    id: "community-outreach",
    englishName: "Vaarthai Social Service Ministry",
    name: "வார்த்தை சமூக நற்பணி ஊழியம்",
    purpose: "ஏழைகளுக்கும் தேவையிலுள்ளோருக்கும் உதவிக்கரம் நீட்டி கிறிஸ்துவின் அன்பை வெளிப்படுத்துதல்.",
    englishPurpose: "Demonstrating the love of Christ by practically extending a helping hand to the poor and needy.",
    audience: "சேவை செய்ய விரும்பும் அனைத்து சபை மக்கள்",
    englishAudience: "All church members eager to serve the local community",
    location: "பல்வேறு தொண்டு நிறுவனங்கள் மற்றும் வீதிகள்",
    englishLocation: "Community Centers, Local Schools & Streets",
    leaderName: "சாரா ஜென்கின்ஸ்",
    englishLeaderName: "Sarah Jenkins",
    leaderTitle: "உதவி போதகர்",
    englishLeaderTitle: "Associate Pastor",
    leaderEmail: "sarah@vaarthaichurch.org",
    image: "ministry-outreach",
    description: "உள்ளூர் பள்ளிகள், முதியோர் இல்லங்கள் மற்றும் உணவுப் பாங்க்குகளுடன் இணைந்து பல்வேறு உதவிகளைச் செய்கிறோம். குளிர்கால உடைகள், கல்வி உபகரணங்கள் மற்றும் உணவு விநியோகம் செய்கிறோம்.",
    englishDescription: "We partner closely with local schools, nursing homes, and food banks to make a tangible difference in our city. We organize winter coat drives, back-to-school supply distributions, and regular grocery drives.",
    features: [
      "வாரம் தோறும் சேகரிக்கப்படும் உலர் உணவுக் கொடைகள்",
      "பள்ளி மாணவர்களுக்கான கல்விப் பொருட்கள் வழங்கல்",
      "முதியோர் மற்றும் ஆதரவற்றோர் இல்ல உதவிகள்",
      "அவசர கால மற்றும் பேரிடர் நிவாரண உதவிகள்"
    ],
    englishFeatures: [
      "Weekly collection and distribution of non-perishable groceries",
      "Back-to-school backpack and stationary drives for local children",
      "Regular visitation and companionship at senior nursing homes",
      "Emergency relief aid and community crisis support initiatives"
    ]
  },
  {
    id: "pastoral-care",
    englishName: "Vaarthai Pastoral Care & Counselling",
    name: "வார்த்தை போதக பராமரிப்பு மற்றும் ஆலோசனை",
    purpose: "துக்கங்கள், சவால்கள் மற்றும் ஆன்மீகக் கேள்விகளுக்கு மத்தியில் தனிநபர்களையும் குடும்பங்களையும் பராமரித்தல்.",
    englishPurpose: "Providing compassionate spiritual care and biblical guidance through life's griefs and challenges.",
    audience: "ஜெபம் மற்றும் ஆலோசனைகள் தேவைப்படும் அனைவரும்",
    englishAudience: "Anyone needing prayer, encouragement, or biblical counsel",
    schedule: "நேரம் முன்பதிவு செய்தல் அவசியம்",
    englishSchedule: "By appointment throughout the week",
    location: "சபை அலுவலகங்கள்",
    englishLocation: "Pastoral Counselling Suites & Online",
    leaderName: "போதகர் டேவிட் வான்ஸ்",
    englishLeaderName: "Pastor David Vance",
    leaderTitle: "தலைமை போதகர்",
    englishLeaderTitle: "Senior Pastor",
    leaderEmail: "care@vaarthaichurch.org",
    image: "ministry-care",
    description: "வாழ்வின் சவாலான காலங்களில் போதகர்கள் உங்களுக்கு வழிகாட்டவும், ஜெபிக்கவும், வேதாகம ஆலோசனைகளை வழங்கவும் தயாராக உள்ளனர். மருத்துவமனை சந்திப்புகளும் செய்யப்படுகின்றன.",
    englishDescription: "During difficult seasons of life, our pastoral team is dedicated to walking beside you. We provide confidential biblical counselling, heartfelt prayer, hospital visitations, and bereavement support.",
    features: [
      "தனிநபர் மற்றும் குடும்ப வேத ஆலோசனைகள்",
      "மருத்துவமனை மற்றும் இல்ல பராமரிப்பு சந்திப்புகள்",
      "திருமணத்திற்கு முந்தைய விவிலிய ஆலோசனைகள்",
      "துக்க மற்றும் சோகக் கால ஆதரவுக் குழுக்கள்"
    ],
    englishFeatures: [
      "Confidential individual, marital, and family biblical counselling",
      "Hospital bedside visitations and home communion services",
      "Comprehensive pre-marital guidance and couples enrichment",
      "Grief recovery and emotional healing support circles"
    ]
  }
];
