import re

filepath = 'src/data/events.ts'
with open(filepath, 'r') as f:
    content = f.read()

old_func = """function getNextFourthSunday(): string {
  const today = new Date();
  let y = today.getFullYear();
  let m = today.getMonth();
  
  const getFourth = (year: number, month: number) => {
    const d = new Date(year, month, 1);
    const offset = (7 - d.getDay()) % 7;
    d.setDate(1 + offset + 21);
    return d;
  };
  
  let fs = getFourth(y, m);
  if (today > fs) {
    if (m === 11) { m = 0; y++; }
    else m++;
    fs = getFourth(y, m);
  }
  return fs.toISOString().split('T')[0];
}"""

new_func = """function getNextFourthSunday(): string {
  const now = new Date();
  const brisbaneTimeStr = now.toLocaleString("en-US", { timeZone: "Australia/Brisbane" });
  const today = new Date(brisbaneTimeStr);
  
  let y = today.getFullYear();
  let m = today.getMonth();
  
  const getFourth = (year: number, month: number) => {
    const d = new Date(year, month, 1);
    const offset = (7 - d.getDay()) % 7;
    d.setDate(1 + offset + 21);
    return d;
  };
  
  let fs = getFourth(y, m);
  // Add 1 day to fs so that it rolls over on Monday morning instead of Sunday morning
  const fsRollover = new Date(fs);
  fsRollover.setDate(fs.getDate() + 1);
  
  if (today >= fsRollover) {
    if (m === 11) { m = 0; y++; }
    else m++;
    fs = getFourth(y, m);
  }
  
  const year = fs.getFullYear();
  const monthStr = String(fs.getMonth() + 1).padStart(2, '0');
  const dayStr = String(fs.getDate()).padStart(2, '0');
  
  return `${year}-${monthStr}-${dayStr}`;
}"""

content = content.replace(old_func, new_func)

# Replace the hardcoded date for monthly-after-church-lunch
content = re.sub(
    r'id:\s*"monthly-after-church-lunch",\s*title:\s*"மாதாந்திர ஆராதனைக்குப் பிந்தைய மதிய உணவு \(Monthly After-Church Lunch\)",\s*englishTitle:\s*"Monthly After-Church Lunch",\s*date:\s*"[^"]*",',
    'id: "monthly-after-church-lunch",\n    title: "மாதாந்திர ஆராதனைக்குப் பிந்தைய மதிய உணவு (Monthly After-Church Lunch)",\n    englishTitle: "Monthly After-Church Lunch",\n    date: getNextFourthSunday(),',
    content
)

with open(filepath, 'w') as f:
    f.write(content)

print("Fixed getNextFourthSunday and applied it to the event!")
