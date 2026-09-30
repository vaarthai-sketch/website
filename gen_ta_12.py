# -*- coding: utf-8 -*-
import re

with open("src/app/pastors-desk/page.tsx", "r", encoding="utf-8") as f:
    text = f.read()

# Update Metadata
text = re.sub(r'title: "VEC-NL.*?Edition 11.*?",', 'title: "VEC-NL 2026-10 Edition 12 - போதகர் மேசையிலிருந்து",', text)
text = re.sub(r'description: "அசையும் உலகில் அசையாத சமாதானம்",', 'description: "அனலின் நடுவிலும் வாழ்க்கை!",', text)
text = re.sub(r'image: "/un-assembly.webp"', 'image: "/pastor-desk-hero.jpg"', text)

# Update Hero Section
text = re.sub(r'அசையும் உலகில் அசையாத சமாதானம்', 'அனலின் நடுவிலும் வாழ்க்கை!', text)
text = re.sub(r'Finding Peace in a Shifting World', 'Life in the Heat', text)
text = re.sub(r'Edition #011', 'Edition #012', text)
text = re.sub(r'செப்டம்பர் 2026', 'அக்டோபர் 2026', text)

# Update Article Meta
text = re.sub(r'VEC-NL 2026-09 · Edition 11', 'VEC-NL 2026-10 · Edition 12', text)

new_prose = """<div className="my-6 rounded-xl overflow-hidden shadow-md border-2 border-stone-200 bg-stone-900">
  <video 
    src="https://assets.science.nasa.gov/content/dam/science/psd/astrobiology/research-images/MovieS12_60C_normalmotility_switching%201080p_Crop.mp4" 
    autoPlay 
    loop 
    muted 
    playsInline 
    className="w-full h-auto object-cover max-h-[500px]" 
  />
</div>
<p className="text-right text-xs text-stone-400 mt-2 italic">Source: science.nasa.gov</p>

<p>
  சமீபத்தில் அமெரிக்காவின் கலிபோர்னியாவில் உள்ள வெந்நீர் ஊற்றுகளில் விஞ்ஞானிகள் ஒரு ஆச்சரியமான உயிரினத்தைக் கண்டுபிடித்திருக்கிறார்கள்.<br/>
  “Fire Amoeba” என்று அழைக்கப்படும் இந்த மிகச் சிறிய ஓரணு உயிரினம், கடுமையான வெப்பத்தை வெறுமனே தாங்கி உயிரோடு இருப்பது மட்டுமல்ல—63°C வெப்பத்திலும் வளர்ந்து, இனப்பெருக்கம் செய்கிறது! 64°C வெப்பத்தில்கூட தொடர்ந்து செயல்படுகிறது.
</p>

<p>
  இதில் என்னைக் கவர்ந்த விஷயம் இதுதான்:<br/>
  <strong>அது வாழ்வதற்கு வெப்பம் மறைய வேண்டிய அவசியமில்லை. அந்த வெப்பத்தின் நடுவிலேயே வாழும் திறன் அதற்கு இருக்கிறது.</strong>
</p>

<p>இதை வாசித்தபோது ஏசாயாவில் தேவன் சொன்ன வார்த்தை நினைவுக்கு வந்தது:</p>

<blockquote className="border-l-4 border-accent pl-6 py-2 my-8 bg-stone-50 rounded-r-lg shadow-sm italic text-lg text-stone-800">
  "நீ அக்கினியில் நடக்கும்போது வேகாதிருப்பாய்; அக்கினிஜுவாலை உன்பேரில் பற்றாது."
  <footer className="text-right text-sm font-bold text-accent mt-4 not-italic">— ஏசாயா 43:2</footer>
</blockquote>

<p>
  தேவன், “உன் வாழ்க்கையில் அக்கினியே வராது” என்று சொல்லவில்லை.<br/>
  “நீ அக்கினியில் நடக்கும்போது…” என்கிறார்.
</p>

<p>
  சில நேரங்களில்,<br/>
  “ஆண்டவரே, இந்தச் சூழ்நிலையிலிருந்து என்னை வெளியே கொண்டுவாருங்கள். இந்த அழுத்தத்தை நீக்குங்கள். இந்தப் பிரச்சனையை மாற்றுங்கள்”<br/>
  என்று நாம் ஜெபிக்கிறோம்.
</p>

<p>சில நேரங்களில் தேவன் அப்படியே செய்கிறார்.</p>

<p>
  ஆனால் சில காலங்களில் அனல் உடனடியாக மாறுவதில்லை. அதற்குப் பதிலாக, அந்த அனலின் நடுவிலும் வாழவும், வளரவும், விசுவாசத்தில் நிலைத்திருக்கவும் தேவன் நமக்குக் கிருபை தருகிறார்.
</p>

<p>
  ஒருவேளை நீங்களும் இப்போது ஒரு “அனலின்” வழியாகச் சென்றுகொண்டிருக்கலாம்.<br/>
  குடும்பப் பிரச்சனை, பொருளாதார அழுத்தம், வேலைப்பளு, ஏமாற்றம், எதிர்காலத்தைக் குறித்த நிச்சயமின்மை, அல்லது இன்னும் பதில் கிடைக்காத ஒரு ஜெபம்...
</p>

<p className="font-bold text-lg text-primary">
  அக்கினி இருக்கிறது என்பதால், தேவன் இல்லை என்று நினைத்துவிடாதீர்கள்.
</p>

<p>அவர் சொல்கிறார்:</p>

<blockquote className="border-l-4 border-accent pl-6 py-2 my-8 bg-stone-50 rounded-r-lg shadow-sm italic text-lg text-stone-800">
  "நீ தண்ணீர்களைக் கடக்கும்போது நான் உன்னோடு இருப்பேன்… நீ அக்கினியில் நடக்கும்போது வேகாதிருப்பாய்."
</blockquote>

<p>
  தேவனுடைய அற்புதம் எப்போதும் அக்கினியை அகற்றுவது மட்டுமல்ல.<br/>
  சில நேரங்களில் அக்கினியின் வழியாக நம்மை நடத்தி, அதன் நடுவிலும் அவர் நம்மோடு இருந்தார் என்பதை உணரச் செய்வதும் அற்புதம்தான்.
</p>

<p>நம்மால் முடியாது என்று தோன்றும்போது, அவருடைய இன்னொரு வாக்குத்தத்தத்தை நினைவுகூருவோம்:</p>

<blockquote className="border-l-4 border-accent pl-6 py-2 my-8 bg-stone-50 rounded-r-lg shadow-sm italic text-lg text-stone-800">
  "என் கிருபை உனக்குப் போதும்."
  <footer className="text-right text-sm font-bold text-accent mt-4 not-italic">— 2 கொரிந்தியர் 12:9</footer>
</blockquote>

<p>எனவே இந்த வாரம் நமது ஜெபம் இப்படியாக இருக்கட்டும்:</p>

<p className="font-serif italic text-xl text-center text-stone-600 my-8">
  “ஆண்டவரே, இந்த அனலை இன்னும் நீர் அகற்றவில்லையென்றால், அதன் வழியாக விசுவாசத்தோடு நடக்க எனக்குக் கிருபை தாரும்.”
</p>

<p>
  அனல் கடுமையாக இருக்கலாம்.<br/>
  ஆனால் அவருடைய கிருபை போதுமானது!
</p>

<p>
  ஆசீர்வாதங்களுடன்,<br/>
  <strong>பாஸ்டர் வெஸ்லின்</strong><br/>
  வார்த்தை சுவிசேஷ சபை
</p>

<div className="mt-12 rounded-xl overflow-hidden shadow-md border-2 border-stone-200 aspect-video">
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/iPY_rKxbc9Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
</div>
"""

start_str = '<div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg relative z-10 font-serif">'
end_str = '                </div>\n              </div>\n            </div>\n          </article>'

start_idx = text.find(start_str)
end_idx = text.find(end_str)

if start_idx != -1 and end_idx != -1:
    text = text[:start_idx + len(start_str)] + "\n\n" + new_prose + "\n\n" + text[end_idx:]
    with open("src/app/pastors-desk/page.tsx", "w", encoding="utf-8") as f:
        f.write(text)
    print("Tamil updated successfully")
else:
    print("Could not find start or end index for TA")
