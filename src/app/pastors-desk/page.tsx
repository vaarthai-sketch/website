import React from "react";
import { Calendar as CalendarIcon, FileText, ChevronRight, Leaf } from "lucide-react";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "ta",
  title: "VEC-NL 2026-10 Edition 13 - போதகர் மேசையிலிருந்து",
  description: "100 நாட்கள் — இதுவரை கர்த்தர் நமக்கு உதவி செய்தார்! “இதுவரைக்கும் கர்த்தர் நமக்கு உதவி செய்தார்.” — 1 சாமுவேல் 7:12",
  path: "/pastors-desk",
  image: "/pastor-desk-hero.jpg",
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
              போதகர் மேசையிலிருந்து
            </span>
            <span className="h-px w-8 bg-accent/30"></span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            100 நாட்கள் — இதுவரை கர்த்தர் நமக்கு உதவி செய்தார்!
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 font-serif italic mb-8 max-w-2xl mx-auto">
            100 Days — This Far the Lord Has Helped Us!
          </p>
          <div className="flex items-center justify-center gap-4 text-sm font-medium text-stone-300">
            <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">VEC-NL • Edition #013</span>
            <span className="flex items-center gap-1"><CalendarIcon className="w-4 h-4 text-accent" /> அக்டோபர் 2026</span>
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
                  <span>VEC-NL 2026-10 · Edition 13</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-6 relative z-10 flex items-center gap-2">
                  100 நாட்கள் — இதுவரை கர்த்தர் நமக்கு உதவி செய்தார்!
                </h2>
                
                <div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg relative z-10 font-serif">

                  <blockquote className="border-l-4 border-accent pl-6 py-2 my-8 bg-stone-50 rounded-r-lg shadow-sm italic text-lg text-stone-800">
                    &ldquo;இதுவரைக்கும் கர்த்தர் நமக்கு உதவி செய்தார்.&rdquo;
                    <footer className="text-right text-sm font-bold text-accent mt-4 not-italic">— 1 சாமுவேல் 7:12</footer>
                  </blockquote>

                  <div className="my-6 rounded-xl overflow-hidden shadow-md border-2 border-stone-200">
                    <img 
                      src="/edition-13-ebenezer.jpg" 
                      alt="Ebenezer Stone - 100 Days of Vaarthai Evangelical Church" 
                      className="w-full h-auto object-cover max-h-[500px]" 
                    />
                  </div>

                  <p>
                    நேற்று நமது வார்த்தை சுவிசேஷ சபை, ஆரம்பிக்கப்பட்டு 100 நாட்கள் நிறைவடைந்த ஒரு மகிழ்ச்சியான மைல்கல்லை எட்டியுள்ளோம்!
                  </p>

                  <p>
                    ஒரு சபையின் வரலாற்றில் நூறு நாட்கள் என்பது மிகக் குறுகிய காலமாகத் தோன்றலாம். ஆனால் நம்மைப் பொறுத்தவரை, இந்த நூறு நாட்களும் விசுவாசம், கீழ்ப்படிதல், ஜெபம், அர்ப்பணிப்பு, ஊழியம், எல்லாவற்றிற்கும் மேலாக தேவனுடைய உண்மைத்தன்மை நிறைந்த ஒரு பயணம்.
                  </p>

                  <p>
                    இஸ்ரவேல் மக்களுக்கு தேவன் செய்த உதவிகளை நினைவுகூர்ந்த சாமுவேல், ஒரு கல்லை நாட்டி அதற்கு எபெனேசர் என்று பெயரிட்டு, &ldquo;இதுவரைக்கும் கர்த்தர் நமக்கு உதவி செய்தார்&rdquo; என்று சொன்னார்.
                  </p>

                  <p className="font-semibold text-primary text-xl">
                    இன்று வார்த்தை சபைக் குடும்பமாக நாமும் அதையே நன்றியுடன் சொல்ல முடிகிறது!
                  </p>

                  <p>
                    இந்தப் பயணத்தில் எங்களோடு இணைந்து ஜெபித்த, உழைத்த, கொடுத்த, உற்சாகப்படுத்திய, ஆதரவளித்த ஒவ்வொருவருக்காகவும் தேவனைத் துதிக்கிறேன். நீங்கள் அன்போடு செய்த ஒவ்வொரு சிறிய காரியமும் விலையேறப்பெற்றது.
                  </p>

                  <p className="font-medium text-stone-800">
                    ஆனால் இந்த நேரத்தில் நாம் ஒரு முக்கியமான உண்மையை நினைவில் கொள்ள வேண்டும்.
                  </p>

                  <div className="bg-stone-100 p-5 rounded-lg border-l-4 border-primary my-6">
                    <p className="text-lg md:text-xl font-bold text-primary m-0">
                      இந்த நூறு நாட்களில் நாம் என்ன சாதித்திருக்கிறோம் என்பதை அல்ல, தேவன் நம்மிடையே என்ன ஆரம்பித்திருக்கிறார் என்பதையே நாம் கொண்டாடுகிறோம்!
                    </p>
                  </div>

                  <p>
                    அப்போஸ்தலனாகிய பவுல் நமக்கு நினைவூட்டுகிறார்:
                  </p>

                  <blockquote className="border-l-4 border-accent pl-6 py-2 my-8 bg-stone-50 rounded-r-lg shadow-sm italic text-lg text-stone-800">
                    &ldquo;உங்களில் நற்கிரியையைத் தொடங்கினவர் அதை இயேசுகிறிஸ்துவின் நாள்பரியந்தம் முடிய நடத்திவருவாரென்று நம்பியிருக்கிறேன்.&rdquo;
                    <footer className="text-right text-sm font-bold text-accent mt-4 not-italic">— பிலிப்பியர் 1:6</footer>
                  </blockquote>

                  <p className="font-semibold text-lg text-stone-800">
                    இந்த நூறு நாட்கள் நமது இலக்கல்ல. இது ஒரு அழகான ஆரம்பம் மட்டுமே!
                  </p>

                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 text-center my-6">
                    <p className="text-sm uppercase tracking-wider text-accent font-bold mb-2">வரப்போகும் நாட்களிலும் நமது தரிசனம் மாறாமல் இருக்கட்டும்</p>
                    <p className="font-serif text-2xl md:text-3xl font-black text-primary">
                      கேட்போம் | வாழ்வோம் | பகிர்வோம்
                    </p>
                  </div>

                  <p>
                    வார்த்தை சபை மக்கள் கூடிவரும் ஒரு இடமாக மட்டுமல்லாமல், தேவனுடைய வார்த்தையால் வாழ்க்கைகள் மறுரூபமாக்கப்பட்டு, அவருடைய அன்பு மற்றவர்களுக்கும் எடுத்துச் செல்லப்படும் ஒரு விசுவாசக் குடும்பமாக வளரட்டும்!
                  </p>

                  <p className="font-medium text-stone-800">
                    கடந்த நூறு நாட்கள் தேவனுடைய உண்மைத்தன்மைக்குச் சாட்சி; வரப்போகும் நாட்கள் நம்முடைய விசுவாசத்திற்கும் உண்மையுள்ள ஊழியத்திற்குமான அழைப்பு!
                  </p>

                  <p className="pt-4">
                    அனைவருக்கும் என் மனமார்ந்த நன்றியும் அன்பும்!<br/>
                    ஆசீர்வாதங்களுடன்,<br/>
                    <strong>Ps வெஸ்லின்</strong><br/>
                    வார்த்தை சுவிசேஷ சபை
                  </p>

                  <div className="mt-12 rounded-xl overflow-hidden shadow-md border-2 border-stone-200 aspect-video">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/Dgp7vxN3fe8" 
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
                முந்தைய வெளியீடுகள்
              </h3>
              <div className="space-y-3">
                  <h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mb-2 pl-2">October 2026</h4>
                  <Link href="/pastors-desk" className="group flex items-start gap-2 p-3 rounded-md bg-stone-50 border border-stone-200 hover:border-accent hover:bg-accent/5 transition-colors">
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-900 font-bold group-hover:text-primary transition-colors">Edition 13</p>
                      <p className="text-xs text-stone-500">Oct 2026</p>
                    </div>
                  </Link>
                  <Link href="/pastors-desk/archive/october/edition-12" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 12</p>
                      <p className="text-xs text-stone-500">Oct 2026</p>
                    </div>
                  </Link>

                  <h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mt-6 mb-2 pl-2 border-t border-stone-100 pt-4">September 2026</h4>
                  <Link href="/pastors-desk/archive/september/edition-11" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 11</p>
                      <p className="text-xs text-stone-500">Sep 2026</p>
                    </div>
                  </Link>
                  <Link href="/pastors-desk/archive/september/edition-10" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 10</p>
                      <p className="text-xs text-stone-500">Sep 2026</p>
                    </div>
                  </Link>
                  <Link href="/pastors-desk/archive/september/edition-9" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 9</p>
                      <p className="text-xs text-stone-500">Sep 2026</p>
                    </div>
                  </Link>
                  <Link href="/pastors-desk/archive/september/edition-8" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 8</p>
                      <p className="text-xs text-stone-500">Sep 2026</p>
                    </div>
                  </Link>

                  <h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mt-6 mb-2 pl-2 border-t border-stone-100 pt-4">August 2026</h4>
                  <Link href="/pastors-desk/archive/august/edition-7" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
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
