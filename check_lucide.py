import os
import glob
import re

for file in glob.glob("src/**/*.tsx", recursive=True):
    with open(file, 'r') as f:
        content = f.read()
    
    # Find lucide-react import
    match = re.search(r'import\s+\{([^}]+)\}\s+from\s+["\']lucide-react["\']', content)
    if not match:
        continue
        
    icons_str = match.group(1)
    icons = [i.strip() for i in icons_str.split(',')]
    
    for icon in icons:
        if not icon:
            continue
        # Handle "Calendar as CalendarIcon"
        if " as " in icon:
            icon_name = icon.split(" as ")[1].strip()
        else:
            icon_name = icon
            
        # Count occurrences of this icon name in the file
        count = len(re.findall(r'\b' + icon_name + r'\b', content))
        if count <= 1: # Only the import itself (or 0 if something weird)
            print(f"Unused icon: {icon_name} in {file}")
