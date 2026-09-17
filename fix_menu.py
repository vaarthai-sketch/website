import re

with open("src/components/Header.tsx", "r", encoding="utf-8") as f:
    text = f.read()

# Add href to nav items
text = text.replace('name: "ABOUT US",', 'name: "ABOUT US",\n      href: `${basePrefix}/about`,')
text = text.replace('name: "MINISTRIES",', 'name: "MINISTRIES",\n      href: `${basePrefix}/ministries`,')
text = text.replace('name: "MEDIA & RESOURCES",', 'name: "MEDIA & RESOURCES",\n      href: `${basePrefix}/sermons`,')
text = text.replace('name: "WHAT\'S ON",', 'name: "WHAT\'S ON",\n      href: `${basePrefix}/events`,')

# Replace <button> with <Link> for desktop view (there are two occurrences: megaMenu and dropdown)
desktop_button = """<button className="flex items-center gap-1 text-xs font-bold tracking-widest text-stone-700 hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
                      {link.name} <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
                    </button>"""
                    
desktop_link = """<Link href={link.href || '#'} className="flex items-center gap-1 text-xs font-bold tracking-widest text-stone-700 hover:text-primary transition-colors focus-visible:ring-2 focus-visible:ring-accent rounded-sm">
                      {link.name} <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-200" />
                    </Link>"""

text = text.replace(desktop_button, desktop_link)

with open("src/components/Header.tsx", "w", encoding="utf-8") as f:
    f.write(text)
