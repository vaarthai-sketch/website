# -*- coding: utf-8 -*-
import os

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replace old video ID with new video ID
    content = content.replace('_3uhYL4zgRE', 'gnVi9pPubeU')

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

update_file('src/app/pastors-desk/page.tsx')
update_file('src/app/en/pastors-desk/page.tsx')
print("YouTube video ID updated!")
