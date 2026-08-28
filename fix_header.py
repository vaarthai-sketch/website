import re

filepath = 'src/components/Header.tsx'
with open(filepath, 'r') as f:
    content = f.read()

pattern = r'\{\/\* Hanging "Plan Your Visit".*?\n.*?\n.*?\n.*?\n.*?\n.*?\n.*?\n.*?\n\s*\}'
# Actually, let's just use string replacement because regex can be tricky with newlines.

old_str = """      {/* Hanging "Plan Your Visit" Button for Desktop (Below Menu, overlapping hero) */}
      <div className="hidden lg:block absolute top-full right-8 xl:right-[calc(50vw-40rem)] mt-4 z-50">
        <Button 
          href={`${basePrefix}/plan-your-visit`} 
          variant="accent" 
          className="font-bold shadow-lg shadow-primary/20 uppercase tracking-widest text-xs px-6 py-3"
        >
          PLAN YOUR VISIT
        </Button>
      </div>"""

content = content.replace(old_str, "")

with open(filepath, 'w') as f:
    f.write(content)

print("Header modified")
