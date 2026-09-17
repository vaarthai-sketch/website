import re

with open("src/data/events.ts", "r") as f:
    text = f.read()

# Remove isFeatured from carolights-26
text = text.replace('image: "/event-carolights-26.png",\n    isFeatured: true', 'image: "/event-carolights-26.png"')

# Add isFeatured to sunday-worship-service
text = text.replace('image: "/hero-bg.jpg",\n  },', 'image: "/hero-bg.jpg",\n    isFeatured: true\n  },', 1)

with open("src/data/events.ts", "w") as f:
    f.write(text)
