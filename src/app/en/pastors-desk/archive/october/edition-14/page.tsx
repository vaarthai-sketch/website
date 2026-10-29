import React from "react";
import { Calendar as CalendarIcon, FileText, ChevronRight, Leaf } from "lucide-react";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  title: "VEC-NL 2026-10 Edition 14 - From the Pastor's Desk",
  description: "From Darkness into Light — “We were buried therefore with him by baptism into death, in order that, just as Christ was raised from the dead by the glory of the Father, we too might walk in newness of life.” — Romans 6:4",
  path: "/en/pastors-desk/archive/october/edition-14",
  image: "/edition-14-phoenix.jpg",
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
              From the Pastor's Desk
            </span>
            <span className="h-px w-8 bg-accent/30"></span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            From Darkness into Light
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 font-serif italic mb-8 max-w-2xl mx-auto">
            &ldquo;We were buried therefore with him by baptism into death... that we too might walk in newness of life.&rdquo; — Romans 6:4
          </p>
          <div className="flex items-center justify-center gap-4 text-sm font-medium text-stone-300">
            <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">VEC-NL • Edition #014</span>
            <span className="flex items-center gap-1"><CalendarIcon className="w-4 h-4 text-accent" /> October 2026</span>
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
                  <span>VEC-NL 2026-10 · Edition 14</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-6 relative z-10 flex items-center gap-2">
                  From Darkness into Light
                </h2>
                
                <div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg relative z-10 font-serif">

                  <div className="my-6">
                    <div className="rounded-xl overflow-hidden shadow-md border-2 border-stone-200">
                      <img 
                        src="/edition-14-phoenix.jpg" 
                        alt="Phoenix Rescue Capsule - 2010 Chile Mine Rescue" 
                        className="w-full h-auto object-cover max-h-[500px]" 
                      />
                    </div>
                    <p className="text-right text-xs text-stone-400 mt-1.5 italic">Credit: Britannica</p>
                  </div>

                  <p>
                    Sixteen years ago, on 13 October 2010, men emerged one by one from a mine in Chile. After so long in darkness, they wore dark glasses to protect their eyes. Their waiting families embraced them with tears.
                  </p>

                  <div className="my-6">
                    <div className="rounded-xl overflow-hidden shadow-md border-2 border-stone-200">
                      <img 
                        src="/edition-14-family.jpg" 
                        alt="Rescued Chilean Miner Celebrating After Rescue" 
                        className="w-full h-auto object-cover max-h-[500px]" 
                      />
                    </div>
                    <p className="text-right text-xs text-stone-400 mt-1.5 italic">Credit: Britannica</p>
                  </div>

                  <p>
                    Sixty-nine days earlier, the mine had collapsed, trapping 33 workers more than half a kilometre underground. They had no way to save themselves. Rescuers drilled a shaft through the rock. Down that shaft, in a rescue capsule called the Phoenix, a rescuer went first, all the way to where the trapped men were. Then, one by one, each man was brought up in the same capsule. All 33 came out alive.
                  </p>

                  <p className="font-semibold text-primary text-xl">
                    Their rescue reminds us of what Jesus has done for us.
                  </p>

                  <p>
                    We were trapped in the darkness of sin and could not save ourselves. So the Son of God came down to where we were. He carried our sins on the cross. He died, and He rose again. To all who believe in Him, He gives forgiveness and new life. God &ldquo;has delivered us from the domain of darkness and transferred us to the kingdom of his beloved Son&rdquo; (Colossians 1:13).
                  </p>

                  <p>
                    But the miners&apos; story did not end on the day they were rescued. In the years that followed, many of them struggled with nightmares and deep emotional wounds. Getting out of the mine took a single day. Learning to live free took far longer. The Christian life is much the same: Christ has rescued us completely, but learning to live as rescued people is a daily journey.
                  </p>

                  <p className="font-medium text-stone-800">
                    On 1 November, our church will celebrate baptisms. Let us see them in the light of this good news.
                  </p>

                  <blockquote className="border-l-4 border-accent pl-6 py-2 my-8 bg-stone-50 rounded-r-lg shadow-sm italic text-lg text-stone-800">
                    &ldquo;We were buried therefore with him by baptism into death, in order that, just as Christ was raised from the dead by the glory of the Father, we too might walk in newness of life.&rdquo;
                    <footer className="text-right text-sm font-bold text-accent mt-4 not-italic">— Romans 6:4 (ESV)</footer>
                  </blockquote>

                  <p>
                    In baptism, we publicly declare our union with Christ in His death and resurrection. Going down into the water shows we have been buried with Him. Rising from it shows we are called to walk with Him in new life.
                  </p>

                  <p>
                    That word &ldquo;walk&rdquo; is a call for everyday life. We follow Christ in our relationships and decisions. We confess the sin we have kept hidden. We ask forgiveness from those we have hurt. We seek help to break free from habits that enslave us.
                  </p>

                  <p>
                    Some of us may look at past failures and hesitate: &ldquo;Can I really change?&rdquo; Scripture answers: &ldquo;If anyone is in Christ, he is a new creation. The old has passed away; behold, the new has come&rdquo; (2 Corinthians 5:17). By Christ&apos;s grace, we can honestly confess our sin and, with the Holy Spirit&apos;s help, begin a new obedience today.
                  </p>

                  <p>
                    Dear Vaarthai family, just as the miners&apos; families embraced them, let us joyfully welcome those being baptised. Let us pray with them, share God&apos;s Word with them, and hold them up on the hard days. If you are prayerfully considering baptism yourself, please don&apos;t hesitate to speak with the pastor.
                  </p>

                  <p className="font-semibold text-primary text-lg">
                    Let us also give our own lives to the Lord afresh and walk with Him.
                  </p>

                  <div className="bg-stone-100 p-6 rounded-xl border-l-4 border-primary my-8 space-y-2">
                    <p className="text-sm font-bold uppercase tracking-wider text-primary m-0">Reflection</p>
                    <p className="text-base md:text-lg font-medium text-stone-800 m-0">
                      Even after Christ has set me free, is there an old habit or sin I am still holding on to? What step do I need to take today to surrender it to Him?
                    </p>
                  </div>

                  <div className="bg-accent/10 p-6 rounded-xl border border-accent/30 my-8 space-y-2">
                    <p className="text-sm font-bold uppercase tracking-wider text-accent-dark m-0">Prayer</p>
                    <p className="text-base md:text-lg italic text-stone-800 m-0">
                      Loving Father, thank You for rescuing us from darkness through Your Son and giving us new life. We surrender our sins to You. Renew us by Your Holy Spirit and give us strength to live in obedience to You. Establish in faith each one being baptised, and make us a church family that lovingly holds them up. We pray in the name of Jesus. Amen.
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
                      src="https://www.youtube.com/embed/I42pU9rSQ8s" 
                      title="YouTube video player" 
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
                  <h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mb-2 pl-2">October 2026</h4>
                  <Link href="/en/pastors-desk" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 15</p>
                      <p className="text-xs text-stone-500">Oct 2026</p>
                    </div>
                  </Link>
                  <Link href="/en/pastors-desk/archive/october/edition-14" className="group flex items-start gap-2 p-3 rounded-md bg-stone-50 border border-stone-200 hover:border-accent hover:bg-accent/5 transition-colors">
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-900 font-bold group-hover:text-primary transition-colors">Edition 14</p>
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
