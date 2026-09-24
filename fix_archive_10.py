import re

for file_path, prefix in [("src/app/en/pastors-desk/archive/september/edition-10/page.tsx", "/en"), ("src/app/pastors-desk/archive/september/edition-10/page.tsx", "")]:
    with open(file_path, "r", encoding="utf-8") as f:
        text = f.read()

    sidebar_update = f"""<Link href="{prefix}/pastors-desk" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 11</p>
                      <p className="text-xs text-stone-500">Sep 2026</p>
                    </div>
                  </Link>
                  <Link href="{prefix}/pastors-desk/archive/september/edition-10" className="group flex items-start gap-2 p-3 rounded-md bg-stone-50 border border-stone-200 hover:border-accent hover:bg-accent/5 transition-colors">
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-900 font-bold group-hover:text-primary transition-colors">Edition 10</p>
                      <p className="text-xs text-stone-500">Sep 2026</p>
                    </div>
                  </Link>"""
    
    text = re.sub(rf'<Link href="{prefix}/pastors-desk".*?Edition 10.*?</Link>', sidebar_update, text, flags=re.DOTALL)
    
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(text)
