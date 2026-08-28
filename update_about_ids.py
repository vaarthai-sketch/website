import re

def update_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()

    # 2. Our Story Section
    content = re.sub(
        r'(\{/\* 2\. Our Story Section \*/\}\n\s*<section)\s+',
        r'\1 id="our-story" ',
        content
    )
    # 4. Mission & Vision
    content = re.sub(
        r'(\{/\* 4\. Mission & Vision \*/\}\n\s*<section)\s+',
        r'\1 id="mission" ',
        content
    )
    # 6. Statement of Faith
    content = re.sub(
        r'(\{/\* 6\. Statement of Faith \*/\}\n\s*<section)\s+',
        r'\1 id="faith" ',
        content
    )
    # 7. Leadership / Staff Team
    content = re.sub(
        r'(\{/\* 7\. Leadership / Staff Team \*/\}\n\s*<section)\s+',
        r'\1 id="leadership" ',
        content
    )
    # 8. Church Governance
    content = re.sub(
        r'(\{/\* 8\. Church Governance \*/\}\n\s*<section)\s+',
        r'\1 id="governance" ',
        content
    )

    with open(filepath, 'w') as f:
        f.write(content)

update_file('src/app/about/page.tsx')
update_file('src/app/en/about/page.tsx')
print("Added IDs to about pages")
