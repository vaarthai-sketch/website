import re
with open('src/data/events.ts', 'r') as f:
    text = f.read()

text = text.replace('உங்களை அழைக்கிறோம்.\n\nநிகழ்வு விவரங்கள்:\n* எப்பொழுது: ஒவ்வொரு ஞாயிற்றுக்கிழமையும்\n* நேரம்: காலை 10:00 மணி\n* இடம்:', 'உங்களை அழைக்கிறோம்.\\n\\nநிகழ்வு விவரங்கள்:\\n* எப்பொழுது: ஒவ்வொரு ஞாயிற்றுக்கிழமையும்\\n* நேரம்: காலை 10:00 மணி\\n* இடம்:')

text = text.replace('fellowship together.\n\nEvent Details:\n* When: Every Sunday\n* Time: 10:00 AM\n* Location:', 'fellowship together.\\n\\nEvent Details:\\n* When: Every Sunday\\n* Time: 10:00 AM\\n* Location:')

with open('src/data/events.ts', 'w') as f:
    f.write(text)

