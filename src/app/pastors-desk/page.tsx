import React from "react";
import { Calendar as CalendarIcon, FileText, ChevronRight, Leaf, Globe, Droplet, Coffee } from "lucide-react";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "ta",
  title: "VEC-NL 2026-10 Edition 12 - போதகர் மேசையிலிருந்து",
  description: "அனலின் நடுவிலும் வாழ்க்கை!",
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
            அனலின் நடுவிலும் வாழ்க்கை!
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 font-serif italic mb-8 max-w-2xl mx-auto">
            Life in the Heat
          </p>
          <div className="flex items-center justify-center gap-4 text-sm font-medium text-stone-300">
            <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">VEC-NL • Edition #012</span>
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
                  <span>VEC-NL 2026-10 · Edition 12</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-6 relative z-10 flex items-center gap-2">
                  அனலின் நடுவிலும் வாழ்க்கை!
                </h2>
                
                <div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg relative z-10 font-serif">

<div className="my-6 rounded-xl overflow-hidden shadow-md border-2 border-stone-200 bg-stone-900">
  <video 
    src="https://assets.science.nasa.gov/content/dam/science/psd/astrobiology/research-images/MovieS12_60C_normalmotility_switching%201080p_Crop.mp4" 
    autoPlay 
    loop 
    muted 
    playsInline 
    className="w-full h-auto object-cover max-h-[500px]" 
  />
</div>
<p className="text-right text-xs text-stone-400 mt-2 italic">Source: science.nasa.gov</p>

<p>
  சமீபத்தில் அமெரிக்காவின் கலிபோர்னியாவில் உள்ள வெந்நீர் ஊற்றுகளில் விஞ்ஞானிகள் ஒரு ஆச்சரியமான உயிரினத்தைக் கண்டுபிடித்திருக்கிறார்கள்.<br/>
  “Fire Amoeba” என்று அழைக்கப்படும் இந்த மிகச் சிறிய ஓரணு உயிரினம், கடுமையான வெப்பத்தை வெறுமனே தாங்கி உயிரோடு இருப்பது மட்டுமல்ல—63°C வெப்பத்திலும் வளர்ந்து, இனப்பெருக்கம் செய்கிறது! 64°C வெப்பத்தில்கூட தொடர்ந்து செயல்படுகிறது.
</p>

<p>
  இதில் என்னைக் கவர்ந்த விஷயம் இதுதான்:<br/>
  <strong>அது வாழ்வதற்கு வெப்பம் மறைய வேண்டிய அவசியமில்லை. அந்த வெப்பத்தின் நடுவிலேயே வாழும் திறன் அதற்கு இருக்கிறது.</strong>
</p>

<p>இதை வாசித்தபோது ஏசாயாவில் தேவன் சொன்ன வார்த்தை நினைவுக்கு வந்தது:</p>

<blockquote className="border-l-4 border-accent pl-6 py-2 my-8 bg-stone-50 rounded-r-lg shadow-sm italic text-lg text-stone-800">
  "நீ அக்கினியில் நடக்கும்போது வேகாதிருப்பாய்; அக்கினிஜுவாலை உன்பேரில் பற்றாது."
  <footer className="text-right text-sm font-bold text-accent mt-4 not-italic">— ஏசாயா 43:2</footer>
</blockquote>

<p>
  தேவன், “உன் வாழ்க்கையில் அக்கினியே வராது” என்று சொல்லவில்லை.<br/>
  “நீ அக்கினியில் நடக்கும்போது…” என்கிறார்.
</p>

<p>
  சில நேரங்களில்,<br/>
  “ஆண்டவரே, இந்தச் சூழ்நிலையிலிருந்து என்னை வெளியே கொண்டுவாருங்கள். இந்த அழுத்தத்தை நீக்குங்கள். இந்தப் பிரச்சனையை மாற்றுங்கள்”<br/>
  என்று நாம் ஜெபிக்கிறோம்.
</p>

<p>சில நேரங்களில் தேவன் அப்படியே செய்கிறார்.</p>

<p>
  ஆனால் சில காலங்களில் அனல் உடனடியாக மாறுவதில்லை. அதற்குப் பதிலாக, அந்த அனலின் நடுவிலும் வாழவும், வளரவும், விசுவாசத்தில் நிலைத்திருக்கவும் தேவன் நமக்குக் கிருபை தருகிறார்.
</p>

<p>
  ஒருவேளை நீங்களும் இப்போது ஒரு “அனலின்” வழியாகச் சென்றுகொண்டிருக்கலாம்.<br/>
  குடும்பப் பிரச்சனை, பொருளாதார அழுத்தம், வேலைப்பளு, ஏமாற்றம், எதிர்காலத்தைக் குறித்த நிச்சயமின்மை, அல்லது இன்னும் பதில் கிடைக்காத ஒரு ஜெபம்...
</p>

<p className="font-bold text-lg text-primary">
  அக்கினி இருக்கிறது என்பதால், தேவன் இல்லை என்று நினைத்துவிடாதீர்கள்.
</p>

<p>அவர் சொல்கிறார்:</p>

<blockquote className="border-l-4 border-accent pl-6 py-2 my-8 bg-stone-50 rounded-r-lg shadow-sm italic text-lg text-stone-800">
  "நீ தண்ணீர்களைக் கடக்கும்போது நான் உன்னோடு இருப்பேன்… நீ அக்கினியில் நடக்கும்போது வேகாதிருப்பாய்."
</blockquote>

<p>
  தேவனுடைய அற்புதம் எப்போதும் அக்கினியை அகற்றுவது மட்டுமல்ல.<br/>
  சில நேரங்களில் அக்கினியின் வழியாக நம்மை நடத்தி, அதன் நடுவிலும் அவர் நம்மோடு இருந்தார் என்பதை உணரச் செய்வதும் அற்புதம்தான்.
</p>

<p>நம்மால் முடியாது என்று தோன்றும்போது, அவருடைய இன்னொரு வாக்குத்தத்தத்தை நினைவுகூருவோம்:</p>

<blockquote className="border-l-4 border-accent pl-6 py-2 my-8 bg-stone-50 rounded-r-lg shadow-sm italic text-lg text-stone-800">
  "என் கிருபை உனக்குப் போதும்."
  <footer className="text-right text-sm font-bold text-accent mt-4 not-italic">— 2 கொரிந்தியர் 12:9</footer>
</blockquote>

<p>எனவே இந்த வாரம் நமது ஜெபம் இப்படியாக இருக்கட்டும்:</p>

<p className="font-serif italic text-xl text-center text-stone-600 my-8">
  “ஆண்டவரே, இந்த அனலை இன்னும் நீர் அகற்றவில்லையென்றால், அதன் வழியாக விசுவாசத்தோடு நடக்க எனக்குக் கிருபை தாரும்.”
</p>

<p>
  அனல் கடுமையாக இருக்கலாம்.<br/>
  ஆனால் அவருடைய கிருபை போதுமானது!
</p>

<p>
  ஆசீர்வாதங்களுடன்,<br/>
  <strong>பாஸ்டர் வெஸ்லின்</strong><br/>
  வார்த்தை சுவிசேஷ சபை
</p>

<div className="mt-12 rounded-xl overflow-hidden shadow-md border-2 border-stone-200 aspect-video">
  <iframe width="100%" height="100%" src="https://www.youtube.com/embed/iPY_rKxbc9Q" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
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
                      <p className="text-sm font-medium text-stone-900 font-bold group-hover:text-primary transition-colors">Edition 12</p>
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
