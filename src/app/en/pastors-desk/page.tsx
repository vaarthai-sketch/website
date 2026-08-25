import React from "react";
import { Calendar as CalendarIcon, FileText, ChevronRight, Globe, Leaf, Coffee } from "lucide-react";
import Link from "next/link";
import { churchConfig } from "@/data/config";
import { NewsletterForm } from "@/components/NewsletterForm";
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  locale: 'en',
  path: '/en/pastors-desk',
  title: "VEC-NL 2026-08 Edition 7 - Pastor's Desk | Vaarthai Evangelical Church Inc",
  description: `Sharpen the Axe - “If an axe has grown blunt and its edge has not been sharpened, more strength will be needed to cut with it.” (Ecclesiastes 10:10)`,
  image: "/sharpen-axe.jpg",
});

export default function EnglishPastorsDeskPage() {
  return (
    <main className="min-h-screen bg-stone-50 py-12">
      {/* Header section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-6">
            <span className="h-px w-8 bg-accent/30"></span>
            <span className="text-accent font-bold tracking-widest uppercase text-sm flex items-center gap-2">
              <FileText className="w-4 h-4" />
              From the Pastor's Desk
            </span>
            <span className="h-px w-8 bg-accent/30"></span>
          </div>
          <h1 className="text-4xl md:text-5xl font-serif text-primary font-bold mb-6 leading-tight">
            Sharpen the Axe
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-4 text-stone-500 font-medium">
            <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full shadow-sm border border-stone-100">
              <CalendarIcon className="w-4 h-4 text-accent" />
              <span>August 26, 2026</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full shadow-sm border border-stone-100">
              <span className="text-accent font-bold">#</span>
              <span>Edition 007</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full shadow-sm border border-stone-100">
              <Coffee className="w-4 h-4 text-accent" />
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Article Content */}
          <article className="lg:w-2/3 bg-white rounded-2xl shadow-sm border border-stone-100 overflow-hidden">
            {/* Hero Image */}
            <div className="aspect-[16/9] w-full bg-stone-100 relative overflow-hidden">
              <img 
                src="/sharpen-axe.jpg" 
                alt="Sharpen the Axe" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8 md:p-12">
              <div className="prose prose-stone max-w-none prose-lg
                prose-headings:font-serif prose-headings:text-primary 
                prose-p:text-stone-600 prose-p:leading-relaxed prose-p:mb-6
                prose-blockquote:border-l-accent prose-blockquote:bg-stone-50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg prose-blockquote:italic prose-blockquote:text-stone-700
                prose-strong:text-primary
                prose-li:text-stone-600
                prose-a:text-accent hover:prose-a:text-accent-dark">
                
                <blockquote>
                  <p>“If an axe has grown blunt and its edge has not been sharpened, more strength will be needed to cut with it. But wisdom brings success.”</p>
                  <footer>— Ecclesiastes 10:10</footer>
                </blockquote>

                <p>The American President Abraham Lincoln once said: “Give me six hours to chop down a tree, and I will spend the first four sharpening the axe.” These words are simple, but they carry deep wisdom.</p>

                <p>Every day there is something to be done. Work, responsibilities, challenges — there are always trees to be cut down!</p>

                <p>But what if the axe is blunt?</p>

                <blockquote>
                  <p>“If the iron be blunt, and he do not whet the edge, then must he put to more strength…”</p>
                  <footer>— Ecclesiastes 10:10</footer>
                </blockquote>

                <p>Sometimes the problem is not the size of the tree; it is the condition of the axe.</p>

                <p>Every day there may be things I need to get done. But before I begin them, the question I must ask is this:</p>

                <p><strong>Have I sharpened myself to face today?</strong></p>

                <p>One of the most important things that sharpens a believer is the Word of God.</p>

                <blockquote>
                  <p>“Be transformed by the renewing of your mind.”</p>
                  <footer>— Romans 12:2</footer>
                </blockquote>

                <p>Every day, something is shaping our minds. News, social media, worries, disappointments, the pressures of life — all of them begin to crowd in on us the moment we wake in the morning.</p>

                <p>That is why the Word of God must shape us before we go out to face the day.</p>

                <p>His Word renews our thinking; it corrects our vision; it strengthens our faith; it gives wisdom for our decisions.</p>

                <p>We may think, “There is so much work today; there is no time to read the Bible or to pray.” But that is like saying,</p>

                <p><em>“There are so many trees to cut down; there is no time to sharpen the axe!”</em></p>

                <p>Time spent with God is not wasted time. It is the preparation time for everything else.</p>

                <p>So this week, before you pick up your to-do list, pick up the Word of God.</p>

                <p>Read.</p>
                <p>Meditate.</p>
                <p>Pray.</p>

                <p>Before you act, be with Him.</p>

                <p>Before you cut down the tree, sharpen the axe!</p>

                <p className="mt-8 font-bold">With blessings,<br/>Pastor Weslyn<br/>Vaarthai Evangelical Church</p>

                <hr className="my-8 border-stone-200" />

                <div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-accent" />
                    THIS WEEK'S PRACTICE
                  </h3>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Set aside 15 minutes each morning for reading Scripture.</li>
                    <li>Begin your work with a short prayer before you start.</li>
                    <li>Before asking “What must I accomplish?”, ask “Who am I walking with?”</li>
                  </ul>
                </div>

                <div className="bg-stone-50 p-6 rounded-xl border border-stone-100 mt-6">
                  <h3 className="text-xl font-bold text-primary mb-4">PRAYER POINTS</h3>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>For the young families of our church.</li>
                    <li>For wisdom, that our senior members would guide the younger generation rightly.</li>
                    <li>That the children and young people of our church would be touched by God.</li>
                  </ul>
                </div>

                <div className="bg-stone-50 p-6 rounded-xl border border-stone-100 mt-6">
                  <h3 className="text-xl font-bold text-primary mb-4">ANNOUNCEMENTS</h3>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Please join us through Zoom on Wednesday evenings for “Psalms Meditations and Prayer.”</li>
                    <li>You are kindly asked to help our Sunday morning service begin promptly at 10:00 am.</li>
                  </ul>
                </div>

              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            {/* Subscribe Widget */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 text-accent">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif text-primary font-bold mb-2">Subscribe</h3>
              <p className="text-stone-600 text-sm mb-6 leading-relaxed">
                Receive the Pastor's Desk weekly directly in your inbox.
              </p>
              <NewsletterForm isEn={true} />
            </div>

            {/* Archives Widget */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
              <h3 className="text-lg font-serif text-primary font-bold mb-4 flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-accent" />
                Recent Editions
              </h3>
              <div className="space-y-3">
                  <Link href="/en/pastors-desk" className="group flex items-start gap-2 p-3 rounded-md bg-stone-50 border border-stone-200 hover:border-accent hover:bg-accent/5 transition-colors">
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-900 font-bold group-hover:text-primary transition-colors">Edition 7</p>
                      <p className="text-xs text-stone-500">Aug 2026</p>
                    </div>
                  </Link>
                  <Link href="/en/pastors-desk/archive/august/edition-6" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 6</p>
                      <p className="text-xs text-stone-500">Aug 2026</p>
                    </div>
                  </Link>
                  <Link href="/en/pastors-desk/archive/august/edition-5" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 5</p>
                      <p className="text-xs text-stone-500">Aug 2026</p>
                    </div>
                  </Link>
                  <Link href="/en/pastors-desk/archive/august/edition-4" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 4</p>
                      <p className="text-xs text-stone-500">Aug 2026</p>
                    </div>
                  </Link>

                  <h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mt-6 mb-2 pl-2 border-t border-stone-100 pt-4">July 2026</h4>
                  <Link href="/en/pastors-desk/archive/july/edition-3" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 3</p>
                      <p className="text-xs text-stone-500">Jul 2026</p>
                    </div>
                  </Link>
                  <Link href="/en/pastors-desk/archive/july/edition-2" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 2</p>
                      <p className="text-xs text-stone-500">Jul 2026</p>
                    </div>
                  </Link>
                  <Link href="/en/pastors-desk/archive/july/edition-1" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 1</p>
                      <p className="text-xs text-stone-500">Jul 2026</p>
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
