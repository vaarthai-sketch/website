import React from "react";
import { Calendar as CalendarIcon, FileText, ChevronRight, Leaf } from "lucide-react";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "ta",
  title: "VEC-NL 2026-10 Edition 14 - போதகர் மேசையிலிருந்து",
  description: "இருளிலிருந்து வெளிச்சத்திற்கு — பிதாவின் மகிமையினாலே கிறிஸ்து மரித்தோரிலிருந்து எழுப்பப்பட்டதுபோல, நாமும் புதிதான ஜீவனுள்ளவர்களாய் நடந்துகொள்ளும்படிக்கு...",
  path: "/pastors-desk",
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
              போதகர் மேசையிலிருந்து
            </span>
            <span className="h-px w-8 bg-accent/30"></span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            இருளிலிருந்து வெளிச்சத்திற்கு
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 font-serif italic mb-8 max-w-2xl mx-auto">
            From Darkness into Light
          </p>
          <div className="flex items-center justify-center gap-4 text-sm font-medium text-stone-300">
            <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">VEC-NL • Edition #014</span>
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
                  <span>VEC-NL 2026-10 · Edition 14</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-6 relative z-10 flex items-center gap-2">
                  இருளிலிருந்து வெளிச்சத்திற்கு
                </h2>
                
                <div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg relative z-10 font-serif">

                  <div className="my-6 rounded-xl overflow-hidden shadow-md border-2 border-stone-200">
                    <img 
                      src="/edition-14-phoenix.jpg" 
                      alt="Phoenix Rescue Capsule - 2010 Chile Mine Rescue" 
                      className="w-full h-auto object-cover max-h-[500px]" 
                    />
                  </div>

                  <p>
                    பதினாறு ஆண்டுகளுக்கு முன், 2010 அக்டோபர் 13 அன்று, சிலி நாட்டின் ஒரு சுரங்கத்திலிருந்து மனிதர்கள் ஒவ்வொருவராக மேலே வந்தார்கள். நீண்ட நாட்கள் இருளில் இருந்ததால், கண்களைப் பாதுகாக்கக் கருப்புக் கண்ணாடி அணிந்திருந்தார்கள். காத்திருந்த குடும்பத்தினர் கண்ணீரோடு அவர்களைத் தழுவிக்கொண்டார்கள்.
                  </p>

                  <div className="my-6 rounded-xl overflow-hidden shadow-md border-2 border-stone-200">
                    <img 
                      src="/edition-14-family.jpg" 
                      alt="Rescued Chilean Miner Embracing Family" 
                      className="w-full h-auto object-cover max-h-[500px]" 
                    />
                  </div>

                  <p>
                    69 நாட்களுக்கு முன்பு சுரங்கம் இடிந்து விழுந்தபோது, 33 தொழிலாளர்கள் அரை கிலோமீட்டருக்கும் அதிகமான ஆழத்தில் சிக்கிக்கொண்டார்கள். தங்களைத் தாங்களே மீட்டுக்கொள்ள அவர்களுக்கு வழியே இல்லை. மீட்புக் குழுவினர் பாறையைத் துளைத்துப் பாதை அமைத்தார்கள். அதன் வழியாக, ‘ஃபீனிக்ஸ்’ (Phoenix) என்ற மீட்புக் கலத்தில், முதலில் ஒரு மீட்புப் பணியாளர் அவர்கள் இருந்த இடத்திற்கே இறங்கிச் சென்றார். பின்பு அதே கலத்தில் ஒவ்வொருவரும் மேலே கொண்டுவரப்பட்டார்கள். முப்பத்து மூவரும் உயிருடன் வெளியே வந்தார்கள்.
                  </p>

                  <p className="font-semibold text-primary text-xl">
                    அவர்களுடைய மீட்பின் கதை, நமக்காக இயேசு செய்ததை நினைவூட்டுகிறது.
                  </p>

                  <p>
                    பாவத்தின் இருளில் சிக்கியிருந்த நம்மால், நம்மை நாமே மீட்டுக்கொள்ள முடியவில்லை. ஆகவே, தேவகுமாரனே நாம் இருந்த இடத்திற்கு இறங்கி வந்தார். நமது பாவங்களைச் சிலுவையில் சுமந்தார்; மரித்தார்; உயிர்த்தெழுந்தார். அவரை விசுவாசிக்கிற நமக்குப் பாவமன்னிப்பையும் புதிய வாழ்க்கையையும் தருகிறார். தேவன் நம்மை இருளின் அதிகாரத்திலிருந்து விடுவித்து, தமது அன்பின் குமாரனுடைய ராஜ்யத்திற்குள் கொண்டுவந்திருக்கிறார் (கொலோசெயர் 1:13).
                  </p>

                  <p>
                    ஆனால், அந்தத் தொழிலாளர்களின் கதை மீட்கப்பட்ட நாளோடு முடியவில்லை. பின்வந்த ஆண்டுகளில், அவர்களில் பலர் பயங்கரக் கனவுகளோடும் மனக்காயங்களோடும் போராடினார்கள். சுரங்கத்திலிருந்து வெளியே வர ஒரு நாள் போதுமானதாக இருந்தது; விடுதலையோடு வாழக் கற்றுக்கொள்ள நீண்ட காலம் தேவைப்பட்டது. கிறிஸ்தவ வாழ்க்கையும் அப்படித்தான். கிறிஸ்து நம்மை முழுமையாக மீட்டுவிட்டார்; மீட்கப்பட்டவர்களாக வாழக் கற்றுக்கொள்வதோ நாள்தோறுமான பயணம்.
                  </p>

                  <p className="font-medium text-stone-800">
                    நவம்பர் 1 அன்று நமது சபையில் நடைபெறவிருக்கும் ஞானஸ்நானங்களை இந்த நற்செய்தியின் வெளிச்சத்தில் பார்ப்போம்.
                  </p>

                  <blockquote className="border-l-4 border-accent pl-6 py-2 my-8 bg-stone-50 rounded-r-lg shadow-sm italic text-lg text-stone-800">
                    &ldquo;…பிதாவின் மகிமையினாலே கிறிஸ்து மரித்தோரிலிருந்து எழுப்பப்பட்டதுபோல, நாமும் புதிதான ஜீவனுள்ளவர்களாய் நடந்துகொள்ளும்படிக்கு, ஞானஸ்நானத்தினால் மரணத்திற்குள்ளாகும்படி அவரோடேகூட அடக்கம்பண்ணப்பட்டோம்.&rdquo;
                    <footer className="text-right text-sm font-bold text-accent mt-4 not-italic">— ரோமர் 6:4</footer>
                  </blockquote>

                  <p>
                    ஞானஸ்நானத்தில், கிறிஸ்துவின் மரணத்தோடும் உயிர்த்தெழுதலோடும் நமக்குள்ள இணைப்பை வெளிப்படையாக அறிக்கையிடுகிறோம். தண்ணீருக்குள் இறங்குவது அவரோடுகூட அடக்கம்பண்ணப்பட்டதையும், தண்ணீரிலிருந்து எழுவது புதிய வாழ்க்கையில் நடக்க அழைக்கப்பட்டிருப்பதையும் காட்டுகிறது.
                  </p>

                  <p>
                    “நடந்துகொள்ளும்படிக்கு” என்ற வார்த்தை நமது அன்றாட வாழ்க்கைக்கான அழைப்பு. நமது உறவுகளிலும் தீர்மானங்களிலும் கிறிஸ்துவைப் பின்பற்றுகிறோம். மறைத்துவைத்திருக்கும் பாவத்தை அறிக்கையிடுகிறோம். நாம் காயப்படுத்தியவரிடம் மன்னிப்புக் கேட்கிறோம். நம்மை அடிமைப்படுத்தும் பழக்கத்திலிருந்து விடுபட உதவியை நாடுகிறோம்.
                  </p>

                  <p>
                    நம்மில் சிலர் கடந்தகாலத் தோல்விகளை நினைத்து, “என்னால் உண்மையிலேயே மாற முடியுமா?” என்று தயங்கலாம். “ஒருவன் கிறிஸ்துவுக்குள் இருந்தால் புதுச்சிருஷ்டியாயிருக்கிறான்; பழையவைகள் ஒழிந்துபோயின, எல்லாம் புதிதாயின” (2 கொரிந்தியர் 5:17). கிறிஸ்துவின் கிருபையினால், நமது பாவத்தை உண்மையாக ஒப்புக்கொண்டு, பரிசுத்த ஆவியானவரின் உதவியோடு இன்றே புதிய கீழ்ப்படிதலைத் தொடங்கலாம்.
                  </p>

                  <p>
                    அன்பான வார்த்தை குடும்பமே, சுரங்கத்திலிருந்து வந்தவர்களை அவர்களுடைய குடும்பங்கள் தழுவிக்கொண்டதுபோல, ஞானஸ்நானம் பெறுகிறவர்களை நாமும் மகிழ்ச்சியுடன் வரவேற்போம். அவர்களுடன் ஜெபித்து, தேவனுடைய வார்த்தையைப் பகிர்ந்து, சிரமமான நாட்களில் அவர்களைத் தாங்குவோம். ஞானஸ்நானம் பற்றி நீங்களும் ஜெபத்தோடு சிந்தித்துக்கொண்டிருந்தால், போதகரிடம் தயங்காமல் பேசுங்கள்.
                  </p>

                  <p className="font-semibold text-primary text-lg">
                    நாமும் நம்முடைய வாழ்க்கையை ஆண்டவரிடம் புதிதாக ஒப்புக்கொடுத்து, அவரோடு நடப்போம்.
                  </p>

                  <div className="bg-stone-100 p-6 rounded-xl border-l-4 border-primary my-8 space-y-2">
                    <p className="text-sm font-bold uppercase tracking-wider text-primary m-0">சிந்தனை</p>
                    <p className="text-base md:text-lg font-medium text-stone-800 m-0">
                      கிறிஸ்து என்னை விடுவித்த பின்னரும், நான் இன்னும் பற்றிக்கொண்டிருக்கும் பழைய பழக்கம் அல்லது பாவம் ஏதேனும் உண்டா? அதை அவரிடம் ஒப்புக்கொடுக்க இன்று நான் எடுக்க வேண்டிய அடி என்ன?
                    </p>
                  </div>

                  <div className="bg-accent/10 p-6 rounded-xl border border-accent/30 my-8 space-y-2">
                    <p className="text-sm font-bold uppercase tracking-wider text-accent-dark m-0">ஜெபம்</p>
                    <p className="text-base md:text-lg italic text-stone-800 m-0">
                      அன்புள்ள பிதாவே, உமது குமாரன் மூலமாக எங்களை இருளிலிருந்து மீட்டு, புதிய வாழ்க்கையைத் தந்ததற்காக நன்றி. எங்கள் பாவங்களை உம்மிடம் ஒப்புக்கொடுக்கிறோம். உமது பரிசுத்த ஆவியினால் எங்களைப் புதுப்பித்து, உமக்குக் கீழ்ப்படிந்து வாழப் பெலன் தாரும். ஞானஸ்நானம் பெறுகிற ஒவ்வொருவரையும் விசுவாசத்தில் உறுதிப்படுத்தி, அவர்களை அன்புடன் தாங்கும் சபைக் குடும்பமாக எங்களை உருவாக்கும். இயேசுவின் நாமத்தில் ஜெபிக்கிறோம். ஆமென்.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-200">
                    <p className="font-bold text-primary mb-1">
                      Ps. Weslyn | Vaarthai Evangelical Church
                    </p>
                    <p className="text-sm font-bold text-accent tracking-wider">
                      கேட்போம் | வாழ்வோம் | பகிர்வோம்
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
                முந்தைய வெளியீடுகள்
              </h3>
              <div className="space-y-3">
                  <h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mb-2 pl-2">October 2026</h4>
                  <Link href="/pastors-desk" className="group flex items-start gap-2 p-3 rounded-md bg-stone-50 border border-stone-200 hover:border-accent hover:bg-accent/5 transition-colors">
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-900 font-bold group-hover:text-primary transition-colors">Edition 14</p>
                      <p className="text-xs text-stone-500">Oct 2026</p>
                    </div>
                  </Link>
                  <Link href="/pastors-desk/archive/october/edition-13" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 13</p>
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
