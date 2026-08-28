import re

filepath = 'src/components/Header.tsx'
with open(filepath, 'r') as f:
    content = f.read()

# Replace <nav> to be wrapped in a flex-end container alongside the LanguageToggle
# Find the <nav> element
nav_start = content.find('<nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">')

# Wait, it's easier to just use string replacement on the exact lines.
old_nav_open = '<nav className="hidden lg:flex items-center gap-6" aria-label="Main Navigation">'
new_nav_open = '''<div className="hidden lg:flex items-center justify-end flex-grow ml-4 gap-6 xl:gap-8">
            <nav className="flex items-center gap-4 xl:gap-6" aria-label="Main Navigation">'''

content = content.replace(old_nav_open, new_nav_open)

old_nav_close_and_lang = '''</nav>

          <div className="hidden lg:flex items-center gap-3">
            <LanguageToggle />
          </div>'''

new_nav_close_and_lang = '''</nav>
            <LanguageToggle />
          </div>'''

content = content.replace(old_nav_close_and_lang, new_nav_close_and_lang)

with open(filepath, 'w') as f:
    f.write(content)

print("Spacing fixed")
