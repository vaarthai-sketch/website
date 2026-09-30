import re

with open("src/app/pastors-desk/page.tsx", "r", encoding="utf-8") as f:
    text = f.read()

new_sidebar_top = """<h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mb-2 pl-2">October 2026</h4>
                  <Link href="/pastors-desk" className="group flex items-start gap-2 p-3 rounded-md bg-stone-50 border border-stone-200 hover:border-accent hover:bg-accent/5 transition-colors">
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-900 font-bold group-hover:text-primary transition-colors">Edition 12</p>
                      <p className="text-xs text-stone-500">Oct 2026</p>
                    </div>
                  </Link>

                  <h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mt-6 mb-2 pl-2 border-t border-stone-100 pt-4">September 2026</h4>
                  <Link href="/pastors-desk/archive/september/edition-11" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 11</p>
                      <p className="text-xs text-stone-500">Sep 2026</p>
                    </div>
                  </Link>"""

# Replace from <h4 September 2026 to Edition 11 link end
regex_pattern = r'<h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mb-2 pl-2">September 2026</h4>\s*<Link href="/pastors-desk" className="group flex items-start gap-2 p-3 rounded-md bg-stone-50 border border-stone-200 hover:border-accent hover:bg-accent/5 transition-colors">\s*<ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0 transition-colors" />\s*<div>\s*<p className="text-sm font-medium text-stone-900 font-bold group-hover:text-primary transition-colors">Edition 11</p>\s*<p className="text-xs text-stone-500">Sep 2026</p>\s*</div>\s*</Link>'
text = re.sub(regex_pattern, new_sidebar_top, text)

with open("src/app/pastors-desk/page.tsx", "w", encoding="utf-8") as f:
    f.write(text)
