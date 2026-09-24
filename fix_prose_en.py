import re

with open("src/app/en/pastors-desk/page.tsx", "r", encoding="utf-8") as f:
    text = f.read()

new_prose = """<div className="my-6 rounded-xl overflow-hidden shadow-md border-2 border-stone-200">
  <img src="/un-assembly.webp" alt="UN General Assembly" className="w-full h-auto object-cover max-h-[500px]" />
</div>

<h3 className="text-xl font-bold text-primary mt-8 mb-4 border-b pb-2">The World This Week: A Search for Stability</h3>
<p>
  This week, global leaders are gathered in New York for the United Nations General Assembly, and the dominant themes reflect a world grappling with deep uncertainty. Discussions have centred on rising geopolitical tensions in the Middle East, the urgent realities of extreme weather following a year of record-breaking climate events, and the unpredictable, disruptive potential of new technologies like AI. Across these diverse issues, a single thread unites the global conversation: a search for stability in systems that feel increasingly fragile.
</p>

<h3 className="text-xl font-bold text-primary mt-8 mb-4 border-b pb-2">Devotional Reflection: The Rock Eternal</h3>
<p>
  When we read the news of international conflicts, environmental crises and rapid technological shifts, it is easy to let the anxiety of the world become our own. The headlines remind us daily that human institutions, no matter how powerful or well-intentioned, are inherently limited in their ability to guarantee true peace.
</p>

<blockquote className="border-l-4 border-accent pl-6 py-2 my-8 bg-stone-50 rounded-r-lg shadow-sm italic text-lg text-stone-800">
  "You will keep in perfect peace those whose minds are steadfast, because they trust in you. Trust in the LORD forever, for the LORD, the LORD himself, is the Rock eternal."
  <footer className="text-right text-sm font-bold text-accent mt-4 not-italic">— Isaiah 26:3–4</footer>
</blockquote>

<p>
  Isaiah did not write these words in a season of calm. While world empires rose and fell around Judah, he gave God&apos;s people a song to sing &ldquo;in that day&rdquo; (26:1). The peace he promises does not come from circumstances changing; it comes from a mind that is steadfastly fixed on the LORD.
</p>
<p>
  That is why the phrase &ldquo;the Rock eternal&rdquo; matters so much today. The economy, international diplomacy and technology are like sand: standing today, liable to shift tomorrow. But the LORD is the unchanging Rock. Our trust is not anchored to the temporary stability of the world&apos;s systems, but to His eternal Word.
</p>

<blockquote className="border-l-4 border-accent pl-6 py-2 my-8 bg-stone-50 rounded-r-lg shadow-sm italic text-lg text-stone-800">
  "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world."
  <footer className="text-right text-sm font-bold text-accent mt-4 not-italic">— John 16:33</footer>
</blockquote>

<p>
  Jesus never promised a world without trouble; He promised peace in Himself, the One who has overcome the world. The world is still searching for stability — we have already found our refuge.
</p>

<h3 className="text-xl font-bold text-primary mt-8 mb-4 border-b pb-2">Application for This Week</h3>
<ul className="space-y-4">
  <li className="flex gap-3"><span className="text-accent font-bold">◆</span><span><strong>Consume with discernment:</strong> When reading the news this week, intentionally pause to bring your anxieties to God rather than carrying the weight of the world on your shoulders.</span></li>
  <li className="flex gap-3"><span className="text-accent font-bold">◆</span><span><strong>Be a presence of peace:</strong> In a culture gripped by anxiety about the future, let your calm trust in God&apos;s providence be a testimony of hope to those around you.</span></li>
  <li className="flex gap-3"><span className="text-accent font-bold">◆</span><span><strong>Hide the Word in your heart:</strong> Memorise Isaiah 26:3 this week and pray it whenever anxiety rises.</span></li>
</ul>

<h3 className="text-xl font-bold text-primary mt-8 mb-4 border-b pb-2">Weekly Prayer Points</h3>
<ol className="list-decimal pl-5 space-y-2">
  <li>Pray for wisdom for global leaders navigating complex international conflicts and humanitarian crises (1 Timothy 2:1–2).</li>
  <li>Pray for communities vulnerable to extreme weather, that they would receive protection, necessary aid and comfort.</li>
  <li>Pray for our Vaarthai church family, that we would remain deeply rooted in faith and serve as vessels of peace in our neighbourhoods and workplaces.</li>
</ol>

<div className="mt-12 rounded-xl overflow-hidden shadow-md border-2 border-stone-200 aspect-video">
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/w3tKP5xo7mU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
</div>
"""

# Find start and end of prose
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
