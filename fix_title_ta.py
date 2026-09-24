# -*- coding: utf-8 -*-
import re

with open("src/app/pastors-desk/page.tsx", "r", encoding="utf-8") as f:
    text = f.read()

# Fix Description
text = re.sub(r'description: "We Have Reached the Heavens—But Have We Found Peace\?",', 'description: "அசையும் உலகில் அசையாத சமாதானம்",', text)

# Fix Hero Title
text = re.sub(r'வானங்களை எட்டினோம்; சமாதானத்தை அடைந்தோமா\?', 'அசையும் உலகில் அசையாத சமாதானம்', text)

# Fix English Hero Subtitle
text = re.sub(r'We Have Reached the Heavens—But Have We Found Peace\?', 'Finding Peace in a Shifting World', text)

with open("src/app/pastors-desk/page.tsx", "w", encoding="utf-8") as f:
    f.write(text)
