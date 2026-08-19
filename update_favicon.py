from PIL import Image

# Open the uploaded png
img = Image.open("/Users/weslyn/.gemini/antigravity/brain/3974317d-b0ad-40a2-9149-1d08d7af08ca/.user_uploaded/media_1787099850185.png")

# Convert to RGBA just in case
img = img.convert("RGBA")

# Next.js app router looks for favicon.ico in src/app/
# Save it as an ico file
img.save("/Users/weslyn/.gemini/antigravity/scratch/church-website/src/app/favicon.ico", format="ICO", sizes=[(32, 32)])

print("Favicon updated successfully.")
