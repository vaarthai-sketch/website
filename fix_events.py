import re

filepath = 'src/data/events.ts'
with open(filepath, 'r') as f:
    content = f.read()

next_sunday_func = """function getNextSunday(): string {
  const today = new Date();
  const d = new Date(today);
  d.setDate(today.getDate() + ((7 + 0 - today.getDay()) % 7));
  return d.toISOString().split('T')[0];
}

"""

if 'function getNextSunday' not in content:
    content = content.replace('function getNextWednesday', next_sunday_func + 'function getNextWednesday')

sunday_service = """  {
    id: "sunday-worship-service",
    title: "ஞாயிறு ஆராதனை (Sunday Worship Service)",
    englishTitle: "Sunday Worship Service",
    date: getNextSunday(),
    time: "காலை 10:00 மணி",
    englishTime: "10:00 AM",
    location: "389 Old Logan Rd, Springfield, QLD 4300",
    englishLocation: "389 Old Logan Rd, Springfield, QLD 4300",
    category: "Worship",
    englishCategory: "Sunday Service",
    description: "எங்கள் ஞாயிறு ஆராதனைக்கு உங்களை அன்புடன் வரவேற்கிறோம். தேவனை ஆராதிக்கவும், வார்த்தையைத் தியானிக்கவும், ஐக்கியமாக கூடிவரவும் உங்களை அழைக்கிறோம்.\\n\\nநிகழ்வு விவரங்கள்:\\n* எப்பொழுது: ஒவ்வொரு ஞாயிற்றுக்கிழமையும்\\n* நேரம்: காலை 10:00 மணி\\n* இடம்: வார்த்தை சுவிசேஷ திருச்சபை, 389 Old Logan Rd, Springfield, QLD 4300",
    englishDescription: "You are warmly invited to our Sunday Worship Service. Come and join us as we worship God, meditate on His Word, and fellowship together.\\n\\nEvent Details:\\n* When: Every Sunday\\n* Time: 10:00 AM\\n* Location: Vaarthai Evangelical Church, 389 Old Logan Rd, Springfield, QLD 4300",
    organizer: "Vaarthai Evangelical Church",
    englishOrganizer: "Vaarthai Evangelical Church",
    organizerEmail: "info@vaarthai.org.au",
    image: "/hero-bg.jpg",
    isFeatured: true
  },"""

# Remove fathers day
content = re.sub(r'\{\s*id:\s*"fathers-day-special-service".*?isFeatured:\s*true,?\n\s*imageHasText:\s*true\n\s*\},', sunday_service, content, flags=re.DOTALL)

with open(filepath, 'w') as f:
    f.write(content)
print("done")
