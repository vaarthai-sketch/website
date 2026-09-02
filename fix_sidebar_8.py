# -*- coding: utf-8 -*-
import os
import glob
import re

tamil_sidebar = """<div className="space-y-3">
                  <h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mb-2 pl-2">September 2026</h4>
                  <Link href="/pastors-desk" className="group flex items-start gap-2 p-3 rounded-md CURRENT_8 transition-colors">
                    <ChevronRight className="w-4 h-4 ICON_8 mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium TEXT_8 transition-colors">Edition 8</p>
                      <p className="text-xs text-stone-500">Sep 2026</p>
                    </div>
                  </Link>

                  <h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mt-6 mb-2 pl-2 border-t border-stone-100 pt-4">August 2026</h4>
                  <Link href="/pastors-desk/archive/august/edition-7" className="group flex items-start gap-2 p-3 rounded-md CURRENT_7 transition-colors">
                    <ChevronRight className="w-4 h-4 ICON_7 mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium TEXT_7 transition-colors">Edition 7</p>
                      <p className="text-xs text-stone-500">Aug 2026</p>
                    </div>
                  </Link>
                  <Link href="/pastors-desk/archive/august/edition-6" className="group flex items-start gap-2 p-3 rounded-md CURRENT_6 transition-colors">
                    <ChevronRight className="w-4 h-4 ICON_6 mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium TEXT_6 transition-colors">Edition 6</p>
                      <p className="text-xs text-stone-500">Aug 2026</p>
                    </div>
                  </Link>
                  <Link href="/pastors-desk/archive/august/edition-5" className="group flex items-start gap-2 p-3 rounded-md CURRENT_5 transition-colors">
                    <ChevronRight className="w-4 h-4 ICON_5 mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium TEXT_5 transition-colors">Edition 5</p>
                      <p className="text-xs text-stone-500">Aug 2026</p>
                    </div>
                  </Link>
                  <Link href="/pastors-desk/archive/august/edition-4" className="group flex items-start gap-2 p-3 rounded-md CURRENT_4 transition-colors">
                    <ChevronRight className="w-4 h-4 ICON_4 mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium TEXT_4 transition-colors">Edition 4</p>
                      <p className="text-xs text-stone-500">Aug 2026</p>
                    </div>
                  </Link>

                  <h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mt-6 mb-2 pl-2 border-t border-stone-100 pt-4">July 2026</h4>
                  <Link href="/pastors-desk/archive/july/edition-3" className="group flex items-start gap-2 p-3 rounded-md CURRENT_3 transition-colors">
                    <ChevronRight className="w-4 h-4 ICON_3 mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium TEXT_3 transition-colors">Edition 3</p>
                      <p className="text-xs text-stone-500">Jul 2026</p>
                    </div>
                  </Link>
                  <Link href="/pastors-desk/archive/july/edition-2" className="group flex items-start gap-2 p-3 rounded-md CURRENT_2 transition-colors">
                    <ChevronRight className="w-4 h-4 ICON_2 mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium TEXT_2 transition-colors">Edition 2</p>
                      <p className="text-xs text-stone-500">Jul 2026</p>
                    </div>
                  </Link>
                  <Link href="/pastors-desk/archive/july/edition-1" className="group flex items-start gap-2 p-3 rounded-md CURRENT_1 transition-colors">
                    <ChevronRight className="w-4 h-4 ICON_1 mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium TEXT_1 transition-colors">Edition 1</p>
                      <p className="text-xs text-stone-500">Jul 2026</p>
                    </div>
                  </Link>
                </div>"""

english_sidebar = tamil_sidebar.replace('href="/pastors-desk', 'href="/en/pastors-desk')

def update_sidebar(filepath, is_en, current_edition):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    sidebar = english_sidebar if is_en else tamil_sidebar
    
    for i in range(1, 9):
        if i == current_edition:
            sidebar = sidebar.replace(f'CURRENT_{i}', 'bg-stone-50 border border-stone-200 hover:border-accent hover:bg-accent/5')
            sidebar = sidebar.replace(f'ICON_{i}', 'text-accent')
            sidebar = sidebar.replace(f'TEXT_{i}', 'text-stone-900 font-bold group-hover:text-primary')
        else:
            sidebar = sidebar.replace(f'CURRENT_{i}', 'hover:bg-stone-50')
            sidebar = sidebar.replace(f'ICON_{i}', 'text-stone-400 group-hover:text-accent')
            sidebar = sidebar.replace(f'TEXT_{i}', 'text-stone-700 group-hover:text-primary')
    
    if '{/* SIDEBAR_CONTENT_PLACEHOLDER */}' in content:
        content = content.replace('{/* SIDEBAR_CONTENT_PLACEHOLDER */}', sidebar)
    else:
        content = re.sub(r'<div className="space-y-3">.*?</div>\s*</aside>', sidebar + '\n          </aside>', content, flags=re.DOTALL)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# Update all pages
files = glob.glob('src/app/pastors-desk/**/*.tsx', recursive=True) + glob.glob('src/app/en/pastors-desk/**/*.tsx', recursive=True)

for file in files:
    if 'opengraph-image' in file or 'layout.tsx' in file:
        continue
        
    is_en = '/en/' in file
    
    if '/edition-1' in file:
        current = 1
    elif '/edition-2' in file:
        current = 2
    elif '/edition-3' in file:
        current = 3
    elif '/edition-4' in file:
        current = 4
    elif '/edition-5' in file:
        current = 5
    elif '/edition-6' in file:
        current = 6
    elif '/edition-7' in file:
        current = 7
    else:
        current = 8 # main page
        
    update_sidebar(file, is_en, current)

print("Sidebars updated to Edition 8 across all editions!")
