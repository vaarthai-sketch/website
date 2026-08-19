import React from "react";
import { Calendar as CalendarIcon, FileText, ChevronRight, Globe, Leaf, Coffee } from "lucide-react";
import Link from "next/link";
import { churchConfig } from "@/data/config";
import { NewsletterForm } from "@/components/NewsletterForm";
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  locale: 'en',
  path: '/en/pastors-desk',
  title: "VEC-NL 2026-08 Edition 6 - From the Pastor's Desk | Vaarthai Evangelical Church Inc",
  description: `What's In Your Cup? Life will shake you — what spills out reveals what you have been storing. A reflection on Luke 6:45 and Proverbs 4:23.`,
  image: "/coffee-cup.jpg",
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
                <Coffee className="absolute top-4 right-4 text-stone-200 w-16 h-16 opacity-30" />
                <Coffee className="absolute bottom-10 left-4 text-stone-200 w-24 h-24 opacity-30" />
                
                <div className="flex items-center gap-2 text-sm text-stone-600 font-bold mb-4 relative z-10">
                  <CalendarIcon className="w-4 h-4" />
                  <span>VEC-NL 2026-08 · Edition 6</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-6 relative z-10 flex items-center gap-2">
                  <Coffee className="w-8 h-8 text-stone-700" />
                  What&apos;s In Your Cup?
                </h2>
                
                <div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg relative z-10">

                  <div className="my-6 rounded-xl overflow-hidden shadow-md border-2 border-stone-200">
                    <img src="/coffee-cup.jpg" alt="A hand holding a coffee cup, mid-spill" className="w-full h-auto object-cover max-h-[500px]" />
                  </div>

                  <h3 className="text-xl font-bold text-stone-800">The Cup In Your Hand</h3>
                  <p>
                    You are standing there holding a cup of coffee. Suddenly someone bumps into you — or knocks your arm. The coffee goes everywhere.
                  </p>
                  <p>
                    Why did the coffee spill?
                  </p>
                  <p>
                    What do we usually say? &quot;Because someone bumped into me!&quot;
                  </p>
                  <p>
                    That&apos;s the wrong answer.
                  </p>
                  <p>
                    The real reason the coffee spilled is this — there was coffee in the cup. Had there been tea in it, tea is what would have spilled. Had there been water, water would have spilled.
                  </p>
                  <p>
                    The person who bumped you did not change what was in the cup. They did only one thing — they brought out what was already inside.
                  </p>
                  <p className="font-bold text-stone-900">
                    Whatever is inside the cup is what will spill out.
                  </p>

                  <h3 className="text-xl font-bold text-stone-800">The Shaking Will Come — That Much Is Certain</h3>
                  <p>
                    Last week we thought about an earth that gets shaken. This week we come closer to home — we think about ourselves being shaken.
                  </p>
                  <p>
                    An unexpected phone call. A medical report. A meeting at work. A long day in traffic. A hard word from someone. A small argument at home.
                  </p>
                  <p>
                    When everything is calm, all of us are spiritual people. It is easy to fake it — but only until the shaking comes.
                  </p>
                  <p className="font-bold text-stone-900">
                    The shaking does not create our character. It reveals our character.
                  </p>

                  <h3 className="text-xl font-bold text-stone-800">The Overflow of the Heart</h3>
                  <p>
                    Jesus told us this long before the analogy did. And His words are far sharper than the analogy:
                  </p>
                  <blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700">
                    <p>
                      &quot;A good man out of the good treasure of his heart brings forth that which is good; and an evil man out of the evil treasure of his heart brings forth that which is evil: for out of the abundance of the heart his mouth speaks.&quot;
                    </p>
                    <p className="mt-2 text-right text-sm">— Luke 6:45</p>
                  </blockquote>
                  <p>
                    In the Greek, the word translated &quot;abundance&quot; literally means this — that which fills up and runs over; that which is left over and comes out.
                  </p>
                  <p>
                    This is the picture Jesus used: the heart is a vessel. The mouth is its rim. Whatever has been poured in is what comes over the edge.
                  </p>
                  <p>
                    Our angry words are not accidents. They are leaks — leaks of what we had already been storing inside.
                  </p>

                  <h3 className="text-xl font-bold text-stone-800">So Then, Guard the Cup</h3>
                  <p>
                    This is why Proverbs commands us:
                  </p>
                  <blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700">
                    <p>
                      &quot;Keep your heart with all diligence; for out of it are the issues of life.&quot;
                    </p>
                    <p className="mt-2 text-right text-sm">— Proverbs 4:23</p>
                  </blockquote>
                  <p>
                    The Hebrew word behind &quot;keep&quot; carries the sense of guarding a fortress — watchful, alert protection.
                  </p>
                  <p>
                    Scripture does not say &quot;guard your behaviour.&quot; It does not say &quot;guard your words.&quot; It says guard your heart — because everything else proceeds from there.
                  </p>
                  <p>
                    Trying to fix what comes out is wasted labour. Change what is inside.
                  </p>

                  <h3 className="text-xl font-bold text-stone-800">Who Fills the Cup?</h3>
                  <p>
                    There is an important distinction to make here.
                  </p>
                  <p>
                    The heart does not change simply because we decide, &quot;I will be a good person.&quot; That is only willpower — and willpower lasts about one morning.
                  </p>
                  <p>
                    Paul writes:
                  </p>
                  <blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700">
                    <p>
                      &quot;...be filled with the Spirit.&quot;
                    </p>
                    <p className="mt-2 text-right text-sm">— Ephesians 5:18</p>
                  </blockquote>
                  <p>
                    The force of the Greek here is: &quot;keep on being filled, continuously.&quot;
                  </p>
                  <p>
                    It is not a matter of being filled once and that being enough. It is daily. And we are not the ones who do the filling — our work is simply to make ourselves available to be filled.
                  </p>
                  <p>
                    And what comes out of a filled heart?
                  </p>
                  <blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700">
                    <p>
                      &quot;But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faith, meekness, temperance.&quot;
                    </p>
                    <p className="mt-2 text-right text-sm">— Galatians 5:22-23</p>
                  </blockquote>
                  <p>
                    Notice — it is not the &quot;achievements&quot; of the Spirit. It is the fruit of the Spirit. Fruit is not produced by effort; it comes out naturally from the life that is within.
                  </p>

                  <h3 className="text-xl font-bold text-stone-800">A Careful Word</h3>
                  <p>
                    Here I want to say something with care.
                  </p>
                  <p>
                    If what spills from your cup is bitterness, it does not mean you are a failed Christian. Sometimes it is the sign of a wound that has not yet healed.
                  </p>
                  <p>
                    Someone may have hurt you deeply. A grief may still be sitting inside, never spoken about. Years of exhaustion may have accumulated.
                  </p>
                  <p>
                    In moments like that, what you need is not the advice &quot;try harder.&quot; What you need is healing.
                  </p>
                  <p>
                    Covering over anger is not filling the cup — it is only a lid. And a lid does not hold forever.
                  </p>
                  <p>
                    Please speak. Speak to me. Speak to a trusted friend, or to a counsellor. Do not carry it alone. The Lord is near to the broken heart (Psalm 34:18).
                  </p>

                  <h3 className="text-xl font-bold text-stone-800">What Shall We Do This Week?</h3>
                  <ul className="list-decimal pl-5 space-y-3">
                    <li>
                      <strong>The first pour of the morning.</strong> Fill the cup before the day begins — with Scripture and with prayer. A cup left unfilled in the morning will be empty by evening.
                    </li>
                    <li>
                      <strong>Do not leave forgiveness pending.</strong> &quot;Let not the sun go down upon your wrath&quot; (Ephesians 4:26). Every unforgiven hurt keeps collecting in the cup.
                    </li>
                    <li>
                      <strong>Watch the shaking.</strong> Once this week, when you are shaken — do not respond immediately. Pause for three seconds. What was trying to come out? That is the content of your cup.
                    </li>
                    <li>
                      <strong>Fill others with good words.</strong> Speak one encouraging word to three people this week. The cup is filled by giving, too.
                    </li>
                    <li>
                      <strong>Write down your thanks.</strong> Three things every night. Gratitude is the practice that leaves no room in the heart for bitterness.
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold text-stone-800">This Week&apos;s Reflection</h3>
                  <p>
                    Life hands you the cup. What you fill it with is yours to choose.
                  </p>
                  <p>
                    If someone shakes you today — what will spill?
                  </p>
                  <p>
                    Joy, gratitude, peace, humility? Or anger, bitterness, blame, and the urge to quit?
                  </p>
                  <p>
                    This week, let us work at filling our cups with gratitude, forgiveness, joy, words of affirmation, gentleness, and love.
                  </p>
                  <p>
                    Because in the end, the One who fills our cup is our Shepherd:
                  </p>
                  <blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700">
                    <p>
                      &quot;...You anoint my head with oil; my cup runs over.&quot;
                    </p>
                    <p className="mt-2 text-right text-sm">— Psalm 23:5</p>
                  </blockquote>
                  <p className="font-bold text-stone-900">
                    A cup that is running over is not afraid of being spilled. Because the One who fills it never stops.
                  </p>

                  <div className="bg-stone-100 border-l-4 border-stone-500 p-6 rounded-r-lg my-8">
                    <h4 className="font-bold text-stone-800 mb-2 text-xl">Prayer</h4>
                    <p className="text-stone-700 m-0">
                      Lord, search my heart Yourself. Bring into the light the bitterness, the anger, and the wounds I have stored there without even knowing. I confess that I cannot change by my own effort. Fill me daily by Your Spirit. When I am shaken, let Your love and gentleness and peace be what comes out of me. In Jesus&apos; name we pray, Amen.
                    </p>
                  </div>

                  {/* YouTube Embed */}
                  <div className="my-8 aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-xl shadow-md not-prose border-2 border-stone-200 bg-white">
                    <iframe 
                      src="https://www.youtube.com/embed/8z50_p-wuv0" 
                      title="Sermon Video" 
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
                      <p className="text-sm font-bold text-stone-900 group-hover:text-primary transition-colors">Edition 6</p>
                      <p className="text-xs text-stone-500">Aug 2026</p>
                    </div>
                  </Link>
                  <Link href="/en/pastors-desk/archive/august/edition-5" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 mt-0.5 shrink-0 group-hover:text-accent transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 5</p>
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
