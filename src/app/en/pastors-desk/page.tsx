import React from "react";
import { Calendar as CalendarIcon, FileText, ChevronRight, Globe, Leaf } from "lucide-react";
import Link from "next/link";
import { churchConfig } from "@/data/config";
import { NewsletterForm } from "@/components/NewsletterForm";
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  locale: 'en',
  path: '/en/pastors-desk',
  title: "VEC-NL 2026-08 Edition 5 - From the Pastor's Desk | Vaarthai Evangelical Church",
  description: `Weekly newsletter and updates from the Pastor at ${churchConfig.name}.`,
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
            From the Pastor&apos;s Desk
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-stone-200">
            Weekly newsletter, reflections, and updates from our pastoral team.
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
                <Globe className="absolute top-4 right-4 text-stone-200 w-16 h-16 opacity-30" />
                <Globe className="absolute bottom-10 left-4 text-stone-200 w-24 h-24 opacity-30" />
                
                <div className="flex items-center gap-2 text-sm text-stone-600 font-bold mb-4 relative z-10">
                  <CalendarIcon className="w-4 h-4" />
                  <span>VEC-NL 2026-08 · Edition 5</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-6 relative z-10 flex items-center gap-2">
                  <Globe className="w-8 h-8 text-stone-700" />
                  What If the Ground Beneath You Moves?
                </h2>
                
                <div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg relative z-10">

                  <h3 className="text-xl font-bold text-stone-800">An earthquake in Colombia.</h3>
                  <p>
                    My body trembled as I read the news. On Monday morning, 10 August, a magnitude 7.4 earthquake struck western Colombia. As of Tuesday morning, government reports place the death toll at 111, with more than 1,600 buildings damaged. It is the strongest earthquake recorded in that country in a decade.
                  </p>
                  <p>
                    One survivor describes stepping out of a lift just as he felt the building begin to move. After that, everything he saw was falling, and all he could hear was the sound of the earth splitting open. The whole thing lasted around fifty seconds — but he says it felt like eternity.
                  </p>

                  <h3 className="text-xl font-bold text-stone-800">What did you feel?</h3>
                  <p>
                    Dear friends, when you saw the Colombia earthquake on the news, or read about it — what stirred in you? Did your feelings unsettle you? Or were you able to move past it as something that happened in some far corner of the world?
                  </p>
                  <p>
                    Most of the time, that is exactly how we move past it. When such things happen closer to home, we feel it differently — relief that we were spared, or a fear that takes hold of us and will not let go.
                  </p>
                  <p>
                    Neither response — indifference or fear — belongs to a disciple of Christ. In this month&apos;s letter I want to strengthen you: we do not need to be afraid. I can hear you asking whether I know what I am saying. Let the Word answer.
                  </p>

                  <h3 className="text-xl font-bold text-stone-800">The Lord told us in advance</h3>
                  <p className="font-bold text-stone-800">Matthew 24:6–8 (KJV)</p>
                  <blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700">
                    <p>
                      ⁶ And ye shall hear of wars and rumours of wars: see that ye be not troubled: for all these things must come to pass, but the end is not yet.
                    </p>
                    <p>
                      ⁷ For nation shall rise against nation, and kingdom against kingdom: and there shall be famines, and pestilences, and earthquakes, in divers places.
                    </p>
                    <p>
                      ⁸ All these are the beginning of sorrows.
                    </p>
                  </blockquote>
                  <p>
                    Notice what the Lord does here. He does not hide these headlines from us; He tells us about them ahead of time. Why? So that we would not be troubled. An earthquake does not unseat God from His throne. What He said would happen is happening.
                  </p>
                  <p>
                    And notice verse 8 — &quot;the beginning of sorrows.&quot; The word is the word for birth pangs. Labour pains are not the sign of death; they are the sign of birth. The world is shaking, but not towards its end — towards a new creation.
                  </p>

                  <h3 className="text-xl font-bold text-stone-800">Is this God&apos;s judgement on them?</h3>
                  <p>
                    No. Jesus faced this exact question. When a tower in Siloam fell and killed eighteen people, He asked, &quot;think ye that they were sinners above all men that dwelt in Jerusalem? I tell you, Nay&quot; (Luke 13:4–5).
                  </p>
                  <p>
                    So we have no right to point a finger at Colombia. Instead, that finger turns back towards us: &quot;except ye repent, ye shall all likewise perish.&quot; Every report of disaster is not a verdict on someone else; it is a summons to us.
                  </p>

                  <h3 className="text-xl font-bold text-stone-800">A shaking earth, an unshakeable God</h3>
                  <p className="font-bold text-stone-800">Psalm 46:1–2 (KJV)</p>
                  <blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700">
                    <p>
                      ¹ God is our refuge and strength, a very present help in trouble.
                    </p>
                    <p>
                      ² Therefore will not we fear, though the earth be removed, and though the mountains be carried into the midst of the sea.
                    </p>
                  </blockquote>
                  <p>
                    The psalmist never claims the earth will not be removed. He grants that it will. And still he says, &quot;we will not fear.&quot; Why? Because he is not standing on the shaking earth. He is standing on the unshakeable God.
                  </p>
                  <p>
                    Hebrews makes it plainer still: &quot;Yet once more I shake not the earth only, but also heaven&quot; (12:26). Everything that can be shaken will one day be shaken — buildings, economies, governments, our own plans. And the purpose? &quot;That those things which cannot be shaken may remain&quot; (v.27).
                  </p>
                  <blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700">
                    <p>
                      &quot;Wherefore we receiving a kingdom which cannot be moved, let us have grace...&quot; (Hebrews 12:28)
                    </p>
                  </blockquote>
                  <p>
                    Beloved, the kingdom given to us cannot be moved. No earthquake can bring it down. That is why we need not be afraid.
                  </p>

                  <h3 className="text-xl font-bold text-stone-800">So what shall we do?</h3>
                  <ul className="list-decimal pl-5 space-y-3">
                    <li>
                      <strong>Take courage instead of fear.</strong> &quot;Fear thou not; for I am with thee&quot; (Isaiah 41:10). Fear shrinks us; faith straightens us up.
                    </li>
                    <li>
                      <strong>Show mercy instead of indifference.</strong> &quot;Weep with them that weep&quot; (Romans 12:15). Pray for the families of Colombia — for the rescue crews searching the rubble, for mothers who have lost children, for the churches of that nation. Give them a place in your family prayers this week.
                    </li>
                    <li>
                      <strong>Be ready.</strong> Fifty seconds felt like eternity to that man. In truth, all our lives are that brief (James 4:14). The Lord did not tell us these things to frighten us — He told us so that we would stay awake.
                    </li>
                  </ul>

                  <div className="bg-stone-100 border-l-4 border-stone-500 p-6 rounded-r-lg my-8">
                    <h4 className="font-bold text-stone-800 mb-2 text-xl">Prayer</h4>
                    <p className="text-stone-700 m-0">
                      Lord, have mercy on the people of Colombia. Give comfort to the bereaved, rescue to the trapped, and peace to the fearful. Guard our hearts from indifference and fill them with compassion. In this shaking world, fix our hope firmly on Your unshakeable kingdom. In Jesus&apos; name, Amen.
                    </p>
                  </div>

                  <p className="font-medium text-stone-900 mt-6">
                    Yours in Christ,
                  </p>
                  <p className="pt-2 font-medium text-stone-800">
                    Pastor Weslyn
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-stone-200 flex items-center gap-4 not-prose relative z-10">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-stone-300 shrink-0 shadow-sm bg-white">
                      <img src="/staff-pastor.png" alt="Ps. Jeyakaran Weslyn" className="w-full h-full object-cover object-top" />
                    </div>
                    <div>
                      <p className="font-bold text-stone-800 m-0 text-lg">Ps. Jeyakaran Weslyn</p>
                      <p className="text-sm text-stone-600 m-0">Senior Pastor, {churchConfig.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Archive Menu */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-border p-6 sticky top-24 sidebar-placeholder-en">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent-dark" />
                  Past Editions
                </h3>
                <div className="space-y-3">
                  <Link href="/en/pastors-desk" className="group flex items-start gap-2 p-3 rounded-md bg-stone-50 border border-stone-200 hover:border-accent hover:bg-accent/5 transition-colors">
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-stone-900 group-hover:text-primary transition-colors">Edition 5</p>
                      <p className="text-xs text-stone-500">Aug 2026</p>
                    </div>
                  </Link>
                  <Link href="/en/pastors-desk/archive/august/edition-4" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 mt-0.5 shrink-0 group-hover:text-accent transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 4</p>
                      <p className="text-xs text-stone-500">Aug 2026</p>
                    </div>
                  </Link>

                  <h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mt-6 mb-2 pl-2 border-t border-stone-100 pt-4">July 2026</h4>
                  <Link href="/en/pastors-desk/archive/july/edition-3" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 mt-0.5 shrink-0 group-hover:text-accent transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 3</p>
                      <p className="text-xs text-stone-500">Jul 2026</p>
                    </div>
                  </Link>
                  <Link href="/en/pastors-desk/archive/july/edition-2" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 mt-0.5 shrink-0 group-hover:text-accent transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 2</p>
                      <p className="text-xs text-stone-500">Jul 2026</p>
                    </div>
                  </Link>
                  <Link href="/en/pastors-desk/archive/july/edition-1" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 mt-0.5 shrink-0 group-hover:text-accent transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 1</p>
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
