import re

with open('src/data/sermons.ts', 'r') as f:
    content = f.read()

# 1. Update Zechariah (Part 4)
content = re.sub(
    r'scriptureReference: "சகரியா 4:6",',
    r'scriptureReference: "சகரியா 4:6",\n    englishScriptureReference: "Zechariah 4:6",\n    scriptureText: "பலத்தினாலும் அல்ல, பராக்கிரமத்தினாலும் அல்ல, என்னுடைய ஆவியினாலேயே ஆகும் என்று சேனைகளின் கர்த்தர் சொல்லுகிறார்.",\n    englishScriptureText: "Not by might, nor by power, but by my spirit, saith the LORD of hosts.",',
    content
)

# 2. Update Nehemiah (Part 3)
content = re.sub(
    r'scriptureReference: "நெகேமியா",',
    r'scriptureReference: "நெகேமியா 2:18",\n    englishScriptureReference: "Nehemiah 2:18",\n    scriptureText: "என் தேவனுடைய நல்ல கரம் என்மேல் இருக்கிறதென்பதையும், ராஜா என்னோடே சொன்ன வார்த்தைகளையும் அவர்களுக்கு அறிவித்தேன்; அப்பொழுது அவர்கள்: எழுந்து கட்டுவோம் வாருங்கள் என்று சொல்லி, அந்த நல்ல வேலைக்குத் தங்கள் கைகளைத் திடப்படுத்தினார்கள்.",\n    englishScriptureText: "And I told them of the hand of my God that had been upon me for good, and also of the words that the king had spoken to me. And they said, \'Let us rise up and build.\' So they strengthened their hands for the good work.",',
    content
)

# 3. Update Varghese Rayar
content = re.sub(
    r'scriptureReference: "Special Message",',
    r'scriptureReference: "நீதிமொழிகள் 3:5-6",\n    englishScriptureReference: "Proverbs 3:5-6",\n    scriptureText: "உன் சுயபுத்தியின்மேல் சாயாமல், உன் முழு இருதயத்தோடும் கர்த்தரில் நம்பிக்கையாயிருந்து, உன் வழிகளிலெல்லாம் அவரை நினைத்துக்கொள்; அப்பொழுது அவர் உன் பாதைகளைச் செவ்வைப்படுத்துவார்.",\n    englishScriptureText: "Trust in the LORD with all your heart, and do not lean on your own understanding. In all your ways acknowledge him, and he will make straight your paths.",',
    content
)

# 4. Update Ezra (Part 2)
content = re.sub(
    r'scriptureReference: "எஸ்றா 8:22",',
    r'scriptureReference: "எஸ்றா 8:22",\n    englishScriptureReference: "Ezra 8:22",\n    scriptureText: "எங்கள் தேவனைத் தேடுகிற யாவர்மேலும் அவருடைய கரம் நன்மையாகவும், அவரை விட்டு விலகுகிற யாவர்மேலும் அவருடைய வல்லமையும் கோபமும் மகா உக்கிரமாகவும் இருக்கிறதென்று...",\n    englishScriptureText: "The hand of our God is for good on all who seek him, and the power of his wrath is against all who forsake him.",',
    content
)

# 5. Update 1 Kings (Part 1)
content = re.sub(
    r'scriptureReference: "1 இராஜாக்கள் 18",',
    r'scriptureReference: "1 இராஜாக்கள் 18:46",\n    englishScriptureReference: "1 Kings 18:46",\n    scriptureText: "கர்த்தருடைய கை எலியாவின்மேல் இருந்ததினால், அவன் தன் அரையைக் கட்டிக்கொண்டு, ஆகாபுக்கு முன்னே யெஸ்ரயேலுக்குப் போய்ச் சேர்ந்தான்.",\n    englishScriptureText: "And the hand of the LORD was on Elijah, and he gathered up his garment and ran before Ahab to the entrance of Jezreel.",',
    content
)

with open('src/data/sermons.ts', 'w') as f:
    f.write(content)
