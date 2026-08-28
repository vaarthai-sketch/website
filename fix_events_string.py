import re

filepath = 'src/data/events.ts'
with open(filepath, 'r') as f:
    content = f.read()

# Replace date: getNextWednesday(), back with a string
content = re.sub(
    r'id:\s*"mid-week-online-prayer",\s*title:\s*"வாராந்திர ஆன்லைன் ஜெபம் \(Mid-Week Online Prayer\)",\s*englishTitle:\s*"Mid-Week Online Prayer",\s*date:\s*getNextWednesday\(\),',
    'id: "mid-week-online-prayer",\n    title: "வாராந்திர ஆன்லைன் ஜெபம் (Mid-Week Online Prayer)",\n    englishTitle: "Mid-Week Online Prayer",\n    date: "2026-09-02",',
    content
)

with open(filepath, 'w') as f:
    f.write(content)
print("Updated events.ts back to string")
