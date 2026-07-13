export interface StaffMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  email: string;
  image: string;
}

export const staffData: StaffMember[] = [
  {
    id: "pastor-weslyn",
    name: "Ps Jeyakaran D Weslyn",
    role: "Pastor & President",
    bio: "எல்லாராலும் வெஸ்லின் என்று அறியப்பட்டவர்! Brisbane இயேசுவுக்கு என்ற தரிசனத்தைத் தாங்கி, அதை சபைக்கும் கொடுத்து வருகிறார்.",
    email: "weslyn@vaarthai.org.au",
    image: "/staff-pastor.png"
  },
  {
    id: "deva-irakkam-paul",
    name: "Mr Deva Irakkam Paul",
    role: "Secretary",
    bio: "திருச்சபையின் நிர்வாக மற்றும் அலுவலகப் பணிகளைப் பொறுப்புடன் கவனித்து, சபையின் செயல்பாடுகளுக்கு உதவுகிறார்.",
    email: "deva@vaarthai.org.au",
    image: "/staff-secretary.png"
  },
  {
    id: "joe-jeyandran",
    name: "Mr Joe Jeyandran",
    role: "Treasurer",
    bio: "திருச்சபையின் நிதி நிர்வாகப் பணிகளை நேர்மையுடனும் பொறுப்புடனும் கவனித்து, ஆலயத்தின் நற்பணிகளுக்குத் துணைபுரிகிறார்.",
    email: "joe@vaarthai.org.au",
    image: "/staff-treasurer.png"
  }
];
