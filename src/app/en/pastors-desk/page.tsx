import React from "react";
import { Calendar as CalendarIcon, FileText, ChevronRight } from "lucide-react";
import Link from "next/link";
import { churchConfig } from "@/data/config";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata = {
  title: "From the Pastor's Desk | Vaarthai Evangelical Church",
  description: `Weekly letter, reflections, and updates from Senior Pastor Jeyakaran Weslyn at ${churchConfig.name}.`,
};

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
                  <span>VEC-NL 2026-07 · Issue #002</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">
                  The Church's One Foundation is Jesus Christ
                </h2>
                
                <div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg">
                  <p className="font-medium text-stone-900">
                    Dear Vaarthai Family,
                  </p>
                  <p>
                    I greet you in the incomparable name of Jesus Christ!
                  </p>
                  <p>
                    Last night, the Lord brought to my mind an old hymn. Here are its words...
                  </p>
                  <blockquote className="bg-stone-50 border-l-4 border-stone-300 p-4 rounded-r-lg italic font-serif">
                    <p className="whitespace-pre-line leading-relaxed text-stone-600">
                      The Church's one foundation<br/>
                      Is Jesus Christ her Lord;<br/>
                      She is His new creation<br/>
                      By water and the Word:<br/>
                      From heaven He came and sought her<br/>
                      To be His holy bride;<br/>
                      With His own blood He bought her,<br/>
                      And for her life He died.
                    </p>
                  </blockquote>

                  <p>
                    In 1866, a pastor named Samuel John Stone wrote a hymn — "The Church's one foundation is Jesus Christ her Lord." But it was not written in the joy of triumph. In those days the church was being shaken by divisions and by disputes over the authority of Scripture. This hymn is a confession of faith written in the very midst of that struggle.
                  </p>
                  <p>
                    Its central message is simple, yet profound: the church does not stand on human strength, nor on the agreement of people — but on Jesus Christ alone.
                  </p>
                  <p className="font-medium text-stone-900">
                    The hymn reminds us of four truths:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>One Foundation</strong> — "no other foundation can anyone lay" (1 Corinthians 3:11). By His Word He formed the church, His bride.
                    </li>
                    <li>
                      <strong>One Fellowship</strong> — many nations, many languages, yet one Lord, one faith, one baptism (Ephesians 4).
                    </li>
                    <li>
                      <strong>Struggle will come, but He will not forsake</strong> — the church may face affliction; the saints may cry, "How long will this night of weeping last?" Yet the Lord watches over and keeps His church.
                    </li>
                    <li>
                      <strong>A sure hope</strong> — the night of weeping will end, and the morning of glory will dawn. Rest will come.
                    </li>
                  </ul>
                  <p>
                    Beloved, this message is deeply fitting for our Vaarthai Church (VEC). We too have begun a new journey. Our future rests not on our own strength — but on the unshakable foundation that is Christ. That is our assurance.
                  </p>
                  
                  <blockquote className="bg-accent/5 border-l-4 border-accent p-5 rounded-r-lg text-primary italic font-serif my-6">
                    <p className="mb-2 text-lg md:text-xl font-medium">
                      "For no one can lay any foundation other than the one already laid, which is Jesus Christ."
                    </p>
                    <cite className="block text-right font-sans font-bold text-sm text-accent-dark not-italic mt-2">
                      — 1 Corinthians 3:11
                    </cite>
                  </blockquote>

                  <p>
                    This week, take a moment to consider: on what foundation is your life built? Christ is our steadfast Rock.
                  </p>
                  <p>
                    A church from Singapore has sung this hymn, "The Church's One Foundation," beautifully together in Tamil, English, and Chinese. Do listen and be blessed by it here.
                  </p>
                  
                  {/* YouTube Embed */}
                  <div className="my-8 aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-xl shadow-md not-prose border border-stone-200">
                    <iframe 
                      src="https://www.youtube.com/embed/DcCYWzrhmJM" 
                      title="The Church's One Foundation" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                      className="w-full h-full min-h-[350px] md:min-h-[450px]"
                    ></iframe>
                  </div>

                  <p className="font-medium text-stone-900 mt-6">
                    May God bless you,
                  </p>
                  <p className="pt-2 font-medium text-stone-800">
                    Pastor Weslyn
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
                  <Link href="/en/pastors-desk" className="group flex items-start gap-2 p-3 rounded-md bg-stone-50 border border-stone-200 hover:border-accent hover:bg-accent/5 transition-colors">
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-stone-900 group-hover:text-primary transition-colors">Issue #002</p>
                      <p className="text-xs text-stone-500">Jul 2026</p>
                    </div>
                  </Link>
                  <Link href="/en/pastors-desk/archive/issue-001" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 mt-0.5 shrink-0 group-hover:text-accent transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Issue #001</p>
                      <p className="text-xs text-stone-500">Aug 2026</p>
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
