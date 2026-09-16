import os
import shutil

# Move Edition 9 to archive
os.makedirs("src/app/pastors-desk/archive/september/edition-9", exist_ok=True)
os.makedirs("src/app/en/pastors-desk/archive/september/edition-9", exist_ok=True)

if os.path.exists("src/app/pastors-desk/page.tsx"):
    with open("src/app/pastors-desk/page.tsx", "r") as f:
        content = f.read()
    # update metadata path
    content = content.replace("path: '/pastors-desk'", "path: '/pastors-desk/archive/september/edition-9'")
    content = content.replace('path: "/pastors-desk"', 'path: "/pastors-desk/archive/september/edition-9"')
    with open("src/app/pastors-desk/archive/september/edition-9/page.tsx", "w") as f:
        f.write(content)

if os.path.exists("src/app/en/pastors-desk/page.tsx"):
    with open("src/app/en/pastors-desk/page.tsx", "r") as f:
        content = f.read()
    content = content.replace("path: '/en/pastors-desk'", "path: '/en/pastors-desk/archive/september/edition-9'")
    content = content.replace('path: "/en/pastors-desk"', 'path: "/en/pastors-desk/archive/september/edition-9"')
    with open("src/app/en/pastors-desk/archive/september/edition-9/page.tsx", "w") as f:
        f.write(content)

print("Moved Edition 9 to archive.")
