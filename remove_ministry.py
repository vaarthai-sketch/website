import re

filepath = 'src/data/ministries.ts'
with open(filepath, 'r') as f:
    content = f.read()

# The ministry is an object inside an array, separated by commas.
# We will use regex to find the object with id: "community-outreach" and remove it.

pattern = r'\s*\{\s*id:\s*"community-outreach"[\s\S]*?\},?'
content = re.sub(pattern, '', content)

with open(filepath, 'w') as f:
    f.write(content)

print("Removed community-outreach")
