import re

filepath = 'src/data/events.ts'
with open(filepath, 'r') as f:
    content = f.read()

# Replace getNextWednesday logic
old_func = """function getNextWednesday(): string {
  const today = new Date();
  const d = new Date(today);
  d.setDate(today.getDate() + ((7 + 3 - today.getDay()) % 7));
  if (today.getDay() === 3) d.setDate(d.getDate() + 7);
  return d.toISOString().split('T')[0];
}"""

new_func = """function getNextWednesday(): string {
  const today = new Date();
  const d = new Date(today);
  d.setDate(today.getDate() + ((7 + 3 - today.getDay()) % 7));
  // Keep it as today if today is Wednesday. It will roll over to the next Wednesday on Thursday morning.
  return d.toISOString().split('T')[0];
}"""

content = content.replace(old_func, new_func)

# Replace the hardcoded date for mid-week-online-prayer
# Find: id: "mid-week-online-prayer", ... date: "2026-08-12",
content = re.sub(
    r'id:\s*"mid-week-online-prayer",\s*title:\s*"வாராந்திர ஆன்லைன் ஜெபம் \(Mid-Week Online Prayer\)",\s*englishTitle:\s*"Mid-Week Online Prayer",\s*date:\s*"[^"]*",',
    'id: "mid-week-online-prayer",\n    title: "வாராந்திர ஆன்லைன் ஜெபம் (Mid-Week Online Prayer)",\n    englishTitle: "Mid-Week Online Prayer",\n    date: getNextWednesday(),',
    content
)

with open(filepath, 'w') as f:
    f.write(content)
print("Updated events.ts")
