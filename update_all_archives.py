import os
import glob
import re

files = glob.glob("src/app/**/pastors-desk/archive/**/page.tsx", recursive=True)

for file_path in files:
    prefix = "/en" if "/en/" in file_path else ""
    
    with open(file_path, "r", encoding="utf-8") as f:
        text = f.read()
    
    if "Edition 12</p>" in text:
        continue
        
    # We want to replace the first occurrence of "September 2026" block that starts with Edition 11.
    # But wait, in the archives, Edition 11 might be the active link (if it's the Edition 11 archive) or an inactive link (if it's older archives).
    
    def replacer(match):
        old_sep_header = match.group(0)
        # old_sep_header contains <h4 ... September 2026</h4> and then the Link for Edition 11.
        
        # Determine if Edition 11 link is active in this file.
        # It's active if its href ends with just "/pastors-desk" (in older archives) or if it's the current file (but wait, older archives might point Edition 11 to /pastors-desk).
        # We need to rewrite Edition 11's link to point to /pastors-desk/archive/september/edition-11
        # And we need to add Edition 12 above it.
        
        # So we just do a generic replace on the whole Edition 11 block:
        # First we extract the Edition 11 link block.
        # It looks like:
        # <Link href="..." className="...">
        #   ...
        #   <p ...>Edition 11</p>
        #   ...
        # </Link>
        
        link_pattern = r'(<Link href="([^"]+)".*?Edition 11.*?</Link>)'
        link_match = re.search(link_pattern, old_sep_header, re.DOTALL)
        
        if link_match:
            entire_link = link_match.group(1)
            href = link_match.group(2)
            
            # If href was pointing to active, change it to archive. If it already points to archive, leave it.
            # But wait, we also need to make sure it's not styled as active if this isn't the edition 11 archive.
            # Actually, the simplest thing is:
            # We create the October block for Edition 12.
            # We fix Edition 11 href.
            
            new_entire_link = re.sub(rf'href="{prefix}/pastors-desk"', rf'href="{prefix}/pastors-desk/archive/september/edition-11"', entire_link)
            
            october_block = f"""<h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mb-2 pl-2">October 2026</h4>
                  <Link href="{prefix}/pastors-desk" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 12</p>
                      <p className="text-xs text-stone-500">Oct 2026</p>
                    </div>
                  </Link>

                  <h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mt-6 mb-2 pl-2 border-t border-stone-100 pt-4">September 2026</h4>
                  """
                  
            new_text = re.sub(link_pattern, new_entire_link, old_sep_header, count=1, flags=re.DOTALL)
            new_text = new_text.replace('<h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mb-2 pl-2">September 2026</h4>', october_block)
            
            return new_text
            
        return old_sep_header
    
    # We find the start of the September block.
    # In older files, it might be just <h4...>September 2026</h4> \n <Link ... Edition 11 ... </Link>
    pattern = r'<h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mb-2 pl-2">September 2026</h4>\s*<Link href="[^"]+".*?Edition 11.*?</Link>'
    
    text = re.sub(pattern, replacer, text, flags=re.DOTALL)
    
    # Wait, what if this is the Edition 11 archive itself?
    # In the Edition 11 archive, the Edition 11 link should be styled as ACTIVE (bg-stone-50, border-stone-200).
    # Since we literally just copied `page.tsx` for Edition 11, the Edition 11 link ALREADY has the active styling inside `src/app/pastors-desk/archive/september/edition-11/page.tsx`!
    # And our replacer preserves the styling, it only changes the href!
    # However, Edition 11's href should point to itself (archive). Our replacer did that.
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(text)

