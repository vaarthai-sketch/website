with open('src/data/sermons.ts', 'r') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if line == '\n':
        lines[i] = '\\n\\n'
    elif line.endswith('\n'):
        lines[i] = line.replace('\n', '')

# wait, that ruins everything. Let's do it on the raw string:
