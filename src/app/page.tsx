import React from "react";
import Link from "next/link";
import { Calendar, MapPin, Clock, ArrowRight, Compass, Heart, MessageSquare } from "lucide-react";
import { churchConfig } from "@/data/config";
import { Button } from "@/components/Button";
import { NewsletterForm } from "@/components/NewsletterForm";

export default function HomePage() {

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. HERO SECTION */}
      <section 
        className="relative text-white py-24 md:py-32 overflow-hidden bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        aria-label="Welcome"
      >
        {/* Dark overlay to ensure text readability but allow image to show */}
        <div className="absolute inset-0 bg-[#0F172A]/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-[#0F172A]/50 to-transparent"></div>
        
        {/* Background Visual Patterns */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px] mix-blend-overlay"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/5 blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <span className="inline-flex items-center gap-2 px-4.5 py-2 rounded-full text-sm sm:text-base font-extrabold text-accent-light bg-accent/15 border border-accent/30 shadow-sm backdrop-blur-sm transition-all hover:bg-accent/20 hover:scale-[1.02] duration-300 select-none">
                <svg className="w-4 h-4 text-accent fill-current shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 2h2v7h6v2h-6v11h-2v-11h-6v-2h6V2z" />
                </svg>
                வார்த்தை சுவிசேஷ திருச்சபைக்கு உங்களை அன்போடு வரவேற்கிறோம்
              </span>
              <h1 className="font-kavivanar text-2xl sm:text-3xl md:text-4xl font-normal tracking-wide leading-[1.3] text-white">
                வார்த்தையைக் கேட்போம் <span className="text-accent">வார்த்தையின்படி நடப்போம்</span> வார்த்தையைப் பகிர்வோம்
              </h1>
              <p className="text-base text-stone-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-sans font-light">
                விசுவாசப் பயணத்தின் எந்த நிலையில் நீங்கள் இருந்தாலும், எங்கள் திருச்சபை உங்களை வரவேற்கிறது. தேவனை ஆராதிக்கவும், அவரோடு நெருங்கி ஜீவிக்கவும் எங்களுடன் இணையுங்கள்.
              </p>
              
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <Button href="/plan-your-visit" variant="accent" size="lg" className="font-bold shadow-md">
                  ஆலயத்திற்கு வர திட்டமிடுங்கள் (Visit)
                </Button>
                <Button href="/pastors-desk" variant="outline" size="lg" className="border-white text-white hover:bg-accent hover:border-accent hover:border-2 hover:text-white font-bold">
                  போதகரிடமிருந்து (From the Pastor)
                </Button>
              </div>

              {/* Service times banner */}
              <div className="flex items-center justify-center lg:justify-start gap-2 pt-4 text-sm text-stone-300">
                <Clock className="w-4 h-4 text-accent shrink-0" />
                <span>ஞாயிறு ஆராதனை: <strong>காலை 10:00 மணி (Brisbane, QLD, Australia)</strong></span>
              </div>
            </div>

            <div className="lg:col-span-5 hidden lg:flex flex-col items-center justify-center gap-6">
              {/* Main church logo in original colors, scaled up to fit the area */}
              <div className="w-48 h-48 lg:w-64 lg:h-64 select-none">
                <img 
                  src="/logo.png" 
                  alt={`${churchConfig.name} logo`} 
                  className="w-full h-full object-contain" 
                />
              </div>

              {/* Premium abstract card placeholder representing the church community */}
              <div className="relative w-full max-w-[360px] aspect-[1.35] rounded-xl overflow-hidden shadow-2xl border border-primary-light bg-gradient-to-tr from-primary to-[#334155] p-6 flex flex-col justify-between">
                <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="self-start flex items-center gap-2 relative z-10">
                  <div className="w-7 h-7 rounded bg-white flex items-center justify-center p-0.5 shadow-sm border border-white/10 shrink-0">
                    <img 
                      src="/logo.png" 
                      alt="logo" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="text-[10px] font-semibold uppercase tracking-widest text-accent-light font-serif">
                    {churchConfig.shortName}
                  </div>
                </div>
                
                <div className="my-auto space-y-3 relative z-10">
                  <div className="w-12 h-0.5 bg-accent"></div>
                  <blockquote className="font-serif text-lg italic font-medium leading-relaxed text-stone-100">
                    "ஆதியிலே வார்த்தை இருந்தது, அந்த வார்த்தை தேவனிடத்திலிருந்தது, அந்த வார்த்தை தேவனாயிருந்தது."
                  </blockquote>
                  <cite className="block text-xs font-bold text-accent uppercase tracking-widest not-italic">
                    — யோவான் 1:1 (ESV)
                  </cite>
                </div>
                
                <div className="flex justify-between items-center text-[11px] text-stone-300 border-t border-white/10 pt-3 relative z-10">
                  <span>Brisbane, QLD</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-accent" /> 10:00 AM</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WELCOME SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="aspect-[4/3] rounded-xl shadow-lg relative overflow-hidden group border border-border bg-stone-100">
            <img 
              src="/home-welcome.jpg" 
              alt="Vaarthai Church Worship Gathering" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg border border-border shadow-md z-10">
              <p className="text-xs font-bold text-accent uppercase tracking-widest">திருச்சபை கதவுகள்</p>
              <p className="text-sm font-semibold text-primary">விருப்பத்தோடு உங்களை வரவேற்கக் காத்திருக்கிறோம்</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-black text-primary leading-tight">
              தேவனை நேசிக்கவும், விசுவாசத்தில் வளரவும், சமுதாயத்திற்குச் சேவை செய்யவும் நாம் அழைக்கப்பட்டுள்ளோம்
            </h2>
            <p className="text-stone-700 leading-relaxed text-sm">
              வார்த்தை இவாஞ்சலிக்கல் சபையில் எங்கள் நோக்கம் எளிதானது: மக்கள் இயேசு கிறிஸ்துவின் அன்பைக் கண்டடையவும், நற்செய்தி விசுவாசத்தில் வளரவும், ஒருவருக்கொருவர் அன்புடன் தாங்கி உதவவும் விரும்புகிறோம்.
            </p>
            <p className="text-stone-700 leading-relaxed text-sm">
              நீங்கள் வாழ்க்கையின் பல கேள்விகளுக்கு வேதாகமப் பதிலை எதிர்பார்க்கிறீர்களா, அல்லது குடும்பமாக விசுவாசத்தில் வேரூன்ற விரும்புகிறீர்களா, எங்களோடு இணைந்து கொள்ளுங்கள்.
            </p>
            <div className="pt-2">
              <Link 
                href="/about" 
                className="font-bold text-primary hover:text-accent inline-flex items-center gap-1.5 transition-colors border-b-2 border-primary/20 pb-0.5"
              >
                எங்கள் வரலாறு மற்றும் விசுவாச விளக்கங்கள் <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* 3. SUNDAY INFORMATION PANEL */}
      <section className="bg-neutral-light/70 border-y border-border py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif text-2xl md:text-3xl font-black text-primary">
              ஞாயிறு ஆராதனைத் தகவல்கள்
            </h2>
            <p className="text-sm text-stone-600 mt-2">
              சபைக்கு முதன்முறையாக வர விரும்பும் விருந்தினர்களுக்கான தகவல்கள்.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Info Box 1 */}
            <div className="bg-white p-6 rounded-lg border border-border shadow-sm flex gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 text-accent">
                <Clock className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-stone-900">ஆராதனை நேரம்</h3>
                <p className="text-sm text-stone-600">ஞாயிறு காலை 10:00 மணி</p>
                <p className="text-xs text-stone-500">ஆராதனை நேரத்தில் சிறுவர்களுக்கான விசேஷித்த வகுப்புகள் நடைபெறும்.</p>
              </div>
            </div>

            {/* Info Box 2 */}
            <div className="bg-white p-6 rounded-lg border border-border shadow-sm flex gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 text-accent">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-stone-900">ஆலய முகவரி</h3>
                <p className="text-sm text-stone-600">
                  {churchConfig.contact.address.street}<br />
                  {churchConfig.contact.address.city}, {churchConfig.contact.address.state} {churchConfig.contact.address.zip}
                </p>
                <a 
                  href={churchConfig.contact.address.mapLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-primary hover:text-accent inline-flex items-center gap-1 mt-1 transition-colors"
                >
                  வரைபடத்தில் பார்க்க (Get Directions) <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Info Box 3 */}
            <div className="bg-white p-6 rounded-lg border border-border shadow-sm flex gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 text-accent">
                <Compass className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-stone-900">வாகன நிறுத்தம்</h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  வளாகத்திலே அநேக வாகன நிறுத்துமிடங்கள் உள்ளன. மாற்றுத்திறனாளிகளுக்கான பிரத்யேக வாகன நிறுத்துமிடங்களும், சாய்வுதள வசதியும் உள்ளன.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. NEW VISITOR CALLOUT & PRAYER / GIVING BLOCKS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* New Visitor Callout */}
          <div className="lg:col-span-7 bg-gradient-to-br from-[#1B3B6F] via-[#214F91] to-[#1A365D] border border-[#3B82F6]/30 text-white p-8 sm:p-12 rounded-xl flex flex-col justify-between shadow-md relative overflow-hidden">
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
            
            <div className="space-y-4 max-w-xl relative z-10">
              <span className="text-xs font-bold text-accent uppercase tracking-widest">புதியவரா?</span>
              <h2 className="font-serif text-3xl font-black tracking-tight leading-tight">
                உங்களது முதல் ஞாயிறு ஆராதனை வருகை
              </h2>
              <p className="text-sm text-blue-100/90 leading-relaxed font-light">
                புதிய ஒரு சபைக்கு வருவது சிலருக்குத் தயக்கத்தைத் தரலாம். ஆனால் எங்களது வார்த்தை சபையில் நீங்கள் அன்பான வரவேற்பையும், வேதப்பூர்வமான ஆராதனையையும் அனுபவிப்பீர்கள். குழந்தைகள் பாதுகாப்பு வருகைப்பதிவு முறை மற்றும் கார் பார்க்கிங் விவரங்கள் போன்ற உங்களது சந்தேகங்களுக்குப் பதிலளிக்க எங்களது வழிகாட்டியைப் படியுங்கள்.
              </p>
            </div>
            
            <div className="pt-8 relative z-10">
              <Button href="/plan-your-visit" variant="accent" size="md" className="font-bold">
                வருகையைத் திட்டமிட (Plan Your Visit)
              </Button>
            </div>
          </div>

          {/* Side Blocks: Prayer & Giving */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Prayer block */}
            <div className="bg-white border border-border p-8 rounded-xl flex flex-col justify-between shadow-sm flex-grow">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-serif font-black text-lg">
                  <MessageSquare className="w-5 h-5 text-accent" />
                  <h3>ஜெபம் தேவையா?</h3>
                </div>
                <p className="text-xs text-neutral-muted leading-relaxed">
                  நமது போதகக் குழுவும் ஜெபக் குழுவினரும் வாரந்தோறும் சபை மக்களின் ஜெப விண்ணப்பங்களுக்காகப் பாரத்தோடு ஜெபிக்கிறார்கள். உங்கள் விண்ணப்பங்களை எங்களோடு பகிர்ந்து கொள்ளுங்கள்.
                </p>
              </div>
              <div className="pt-6">
                <Button href="/prayer" variant="outline" size="sm" className="font-bold">
                  ஜெப விண்ணப்பம் அனுப்ப
                </Button>
              </div>
            </div>

            {/* Giving block */}
            <div className="bg-white border border-border p-8 rounded-xl flex flex-col justify-between shadow-sm flex-grow">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary font-serif font-black text-lg">
                  <Heart className="w-5 h-5 text-accent" />
                  <h3>உதவிக்கரம் நீட்ட</h3>
                </div>
                <p className="text-xs text-neutral-muted leading-relaxed">
                  கொடுப்பது ஆராதனையின் ஒரு வடிவம் என்று நாங்கள் நம்புகிறோம். உங்கள் தாராளக் கொடைகள் நற்செய்தி அறிவிப்புகளுக்கும் சமூக நற்பணி ஊழியங்களுக்கும் பயன்படுத்தப்படுகின்றன.
                </p>
              </div>
              <div className="pt-6">
                <Button href="/give" variant="accent" size="sm" className="font-bold">
                  ஆன்லைன் காணிக்கை (Give Online)
                </Button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. NEWSLETTER SIGNUP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-light border border-border rounded-xl p-8 sm:p-12 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-black text-primary mb-3">
            Subscribe to our Weekly Newsletter (திருச்சபையுடன் இணைந்திருங்கள்)
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mb-8 max-w-lg mx-auto leading-relaxed">
            Get the Pastor&apos;s weekly letter and church announcements delivered straight to your inbox every Wednesday morning.
          </p>
          <div className="max-w-md mx-auto text-left">
            <NewsletterForm />
          </div>
        </div>
      </section>

    </div>
  );
}
