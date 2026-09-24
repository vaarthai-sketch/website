import os
import glob
import re

files = glob.glob("src/app/**/pastors-desk/archive/**/page.tsx", recursive=True)

for file_path in files:
    prefix = "/en" if "/en/" in file_path else ""
    
    with open(file_path, "r", encoding="utf-8") as f:
        text = f.read()
    
    # Check if Edition 11 is already in the sidebar
    if "Edition 11</p>" in text:
        continue
        
    # We want to replace the first Link to Edition 10 with Edition 11 + Edition 10
    # The first Link under "September 2026"
    
    # We find the Link to Edition 10 (which might be active or inactive depending on the file)
    edition_10_pattern = rf'(<Link href="{prefix}/pastors-desk.*?>\s*<ChevronRight.*?>\s*<div>\s*<p.*?>Edition 10</p>\s*<p.*?>Sep 2026</p>\s*</div>\s*</Link>)'
    
    match = re.search(edition_10_pattern, text, re.DOTALL)
    if match:
        edition_10_html = match.group(1)
        
        # If this is Edition 9 file, Edition 10 would be linking to /pastors-desk (since it was active when Edition 9 was archived).
        # We need to rewrite Edition 10 to link to archive, and add Edition 11 to link to root.
        
        # In old files, Edition 10 link was: <Link href="/pastors-desk" ...
        # Let's just do a generic replacement for the "September 2026" block.
        pass

    # A simpler way: Find "September 2026" and the first link after it.
    sep_pattern = r'(<h4 class.*?September 2026</h4>)'
    
    # Wait, it's easier to just find the `Edition 10` link and insert `Edition 11` right above it.
    # The link to Edition 10 might have href="/pastors-desk" (in Edition 9, 8, etc.)
    # We need to change that href to "/pastors-desk/archive/september/edition-10" and insert Edition 11 above it.
    
    def replacer(m):
        old_link = m.group(0)
        # Fix the href of Edition 10
        old_link = re.sub(rf'href="{prefix}/pastors-desk"', rf'href="{prefix}/pastors-desk/archive/september/edition-10"', old_link)
        
        # Create Edition 11 link
        edition_11 = f"""<Link href="{prefix}/pastors-desk" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 11</p>
                      <p className="text-xs text-stone-500">Sep 2026</p>
                    </div>
                  </Link>"""
        return edition_11 + "\n                  " + old_link
        
    text = re.sub(rf'<Link href="{prefix}/pastors-desk".*?>\s*<ChevronRight.*?>\s*<div>\s*<p.*?>Edition 10</p>.*?</Link>', replacer, text, flags=re.DOTALL)
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(text)

