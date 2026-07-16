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
    purpose: "At Varthai Church, we provide a safe, welcoming, and joyful environment for children ages 4 to 12.",
    englishPurpose: "At Varthai Church, we provide a safe, welcoming, and joyful environment for children ages 4 to 12.",
    audience: "Children ages 4 to 12 (4 முதல் 12 வயது சிறுவர்கள்)",
    englishAudience: "Children ages 4 to 12",
    schedule: "Every Sunday at 10:00 AM",
    englishSchedule: "Every Sunday at 10:00 AM",
    location: "Kids Ministry Area (ஆலய சிறுவர் பிரிவு)",
    englishLocation: "Kids Ministry Area",
    leaderName: "Megan Miller",
    englishLeaderName: "Megan Miller",
    leaderTitle: "Kids Ministry Coordinator",
    englishLeaderTitle: "Kids Ministry Coordinator",
    leaderEmail: "info@vaarthai.org.au",
    image: "/ministry-children-detail.jpg",
    imagePosition: "center 15%",
    scripture: "\"But Jesus said, 'Let the little children come to Me, and do not forbid them; for of such is the kingdom of heaven.'\"",
    scriptureReference: "Matthew 19:14",
    description: "At Varthai Church, we provide a safe, welcoming, and joyful environment for children ages 4 to 12. Our Kids Ministry is dedicated to helping children grow in their faith and develop a deep, personal relationship with Jesus. We bring God's Word to life through age-appropriate Bible teaching, creative arts and crafts, vibrant worship, and engaging games—making learning about Christ a fun-filled adventure!",
    englishDescription: "At Varthai Church, we provide a safe, welcoming, and joyful environment for children ages 4 to 12. Our Kids Ministry is dedicated to helping children grow in their faith and develop a deep, personal relationship with Jesus. We bring God's Word to life through age-appropriate Bible teaching, creative arts and crafts, vibrant worship, and engaging games—making learning about Christ a fun-filled adventure!",
    features: [
      "Age-appropriate Bible teaching & storytelling",
      "Creative arts, crafts, and vibrant worship",
      "Engaging games and fun-filled group activities",
      "Safe, welcoming, and joyful environment (ages 4–12)"
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
    purpose: "Designed for students in Years 7 to 12, our Youth Ministry provides a dedicated space for teens to connect and grow.",
    englishPurpose: "Designed for students in Years 7 to 12, our Youth Ministry provides a dedicated space for teens to connect and grow.",
    audience: "7 முதல் 12-ம் வகுப்பு வரையிலான மாணவர்கள்",
    englishAudience: "Students in Years 7 to 12",
    location: "இளைஞர் அரங்கு",
    englishLocation: "Youth Hall",
    leaderName: "கேலப் வான்ஸ்",
    englishLeaderName: "Caleb Vance",
    leaderTitle: "இளைஞர் இயக்குனர்",
    englishLeaderTitle: "Youth Director",
    leaderEmail: "info@vaarthai.org.au",
    image: "/ministry-youth-detail.jpg",
    imagePosition: "center 20%",
    scripture: "\"Wherewithal shall a young man cleanse his way? By taking heed thereto according to Thy word.\"",
    scriptureReference: "Psalm 119:9",
    description: "Designed for students in Years 7 to 12, our Youth Ministry provides a dedicated space for teens to connect and grow. Following each Tamil service, students gather to reflect on and discuss God's Word, deepening their faith and learning how to apply biblical truths to their everyday lives. Our heart is to equip and empower the next generation to stand firm in Christ and confidently impact their world for His glory.",
    englishDescription: "Designed for students in Years 7 to 12, our Youth Ministry provides a dedicated space for teens to connect and grow. Following each Tamil service, students gather to reflect on and discuss God's Word, deepening their faith and learning how to apply biblical truths to their everyday lives. Our heart is to equip and empower the next generation to stand firm in Christ and confidently impact their world for His glory.",
    features: [
      "Reflecting on and discussing God's Word after Sunday service",
      "Deepening faith and applying biblical truths to everyday life",
      "Dedicated space for teens in Years 7 to 12 to connect and grow",
      "Equipping the next generation to stand firm in Christ"
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
    purpose: "கல்லூரி மாணவர்கள் மற்றும் இளம் பணியாளர்கள் தேவனுடைய அன்பில் வளரவும், திருச்சபையில் சேவை செய்யவும் உதவுதல்.",
    englishPurpose: "Empowering college students and young professionals to grow in God's love and actively serve in the church.",
    audience: "18 முதல் 30 வயது வரையிலான இளைஞர்கள்",
    englishAudience: "Young Adults aged 18 to 30",
    location: "வீடுகள் மற்றும் உள்ளூர் காபி கடைகள்",
    englishLocation: "Home Fellowships & Local Cafes",
    leaderName: "கேலப் & ஹன்னா வான்ஸ்",
    englishLeaderName: "Caleb & Hannah Vance",
    leaderTitle: "இளவாலி ஒருங்கிணைப்பாளர்கள்",
    englishLeaderTitle: "Young Adults Coordinators",
    leaderEmail: "caleb@vaarthaichurch.org",
    image: "ministry-young-adults",
    description: "கல்லூரி மற்றும் பணி வாழ்க்கைக்கு மாறும் காலம் சவாலானது. இளவாலிகள் விசுவாசம், வேலை மற்றும் தனிப்பட்ட உறவுகள் குறித்து விவாதிக்கவும், இணைந்து செயல்படவும் ஒரு தளம்.",
    englishDescription: "Navigating the transition into college and careers can be challenging. Our young adult ministry provides a welcoming space to discuss faith, work, relationships, and purpose with peers.",
    features: [
      "வேலையிட சவால்கள் மற்றும் கிறிஸ்தவ ஒழுக்கங்கள் பற்றிய விவாதம்",
      "மாதாந்திர கூடுகை உணவுகள் மற்றும் ஐக்கியங்கள்",
      "சமூக சேவை மற்றும் நற்செய்தி அறிவிப்புகள்",
      "மூத்த சபை உறுப்பினர்களின் வழிகாட்டுதல்"
    ],
    englishFeatures: [
      "Discussions on workplace challenges and Christian ethics",
      "Monthly fellowship dinners and community hangouts",
      "Social service initiatives and evangelism outreaches",
      "Mentorship opportunities with senior church leaders"
    ]
  },
  {
    id: "small-groups",
    englishName: "Vaarthai Life Groups",
    name: "வார்த்தை இல்லக் கூட்டங்கள்",
    purpose: "வாராந்திர சிறு குழுக்கள் மூலம் விசுவாசத்தில் வளரவும், ஒருவருக்கொருவர் ஜெபிக்கவும் தாங்கவும் உதவுதல்.",
    englishPurpose: "Fostering deep faith growth and mutual prayer support through weekly intimate home gatherings.",
    audience: "அனைத்து பெரியவர்கள் மற்றும் தம்பதியினர்",
    englishAudience: "All Adults, Singles, and Couples",
    location: "உறுப்பினர்களின் இல்லங்கள் மற்றும் ஆன்லைன்",
    englishLocation: "Member Homes & Online Fellowships",
    leaderName: "சாரா ஜென்கின்ஸ்",
    englishLeaderName: "Sarah Jenkins",
    leaderTitle: "சமூக ஐக்கிய உதவி போதகர்",
    englishLeaderTitle: "Associate Pastor of Community Life",
    leaderEmail: "sarah@vaarthaichurch.org",
    image: "ministry-groups",
    description: "ஞாயிறு ஆராதனைகள் கூடுவதற்கானவை, ஆனால் இல்லக் கூட்டங்கள் வாழ்வைப் பகிர்வதற்கானவை. 8 முதல் 15 பேர் கொண்ட சிறிய குழுக்களாக வீடுகளில் கூடி, பரிசுத்த வேதாகமம் படித்து, ஜெபம் செய்கிறோம்.",
    englishDescription: "While Sunday gatherings are for corporate worship, Life Groups are where life is shared. Meeting weekly in groups of 8 to 15 across various homes, we study the Word together, pray, and support one another.",
    features: [
      "பல்வேறு பகுதிகளில் நடைபெறும் 25-க்கும் மேற்பட்ட குழுக்கள்",
      "ஞாயிறு பிரசங்கத்தின் அடிப்படையில் விவிலியக் கேள்விகள்",
      "உதவி மற்றும் ஜெப ஆதரவு வளையங்கள்",
      "குடும்பங்கள் மற்றும் தனிநபர்களுக்கான தனித்தனி குழுக்கள்"
    ],
    englishFeatures: [
      "Over 25 active life groups meeting across diverse neighborhoods",
      "Interactive sermon-based Bible study questions and discussions",
      "Care circles providing practical help and continual prayer support",
      "Dedicated groups for families, couples, singles, and seniors"
    ]
  },
  {
    id: "men",
    englishName: "Vaarthai Men",
    name: "வார்த்தை ஆண்கள் ஊழியம்",
    purpose: "ஆண்களை ஆன்மீகத் தலைவர்களாக வளர்க்கவும், குடும்பத்திலும் சமூகத்திலும் பொறுப்புடன் செயல்படவும்Equip செய்தல்.",
    englishPurpose: "Equipping men to lead spiritually and live with godly integrity in their families and community.",
    audience: "அனைத்து வயது ஆண்கள்",
    englishAudience: "Men of all ages",
    schedule: "மாதாந்திர காலை உணவுக் கூட்டங்கள் மற்றும் வாராந்திர வேதப் படிப்பு",
    englishSchedule: "Monthly breakfast fellowships & weekly Bible study",
    location: "ஐக்கிய அரங்கு",
    englishLocation: "Fellowship Hall",
    leaderName: "போதகர் டேவிட் வான்ஸ்",
    englishLeaderName: "Pastor David Vance",
    leaderTitle: "தலைமை போதகர்",
    englishLeaderTitle: "Senior Pastor",
    leaderEmail: "david@vaarthaichurch.org",
    image: "ministry-men",
    description: "குடும்பத்திலும் பணியிடத்திலும் விவிலிய அடிப்படையிலான நற்பண்புகளுடன் ஆண்கள் செயல்பட உதவுகிறோம். மாதாந்திரக் காலை உணவுக் கூட்டங்கள் மற்றும் ஆண்டு ஆண்கள் முகாம்கள் மூலம் ஐக்கியத்தை வளர்க்கிறோம்.",
    englishDescription: "We encourage men to lead with godly character, humility, and strength both at home and in the workplace. We foster brotherhood through monthly breakfast meetups, prayer breakfasts, and annual men's retreats.",
    features: [
      "வெள்ளிக்கிழமை காலை 6:00 மணி வேத ஆராய்ச்சி",
      "மாதாந்திர சனிக்கிழமை காலை உணவுக் கூட்டம்",
      "ஆண்டு ஆண்கள் விசேஷ முகாம்",
      "ஒருவருக்கொருவர் வழிகாட்டும் நட்புறவுகள்"
    ],
    englishFeatures: [
      "Friday morning 6:00 AM men's Bible exploration",
      "Monthly Saturday morning breakfast fellowship",
      "Annual weekend men's discipleship retreat",
      "One-on-one accountability and mentorship partnerships"
    ]
  },
  {
    id: "women",
    englishName: "Vaarthai Women",
    name: "வார்த்தை பெண்கள் ஊழியம்",
    purpose: "பெண்களை விசுவாசத்தில் பலப்படுத்தவும், கிறிஸ்தவ நட்புறவை வளர்க்கவும், சமூகத்தில் சேவை செய்யவும் ஊக்கப்படுத்துதல்.",
    englishPurpose: "Strengthening women in faith, nurturing godly sisterhood, and inspiring impactful community service.",
    audience: "அனைத்து வயது பெண்கள்",
    englishAudience: "Women of all ages",
    schedule: "செவ்வாய்க்கிழமை காலை மற்றும் மாலை வேதப் படிப்புகள்",
    englishSchedule: "Tuesday morning & evening Bible studies",
    location: "ஐக்கிய அரங்கு / வகுப்பறைகள்",
    englishLocation: "Fellowship Hall & Classrooms",
    leaderName: "சாரா ஜென்கின்ஸ்",
    englishLeaderName: "Sarah Jenkins",
    leaderTitle: "உதவி போதகர்",
    englishLeaderTitle: "Associate Pastor",
    leaderEmail: "sarah@vaarthaichurch.org",
    image: "ministry-women",
    description: "பெண்கள் தேவனுடைய வார்த்தையை ஆழமாகப் படிக்கவும், ஒருவருக்கொருவர் ஜெபித்துக் கொள்ளவும் இது ஒரு அன்பான ஐக்கியம். பல்வேறு சமூகப் பணிகளையும் ஆராதனைகளையும் ஒருங்கிணைக்கிறோம்.",
    englishDescription: "A loving, uplifting community where women study God's Word deeply, pray fervently for one another, and build lifelong friendships. We coordinate various outreach ministries and special worship events.",
    features: [
      "ஆண்டிற்கு இருமுறை நடைபெறும் விவிலியப் பாடத் தொடர்கள்",
      "செவ்வாய் காலைக் கூட்டங்களில் சிறுவர் கவனிப்பு வசதி",
      "வருடாந்திர பெண்கள் மாநாடுகள்",
      "பிரசவக் கால மற்றும் நோய்வாய்ப்பட்டோருக்கான உதவித் திட்டங்கள்"
    ],
    englishFeatures: [
      "Bi-annual comprehensive inductive Bible study series",
      "Childcare provided during Tuesday morning study sessions",
      "Annual women's spiritual renewal conferences",
      "Meal train care programs for new mothers and families in need"
    ]
  },
  {
    id: "worship",
    englishName: "Vaarthai Worship & Music Ministry",
    name: "வார்த்தை ஆராதனை மற்றும் இசை ஊழியம்",
    purpose: "இசை மற்றும் கலைகள் மூலம் சபை மக்கள் தேவனை ஆராதிக்க வழிகாட்டுதல்.",
    englishPurpose: "Leading the congregation into anointed, heartfelt worship through music, song, and creative arts.",
    audience: "பாடகர்கள், வாசிப்பாளர்கள் மற்றும் தொழில்நுட்ப வல்லுநர்கள்",
    englishAudience: "Vocalists, Instrumentalists & Media Tech Specialists",
    location: "ஆராதனை அரங்கு",
    englishLocation: "Main Sanctuary Auditorium",
    leaderName: "ஹன்னா வான்ஸ்",
    englishLeaderName: "Hannah Vance",
    leaderTitle: "ஆராதனை இயக்குனர்",
    englishLeaderTitle: "Worship Director",
    leaderEmail: "hannah@vaarthaichurch.org",
    image: "ministry-worship",
    description: "ஞாயிறு ஆராதனைகளில் மக்கள் பக்திவிருத்தியுடன் பாடித் துதிக்க இசைக்குழு வழிநடத்துகிறது. ஒலி மற்றும் ஒளி அமைப்பாளர்கள், கேமரா இயக்குனர்கள் எனப் பலரின் பங்களிப்பு இதில் அடங்கும்.",
    englishDescription: "Our worship team leads the church in heartfelt praise every Sunday. This comprehensive ministry includes singers, musicians, audio engineers, lighting designers, and live stream camera operators working together for God's glory.",
    features: [
      "இசைக்குழு, பாடல் குழு மற்றும் கலைப் பங்களிப்புகள்",
      "ஒலி, ஒளி மற்றும் கேமரா இயக்கப் பயிற்சிகள்",
      "புதிய பாடல் உருவாக்கப் பட்டறைகள்",
      "இளைஞர் ஆராதனை இசைக்குழு வழிகாட்டல்"
    ],
    englishFeatures: [
      "Worship band, choir, and creative arts teams",
      "Comprehensive training in live audio, lighting, and camera operation",
      "Original songwriting workshops and worship arrangement sessions",
      "Youth worship band mentoring and instrumental coaching"
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
