# -*- coding: utf-8 -*-
import os

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace the metadata image
    content = content.replace("image: '/pastor-desk-hero.jpg'", "image: '/nepal-flood.jpg'")

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

update_file('src/app/pastors-desk/page.tsx')
update_file('src/app/en/pastors-desk/page.tsx')
print("Thumbnail updated!")
