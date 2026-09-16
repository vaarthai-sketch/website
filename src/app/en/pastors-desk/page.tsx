import React from "react";
import { Calendar as CalendarIcon, FileText, ChevronRight, Globe } from "lucide-react";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  title: "VEC-NL 2026-09 Edition 11 - From the Pastor's Desk",
  description: "Have the competition and tensions among nations on Earth now extended into space?",
  path: "/en/pastors-desk",
  image: "/edition-11-joe-marino.jpg"
});

export default function PastorsDeskPage() {
  return (
    <main className="min-h-screen bg-stone-50 py-12">
      <section 
        className="relative text-white py-16 md:py-24 text-center overflow-hidden bg-cover bg-center bg-no-repeat bg-[#0F172A]"
        style={{ backgroundImage: "url('/pastor-desk-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0F172A]/70 mix-blend-multiply"></div>
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
            WE HAVE REACHED THE HEAVENS—BUT HAVE WE FOUND PEACE?
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 font-serif italic mb-8 max-w-2xl mx-auto">
            Have the competition and tensions among nations on Earth now extended into space?
          </p>
          <div className="flex items-center justify-center gap-4 text-sm font-medium text-stone-300">
            <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">VEC-NL • Edition #011</span>
            <span className="flex items-center gap-1"><CalendarIcon className="w-4 h-4 text-accent" /> செப்டம்பர் 2026</span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6 md:p-10 text-stone-800">
              <div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg relative z-10">
                
<div className="my-6">
  <div className="rounded-xl overflow-hidden shadow-md border-2 border-stone-200 bg-white">
    <img src="/edition-11-joe-marino.jpg" alt="Photograph: Joe Marino" className="w-full h-auto object-cover max-h-[500px]" />
  </div>
  <p className="text-right text-xs text-stone-400 mt-2 italic">
    Photograph: Joe Marino
  </p>
</div>

<p className="mb-4">This week, a significant announcement captured international attention. The United States publicly confirmed for the first time that it has deployed weapons capable of operating in space. The announcement described them as “on-orbit space control weapons,” but did not disclose what the weapons are or how they operate. It has nevertheless raised an important question: Have the competition and tensions among nations on Earth now extended into space?</p>

<p className="mb-4">Space once represented humanity’s wonder, scientific exploration and desire to discover the unknown. Today, it is increasingly becoming part of conversations about defence, power and military competition.</p>

<p className="mb-4 font-bold text-stone-900 text-lg">Humanity has reached the heavens—but has the human heart found peace?</p>

<p className="mb-4">Psalm 19:1 declares, “The heavens declare the glory of God; and the firmament shows His handiwork.” When David looked at the heavens, he saw the glory of God. Yet when humanity looks at those same heavens, we can begin to ask how we might establish our power there or defend ourselves against our enemies.</p>

<p className="mb-4">Even into the place where God displays His glory, humanity carries its fears and conflicts. The heavens have not changed; it is the human heart that needs to change.</p>

<p className="mb-4">Humanity has made extraordinary progress in science and technology. Yet scientific advancement does not automatically remove selfishness, pride, fear or the desire for power.</p>

<p className="mb-4">James 4:1 asks, “Where do wars and fights come from among you? Do they not come from your desires for pleasure that war in your members?” The Bible does not treat war merely as a problem between nations; it also reveals its roots within the human heart.</p>

<p className="mb-4">Technology magnifies what is already present within the hearts of those who use it. In loving hands, it can preserve life. In hearts governed by fear and hostility, the same technology can become an instrument of destruction.</p>

<p className="mb-4 font-bold text-stone-900 text-lg">New technology may give humanity new abilities, but only Jesus Christ can give us a new heart.</p>

<p className="mb-4">The world often believes that peace can be secured through greater power and stronger defences. We do not deny that nations require protection or that leaders must make complex decisions. Weapons may deter certain attacks, but they cannot remove hostility from the human heart.</p>

<p className="mb-4">This is why Jesus said:</p>

<blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700 mb-6">
  <p>“Peace I leave with you, My peace I give to you; not as the world gives do I give to you. Let not your heart be troubled, neither let it be afraid.”</p>
  <p className="mt-2 text-right text-sm">— John 14:27</p>
</blockquote>

<p className="mb-4">The peace Jesus gives does not mean a life without difficulties. It is born from being reconciled to God. His peace governs our fears, quietens our anger and transforms hostility into forgiveness. This is why Ephesians 2:14 says, “For He Himself is our peace.”</p>

<p className="mb-4 font-bold text-stone-900 text-lg">Peace is not merely a policy or an idea; peace is a Person—Jesus Christ.</p>

<p className="mb-4">The prophet Isaiah presents a beautiful picture of the future under God’s reign:</p>

<blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700 mb-6">
  <p>“They shall beat their swords into ploughshares, and their spears into pruning hooks; nation shall not lift up sword against nation, neither shall they learn war anymore.”</p>
  <p className="mt-2 text-right text-sm">— Isaiah 2:4</p>
</blockquote>

<p className="mb-4">The sword becomes a ploughshare. What was used to destroy is used to cultivate. What once produced death becomes an instrument that sustains life. This is the transformation promised under Christ's reign.</p>

<p className="mb-4">We may not determine what nations place in space. But we can decide to cultivate peace within our homes, our church and our relationships.</p>

<p className="mb-4">Jesus said, “Blessed are the peacemakers” (Matthew 5:9). Peacemakers are not people who avoid difficult issues. They speak the truth in love, take the initiative to forgive and seek to restore broken relationships.</p>

<p className="mb-4">Before we pray for peace among the nations, let us ask ourselves:</p>

<p className="font-bold text-lg text-center text-stone-800 border-y border-stone-200 py-4 my-6">With whom do I need to make peace?</p>

<p className="mb-4">Is there a telephone call we need to make? Do we need to ask someone for forgiveness? Is there resentment we need to release? Do we need to take the first step towards repairing a broken relationship?</p>

<p className="mb-4">Humanity has reached the heavens, yet it continues to search for the way to peace. Jesus did not merely show us that way—He came to be our peace.</p>

<p className="mb-4">While the world places weapons in the heavens, may the Church sow seeds of peace upon the earth.</p>

<h3 className="text-xl md:text-2xl font-bold text-stone-900 mt-10 mb-4 border-b border-stone-200 pb-2">PRAYER POINTS</h3>
<ul className="list-disc pl-6 space-y-2 text-stone-700 mb-8">
  <li>Pray that world leaders will act with wisdom, restraint and responsibility.</li>
  <li>Pray that space will not become another battlefield but will be used for the good of humanity.</li>
  <li>Pray for people affected by war and international conflict.</li>
  <li>Pray for reconciliation within broken families, churches and communities.</li>
  <li>Pray that we will not merely speak about peace but actively become peacemakers.</li>
</ul>

<h3 className="text-xl md:text-2xl font-bold text-stone-900 mt-10 mb-4 border-b border-stone-200 pb-2">CLOSING PRAYER</h3>
<p className="mb-4">God of peace, the heavens and the earth belong to You. Give wisdom and responsibility to the leaders of the nations. Protect those whose lives are affected by war, threats and conflict.</p>

<p className="mb-4">Lord Jesus, You are our peace. Remove the pride, anger, fear and hostility within our hearts. Make us not merely people who speak about peace, but people who create peace.</p>

<p className="mb-4">Use us to sow Your peace in our homes, our church and our community. May our confidence rest not in human power, but in You—the Prince of Peace.</p>

<p className="mb-8">In Jesus’ name, amen.</p>

<div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl mt-8 mb-8 shadow-md border-2 border-stone-200">
  <iframe 
    className="absolute top-0 left-0 w-full h-full" 
    src="https://www.youtube.com/embed/2xoqMtOyiR8" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen>
  </iframe>
</div>

              </div>
            </div>
          </div>
          
          <aside className="lg:col-span-4 space-y-8">

              <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6">
                <h3 className="font-bold text-lg text-stone-900 mb-4 pb-2 border-b border-stone-100 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-accent" />
                  மொழி / Language
                </h3>
                <div className="flex flex-col gap-3">
                  <Link href="/en/pastors-desk" className="flex items-center justify-between p-3 rounded-lg border border-stone-200 hover:border-accent hover:bg-accent/5 transition-all group">
                    <span className="font-medium text-stone-700 group-hover:text-accent">Tamil</span>
                    <span className="text-xs bg-stone-100 px-2 py-1 rounded text-stone-500">Current</span>
                  </Link>
                  <Link href="/en/pastors-desk" className="flex items-center justify-between p-3 rounded-lg border border-stone-200 hover:border-accent hover:bg-accent/5 transition-all group">
                    <span className="font-medium text-stone-700 group-hover:text-accent">English</span>
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6">
                <h3 className="font-bold text-lg text-stone-900 mb-4 pb-2 border-b border-stone-100 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent" />
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

            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6">
              <NewsletterForm />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
