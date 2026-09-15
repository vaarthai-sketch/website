import re

filepath = 'src/data/sermons.ts'
with open(filepath, 'r') as f:
    content = f.read()

new_sermon = """  {
    id: "prayer-of-jabez-part-1",
    title: "யாபேசின் ஜெபம் | பகுதி 1 — பெயர் வேதனை, வாழ்வு கனம்",
    englishTitle: "Prayer of Jabez | Part 1",
    speaker: "Ps Weslyn",
    date: "2026-09-13",
    scriptureReference: "1 நாளாகமம் 4:9",
    englishScriptureReference: "1 Chronicles 4:9",
    scriptureText: "யாபேஸ் தன் சகோதரரைப்பார்க்கிலும் கனம்பெற்றவனாயிருந்தான்.",
    englishScriptureText: "Jabez was more honorable than his brothers.",
    series: "யாபேசின் ஜெபம் (Prayer of Jabez)",
    englishSeries: "Prayer of Jabez",
    topic: "ஜெபம் (Prayer)",
    description: "1 நாளாகமம் புத்தகத்தின் முதல் ஒன்பது அதிகாரங்கள் வெறும் பெயர்கள் மாத்திரம். ஆனால் அந்தப் பட்டியலின் மத்தியிலே திடீரென்று இரண்டு வசனங்கள் தனித்து நிற்கின்றன — ஒரு மனிதன், ஒரு ஜெபம். இந்தத் தொடரின் முதல் பகுதியிலே, ஜெபத்திற்குள் நுழைவதற்கு முன்பாக ஜெபித்த மனுஷனை நாம் அறிந்து கொள்கிறோம்.",
    englishDescription: "The first nine chapters of 1 Chronicles are just lists of names. But suddenly, two verses stand out—one man, one prayer. In this first part of the series, before looking at the prayer itself, we examine the man who prayed it.",
    videoPlaceholder: "யாபேசின் ஜெபம் பிரசங்க வீடியோ",
    youtubeId: "fjtNBaEXEL0",
    audioUrl: "#",
    notesUrl: "#",
    duration: "1:00:47",
    thumbnail: "",
  },
"""

pattern = r'(export const sermonsData: Sermon\[\] = \[\n)'
content = re.sub(pattern, r'\1' + new_sermon, content, count=1)

with open(filepath, 'w') as f:
    f.write(content)

print("Sermon added")
