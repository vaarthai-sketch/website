import re

def update_file(filepath, is_english):
    with open(filepath, 'r') as f:
        content = f.read()

    # The block to replace:
    #               {/* Service times banner */}
    #               <div className="flex items-center justify-center lg:justify-start gap-2 pt-4 text-sm text-stone-300">
    #                 <Clock className="w-4 h-4 text-accent shrink-0" />
    #                 <span>...</span>
    #               </div>

    # Find the block
    pattern = r'\{\/\* Service times banner \*\/\}.*?<\/div>'
    
    if is_english:
        label = "Sunday Service"
        time = "10:00 AM"
    else:
        label = "ஞாயிறு ஆராதனை"
        time = "காலை 10:00 மணி"

    new_block = f"""{{/* Service times banner */}}
              <div className="mt-8 bg-accent/95 backdrop-blur-md border border-accent-light/50 rounded-xl p-4 sm:px-6 flex items-center justify-center lg:justify-start gap-4 shadow-xl shadow-accent/20 max-w-sm">
                <div className="bg-white/20 p-2.5 rounded-lg shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-white/80 mb-0.5">{label}</p>
                  <p className="text-xl sm:text-2xl font-black text-white leading-none">{time}</p>
                </div>
              </div>"""

    content = re.sub(pattern, new_block, content, flags=re.DOTALL)

    with open(filepath, 'w') as f:
        f.write(content)

update_file('src/app/page.tsx', is_english=False)
update_file('src/app/en/page.tsx', is_english=True)
print("Updated service banners!")
