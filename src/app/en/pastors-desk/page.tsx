import React from "react";
import { Calendar as CalendarIcon, FileText, ChevronRight, Gift, Snowflake, Leaf } from "lucide-react";
import Link from "next/link";
import { churchConfig } from "@/data/config";
import { NewsletterForm } from "@/components/NewsletterForm";

import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  locale: 'en',
  path: '/en/pastors-desk',
  title: "VEC-NL 2026-08 Edition 4 - From the Pastor's Desk | Vaarthai Evangelical Church",
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
              <div className="bg-gradient-to-br from-yellow-50 via-white to-amber-50 rounded-lg shadow-sm border border-amber-200 p-6 md:p-10 mb-8 relative overflow-hidden">
                {/* Decorative Elements */}
                <Leaf className="absolute top-4 right-4 text-amber-200 w-16 h-16 opacity-30" />
                <Leaf className="absolute bottom-10 left-4 text-amber-200 w-24 h-24 opacity-30" />
                
                <div className="flex items-center gap-2 text-sm text-amber-700 font-bold mb-4 relative z-10">
                  <CalendarIcon className="w-4 h-4" />
                  <span>VEC-NL 2026-08 · Edition 4</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-900 mb-6 relative z-10 flex items-center gap-2">
                  <Leaf className="w-8 h-8 text-amber-600" />
                  Beneath the Soil: The Seed Is Not Sleeping
                </h2>
                
                <div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg relative z-10">
                  
                  {/* Wattle Trees Image */}
                  <div className="my-6 rounded-xl overflow-hidden shadow-md border-2 border-amber-100">
                    <img src="/wattle-trees.jpg" alt="Wattle Trees" className="w-full h-auto object-cover max-h-[500px]" />
                  </div>

                  <h3 className="text-xl font-bold text-amber-800">The August Garden</h3>
                  <p>
                    Brisbane mornings in August are cold. Most mornings sit in single digits — five or six degrees Celsius! Look out at the garden and everything seems finished. The leaves have fallen. The branches stand bare. The ground lies hard. &quot;Nothing is happening here,&quot; our eyes tell us.
                  </p>
                  <p>
                    But our eyes are not telling us the whole truth.
                  </p>
                  <p>
                    At that very moment, beneath that soil, roots are quietly lengthening. Bulbs are dividing and multiplying. Buds formed last autumn are slowly swelling. The wattles have already begun to break into yellow.
                  </p>
                  <p>
                    The work is going on. We simply cannot see it — that is all.
                  </p>

                  <h3 className="text-xl font-bold text-amber-800">Not Past the Cold — Through It</h3>
                  <p>
                    This is not merely a metaphor. It is botanical fact.
                  </p>
                  <p>
                    Wheat, apples, tulips, cherries — many plants like these will not flower at all unless they have passed through a sustained period of cold. Keep them permanently warm and they will grow, they will stay green — but they will not bloom. Scientists call this vernalisation.
                  </p>
                  <p>
                    The cold is not an obstacle to flowering; it is the precondition for it.
                  </p>
                  <p>
                    The plant does not bloom despite the winter. It blooms through it.
                  </p>

                  <h3 className="text-xl font-bold text-amber-800">The Earth Bringeth Forth Fruit of Herself</h3>
                  <p>
                    One of the parables Jesus told appears in Mark&apos;s Gospel alone. It is this:
                  </p>
                  <blockquote className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg italic font-serif">
                    <p className="whitespace-pre-line leading-relaxed text-stone-700">
                      &quot;So is the kingdom of God, as if a man should cast seed into the ground; and should sleep, and rise night and day, and the seed should spring and grow up, he knoweth not how. For the earth bringeth forth fruit of herself.&quot;
                      <br/>
                      <span className="font-bold text-sm mt-2 block text-right">— Mark 4:26-28</span>
                    </p>
                  </blockquote>
                  <p>
                    The Greek word rendered &quot;of herself&quot; is αὐτομάτη (automatē) — the root from which the English word automatic comes.
                  </p>
                  <p>
                    What does the farmer do in this parable? He sows. Then he sleeps. He rises. He sleeps again.
                  </p>
                  <p>
                    The seed does not germinate because he is watching it. It does not grow faster because he is anxious. His worry adds nothing whatever to that growth.
                  </p>
                  <p>
                    Growth is happening — but it is not his work.
                  </p>

                  <h3 className="text-xl font-bold text-amber-800">Hidden Work — The Witness of Scripture</h3>
                  <p>
                    This pattern returns again and again throughout Scripture.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>Job 14:7-9</strong> — &quot;For there is hope of a tree, if it be cut down, that it will sprout again, and that the tender branch thereof will not cease. Though the root thereof wax old in the earth, and the stock thereof die in the ground; Yet through the scent of water it will bud, and bring forth boughs like a plant.&quot;
                    </li>
                    <li>
                      <strong>Colossians 3:3</strong> — &quot;For ye are dead, and your life is hid with Christ in God.&quot; The Greek here is κέκρυπται — a perfect tense, meaning hidden once and hidden still. Hiddenness is not a defect; it is a settled condition.
                    </li>
                    <li>
                      <strong>Isaiah 43:19</strong> — &quot;Behold, I will do a new thing; now it shall spring forth; shall ye not know it? I will even make a way in the wilderness, and rivers in the desert.&quot;
                    </li>
                    <li>
                      <strong>Luke 2:52</strong> — &quot;And Jesus increased in wisdom and stature, and in favour with God and man.&quot; Thirty years at Nazareth. Thirty years of silence before three years of ministry. Even in our Lord&apos;s own life, the hidden season was ten times the longer.
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold text-amber-800">The Season In Between</h3>
                  <p>
                    Many of us know this place well.
                  </p>
                  <p>
                    Six months have passed — and the grief has still not lifted. We have prayed for years — and the answer still has not come. The marriage is still cold. The child is still distant. The work has still not come. Health has still not returned.
                  </p>
                  <p>
                    The great temptation in this place is this: to conclude that because we cannot see it, nothing is happening.
                  </p>
                  <p>
                    In counselling ministry I have seen a well-documented pattern borne out. People rarely leave at the beginning, and rarely at the end. It is in the middle that they leave — at the point where the first hope has worn thin and visible progress seems to have stopped. Yet very often that is precisely the moment when the real work is going on underneath.
                  </p>
                  <p>
                    Just like the garden.
                  </p>

                  <h3 className="text-xl font-bold text-amber-800">Waiting Is One Thing; Avoiding Is Another</h3>
                  <p>
                    A word of caution is necessary here.
                  </p>
                  <p>
                    Seen from above, a dormant seed and a dead seed look exactly the same. Both appear identical. We must therefore learn to tell them apart.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>Waiting</strong> — standing in the confidence that God is at work.</li>
                    <li><strong>Avoiding</strong> — hoping that if a thing is left unattended it will sort itself out.</li>
                  </ul>
                  <p>
                    Sometimes the faithful response is not patience but to receive help. You may approach your pastor. You may approach a doctor, or a counsellor. In such moments what you need is a safe place.
                  </p>
                  <p>
                    &quot;Be patient&quot; is not always the spiritual answer. Sometimes it is escape.
                  </p>
                  <p>
                    If you do not know whether what you are in is dormancy, or whether something is genuinely dying — please speak. Speak to us. Do not decide alone.
                  </p>

                  <h3 className="text-xl font-bold text-amber-800">Our Church Is in This Same Season</h3>
                  <p>
                    Vaarthai Evangelical Church is still young. To those looking on from outside, this may seem slow.
                  </p>
                  <p>
                    But the roots are going down — in a place where no one can count them.
                  </p>
                  <p>
                    We need not hurry. We are not the ones who sowed; nor are we the ones who make it grow.
                  </p>

                  <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
                    <h4 className="font-bold text-amber-800 mb-2">THIS MONTH&apos;S REFLECTION</h4>
                    <p className="text-stone-700 m-0">
                      What is quietly growing within you right now, even if no one else can see it yet?
                      <br/><br/>
                      Sit with this one day this week. It need not be shown to anyone. Between God and you alone.
                    </p>
                  </div>

                  <p>
                    August is the last month of our winter. Spring begins on the first of September.
                  </p>
                  <p>
                    We are not at an ending — we are at a turning.
                  </p>

                  <blockquote className="bg-stone-50 border-l-4 border-stone-300 p-4 rounded-r-lg italic font-serif">
                    <p className="whitespace-pre-line leading-relaxed text-stone-700">
                      &quot;11 For, lo, the winter is past, the rain is over and gone; 12 The flowers appear on the earth; the time of the singing of birds is come, and the voice of the turtle is heard in our land.&quot;
                      <br/>
                      <span className="font-bold text-sm mt-2 block text-right">— Song of Solomon 2:11-12</span>
                    </p>
                  </blockquote>

                  <p>
                    Our gardens are not showing it yet. But it is already true. You are blessed!
                  </p>

                  {/* YouTube Embeds */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                    <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-xl shadow-md border-2 border-amber-100 bg-white">
                      <iframe 
                        src="https://www.youtube.com/embed/sQufX7mW0nM?start=90" 
                        title="Tamil Song" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                        className="w-full h-full min-h-[250px]"
                      ></iframe>
                    </div>
                    <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-xl shadow-md border-2 border-amber-100 bg-white">
                      <iframe 
                        src="https://www.youtube.com/embed/Vb1i_FpDRic" 
                        title="English Version" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                        className="w-full h-full min-h-[250px]"
                      ></iframe>
                    </div>
                  </div>

                  <p className="font-medium text-stone-900 mt-6">
                    God bless you!
                  </p>
                  <p className="pt-2 font-medium text-stone-800">
                    Pastor Weslyn
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-amber-200 flex items-center gap-4 not-prose relative z-10">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-500 shrink-0 shadow-sm bg-white">
                      <img src="/staff-pastor.png" alt="Ps. Jeyakaran Weslyn" className="w-full h-full object-cover object-top" />
                    </div>
                    <div>
                      <p className="font-bold text-amber-800 m-0 text-lg">Ps. Jeyakaran Weslyn</p>
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
                      <p className="text-sm font-bold text-stone-900 group-hover:text-primary transition-colors">Edition 4</p>
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
