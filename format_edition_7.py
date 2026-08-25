import os
import re

def reformat(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # Remove the prose-* classes from the wrapper div
    content = re.sub(
        r'className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg relative z-10[^"]*"',
        'className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg relative z-10"',
        content
    )

    # Replace <blockquote> with the styled blockquote
    content = content.replace('<blockquote>', '<blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700">')
    
    # Replace <footer> with styled p tag
    content = content.replace('<footer>', '<p className="mt-2 text-right text-sm">')
    content = content.replace('</footer>', '</p>')

    # Replace <h2> with <h3 className="text-xl font-bold text-stone-800">
    # Wait, in the text it might be h2 or h3.
    content = content.replace('<h2>', '<h3 className="text-xl font-bold text-stone-800">')
    content = content.replace('</h2>', '</h3>')

    with open(filepath, 'w') as f:
        f.write(content)

reformat('src/app/pastors-desk/page.tsx')
reformat('src/app/en/pastors-desk/page.tsx')

print("Reformatted!")
