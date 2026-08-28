import re

filepath = 'src/components/Header.tsx'
with open(filepath, 'r') as f:
    content = f.read()

# Remove the button from the main nav
content = content.replace('''          <div className="hidden lg:flex items-center gap-3">
            <LanguageToggle />
            <Button 
              href={`${basePrefix}/plan-your-visit`} 
              variant="primary" 
              size="sm"
              className="font-bold flex items-center gap-1.5 uppercase tracking-wider text-xs"
            >
              PLAN YOUR VISIT
            </Button>
          </div>''', '''          <div className="hidden lg:flex items-center gap-3">
            <LanguageToggle />
          </div>''')

# Add the button below the menu
content = content.replace('''        </div>
      </div>

      {isOpen && (''', '''        </div>
      </div>

      {/* Hanging "Plan Your Visit" Button for Desktop (Below Menu, overlapping hero) */}
      <div className="hidden lg:block absolute top-full right-8 xl:right-[calc(50vw-40rem)] mt-4 z-50">
        <Button 
          href={`${basePrefix}/plan-your-visit`} 
          variant="primary" 
          className="font-bold shadow-lg shadow-primary/20 uppercase tracking-widest text-xs px-6 py-3"
        >
          PLAN YOUR VISIT
        </Button>
      </div>

      {isOpen && (''')

with open(filepath, 'w') as f:
    f.write(content)

print("Header modified")
