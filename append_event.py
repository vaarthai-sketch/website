import re

with open('src/data/events.ts', 'r') as f:
    content = f.read()

new_event = """  },
  {
    id: "carolights-26",
    title: "Carolights '26 \\"The Sound of Good News\\"",
    englishTitle: "Carolights '26 \\"The Sound of Good News\\"",
    date: "2026-11-28",
    time: "சனிக்கிழமை, 28 நவம்பர் 2026",
    englishTime: "Saturday, 28 November 2026",
    location: "இடம் குறித்த விவரங்கள் விரைவில் அறிவிக்கப்படும்",
    englishLocation: "VENUE DETAILS COMING SOON",
    category: "All-Church",
    englishCategory: "Special Event & Music",
    description: "கிறிஸ்துமஸ் பாடல்கள், நேரடி இசை, மகிழ்ச்சியான கொண்டாட்டம் மற்றும் இயேசு கிறிஸ்துவின் நற்செய்தியோடு ஒரு மறக்க முடியாத மாலை.\\n\\nசிறப்பு விருந்தினர்கள்: பிரிஸ்பேன் தமிழ் பாடகர் குழு (Brisbane Tamil Choir).\\n\\nwww.vaarthai.org.au",
    englishDescription: "An unforgettable evening of Christmas carols, live music, joyful celebration and the Good News of Jesus Christ.\\n\\nFeaturing Special Guests: BRISBANE TAMIL CHOIR.\\n\\nwww.vaarthai.org.au",
    organizer: "Vaarthai Evangelical Church",
    englishOrganizer: "Vaarthai Evangelical Church",
    organizerEmail: "info@vaarthai.org.au",
    image: "/event-carolights-26.png",
    isFeatured: true
  }
];"""

content = re.sub(r'  \}\n\];', new_event, content)

with open('src/data/events.ts', 'w') as f:
    f.write(content)
print("Event appended")
