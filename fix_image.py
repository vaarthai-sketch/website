# -*- coding: utf-8 -*-
import os

def update_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # The original wrapper:
    # <div className="my-6 rounded-xl overflow-hidden shadow-md border-2 border-stone-200">
    #   <img src="/nepal-flood.jpg" alt="Nepal Flood" className="w-full h-auto object-cover max-h-[500px]" />
    # </div>
    
    old_code = """<div className="my-6 rounded-xl overflow-hidden shadow-md border-2 border-stone-200">
                    <img src="/nepal-flood.jpg" alt="Nepal Flood" className="w-full h-auto object-cover max-h-[500px]" />
                  </div>"""
                  
    new_code = """<div className="my-6 rounded-xl overflow-hidden shadow-md border-2 border-stone-200 bg-stone-100 flex justify-center">
                    <img src="/nepal-flood.jpg" alt="Nepal Flood" className="w-full sm:max-w-md h-auto" />
                  </div>"""

    content = content.replace(old_code, new_code)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

update_file('src/app/pastors-desk/page.tsx')
update_file('src/app/en/pastors-desk/page.tsx')
print("Image classes updated!")
