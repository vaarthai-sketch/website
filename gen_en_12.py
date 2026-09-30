import re

with open("src/app/en/pastors-desk/page.tsx", "r", encoding="utf-8") as f:
    text = f.read()

# Update Metadata
text = re.sub(r'title: "VEC-NL.*?Edition 11.*?",', 'title: "VEC-NL 2026-10 Edition 12 - From the Pastor\'s Desk",', text)
text = re.sub(r'description: "Finding Peace in a Shifting World",', 'description: "Life in the Heat",', text)
text = re.sub(r'image: "/un-assembly.webp"', 'image: "/pastor-desk-hero.jpg"', text) # no specific image provided for this issue

# Update Hero Section
text = re.sub(r'FINDING PEACE IN A SHIFTING WORLD', 'LIFE IN THE HEAT', text)
text = re.sub(r'A search for stability in systems that feel increasingly fragile\.', 'God gives us grace to live, grow and remain faithful in the middle of the heat.', text)
text = re.sub(r'Edition #011', 'Edition #012', text)
text = re.sub(r'செப்டம்பர் 2026', 'October 2026', text)

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
  Scientists recently discovered something remarkable in the hot springs of California. A tiny single-celled organism nicknamed the &ldquo;Fire Amoeba&rdquo; can not only survive extreme heat&mdash;it can grow and reproduce at 63°C. Even at 64°C, it remains active.
</p>

<p>
  What caught my attention was this: <br/>
  <strong>It doesn&apos;t need the heat to disappear in order to live. It has the capacity to live in the heat.</strong>
</p>

<p>That made me think about God&apos;s words in Isaiah:</p>

<blockquote className="border-l-4 border-accent pl-6 py-2 my-8 bg-stone-50 rounded-r-lg shadow-sm italic text-lg text-stone-800">
  "When you walk through the fire, you shall not be burned, nor shall the flame scorch you."
  <footer className="text-right text-sm font-bold text-accent mt-4 not-italic">— Isaiah 43:2</footer>
</blockquote>

<p>
  Notice that God doesn&apos;t say, &ldquo;You will never face the fire.&rdquo;<br/>
  He says, &ldquo;When you walk through the fire&hellip;&rdquo;
</p>

<p>
  Sometimes our prayer is, &ldquo;Lord, take me out of this situation. Remove this pressure. Change these circumstances.&rdquo;
</p>

<p>And sometimes God does.</p>

<p>
  But there are also seasons when the heat remains&mdash;and God gives us grace to live, grow and remain faithful in the middle of it.
</p>

<p>
  Perhaps you are walking through some &ldquo;heat&rdquo; right now&mdash;a family struggle, financial pressure, uncertainty, disappointment, work stress, or a prayer that still seems unanswered.
</p>

<p className="font-bold text-lg text-primary">
  Don&apos;t interpret the presence of the fire as the absence of God.
</p>

<p>God says:</p>

<blockquote className="border-l-4 border-accent pl-6 py-2 my-8 bg-stone-50 rounded-r-lg shadow-sm italic text-lg text-stone-800">
  "When you pass through the waters, I will be with you… when you walk through the fire, you shall not be burned."
</blockquote>

<p>
  The miracle is not always that God removes the fire.<br/>
  Sometimes the miracle is that you walk through it&mdash;and discover that He was with you all along.
</p>

<p>And when you feel that you don&apos;t have enough strength, remember His other promise:</p>

<blockquote className="border-l-4 border-accent pl-6 py-2 my-8 bg-stone-50 rounded-r-lg shadow-sm italic text-lg text-stone-800">
  "My grace is sufficient for you."
  <footer className="text-right text-sm font-bold text-accent mt-4 not-italic">— 2 Corinthians 12:9</footer>
</blockquote>

<p>So perhaps our prayer this week can be:</p>

<p className="font-serif italic text-xl text-center text-stone-600 my-8">
  &ldquo;Lord, if You don&apos;t remove the heat yet, give me the grace to walk faithfully through it.&rdquo;
</p>

<p>
  The fire may be hot.<br/>
  But His grace is sufficient.
</p>

<p>
  Blessings,<br/>
  <strong>Ps Weslyn</strong><br/>
  Vaarthai Evangelical Church
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
    with open("src/app/en/pastors-desk/page.tsx", "w", encoding="utf-8") as f:
        f.write(text)
    print("English updated successfully")
else:
    print("Could not find start or end index for EN")
