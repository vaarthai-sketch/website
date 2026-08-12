import glob
import re

links_ta = """<div className="space-y-3">
                  <Link href="/pastors-desk" className="group flex items-start gap-2 p-3 rounded-md bg-stone-50 border border-stone-200 hover:border-accent hover:bg-accent/5 transition-colors">
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-stone-900 group-hover:text-primary transition-colors">Edition 5</p>
                      <p className="text-xs text-stone-500">Aug 2026</p>
                    </div>
                  </Link>
                  <Link href="/pastors-desk/archive/august/edition-4" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 mt-0.5 shrink-0 group-hover:text-accent transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 4</p>
                      <p className="text-xs text-stone-500">Aug 2026</p>
                    </div>
                  </Link>

                  <h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mt-6 mb-2 pl-2 border-t border-stone-100 pt-4">July 2026</h4>
                  <Link href="/pastors-desk/archive/july/edition-3" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 mt-0.5 shrink-0 group-hover:text-accent transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 3</p>
                      <p className="text-xs text-stone-500">Jul 2026</p>
                    </div>
                  </Link>
                  <Link href="/pastors-desk/archive/july/edition-2" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 mt-0.5 shrink-0 group-hover:text-accent transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 2</p>
                      <p className="text-xs text-stone-500">Jul 2026</p>
                    </div>
                  </Link>
                  <Link href="/pastors-desk/archive/july/edition-1" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 mt-0.5 shrink-0 group-hover:text-accent transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 1</p>
                      <p className="text-xs text-stone-500">Jul 2026</p>
                    </div>
                  </Link>
                </div>"""

links_en = links_ta.replace('href="/pastors-desk', 'href="/en/pastors-desk')

def process_file(f, is_en=False):
    with open(f, 'r') as fp:
        c = fp.read()
    
    links = links_en if is_en else links_ta
    
    if "sidebar-placeholder" in c:
        c = re.sub(r'\{/\* Note: Links will be injected here.*? \*/\}', links + '\n                <div className="mt-8 pt-8 border-t border-stone-200">\n                  <h4 className="font-bold text-sm text-primary mb-3">Subscribe</h4>\n                  <NewsletterForm />\n                </div>', c, flags=re.DOTALL)
    else:
        # replace the old space-y-3 block up to the Subscribe block
        c = re.sub(r'<div className="space-y-3">.*?<div className="mt-8 pt-8 border-t border-stone-200">', links + '\n\n                <div className="mt-8 pt-8 border-t border-stone-200">', c, flags=re.DOTALL)
    
    with open(f, 'w') as fp:
        fp.write(c)

files_ta = glob.glob("src/app/pastors-desk/**/*.tsx", recursive=True)
for f in files_ta:
    process_file(f, is_en=False)

files_en = glob.glob("src/app/en/pastors-desk/**/*.tsx", recursive=True)
for f in files_en:
    process_file(f, is_en=True)

