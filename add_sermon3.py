import re

filepath = 'src/data/sermons.ts'
with open(filepath, 'r') as f:
    content = f.read()

new_sermon = """  {
    id: "prayer-of-jabez-part-2",
    title: "நான் ஜெபிக்கத் தகுதியுள்ளவனா? | Am I Qualified to Pray? — யாபேசின் ஜெபம் பகுதி 2",
    englishTitle: "Am I Qualified to Pray? | Prayer of Jabez Part 2",
    speaker: "Ps Weslyn",
    date: "2026-09-20",
    scriptureReference: "யாக்கோபு 5:16",
    englishScriptureReference: "James 5:16",
    scriptureText: "நீதிமான் செய்யும் ஊக்கமான வேண்டுதல் மிகவும் பெலனுள்ளதாயிருக்கிறது.",
    englishScriptureText: "The earnest prayer of a righteous person has great power and produces wonderful results.",
    series: "யாபேசின் ஜெபம் (Prayer of Jabez)",
    englishSeries: "Prayer of Jabez",
    topic: "ஜெபம் (Prayer)",
    description: "\\\"யாபேஸ் கனம் பெற்றவனாய் இருந்தான். நான் அப்படி இல்லையே.\\\" இந்தக் கேள்வி அநேகருடைய இருதயத்தில் இருக்கிறது — ஆனால் யாரும் வெளியே சொல்லுவதில்லை.\\n\\n\\\"நீதிமான் செய்யும் ஊக்கமான வேண்டுதல் மிகவும் பெலனுள்ளதாயிருக்கிறது\\\" (யாக்கோபு 5:16) என்று வாசிக்கும்போது, \\\"இது என்னைப் பற்றியது அல்ல\\\" என்று நம் இருதயம் சொல்லுகிறது. இந்தச் செய்தியிலே, நீதி எங்கிருந்து வருகிறது, தேவன் மன்னித்த பாவத்தை நாம் ஏன் இன்னும் சுமக்கிறோம், எதை நம்பி நாம் கிருபாசனத்தண்டையிலே சேரலாம் என்பதைத் தியானிக்கிறோம்.",
    englishDescription: "\\\"Jabez was more honorable than his brothers. But I am not.\\\" This question lingers in many hearts—yet few speak it aloud.\\n\\nWhen we read that \\\"The earnest prayer of a righteous person has great power and produces wonderful results\\\" (James 5:16), our hearts often whisper, \\\"That's not about me.\\\" In this message, we meditate on where our righteousness comes from, why we still carry the weight of forgiven sins, and the true foundation of our confidence to approach the throne of grace.",
    videoPlaceholder: "யாபேசின் ஜெபம் பிரசங்க வீடியோ (பகுதி 2)",
    youtubeId: "Oh05dJkmOvw",
    audioUrl: "#",
    notesUrl: "#",
    duration: "43:56",
    thumbnail: "",
  },
"""

pattern = r'(export const sermonsData: Sermon\[\] = \[\n)'
content = re.sub(pattern, r'\1' + new_sermon, content, count=1)

with open(filepath, 'w') as f:
    f.write(content)

print("Sermon added")
