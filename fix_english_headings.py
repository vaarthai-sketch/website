# -*- coding: utf-8 -*-
import os

filepath = 'src/app/en/pastors-desk/page.tsx'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    'அமைதலாயிரு!': 'Peace, Be Still!',
    'படகிலே இருந்த இயேசு • JESUS IN THE BOAT': 'JESUS IN THE BOAT',
    'அவர்களுடன் நிற்போம் • LET US STAND WITH THEM': 'LET US STAND WITH THEM',
    'ஜெபக் குறிப்புகள் • PRAYER POINTS': 'PRAYER POINTS',
    'இறுதி ஜெபம்': 'FINAL PRAYER',
    'அறிவிப்புகள் / ANNOUNCEMENTS': 'ANNOUNCEMENTS',
}

for ta, en in replacements.items():
    content = content.replace(ta, en)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("English headings fixed!")
