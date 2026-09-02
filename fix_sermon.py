# -*- coding: utf-8 -*-
import re

filepath = 'src/data/sermons.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace the sermon I just added with the fully populated one
old_sermon = """  {
    id: "the-good-hand-of-my-god-part-5",
    title: "என் தேவனுடைய நல்ல கரம் (பாகம் 5) | The Good Hand of My God (Part 5)",
    speaker: "Ps Weslyn",
    date: "2026-08-30",
    scriptureReference: "",
    englishScriptureReference: "",
    scriptureText: "",
    englishScriptureText: "",
    series: "கர்த்தருடைய கை",
    topic: "தேவனுடைய கரம்",
    description: "கர்த்தருடைய கை தொடர் செய்தியின் ஐந்தாம் பாகம்.",
    englishDescription: "Part 5 of The Hand of the Lord series.",
    videoPlaceholder: "என் தேவனுடைய நல்ல கரம் பிரசங்க வீடியோ (பாகம் 5)",
    youtubeId: "KhVK30adzy0",
    audioUrl: "#",
    notesUrl: "#",
    duration: "45:00",
    thumbnail: "",
  },"""

new_sermon = """  {
    id: "gods-hand-is-upon-us-part-5",
    title: "கர்த்தருடைய கை அவர்களோடே (பாகம் 5) | God’s Hand Is Upon Us (Part 5)",
    speaker: "Ps Weslyn",
    date: "2026-08-30",
    scriptureReference: "அப்போஸ்தலர் 11:19-30; 13:1-3",
    englishScriptureReference: "Acts 11:19-30; 13:1-3",
    scriptureText: "கர்த்தருடைய கரம் அவர்களோடே இருந்தது; அநேகர் விசுவாசிகளாகி, கர்த்தரிடத்தில் திரும்பினார்கள்.",
    englishScriptureText: "And the hand of the Lord was with them, and a great number who believed turned to the Lord.",
    series: "கர்த்தருடைய கை",
    topic: "தேவனுடைய கரம்",
    description: "தேவனுடைய கரம் நம்மோடு இருக்கிறது என்பதை எப்படித் தெரிந்துகொள்வது? பிரச்சினைகள் இல்லாமல் இருப்பதுதான் அதன் அடையாளமா? அந்தியோகியா சபையின் பிறப்பிலிருந்து நான்கு முக்கியமான உண்மைகளை இந்தச் செய்தி விளக்குகிறது: தேவ கரம் நம்முடைய வலியை வீணாக்குவதில்லை; நம்முடைய மொழி மற்றும் கலாச்சார எல்லைகளைத் தாண்டச் செய்கிறது; மனிதர்களைக் கர்த்தரிடத்தில் திருப்பி, வார்த்தையில் நிலைநிறுத்துகிறது; பெற்றுக்கொள்ளும் கைகளை, கொடுக்கிற மற்றும் அனுப்புகிற கைகளாக மாற்றுகிறது.",
    englishDescription: "How do we know if God's hand is upon us? Is it the absence of problems? From the birth of the Antioch church, this sermon explains four key truths: God's hand does not waste our pain; it pushes us past linguistic and cultural barriers; it turns people to the Lord and establishes them in the Word; and it transforms receiving hands into giving and sending hands.",
    videoPlaceholder: "கர்த்தருடைய கை அவர்களோடே பிரசங்க வீடியோ (பாகம் 5)",
    youtubeId: "KhVK30adzy0",
    audioUrl: "#",
    notesUrl: "#",
    duration: "59:48",
    thumbnail: "",
  },"""

content = content.replace(old_sermon, new_sermon)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Sermon fully updated!")
