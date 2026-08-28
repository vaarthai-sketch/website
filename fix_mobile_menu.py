import re

filepath = 'src/components/Header.tsx'
with open(filepath, 'r') as f:
    content = f.read()

old_btn = '''              <Button 
                href={`${basePrefix}/plan-your-visit`} 
                variant="accent" 
                fullWidth 
                className="py-3 font-bold flex items-center justify-center gap-2 uppercase tracking-widest text-xs"
              >
                PLAN YOUR VISIT
              </Button>'''

new_btns = '''              <Button 
                href={`${basePrefix}/plan-your-visit`} 
                variant="accent" 
                fullWidth 
                className="py-3 font-bold flex items-center justify-center gap-2 uppercase tracking-widest text-xs mb-3"
              >
                PLAN YOUR VISIT
              </Button>
              <Button 
                href={`${basePrefix}/give`} 
                variant="primary" 
                fullWidth 
                className="py-3 font-bold flex items-center justify-center gap-2 uppercase tracking-widest text-xs !bg-emerald-600 hover:!bg-emerald-700 active:!bg-emerald-800 !border-transparent"
              >
                GIVE
              </Button>'''

content = content.replace(old_btn, new_btns)

with open(filepath, 'w') as f:
    f.write(content)

print("Mobile menu updated")
