import React from "react";
import { Calendar as CalendarIcon, FileText, ChevronRight, Leaf, Coffee } from "lucide-react";
import Link from "next/link";

import { NewsletterForm } from "@/components/NewsletterForm";
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: "VEC-NL 2026-08 Edition 7 - Pastor's Desk",
  description: "Sharpen the Axe - Ecclesiastes 10:10",
  path: '/en/pastors-desk',
  image: '/sharpen-axe.jpg'
});

export default function EnglishPastorsDeskPage() {
  return (
    <main className="min-h-screen bg-stone-50 py-12">
      {/* Header section */}
      <section 
        className="relative text-white py-16 md:py-24 text-center overflow-hidden bg-cover bg-center bg-no-repeat bg-[#0F172A]"
        style={{ backgroundImage: "url('/pastor-desk-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0F172A]/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-[#0F172A]/30"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
            From the Pastor's Desk
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-stone-200 font-medium">
            Weekly letter and church updates from the Pastor.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Newsletter Content */}
            <div className="lg:col-span-3">
              <div className="bg-gradient-to-br from-stone-50 via-white to-stone-100 rounded-lg shadow-sm border border-stone-200 p-6 md:p-10 mb-8 relative overflow-hidden">
                {/* Decorative Elements */}
                <Coffee className="absolute top-4 right-4 text-stone-200 w-16 h-16 opacity-30" />
                <Coffee className="absolute bottom-10 left-4 text-stone-200 w-24 h-24 opacity-30" />
                
                <div className="flex items-center gap-2 text-sm text-stone-600 font-bold mb-4 relative z-10">
                  <CalendarIcon className="w-4 h-4" />
                  <span>VEC-NL 2026-08 · Edition 7</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-6 relative z-10 flex items-center gap-2">
                  <Coffee className="w-8 h-8 text-stone-700" />
                  Sharpen the Axe
                </h2>
                
                <div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg relative z-10">

                  <div className="my-6 rounded-xl overflow-hidden shadow-md border-2 border-stone-200">
                    <img src="/sharpen-axe.jpg" alt="Sharpen the Axe" className="w-full h-auto object-cover max-h-[500px]" />
                  </div>

<blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700">
                  <p>“If an axe has grown blunt and its edge has not been sharpened, more strength will be needed to cut with it. But wisdom brings success.”</p>
                  <p className="mt-2 text-right text-sm">— Ecclesiastes 10:10</p>
                </blockquote>

                <p>The American President Abraham Lincoln once said: “Give me six hours to chop down a tree, and I will spend the first four sharpening the axe.” These words are simple, but they carry deep wisdom.</p>

                <p>Every day there is something to be done. Work, responsibilities, challenges — there are always trees to be cut down!</p>

                <p>But what if the axe is blunt?</p>

                <blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700">
                  <p>“If the iron be blunt, and he do not whet the edge, then must he put to more strength…”</p>
                  <p className="mt-2 text-right text-sm">— Ecclesiastes 10:10</p>
                </blockquote>

                <p>Sometimes the problem is not the size of the tree; it is the condition of the axe.</p>

                <p>Every day there may be things I need to get done. But before I begin them, the question I must ask is this:</p>

                <p><strong>Have I sharpened myself to face today?</strong></p>

                <p>One of the most important things that sharpens a believer is the Word of God.</p>

                <blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700">
                  <p>“Be transformed by the renewing of your mind.”</p>
                  <p className="mt-2 text-right text-sm">— Romans 12:2</p>
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

                {/* Attached Song Audio Card */}
                <div className="my-6 bg-accent/10 border border-accent/30 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 shadow-sm not-prose">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shrink-0 text-primary shadow-md">
                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                    </svg>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h4 className="font-bold text-primary text-base sm:text-lg m-0">Kaalai Thorum Yesuve - Morning Meditation Song</h4>
                    <p className="text-xs sm:text-sm text-stone-600 m-0 mt-1">Lyrics & Tune: Ps. Jeyakaran Weslyn</p>
                  </div>
                  <div className="w-full sm:w-auto mt-2 sm:mt-0">
                    <audio controls preload="metadata" className="w-full sm:w-64 h-10 rounded-lg">
                      <source src="/kaalai-thorum-yesuve.mp3" type="audio/mpeg" />
                      <source src="/kalai-thorum-yesuve.mp3" type="audio/mpeg" />
                      <source src="/meditation-song.mp3" type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>

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
                  
                  <div className="mt-6 pt-6 border-t border-stone-200 flex items-center gap-4 not-prose relative z-10">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-stone-300 shrink-0 shadow-sm bg-white">
                       <img src="/staff-pastor.png" alt="Ps. Jeyakaran Weslyn" className="w-full h-full object-cover object-top" />
                    </div>
                    <div>
                      <p className="font-bold text-stone-800 m-0 text-lg">Ps. Jeyakaran Weslyn</p>
                      <p className="text-sm text-stone-600 m-0">Senior Pastor, Vaarthai Evangelical Church Inc</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Sidebar Area */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-border p-6 sticky top-24 sidebar-placeholder-en">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent-dark" />
                  Archive
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
                
                <div className="mt-8 pt-8 border-t border-stone-200">
                  <h4 className="font-bold text-sm text-primary mb-3">Subscribe</h4>
                  <NewsletterForm />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
