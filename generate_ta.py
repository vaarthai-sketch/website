# -*- coding: utf-8 -*-
import re

with open("src/app/pastors-desk/page.tsx", "r", encoding="utf-8") as f:
    text = f.read()

# Update Metadata
text = re.sub(r'title: "VEC-NL.*?Edition 10.*?",', 'title: "VEC-NL 2026-09 Edition 11 - போதகர் மேசையிலிருந்து",', text)
text = re.sub(r'description: "வானங்களை எட்டினோம்.*?",', 'description: "அசையும் உலகில் அசையாத சமாதானம்",', text)
text = re.sub(r'image: "/edition-10-joe-marino.jpg"', 'image: "/un-assembly.webp"', text)

# Update Hero Section
text = re.sub(r'வானங்களை எட்டினோம்—ஆனால் சமாதானத்தை அடைந்தோமா\?', 'அசையும் உலகில் அசையாத சமாதானம்', text)
text = re.sub(r'பூமியில் தேசங்களுக்கிடையிலான போட்டியும் பதற்றமும் இப்போது விண்வெளிக்கும் பரவிவிட்டதா\?', 'நிலைத்தன்மைக்கான தேடல்.', text)
text = re.sub(r'Edition #010', 'Edition #011', text)
text = re.sub(r'VEC-NL 2026-09 · Edition 10', 'VEC-NL 2026-09 · Edition 11', text)

new_prose = """<div className="my-6 rounded-xl overflow-hidden shadow-md border-2 border-stone-200">
  <img src="/un-assembly.webp" alt="UN General Assembly" className="w-full h-auto object-cover max-h-[500px]" />
</div>

<h3 className="text-xl font-bold text-primary mt-8 mb-4 border-b pb-2">இந்த வாரம் உலகில்: நிலைத்தன்மைக்கான தேடல்</h3>
<p>
  இந்த வாரம், ஐக்கிய நாடுகள் பொதுச் சபைக்காக உலகத் தலைவர்கள் நியூயார்க்கில் கூடியிருக்கிறார்கள். மத்திய கிழக்கில் அதிகரித்துவரும் பதற்றங்கள், சாதனை அளவிலான காலநிலை நிகழ்வுகளைத் தொடர்ந்து வரும் கடுமையான வானிலையின் அவசர யதார்த்தங்கள், செயற்கை நுண்ணறிவு (AI) போன்ற புதிய தொழில்நுட்பங்களின் கணிக்க முடியாத தாக்கம் — இவையே விவாதங்களின் மையமாக இருக்கின்றன. இந்த வெவ்வேறு பிரச்சனைகள் அனைத்தையும் ஒரே இழை இணைக்கிறது: நாளுக்கு நாள் பலவீனமாகத் தோன்றும் அமைப்புகளுக்குள் நிலைத்தன்மையைத் தேடும் முயற்சி.
</p>

<h3 className="text-xl font-bold text-primary mt-8 mb-4 border-b pb-2">தியானம்: நித்திய கன்மலை</h3>
<p>
  சர்வதேச மோதல்கள், சுற்றுச்சூழல் நெருக்கடிகள், வேகமான தொழில்நுட்ப மாற்றங்கள் பற்றிய செய்திகளை வாசிக்கும்போது, உலகத்தின் கவலை மிக எளிதாக நம்முடைய கவலையாகி விடுகிறது. மனித அமைப்புகள் எவ்வளவு வல்லமையுள்ளவையாகவும் நல்லெண்ணம் கொண்டவையாகவும் இருந்தாலும், உண்மையான சமாதானத்தை உறுதிசெய்ய அவைகளால் முடியாது என்பதைத் தலைப்புச் செய்திகள் ஒவ்வொரு நாளும் நமக்கு நினைவூட்டுகின்றன.
</p>

<blockquote className="border-l-4 border-accent pl-6 py-2 my-8 bg-stone-50 rounded-r-lg shadow-sm italic text-lg text-stone-800">
  "உம்மை உறுதியாய்ப் பற்றிக்கொண்ட மனதையுடையவன் உம்மையே நம்பியிருக்கிறபடியால், நீர் அவனைப் பூரண சமாதானத்துடன் காத்துக்கொள்ளுவீர். கர்த்தரை என்றென்றைக்கும் நம்புங்கள்; கர்த்தராகிய யேகோவா நித்திய கன்மலையாயிருக்கிறார்."
  <footer className="text-right text-sm font-bold text-accent mt-4 not-italic">— ஏசாயா 26:3–4</footer>
</blockquote>

<p>
  ஏசாயா இந்த வார்த்தைகளை அமைதியான காலத்தில் எழுதவில்லை. உலக வல்லரசுகள் எழும்பி விழுந்துகொண்டிருந்த காலத்தில், “அந்நாளில் யூதா தேசத்தில் பாடப்படும் பாட்டு” (26:1) என்று தேவனுடைய ஜனங்களுக்கு ஒரு பாடலைக் கொடுத்தார். அவர் வாக்குப்பண்ணும் சமாதானம் சூழ்நிலைகள் மாறுவதால் வருவதில்லை; மனம் கர்த்தரை உறுதியாய்ப் பற்றிக்கொள்வதால் வருகிறது.
</p>
<p>
  அதனால்தான் “நித்திய கன்மலை” என்ற வார்த்தை இன்று நமக்கு மிக முக்கியமானது. பொருளாதாரம், சர்வதேச ராஜதந்திரம், தொழில்நுட்பம் — இவை மணலைப் போன்றவை; இன்று நிற்கின்றன, நாளை சரியக்கூடும். ஆனால் கர்த்தர் மாறாத கன்மலை. நம் நம்பிக்கை உலக அமைப்புகளின் தற்காலிக நிலைத்தன்மையில் அல்ல, நித்திய வார்த்தையின் மேல் நங்கூரமிடப்பட்டிருக்கிறது.
</p>

<blockquote className="border-l-4 border-accent pl-6 py-2 my-8 bg-stone-50 rounded-r-lg shadow-sm italic text-lg text-stone-800">
  "என்னிடத்தில் உங்களுக்குச் சமாதானம் உண்டாயிருக்கும்படி இவைகளை உங்களுக்குச் சொன்னேன். உலகத்தில் உங்களுக்கு உபத்திரவம் உண்டு, ஆனாலும் திடன்கொள்ளுங்கள், நான் உலகத்தை ஜெயித்தேன்."
  <footer className="text-right text-sm font-bold text-accent mt-4 not-italic">— யோவான் 16:33</footer>
</blockquote>

<p>
  இயேசு உபத்திரவம் இல்லாத உலகத்தை வாக்குப்பண்ணவில்லை; உலகத்தை ஜெயித்த தம்மிடத்தில் சமாதானத்தை வாக்குப்பண்ணினார். உலகம் இன்னும் நிலைத்தன்மையைத் தேடிக்கொண்டிருக்கிறது; நாமோ ஏற்கனவே நம் அடைக்கலத்தைக் கண்டடைந்திருக்கிறோம்.
</p>

<h3 className="text-xl font-bold text-primary mt-8 mb-4 border-b pb-2">இந்த வாரத்திற்கான சிந்தனை</h3>
<ul className="space-y-4">
  <li className="flex gap-3"><span className="text-accent font-bold">◆</span><span><strong>விவேகத்துடன் செய்திகளை வாசியுங்கள்:</strong> செய்திகளை வாசிக்கும்போது, ஒரு கணம் நிறுத்தி, உங்கள் கவலைகளைத் தேவனிடம் ஒப்படையுங்கள். உலகத்தின் பாரத்தை உங்கள் தோள்களில் சுமக்க வேண்டியதில்லை.</span></li>
  <li className="flex gap-3"><span className="text-accent font-bold">◆</span><span><strong>சமாதானத்தின் சாட்சியாக இருங்கள்:</strong> எதிர்காலத்தைப் பற்றிய பயத்தில் இருக்கும் சமுதாயத்தில், தேவனுடைய பராமரிப்பின் மேல் நீங்கள் வைத்திருக்கும் அமைதியான நம்பிக்கை, உங்களைச் சுற்றியுள்ளவர்களுக்கு நம்பிக்கையின் சாட்சியாக இருக்கட்டும்.</span></li>
  <li className="flex gap-3"><span className="text-accent font-bold">◆</span><span><strong>வசனத்தை மனப்பாடம் செய்யுங்கள்:</strong> இந்த வாரம் ஏசாயா 26:3-ஐ மனப்பாடம் செய்து, கவலை எழும்போதெல்லாம் அதைச் சொல்லி ஜெபியுங்கள்.</span></li>
  <li className="flex gap-3"><span className="text-accent font-bold">◆</span><span><strong>கீழே உள்ள பாடலை கேளுங்கள்:</strong> பாடுங்கள். அப்படிச்செய்யும்போது எளிதாக வசனம் உங்களுக்குள்ளாகச் சென்று விடும்.</span></li>
</ul>

<h3 className="text-xl font-bold text-primary mt-8 mb-4 border-b pb-2">இந்த வார ஜெபக் குறிப்புகள்</h3>
<ol className="list-decimal pl-5 space-y-2">
  <li>சர்வதேச மோதல்களையும் மனிதாபிமான நெருக்கடிகளையும் கையாளும் உலகத் தலைவர்களுக்குத் தேவ ஞானம் கிடைக்க ஜெபியுங்கள் (1 தீமோத்தேயு 2:1–2).</li>
  <li>கடுமையான வானிலையால் பாதிக்கப்படக்கூடிய சமூகங்களுக்குப் பாதுகாப்பு, தேவையான உதவி, ஆறுதல் கிடைக்க ஜெபியுங்கள்.</li>
  <li>நம்முடைய வார்த்தை சபைக் குடும்பம் விசுவாசத்தில் ஆழமாக வேரூன்றி, நம் சமுதாயத்திலும் பணியிடங்களிலும் சமாதானத்தின் கருவிகளாக இருக்க ஜெபியுங்கள்.</li>
</ol>

<div className="mt-12 rounded-xl overflow-hidden shadow-md border-2 border-stone-200 aspect-video">
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/w3tKP5xo7mU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
</div>"""

text = re.sub(r'<div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg relative z-10 font-serif">.*?</div>\n\n              </div>', r'<div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg relative z-10 font-serif">\n' + new_prose + '\n</div>\n\n              </div>', text, flags=re.DOTALL)

sidebar_update = """<Link href="/pastors-desk" className="group flex items-start gap-2 p-3 rounded-md bg-stone-50 border border-stone-200 hover:border-accent hover:bg-accent/5 transition-colors">
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-900 font-bold group-hover:text-primary transition-colors">Edition 11</p>
                      <p className="text-xs text-stone-500">Sep 2026</p>
                    </div>
                  </Link>
                  <Link href="/pastors-desk/archive/september/edition-10" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 10</p>
                      <p className="text-xs text-stone-500">Sep 2026</p>
                    </div>
                  </Link>"""
text = re.sub(r'<Link href="/pastors-desk".*?Edition 10.*?</Link>', sidebar_update, text, flags=re.DOTALL)

with open("src/app/pastors-desk/page.tsx", "w", encoding="utf-8") as f:
    f.write(text)
