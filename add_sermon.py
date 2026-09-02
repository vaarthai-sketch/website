import re

filepath = 'src/data/sermons.ts'
with open(filepath, 'r') as f:
    content = f.read()

new_sermon = """  {
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
  },
"""

# Insert right after `export const sermonsData: Sermon[] = [`
pattern = r'(export const sermonsData: Sermon\[\] = \[\n)'
content = re.sub(pattern, r'\1' + new_sermon, content, count=1)

with open(filepath, 'w') as f:
    f.write(content)

print("Sermon added")
