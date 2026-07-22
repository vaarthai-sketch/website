import React from "react";
import { Calendar as CalendarIcon, FileText, ChevronRight } from "lucide-react";
import Link from "next/link";
import { churchConfig } from "@/data/config";
import { NewsletterForm } from "@/components/NewsletterForm";
import { LikeButton } from "@/components/LikeButton";

export const metadata = {
  title: "VEC-NL 2026-07 Issue 001 - From the Pastor's Desk | Vaarthai Evangelical Church",
  description: `Weekly letter, reflections, and updates from Senior Pastor Jeyakaran Weslyn at ${churchConfig.name}.`,
};

export default function EnglishPastorsDeskArchive1Page() {
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
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-stone-200">
            Weekly letters, biblical reflections, and pastoral encouragement.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Newsletter Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-sm border border-border p-6 md:p-10 mb-8">
                <div className="flex items-center gap-2 text-sm text-accent-dark font-bold mb-4">
                  <CalendarIcon className="w-4 h-4" />
                  <span>VEC-NL 2026-07 · Issue #001</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">
                  Inaugural Service Message & Reflection
                </h2>
                
                <div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg">
                  <p className="font-medium text-stone-900">
                    Warm greetings to our beloved Vaarthai Church family in the matchless name of our Lord and Savior Jesus Christ!
                  </p>
                  <p>
                    What a blessed and historic Inaugural Worship Service we experienced together on July 5th! My heartfelt thanks to each and every one of you who made it so memorable. This new beginning is a powerful testament to the faith, dedication, and shared vision that united us as a church.
                  </p>
                  <p>
                    As we step into this exciting new chapter, I want to share a brief word of encouragement centered around the very meaning of our church name, &lsquo;Vaarthai&rsquo; (The Word):
                  </p>
                  
                  <blockquote className="bg-accent/5 border-l-4 border-accent p-5 rounded-r-lg text-primary italic font-serif my-6">
                    <p className="mb-2 text-lg md:text-xl font-medium">
                      &ldquo;Your word is a lamp to my feet and a light to my path.&rdquo;
                    </p>
                    <cite className="block text-right font-sans font-bold text-sm text-accent-dark not-italic mt-2">
                      — Psalm 119:105 (ESV)
                    </cite>
                  </blockquote>

                  <p>
                    Just as a lamp dispels darkness and guides every step forward, God&apos;s Word illuminates every circumstance of our lives, bringing wisdom, comfort, and steady direction. It is my fervent prayer that our new church community will remain a beacon of light across Brisbane, shining brightly and serving as a safe harbor for spiritual growth.
                  </p>
                  <p>
                    I encourage you to press forward with full confidence, knowing that our foundation in Christ is unshakable. As we grow, worship, and serve together, may God&apos;s abundant blessings and joy overflow in your homes!
                  </p>
                  <p>
                    Let us also remember the central calling from our inaugural message from Joshua and Acts 1:8: &ldquo;From our mouths to the ends of the earth!&rdquo;
                  </p>
                  <p>
                    This week, make room for God to speak to your heart! Meditate on Scripture every morning. A few years ago, during our daily devotion series &ldquo;Morning with Jesus,&rdquo; I wrote a short song to invite God&apos;s presence before meditation. I have attached the audio below—may it be a blessing to you during your morning quiet time!
                  </p>

                  {/* Attached Song Audio Card */}
                  <div className="my-6 bg-accent/10 border border-accent/30 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 shadow-sm not-prose">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shrink-0 text-primary shadow-md">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                      </svg>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h4 className="font-bold text-primary text-base sm:text-lg m-0">Kaalai Thorum Yesuve (Every Morning with Jesus)</h4>
                      <p className="text-xs sm:text-sm text-stone-600 m-0 mt-1">Lyrics & Composition: Ps. Jeyakaran Weslyn (Morning Meditation Song)</p>
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

                  <LikeButton issueId="issue-001" isEn={true} />

                  <p className="font-medium text-stone-900">
                    You are truly blessed!
                  </p>
                  <p className="pt-2 font-medium text-stone-800">
                    In His Service & Love,
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-stone-200 flex items-center gap-4 not-prose">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-accent shrink-0 shadow-sm">
                      <img src="/staff-pastor.png" alt="Ps. Jeyakaran Weslyn" className="w-full h-full object-cover object-top" />
                    </div>
                    <div>
                      <p className="font-bold text-primary m-0 text-lg">Ps. Jeyakaran Weslyn</p>
                      <p className="text-sm text-stone-500 m-0">Senior Pastor, {churchConfig.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Archive Menu */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-border p-6 sticky top-24">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent-dark" />
                  Past Issues
                </h3>
                <div className="space-y-3">
                  <Link href="/en/pastors-desk" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 mt-0.5 shrink-0 group-hover:text-accent transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Issue #002</p>
                      <p className="text-xs text-stone-500">Jul 2026</p>
                    </div>
                  </Link>
                  <Link href="/en/pastors-desk/archive/issue-001" className="group flex items-start gap-2 p-3 rounded-md bg-stone-50 border border-stone-200 hover:border-accent hover:bg-accent/5 transition-colors">
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-stone-900 group-hover:text-primary transition-colors">Issue #001</p>
                      <p className="text-xs text-stone-500">Jul 2026</p>
                    </div>
                  </Link>
                </div>

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
