import React from "react";
import { Calendar as CalendarIcon, FileText, ChevronRight, Leaf, Globe, Droplet, Coffee } from "lucide-react";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  title: "VEC-NL 2026-09 Edition 11 - From the Pastor's Desk",
  description: "Finding Peace in a Shifting World",
  path: "/en/pastors-desk",
  image: "/un-assembly.webp"
});

export default function PastorsDeskPage() {
  return (
    <main className="min-h-screen bg-stone-50 py-12">
      <section 
        className="relative text-white py-16 md:py-24 text-center overflow-hidden bg-cover bg-center bg-no-repeat bg-[#0F172A]"
        style={{ backgroundImage: "url('/pastor-desk-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0F172A]/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-[#0F172A]/30"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center justify-center gap-2 mb-6">
            <span className="h-px w-8 bg-accent/30"></span>
            <span className="text-accent font-bold tracking-widest uppercase text-sm flex items-center gap-2">
              <FileText className="w-4 h-4" />
              From the Pastor's Desk
            </span>
            <span className="h-px w-8 bg-accent/30"></span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            FINDING PEACE IN A SHIFTING WORLD
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 font-serif italic mb-8 max-w-2xl mx-auto">
            A search for stability in systems that feel increasingly fragile.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm font-medium text-stone-300">
            <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">VEC-NL • Edition #011</span>
            <span className="flex items-center gap-1"><CalendarIcon className="w-4 h-4 text-accent" /> செப்டம்பர் 2026</span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          <article className="lg:w-2/3 bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
            <div className="p-8 md:p-12 space-y-8 text-stone-700 leading-relaxed text-lg">
              
              <div className="bg-gradient-to-br from-stone-50 via-white to-stone-100 rounded-lg shadow-sm border border-stone-200 p-6 md:p-10 mb-8 relative overflow-hidden">
                <Leaf className="absolute top-4 right-4 text-stone-200 w-16 h-16 opacity-30" />
                <Leaf className="absolute bottom-10 left-4 text-stone-200 w-24 h-24 opacity-30" />
                
                <div className="flex items-center gap-2 text-sm text-stone-600 font-bold mb-4 relative z-10">
                  <CalendarIcon className="w-4 h-4" />
                  <span>VEC-NL 2026-09 · Edition 11</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-6 relative z-10 flex items-center gap-2">
                  FINDING PEACE IN A SHIFTING WORLD
                </h2>
                
                <div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg relative z-10 font-serif">

<div className="my-6 rounded-xl overflow-hidden shadow-md border-2 border-stone-200">
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


                </div>
              </div>
            </div>
          </article>
          
          <aside className="lg:w-1/3 space-y-8">
            <NewsletterForm />

            <div className="bg-white rounded-xl shadow-sm border border-stone-200 p-6">
              <h3 className="font-serif text-xl font-bold text-primary mb-6 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-accent" />
                Previous Editions
              </h3>
              <div className="space-y-3">
                  <h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mb-2 pl-2">September 2026</h4>
                  <Link href="/en/pastors-desk" className="group flex items-start gap-2 p-3 rounded-md bg-stone-50 border border-stone-200 hover:border-accent hover:bg-accent/5 transition-colors">
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-900 font-bold group-hover:text-primary transition-colors">Edition 11</p>
                      <p className="text-xs text-stone-500">Sep 2026</p>
                    </div>
                  </Link>
                  <Link href="/en/pastors-desk/archive/september/edition-10" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 10</p>
                      <p className="text-xs text-stone-500">Sep 2026</p>
                    </div>
                  </Link>
                  <Link href="/en/pastors-desk/archive/september/edition-9" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 9</p>
                      <p className="text-xs text-stone-500">Sep 2026</p>
                    </div>
                  </Link>
                  <Link href="/en/pastors-desk/archive/september/edition-8" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 8</p>
                      <p className="text-xs text-stone-500">Sep 2026</p>
                    </div>
                  </Link>

                  <h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mt-6 mb-2 pl-2 border-t border-stone-100 pt-4">August 2026</h4>
                  <Link href="/en/pastors-desk/archive/august/edition-7" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 7</p>
                      <p className="text-xs text-stone-500">Aug 2026</p>
                    </div>
                  </Link>
                </div>
              </div>

          </aside>
          
        </div>
      </section>
    </main>
  );
}
