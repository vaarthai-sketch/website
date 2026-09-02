# -*- coding: utf-8 -*-
import os
import glob

def update_page(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Replacements
    content = content.replace("Edition 9 -", "Edition 8 -")
    content = content.replace("Edition #009", "Edition #008")
    content = content.replace("Edition 9", "Edition 8")
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

update_page('src/app/pastors-desk/page.tsx')
update_page('src/app/en/pastors-desk/page.tsx')

print("Updated page contents to Edition 8")
