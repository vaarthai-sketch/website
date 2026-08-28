import os

filepath = 'src/data/events.ts'
with open(filepath, 'r') as f:
    content = f.read()

old_func = """function getNextWednesday(): string {
  const today = new Date();
  const d = new Date(today);
  d.setDate(today.getDate() + ((7 + 3 - today.getDay()) % 7));
  return d.toISOString().split('T')[0];
}"""

new_func = """function getNextWednesday(): string {
  // Use Brisbane time (AEST) to ensure it rolls over correctly on Thursday mornings local time
  const now = new Date();
  const brisbaneTimeStr = now.toLocaleString("en-US", { timeZone: "Australia/Brisbane" });
  const today = new Date(brisbaneTimeStr);
  const d = new Date(today);
  
  d.setDate(today.getDate() + ((7 + 3 - today.getDay()) % 7));
  
  // Format as YYYY-MM-DD
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  
  return `${year}-${month}-${day}`;
}"""

content = content.replace(old_func, new_func)

with open(filepath, 'w') as f:
    f.write(content)

print("Timezone fixed!")
