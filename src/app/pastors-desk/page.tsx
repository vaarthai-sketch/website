import React from "react";
import { Calendar as CalendarIcon, FileText, ChevronRight, Leaf, Globe, Droplet, Coffee } from "lucide-react";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "ta",
  title: "VEC-NL 2026-09 Edition 9 - போதகர் மேசையிலிருந்து",
  description: "கண்ணுக்குத் தெரியாத காயங்கள் (Wounds We Cannot See)",
  path: "/pastors-desk",
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
              போதகர் மேசையிலிருந்து
            </span>
            <span className="h-px w-8 bg-accent/30"></span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            கண்ணுக்குத் தெரியாத காயங்கள்
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 font-serif italic mb-8 max-w-2xl mx-auto">
            Wounds We Cannot See
          </p>
          <div className="flex items-center justify-center gap-4 text-sm font-medium text-stone-300">
            <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">VEC-NL • Edition #009</span>
            <span className="flex items-center gap-1"><CalendarIcon className="w-4 h-4 text-accent" /> செப்டம்பர் 2026</span>
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
                  கண்ணுக்குத் தெரியாத காயங்கள்
                </h2>
                
                <div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg relative z-10">

                  <div className="my-6">
                    <div className="rounded-xl overflow-hidden shadow-md border-2 border-stone-200">
                      <img src="/newsletter-911.webp" alt="Wounds We Cannot See - September 11" className="w-full h-auto object-cover max-h-[500px]" />
                    </div>
                    <p className="text-right text-xs text-stone-400 mt-2 italic">
                      Photo: Wikipedia
                    </p>
                  </div>

                  <p>உலகையே உலுக்கிய செப்டம்பர் 11 தாக்குதல்கள் நடந்து, இந்த செப்டம்பர் 11 அன்று 25 ஆண்டுகள் நிறைவடைகின்றன என்பதை நம்பவே கடினமாக இருக்கிறது. நியூயார்க் இதழில் எழுதிய பத்திரிகையாளர் லூகஸ் ஐ. ஆல்பர்ட், முன்னாள் சக ஊழியர் ஒருவரின் மின்னஞ்சல் தனது வாழ்க்கையைத் திரும்பிப் பார்க்க வைத்ததைப் பகிர்ந்துகொள்கிறார். இருவரும் தாக்குதல் நடந்த இடத்தில் பணியாற்றியவர்கள். பல ஆண்டுகளுக்குப் பிறகு, இருவருக்கும் தைராய்டு புற்றுநோய் இருப்பது கண்டறியப்பட்டது. அங்கு சுவாசித்த நச்சுக் காற்றுக்கும் நோய்க்கும் தொடர்பு இருக்கலாம் என்ற நண்பரின் சந்தேகம், அந்தத் தாக்குதல் தன்னையும் அறியாத விதத்தில் பாதித்திருக்கக்கூடும் என்பதை அவருக்கு உணர்த்தியது.</p>

                  <p>செய்திகள் வேறு நிகழ்வுகளுக்குச் சென்றுவிட்டன. ஆனால், வேதனை தொடர்ந்துகொண்டிருந்தது.</p>

                  <p>அதைப் போலவே நம்மைச் சுற்றியிருப்பவர்களும் நாம் காணாத காயங்களைச் சுமந்துகொண்டிருக்கலாம். ஒரு புன்னகைக்குப் பின்னால் இன்னும் வலிக்கும் இழப்பு இருக்கலாம். நோயைப் பற்றிய பயம் இருக்கலாம். யாரிடமும் சொல்ல முடியாத குடும்பப் போராட்டம் இருக்கலாம்.</p>

                  <p className="font-bold text-lg text-center text-stone-800 border-y border-stone-200 py-4 my-6">காலம் கடந்துவிட்டது என்பதால், காயம் ஆறிவிட்டது என்று நினைக்க வேண்டாம்.</p>

                  <blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700">
                    <p>“இருதயம் நொறுங்குண்டவர்களைக் குணமாக்குகிறார், அவர்களுடைய காயங்களைக் கட்டுகிறார்.”</p>
                    <p className="mt-2 text-right text-sm">— சங்கீதம் 147:3</p>
                  </blockquote>

                  <p>மற்றவர்கள் கவனிக்காத வேதனையையும் தேவன் காண்கிறார். நம் வலியை அவரிடம் மறைக்க வேண்டியதில்லை. எல்லாவற்றிலிருந்தும் மீண்டுவிட்டதுபோல் நடிக்கவும் வேண்டியதில்லை. நொறுங்கிய இருதயத்தோடும் அவரை அணுகலாம்.</p>

                  <p>அவருடைய சபையாக, நாமும் அந்த அன்பையும் அக்கறையையும் வெளிப்படுத்த அழைக்கப்பட்டிருக்கிறோம். எல்லாக் கேள்விகளுக்கும் நம்மிடம் பதில் இல்லாமல் இருக்கலாம். ஆனால், நாம் அப்படிப்பட்டவர்களை அடையாளம் காணும்போது, அவர்களுக்குச் செவிகொடுக்கலாம்; ஜெபிக்கலாம்; தொடர்ந்து துணையாக இருக்கலாம். “இப்போது எப்படி இருக்கிறீர்கள்? சமாளிக்க முடிகிறதா?” என்ற அன்பான விசாரிப்புகூட, ஒருவர் தன் பாரத்தைப் பகிர்ந்துகொள்ள வழிகளைத் திறந்து கொடுக்கும்.</p>

                  <p>இந்த வாரம், மற்றவர்கள் விசாரிக்க மறந்துபோன ஒருவரைத் தொடர்புகொள்ளுங்கள். அவர்கள் இன்னும் நினைவுகூரப்படுகிறார்கள், அன்புகூரப்படுகிறார்கள் என்பதை உணர்த்துங்கள்.</p>

                  <p className="font-bold italic text-stone-800">ஆண்டவரே, அமைதியாக வேதனையைச் சுமப்பவர்களை அடையாளம் காண எங்களுக்கு உதவும். பொறுமையோடு செவிகொடுக்கவும், மாறாத அன்போடு அவர்களுக்குத் துணையாக இருக்கவும் எங்களுக்குக் கற்றுத்தாரும். ஆமென்.</p>
                  
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

              <h3 className="text-xl md:text-2xl font-bold text-stone-900 mt-10 mb-4 border-b border-stone-200 pb-2">அறிவிப்புகள் / ANNOUNCEMENTS</h3>
              <div className="space-y-4">
                
                <div className="flex gap-4 p-4 rounded-lg bg-stone-50 border border-stone-100">
                  <Droplet className="w-6 h-6 text-accent shrink-0 mt-1" />
                  <div>
                    <p className="text-stone-700 font-bold mb-1">அக்டோபர் மாதத்தில் ஞானஸ்நானம் / Baptism in October</p>
                    <p className="text-stone-600 text-sm">வரவிருக்கும் அக்டோபர் மாதத்தில் ஞானஸ்நான ஆராதனை நடைபெற உள்ளது. ஞானஸ்நானம் எடுக்க விரும்புகிறவர்கள், தயவுசெய்து நம்முடைய சபை செயலாளர் திரு. தேவையிரக்கம் பால் அவர்களிடம் பதிவு செய்யுமாறு கேட்டுக்கொள்கிறோம். ஞானஸ்நானத்தின் வேதாகம அர்த்தத்தையும் முக்கியத்துவத்தையும் விளக்கும் ஆயத்த வகுப்புகள் இனி வரும் வாரங்களில் நடைபெறும்.</p>
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
                முந்தைய வெளியீடுகள்
              </h3>
              <div className="space-y-3">
                  <h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mb-2 pl-2">September 2026</h4>
                  <Link href="/pastors-desk" className="group flex items-start gap-2 p-3 rounded-md bg-stone-50 border border-stone-200 hover:border-accent hover:bg-accent/5 transition-colors">
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-900 font-bold group-hover:text-primary transition-colors">Edition 9</p>
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
                  <Link href="/pastors-desk/archive/august/edition-6" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 6</p>
                      <p className="text-xs text-stone-500">Aug 2026</p>
                    </div>
                  </Link>
                  <Link href="/pastors-desk/archive/august/edition-5" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 5</p>
                      <p className="text-xs text-stone-500">Aug 2026</p>
                    </div>
                  </Link>
                  <Link href="/pastors-desk/archive/august/edition-4" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 4</p>
                      <p className="text-xs text-stone-500">Aug 2026</p>
                    </div>
                  </Link>

                  <h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mt-6 mb-2 pl-2 border-t border-stone-100 pt-4">July 2026</h4>
                  <Link href="/pastors-desk/archive/july/edition-3" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 3</p>
                      <p className="text-xs text-stone-500">Jul 2026</p>
                    </div>
                  </Link>
                  <Link href="/pastors-desk/archive/july/edition-2" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 2</p>
                      <p className="text-xs text-stone-500">Jul 2026</p>
                    </div>
                  </Link>
                  <Link href="/pastors-desk/archive/july/edition-1" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
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
