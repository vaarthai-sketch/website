import React from "react";
import { Calendar as CalendarIcon, FileText, ChevronRight, Gift, Snowflake } from "lucide-react";
import Link from "next/link";
import { churchConfig } from "@/data/config";
import { NewsletterForm } from "@/components/NewsletterForm";
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  locale: 'en',
  path: '/en/pastors-desk',
  title: "VEC-NL 2026-07 Edition 4 - From the Pastor's Desk | Vaarthai Evangelical Church",
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
              <div className="bg-gradient-to-br from-emerald-50 via-white to-green-100 rounded-lg shadow-sm border border-emerald-300 p-6 md:p-10 mb-8 relative overflow-hidden">
                {/* Decorative Elements */}
                <Snowflake className="absolute top-4 right-4 text-emerald-200 w-16 h-16 opacity-30" />
                <Snowflake className="absolute bottom-10 left-4 text-emerald-200 w-24 h-24 opacity-30" />
                
                <div className="flex items-center gap-2 text-sm text-emerald-700 font-bold mb-4 relative z-10">
                  <CalendarIcon className="w-4 h-4" />
                  <span>VEC-NL 2026-07 · Edition 4</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-emerald-800 mb-6 relative z-10 flex items-center gap-2">
                  <Gift className="w-8 h-8 text-emerald-600" />
                  The Word became flesh.
                </h2>
                
                <div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg relative z-10">
                  <p className="font-medium text-stone-900">
                    Beloved in Christ,
                  </p>
                  <p>
                    Greetings to each of you! We&apos;re in the last week of July — about to close out seven months of 2026.
                  </p>
                  <p>
                    Here in Australia, in Brisbane where we live, June and July are our winter months, while December is summer. When I arrived in this country twenty years ago, celebrating Christmas in the middle of summer felt strange. Tamil Nadu doesn&apos;t really have a winter, but by December the sun is at least bearable there. Here, we sing carols under a scorching sun. To capture something of the Christmas atmosphere, people here celebrate &quot;Christmas in July&quot; on July 25 — largely, it has to be said, something retailers set up for their own business. So then — is celebrating on December 25 correct? Some argue that&apos;s wrong too, and that Christmas shouldn&apos;t be celebrated at all.
                  </p>
                  <p>
                    First: Scripture nowhere says Christmas should or shouldn&apos;t be celebrated. So why do we celebrate it? Scripture tells us to observe festival days (e.g., Exodus 23:14) — so I don&apos;t see anything wrong in setting apart a specific day as Christ&apos;s birth day, to help us remember Jesus all the more.
                  </p>
                  <p>
                    Let me share two scenes from Scripture that support this.
                  </p>
                  <p>
                    <strong>Scene one — the Persian palace.</strong> A young Jewish woman, unafraid of the death sentence hanging over her, stands before the king though not summoned — because an order to destroy her entire people has already been signed and sealed. &quot;Who knows whether you have come to the kingdom for such a time as this?&quot; her cousin Mordecai tells her (Esther 4:14). Through God&apos;s remarkable intervention, that day became a day of deliverance. A man named Haman had cast lots to fix a day of destruction; God turned that same day into a day of triumph. Mordecai and Esther then established it as a festival for every generation to keep (Esther 9:20-28) — a new festival, never previously commanded in Scripture.
                  </p>
                  <p>
                    <strong>Scene two — centuries later, the same Jerusalem temple.</strong> Consider the history of the Maccabee family, who lived in Judea in the 2nd century BC and freed the Jewish people by revolting against the foreign Greek-Syrian regime. According to the history recorded in the books of the Maccabees, the foreign king Antiochus defiled the temple; through the Maccabees&apos; sacrifice it was purified and rededicated. To commemorate this, Israel instituted an eight-day festival — later Jewish tradition came to call it the &quot;Festival of Lights,&quot; marking light overcoming darkness. This too is a festival absent from the Law of Moses. Its canonical support is found in John 10:22-23: &quot;At that time the Feast of Dedication took place at Jerusalem... Jesus was walking in the temple, in the colonnade of Solomon.&quot; Jesus didn&apos;t avoid this man-instituted feast — He showed up in the middle of it.
                  </p>
                  <p>
                    In the book of Esther, deliverance came in the midst of darkness. At the Feast of Dedication, light came in the midst of darkness. Both are days God&apos;s people instituted themselves — yet both reflect God&apos;s grace.
                  </p>
                  <p>
                    Isn&apos;t Christmas the same, then? In the depths of winter darkness, the church chose a day to mark the rising of the &quot;Sun of Righteousness&quot; (Malachi 4:2). Some object to December 25, saying it coincides with a Roman festival honoring the sun god. History offers two explanations: some say early Christians calculated Christ&apos;s conception at March 25 and simply added nine months, arriving at this date; others say the church deliberately chose it to proclaim light in the darkest season. Either way, the day chosen to celebrate this is a human decision — not God&apos;s explicit command. Which is exactly why it can&apos;t rightly be called &quot;wrong,&quot; nor insisted on as &quot;the only correct way.&quot;
                  </p>
                  <p>
                    Beloved, Christmas isn&apos;t found in a date — it&apos;s found in the heart. Whether we sing carols under a scorching December sun or in the July cold, our purpose is one: to proclaim that &quot;the Word became flesh and dwelt among us&quot; (John 1:14). In these final days of July — whether we celebrate &quot;Christmas in July&quot; or not — let every day become a day we remember Jesus.
                  </p>
                  <p>
                    This picture of light breaking into darkness is beautifully captured in an old hymn the church has sung for centuries (Original: Latin &quot;O Antiphons,&quot; 8th–9th century; versified c. 12th century; English translation by John Mason Neale, 1851):
                  </p>
                  
                  <blockquote className="bg-emerald-50 border-l-4 border-emerald-500 p-4 rounded-r-lg italic font-serif">
                    <p className="whitespace-pre-line leading-relaxed text-stone-700">
                      O come, Thou Day-Spring, come and cheer<br/>
                      Our spirits by Thine advent here<br/>
                      Disperse the gloomy clouds of night<br/>
                      And death&apos;s dark shadows put to flight<br/>
                      Rejoice, rejoice, Emmanuel<br/>
                      Shall come to thee, O Israel.
                    </p>
                  </blockquote>

                  <p>
                    I&apos;ve included the video of this hymn below — listen and be blessed.
                  </p>

                  {/* YouTube Embed English */}
                  <div className="my-8 aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-xl shadow-md not-prose border-2 border-emerald-300 bg-white">
                    <iframe 
                      src="https://www.youtube.com/embed/UH7asSGxAxA" 
                      title="O Come, O Come, Emmanuel" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                      className="w-full h-full min-h-[350px] md:min-h-[450px]"
                    ></iframe>
                  </div>

                  <p className="font-medium text-stone-900 mt-6">
                    God bless you!
                  </p>
                  <p className="pt-2 font-medium text-stone-800">
                    Pastor Weslyn
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-emerald-300 flex items-center gap-4 not-prose relative z-10">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-500 shrink-0 shadow-sm bg-white">
                      <img src="/staff-pastor.png" alt="Ps. Jeyakaran Weslyn" className="w-full h-full object-cover object-top" />
                    </div>
                    <div>
                      <p className="font-bold text-emerald-800 m-0 text-lg">Ps. Jeyakaran Weslyn</p>
                      <p className="text-sm text-stone-600 m-0">Senior Pastor, {churchConfig.name}</p>
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
