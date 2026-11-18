import React from "react";
import { Calendar as CalendarIcon, FileText, ChevronRight, Leaf } from "lucide-react";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  title: "VEC-NL 2026-11 Edition 16 - From the Pastor's Desk",
  description: "Thirty-Three Years… One Week! A faithful heart guards the blessing! — “A good name is rather to be chosen than great riches, and loving favour rather than silver and gold.” — Proverbs 22:1",
  path: "/pastors-desk",
  image: "/edition-16-king.jpg",
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
              From the Pastor&apos;s Desk
            </span>
            <span className="h-px w-8 bg-accent/30"></span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
            Thirty-Three Years&hellip; One Week!
          </h1>
          <p className="text-xl md:text-2xl text-accent font-serif italic mb-8 max-w-2xl mx-auto">
            A faithful heart guards the blessing!
          </p>
          <div className="flex items-center justify-center gap-4 text-sm font-medium text-stone-300">
            <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">VEC-NL • Edition #016</span>
            <span className="flex items-center gap-1"><CalendarIcon className="w-4 h-4 text-accent" /> November 2026</span>
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
                  <span>From the Pastor&apos;s Desk · VEC-NL · Edition #016 · November 2026</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-2 relative z-10 flex items-center gap-2">
                  Thirty-Three Years&hellip; One Week!
                </h2>
                <p className="text-lg md:text-xl font-serif italic text-primary mb-6 relative z-10">
                  A faithful heart guards the blessing!
                </p>
                
                <div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg relative z-10 font-serif">

                  <div className="my-6 rounded-xl overflow-hidden shadow-md border-2 border-stone-200">
                    <img 
                      src="/edition-16-king.jpg" 
                      alt="Thirty-Three Years… One Week! - A Faithful Heart Guards the Blessing" 
                      width={1024}
                      height={1024}
                      fetchPriority="high"
                      decoding="async"
                      className="w-full h-auto object-cover max-h-[500px]" 
                    />
                  </div>

                  <p>
                    Last Thursday, 12 November, a piece of news shook the business world. Jensen Huang, the founder and CEO of Nvidia, stepped down.
                  </p>

                  <p>
                    Much of the artificial intelligence we now use runs on the chips his company makes. He started Nvidia as a small firm in 1993 and, over thirty-three years, built it into the most valuable company in the world. In Asia, fans crowded around him for autographs.
                  </p>

                  <p>
                    But earlier this month he admitted to his staff that he had been unfaithful to his wife. Reports said the relationship was with someone suspected of working for a foreign intelligence service, and the company&apos;s board opened an investigation. Within a week, he walked away from the place he had spent thirty-three years building.
                  </p>

                  <p className="font-medium text-stone-800">
                    In his letter to employees he confessed: &ldquo;My actions hurt her and our children. There is no excuse for what I did.&rdquo;
                  </p>

                  <p>
                    I do not write this to mock or to judge anyone. A man&apos;s fall is, first of all, a deep wound to his family. But this story loudly reminds every one of us of truths the Bible has always told.
                  </p>

                  <p>
                    <strong className="text-primary">What is hidden will come to light.</strong> Moses told Israel, &ldquo;Be sure your sin will find you out&rdquo; (Numbers 32:23). Something kept secret was, within weeks, in every newspaper in the world. Where there are no cameras, the eyes of God are still there.
                  </p>

                  <p className="font-semibold text-primary">
                    A good name is worth more than wealth.
                  </p>

                  <blockquote className="border-l-4 border-accent pl-6 py-2 my-8 bg-stone-50 rounded-r-lg shadow-sm italic text-lg text-stone-800">
                    &ldquo;A good name is rather to be chosen than great riches, and loving favour rather than silver and gold.&rdquo;
                    <footer className="text-right text-sm font-bold text-accent mt-4 not-italic">— Proverbs 22:1</footer>
                  </blockquote>

                  <p>
                    One of the richest men on earth had everything: money, fame and power. Yet no amount of money could buy back the trust he lost. Trust is built over many years; it can collapse in a single wrong decision.
                  </p>

                  <p>
                    <strong className="text-primary">A fall rarely happens in one day.</strong> Think of King David. He was at the height of his success. In the season when kings go out to battle, he stayed home in Jerusalem (2 Samuel 11:1). One look from the rooftop; then a decision; then another sin to cover the first. In the end the prophet Nathan stood before him and said, &ldquo;You are the man!&rdquo; (2 Samuel 12:7).
                  </p>

                  <p>
                    Great falls usually begin with small compromises. A message sent because &ldquo;no one will know.&rdquo; A chat history deleted. A friendship we tell ourselves is &ldquo;perfectly harmless.&rdquo; So Paul warns, &ldquo;Let him that thinketh he standeth take heed lest he fall&rdquo; (1 Corinthians 10:12).
                  </p>

                  <p>
                    <strong className="text-primary">But the story does not have to end there!</strong> David&apos;s story did not end with Nathan&apos;s words. Without excuses he confessed, &ldquo;I have sinned against the LORD&rdquo; (2 Samuel 12:13). Out of that broken heart came Psalm 51.
                  </p>

                  <p>
                    There is a great difference between being exposed and confessing. When the world drags our sin into the light, shame follows. When we bring it into God&apos;s light ourselves, forgiveness follows. &ldquo;He that covereth his sins shall not prosper: but whoso confesseth and forsaketh them shall have mercy&rdquo; (Proverbs 28:13).
                  </p>

                  <p>
                    Apologising to people matters. But our deepest need is to be reconciled to God. Jesus Christ carried all our sin and shame on the cross. &ldquo;If we confess our sins, he is faithful and just to forgive us our sins, and to cleanse us from all unrighteousness&rdquo; (1 John 1:9).
                  </p>

                  <p>
                    Dear Vaarthai family, none of us runs a global corporation. But each of us has a family, a name and a witness to guard. If your spouse picked up your phone, would you be at peace? At work, in our finances and in our friendships, are we the same person when no one is watching?
                  </p>

                  <p>
                    If there is a struggle inside you that no one knows about, do not wait until it comes out. Bring it to the Lord today. Open up to a trusted, mature believer or to your pastor (James 5:16). Sin that is confessed loses its power.
                  </p>

                  <p className="font-medium text-stone-800">
                    This week, let us pray for the family that is hurting. And let us pray for him too: that he finds not only people&apos;s forgiveness, but God&apos;s grace.
                  </p>

                  <div className="bg-stone-100 p-6 rounded-xl border-l-4 border-primary my-8 space-y-2">
                    <p className="text-sm font-bold uppercase tracking-wider text-primary m-0">Reflection</p>
                    <p className="text-base md:text-lg font-medium text-stone-800 m-0">
                      Is there anything I am hiding that, if it came out one day, would wound my family and my witness? What is the first step I need to take today to bring it into God&apos;s light?
                    </p>
                  </div>

                  <div className="bg-accent/10 p-6 rounded-xl border border-accent/30 my-8 space-y-2">
                    <p className="text-sm font-bold uppercase tracking-wider text-accent-dark m-0">Prayer</p>
                    <p className="text-base md:text-lg italic text-stone-800 m-0">
                      Heavenly Father, you see us even when no one else does. Search our hearts and show us the sins we have hidden. Give us strength to confess them and to turn from them rather than cover them. Help us honour you above all else, and use every blessing you give for your glory. Comfort the family wounded in this week&apos;s news. Keep our marriages and our homes faithful. We pray in Jesus&apos; name. Amen.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-200">
                    <p className="font-bold text-primary mb-1">
                      Ps. Weslyn | Vaarthai Evangelical Church
                    </p>
                    <p className="text-sm font-bold text-accent tracking-wider">
                      Listen | Live | Share
                    </p>
                  </div>

                  <div className="mt-12 rounded-xl overflow-hidden shadow-md border-2 border-stone-200 aspect-video">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/gM7gt_cSxjw" 
                      title="YouTube video player" 
                      loading="lazy"
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                    ></iframe>
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
                  <h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mb-2 pl-2">November 2026</h4>
                  <Link href="/en/pastors-desk" className="group flex items-start gap-2 p-3 rounded-md bg-stone-50 border border-stone-200 hover:border-accent hover:bg-accent/5 transition-colors">
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-900 font-bold group-hover:text-primary transition-colors">Edition 16</p>
                      <p className="text-xs text-stone-500">Nov 2026</p>
                    </div>
                  </Link>

                  <h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mt-6 mb-2 pl-2 border-t border-stone-100 pt-4">October 2026</h4>
                  <Link href="/en/pastors-desk/archive/october/edition-15" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 15</p>
                      <p className="text-xs text-stone-500">Oct 2026</p>
                    </div>
                  </Link>
                  <Link href="/en/pastors-desk/archive/october/edition-14" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 14</p>
                      <p className="text-xs text-stone-500">Oct 2026</p>
                    </div>
                  </Link>
                  <Link href="/en/pastors-desk/archive/october/edition-13" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 13</p>
                      <p className="text-xs text-stone-500">Oct 2026</p>
                    </div>
                  </Link>
                  <Link href="/en/pastors-desk/archive/october/edition-12" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 12</p>
                      <p className="text-xs text-stone-500">Oct 2026</p>
                    </div>
                  </Link>

                  <h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mt-6 mb-2 pl-2 border-t border-stone-100 pt-4">September 2026</h4>
                  <Link href="/en/pastors-desk/archive/september/edition-11" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 11</p>
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
