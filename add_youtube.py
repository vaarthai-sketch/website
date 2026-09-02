# -*- coding: utf-8 -*-
import os

youtube_embed = """                  <h3 className="text-xl md:text-2xl font-bold text-stone-900 mt-12 mb-6 border-b border-stone-200 pb-2">Worship Song</h3>
                  <div className="my-8 aspect-video w-full rounded-xl overflow-hidden shadow-md border-2 border-stone-200 bg-stone-100">
                    <iframe 
                      src="https://www.youtube.com/embed/_3uhYL4zgRE" 
                      title="YouTube video player" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                      className="w-full h-full border-0"
                    ></iframe>
                  </div>\n\n"""

def update_file(filepath, is_en):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    marker = '<h3 className="text-xl md:text-2xl font-bold text-stone-900 mt-12 mb-6 border-b border-stone-200 pb-2">ANNOUNCEMENTS</h3>' if is_en else '<h3 className="text-xl md:text-2xl font-bold text-stone-900 mt-12 mb-6 border-b border-stone-200 pb-2">அறிவிப்புகள் / ANNOUNCEMENTS</h3>'
    
    # We want to replace the exact marker with youtube_embed + marker
    content = content.replace(marker, youtube_embed + marker)

    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

update_file('src/app/pastors-desk/page.tsx', is_en=False)
update_file('src/app/en/pastors-desk/page.tsx', is_en=True)
print("YouTube video embedded!")
