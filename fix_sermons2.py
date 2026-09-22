import re
with open('src/data/sermons.ts', 'r') as f:
    text = f.read()

text = re.sub(r'சொல்லுவதில்லை\.\n\n"நீதிமான்', 'சொல்லுவதில்லை.\\n\\n\\"நீதிமான்', text)

with open('src/data/sermons.ts', 'w') as f:
    f.write(text)
