import React from "react";
import { Calendar as CalendarIcon, FileText, ChevronRight, Leaf, Globe, Droplet, Coffee } from "lucide-react";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "en",
  title: "VEC-NL 2026-09 Edition 9 - Pastor's Desk",
  description: "Wounds We Cannot See",
  path: "/en/pastors-desk",
  image: "/pastor-desk-hero.jpg"
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
              FROM THE PASTOR'S DESK
            </span>
            <span className="h-px w-8 bg-accent/30"></span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Wounds We Cannot See
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm font-medium text-stone-300 mt-8">
            <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">VEC-NL • Edition #009</span>
            <span className="flex items-center gap-1"><CalendarIcon className="w-4 h-4 text-accent" /> September 2026</span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          <article className="lg:w-2/3 bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
            <div className="p-8 md:p-12 space-y-8 text-stone-700 leading-relaxed text-lg">
              
              <div className="bg-gradient-to-br from-stone-50 via-white to-stone-100 rounded-lg shadow-sm border border-stone-200 p-6 md:p-10 mb-8 relative overflow-hidden">
                {/* Decorative Elements */}
                <Leaf className="absolute top-4 right-4 text-stone-200 w-16 h-16 opacity-30" />
                <Leaf className="absolute bottom-10 left-4 text-stone-200 w-24 h-24 opacity-30" />
                
                <div className="flex items-center gap-2 text-sm text-stone-600 font-bold mb-4 relative z-10">
                  <CalendarIcon className="w-4 h-4" />
                  <span>VEC-NL 2026-09 · Edition 9</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-6 relative z-10 flex items-center gap-2">
                  Wounds We Cannot See
                </h2>
                
                <div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg relative z-10">

                  <div className="my-6 rounded-xl overflow-hidden shadow-md border-2 border-stone-200">
                    <img src="/newsletter-911.webp" alt="Wounds We Cannot See - September 11" className="w-full h-auto object-cover max-h-[500px]" />
                  </div>
                
                  <p>It is hard to believe that this September 11 marks 25 years since the attacks that shook the world. Writing in New York Magazine, journalist Lukas I. Alpert shares how an email from a former colleague made him reflect on his own life. Both had worked at Ground Zero. Years later, both were diagnosed with thyroid cancer. His friend’s suspicion that the illness might be linked to the toxic air they had breathed there made Alpert realise that the attacks might have affected him in ways he had never recognised.</p>

                  <p>The headlines had moved on to other events. But the suffering continued.</p>

                  <p>Similarly, people around us may be carrying wounds we cannot see. Behind a smile may be a loss that still aches, fear about an illness, or a family struggle they cannot share with anyone.</p>

                  <p className="font-bold text-lg text-center text-stone-800 border-y border-stone-200 py-4 my-6">Do not assume that a wound has healed simply because time has passed.</p>

                  <blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700">
                    <p>“He heals the brokenhearted and binds up their wounds.”</p>
                    <p className="mt-2 text-right text-sm">— Psalm 147:3</p>
                  </blockquote>

                  <p>God sees the pain others overlook. We do not need to hide our hurt from Him or pretend we have recovered from everything. We can come to Him with our broken hearts.</p>

                  <p>As His church, we are called to reflect that same love and care. We may not have answers to every question. But when we recognise those who are hurting, we can listen, pray, and continue to stand beside them. Even a caring question—“How are you doing now? Are you managing?”—can open the way for someone to share their burden.</p>

                  <p>This week, reach out to someone others may have forgotten to check on. Let them know they are still remembered and loved.</p>

                  <p className="font-bold italic text-stone-800">Lord, help us recognise those who carry their pain quietly. Teach us to listen patiently and stand beside them with steadfast love. Amen.</p>

                </div>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-stone-900 mt-10 mb-4 border-b border-stone-200 pb-2">Worship Song</h3>
              <div className="my-8 aspect-video w-full rounded-xl overflow-hidden shadow-md border-2 border-stone-200 bg-stone-100">
                <iframe 
                  src="https://www.youtube.com/embed/RNt8Lap9siU" 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="w-full h-full border-0"
                ></iframe>
              </div>

              <h3 className="text-xl md:text-2xl font-bold text-stone-900 mt-10 mb-4 border-b border-stone-200 pb-2">ANNOUNCEMENTS</h3>
              <div className="space-y-4">
                
                <div className="flex gap-4 p-4 rounded-lg bg-stone-50 border border-stone-100">
                  <Droplet className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="text-stone-700 font-bold mb-1">Baptism in October</p>
                    <p className="text-stone-600 text-sm">We are preparing for baptisms in October. If you would like to be baptised, please register with our church secretary, Mr. Devairakkam Paul. In the coming weeks, we will hold preparation classes exploring the biblical meaning and significance of baptism.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 rounded-lg bg-stone-50 border border-stone-100">
                  <FileText className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="text-stone-700 font-bold mb-1">A Listening Ear</p>
                    <p className="text-stone-600 text-sm">As this week’s newsletter reminds us, some wounds remain unseen. If you are carrying emotional pain or facing personal struggles, you do not have to walk through them alone. Our pastor, Ps Weslyn, is also a clinical counsellor. If you would like to speak with him, you are warmly welcome to contact him directly to arrange an appointment.</p>
                    <p className="text-stone-600 text-sm mt-2 font-medium">Email: <a href="mailto:weslyn@vaarthai.org.au" className="text-accent hover:underline">weslyn@vaarthai.org.au</a> | Phone: 0485 07 77 11</p>
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
                Past Editions
              </h3>
              <div className="space-y-3">
                  <h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mb-2 pl-2">September 2026</h4>
                  <Link href="/en/pastors-desk" className="group flex items-start gap-2 p-3 rounded-md bg-stone-50 border border-stone-200 hover:border-accent hover:bg-accent/5 transition-colors">
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-900 font-bold group-hover:text-primary transition-colors">Edition 9</p>
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
