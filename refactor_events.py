import os
import glob

# 1. Update events.ts
with open('src/data/events.ts', 'r') as f:
    events_content = f.read()

# Change export const eventsData to export function getEventsData()
events_content = events_content.replace('export const eventsData: ChurchEvent[] = [', 'export const getEventsData = (): ChurchEvent[] => [')
# Add closing bracket
events_content = events_content.replace('  }\n];', '  }\n];') # Wait, just replace the end
events_content = events_content + "\n"

# Put back getNextWednesday
old_func = """function getNextWednesday(): string {
  const today = new Date();
  const d = new Date(today);
  d.setDate(today.getDate() + ((7 + 3 - today.getDay()) % 7));
  if (today.getDay() === 3) d.setDate(d.getDate() + 7);
  return d.toISOString().split('T')[0];
}"""

new_func = """function getNextWednesday(): string {
  const today = new Date();
  const d = new Date(today);
  d.setDate(today.getDate() + ((7 + 3 - today.getDay()) % 7));
  return d.toISOString().split('T')[0];
}"""
events_content = events_content.replace(old_func, new_func)

events_content = events_content.replace('date: "2026-09-02",', 'date: getNextWednesday(),')

with open('src/data/events.ts', 'w') as f:
    f.write(events_content)

# 2. Update usages
def replace_in_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Replace import
    content = content.replace('import { eventsData }', 'import { getEventsData }')
    # Replace usage
    content = content.replace('eventsData.map', 'getEventsData().map')
    content = content.replace('eventsData.find', 'getEventsData().find')
    content = content.replace('eventsData', 'getEventsData()')
    
    with open(filepath, 'w') as f:
        f.write(content)

replace_in_file('src/app/sitemap.ts')
replace_in_file('src/app/events/page.tsx')
replace_in_file('src/app/events/[id]/page.tsx')
replace_in_file('src/app/en/events/page.tsx')
replace_in_file('src/app/en/events/[id]/page.tsx')

print("Refactored!")
