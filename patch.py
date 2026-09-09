import re

with open('src/data/config.ts', 'r') as f:
    content = f.read()
    
content = content.replace('    podcast: "https://podcasts.apple.com/au/podcast/vaarthai-church/id123456789"\n', '')

with open('src/data/config.ts', 'w') as f:
    f.write(content)
