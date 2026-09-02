# -*- coding: utf-8 -*-
import os
import glob

files = glob.glob('src/app/pastors-desk/**/*.tsx', recursive=True) + glob.glob('src/app/en/pastors-desk/**/*.tsx', recursive=True)

for file in files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Add the missing </div>
    content = content.replace("</div>\n          </aside>", "</div>\n            </div>\n          </aside>")

    with open(file, 'w', encoding='utf-8') as f:
        f.write(content)

print("Fixed closing tag!")
