# -*- coding: utf-8 -*-
import os

filepath = 'src/app/pastors-desk/page.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    'படகிலே இருந்த இயேசு • JESUS IN THE BOAT': 'படகிலே இருந்த இயேசு',
    'அவர்களுடன் நிற்போம் • LET US STAND WITH THEM': 'அவர்களுடன் நிற்போம்',
    'ஜெபக் குறிப்புகள் • PRAYER POINTS': 'ஜெபக் குறிப்புகள்',
    'அறிவிப்புகள் / ANNOUNCEMENTS': 'அறிவிப்புகள்',
}

for ta_en, ta in replacements.items():
    content = content.replace(ta_en, ta)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("English parts removed from Tamil section titles!")
