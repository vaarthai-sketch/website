with open('src/data/sermons.ts', 'r') as f:
    text = f.read()

text = text.replace('சொல்லுவதில்லை.\n\n"நீதிமான்', 'சொல்லுவதில்லை.\\n\\n\\"நீதிமான்')
text = text.replace('aloud.\n\nWhen we', 'aloud.\\n\\nWhen we')

with open('src/data/sermons.ts', 'w') as f:
    f.write(text)
