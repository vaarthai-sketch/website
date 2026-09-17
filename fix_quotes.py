with open("src/data/events.ts", "r") as f:
    text = f.read()

# Replace actual newlines inside the quotes with \n
# We can just write a quick script that replaces the newlines inside those specific strings

import re

# We can replace the broken multi-line string directly by replacing the literal block
bad_tamil_desc = '''description: "கிறிஸ்துமஸ் பாடல்கள், நேரடி இசை, மகிழ்ச்சியான கொண்டாட்டம் மற்றும் இயேசு கிறிஸ்துவின் நற்செய்தியோடு ஒரு மறக்க முடியாத மாலை.

சிறப்பு பாடகர் குழு: Desire Jesus Brisbane.

www.vaarthai.org.au",'''

good_tamil_desc = 'description: "கிறிஸ்துமஸ் பாடல்கள், நேரடி இசை, மகிழ்ச்சியான கொண்டாட்டம் மற்றும் இயேசு கிறிஸ்துவின் நற்செய்தியோடு ஒரு மறக்க முடியாத மாலை.\\n\\nசிறப்பு பாடகர் குழு: Desire Jesus Brisbane.\\n\\nwww.vaarthai.org.au",'

bad_english_desc = '''englishDescription: "An unforgettable evening of Christmas carols, live music, joyful celebration and the Good News of Jesus Christ.

Featuring Special Choir: DESIRE JESUS BRISBANE.

www.vaarthai.org.au",'''

good_english_desc = 'englishDescription: "An unforgettable evening of Christmas carols, live music, joyful celebration and the Good News of Jesus Christ.\\n\\nFeaturing Special Choir: DESIRE JESUS BRISBANE.\\n\\nwww.vaarthai.org.au",'

text = text.replace(bad_tamil_desc, good_tamil_desc)
text = text.replace(bad_english_desc, good_english_desc)

with open("src/data/events.ts", "w") as f:
    f.write(text)
