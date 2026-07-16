export interface StaffMember {
  id: string;
  name: string;
  role: string;
  englishRole?: string;
  bio: string;
  englishBio?: string;
  email: string;
  image: string;
  imageStyle?: React.CSSProperties;
}

export const staffData: StaffMember[] = [
  {
    id: "pastor-weslyn",
    name: "Ps Jeyakaran D Weslyn",
    role: "Pastor & President",
    englishRole: "Pastor & President",
    bio: "எல்லாராலும் வெஸ்லின் என்று அறியப்பட்டவர்! Brisbane இயேசுவுக்கு என்ற தரிசனத்தைத் தாங்கி, அதை சபைக்கும் கொடுத்து வருகிறார்.",
    englishBio: "Affectionately known by everyone as Weslyn! He carries the God-given vision of 'Brisbane for Jesus' and faithfully shares and imparts that calling to our entire church family.",
    email: "pastor@vaarthai.org.au",
    image: "/staff-pastor.png"
  },
  {
    id: "devairakkam-paul",
    name: "Mr Devairakkam Paul",
    role: "Secretary",
    englishRole: "Secretary",
    bio: "திருச்சபையின் நிர்வாக மற்றும் அலுவலகப் பணிகளைப் பொறுப்புடன் கவனித்து, சபையின் செயல்பாடுகளுக்கு உதவுகிறார்.",
    englishBio: "Faithfully overseeing church administration and day-to-day office operations, providing dedicated guidance and reliable support across all church ministries and activities.",
    email: "ariehdeva@gmail.com",
    image: "/staff-secretary.png"
  },
  {
    id: "joe-jeyandran",
    name: "Mr Joe Jeyandran",
    role: "Treasurer",
    englishRole: "Treasurer",
    bio: "திருச்சபையின் நிதி நிர்வாகப் பணிகளை நேர்மையுடனும் பொறுப்புடனும் கவனித்து, ஆலயத்தின் நற்பணிகளுக்குத் துணைபுரிகிறார்.",
    englishBio: "Managing our church financial stewardship and operations with utmost integrity, care, and biblical transparency to support all ministries, missions, and community outreach efforts.",
    email: "jeykath@yahoo.com",
    image: "/staff-treasurer.png",
    imageStyle: { objectPosition: "center top", transform: "scale(1.08) translateY(10px)" }
  }
];
