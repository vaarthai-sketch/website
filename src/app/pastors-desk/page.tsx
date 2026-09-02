import React from "react";
import { Calendar as CalendarIcon, FileText, ChevronRight, Leaf, Coffee, Globe } from "lucide-react";
import Link from "next/link";

import { NewsletterForm } from "@/components/NewsletterForm";
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  locale: 'ta',
  title: "VEC-NL 2026-09 Edition 9 - போதகர் மேசையிலிருந்து",
  description: "அமைதலாயிரு! (Peace, Be Still!) — A Word for Nepal and Tibet",
  path: '/pastors-desk',
  image: '/newsletter-9.png'
});

export default function PastorsDeskPage() {
  return (
    <main className="min-h-screen bg-stone-50 py-12">
      {/* Header section */}
      <section 
        className="relative text-white py-16 md:py-24 text-center overflow-hidden bg-cover bg-center bg-no-repeat bg-[#0F172A]"
        style={{ backgroundImage: "url('/newsletter-9.png')" }}
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
            அமைதலாயிரு!
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 font-serif italic mb-8 max-w-2xl mx-auto">
            "Peace, Be Still!" — A Word for Nepal and Tibet
          </p>
          <div className="flex items-center justify-center gap-4 text-sm font-medium text-stone-300">
            <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">VEC-NL • Edition #009</span>
            <span className="flex items-center gap-1"><CalendarIcon className="w-4 h-4 text-accent" /> செப்டம்பர் 2026</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Article Column */}
          <article className="lg:w-2/3 bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
            <div className="p-8 md:p-12 space-y-8 text-stone-700 leading-relaxed text-lg">
              
              <div className="prose prose-stone lg:prose-lg max-w-none font-serif">
                <p>சில வாரங்களுக்கு முன்பு, கொலம்பியாவில் ஏற்பட்ட நிலநடுக்கத்தால் பாதிக்கப்பட்டவர்களுக்காக நாம் ஒன்றாக ஜெபித்தோம். இன்று, நேபாளம்–திபெத் எல்லைப் பகுதியில் பனிப்பாறைச் சரிவால் ஏற்பட்ட திடீர் வெள்ளப்பெருக்கு உலகையே அதிர்ச்சிக்குள்ளாக்கியுள்ளது. வீடுகள், பாலங்கள், சாலைகள் அடித்துச் செல்லப்பட்டுள்ளன; பல குடும்பங்கள் தங்கள் அன்பானவர்களை இழந்து தவிக்கின்றன; காணாமல் போனவர்களைத் தேடும் பணிகளும் தொடர்ந்து நடைபெறுகின்றன.</p>
                <p>இந்தத் துயரத்தைத் தேவனுடைய தண்டனை என்று தீர்ப்பளிக்க நாம் அழைக்கப்படவில்லை. வேதாகமம் ஒவ்வொரு பேரழிவிற்கும் எளிதான விளக்கத்தைத் தருவதில்லை. மாறாக, “சர்வ சிருஷ்டியும் ஏகமாய்த் தவித்துப் பிரசவவேதனைப்படுகிறது” என்று கூறுகிறது (ரோமர் 8:22).</p>
                <p>எனவே, இத்தகைய நேரங்களில் நமது முதல் பதில் விளக்கம் அல்ல—இரக்கம்; தீர்ப்பு அல்ல—ஜெபம்.</p>

                <h3 className="text-2xl font-black text-primary mt-12 mb-6">படகிலே இருந்த இயேசு • JESUS IN THE BOAT</h3>
                <div className="bg-stone-50 border-l-4 border-accent p-6 rounded-r-lg my-8 shadow-sm">
                  <p className="italic text-stone-600 mb-2 font-medium">
                    “பெருங்காற்று உண்டாகி, படவு நிரம்பத்தக்கதாக, அலைகள் அதின்மேல் மோதிற்று… அவர்கள் அவரை எழுப்பி: போதகரே, நாங்கள் மடிந்துபோகிறது உமக்குக் கவலையில்லையா என்றார்கள். அவர் எழுந்து, காற்றை அதட்டி, கடலைப் பார்த்து: இரையாதே, அமைதலாயிரு என்றார்; அப்பொழுது காற்று நின்றுபோய், மிகுந்த அமைதல் உண்டாயிற்று.”
                  </p>
                  <p className="text-sm font-bold text-accent uppercase tracking-widest">— மாற்கு 4:37–39</p>
                </div>
                
                <p>இயேசு அந்தப் புயலைத் தூரமான ஒரு கரையிலிருந்து பார்த்துக்கொண்டிருக்கவில்லை. அலைகளால் அசைக்கப்பட்ட அதே படகில், பயந்துகொண்டிருந்த சீஷர்களுடன் அவர் இருந்தார்.</p>
                <p>சீஷர்கள் இயேசு படகில் இருந்ததை மறக்கவில்லை; ஆனால் புயலின் நடுவில் அவர் தங்கள்மேல் அக்கறையுள்ளவர் என்பதைச் சந்தேகித்தார்கள்: <strong>“நாங்கள் மடிந்துபோகிறது உமக்குக் கவலையில்லையா?”</strong></p>
                <p>இயேசுவின் தூக்கம் அலட்சியத்தின் அடையாளமல்ல; அது அச்சமின்மையின் அடையாளம். சீஷர்கள் புயலின் வல்லமையைப் பார்த்தார்கள்; ஆனால் அவர்களுடன் இருந்தவரின் வல்லமையை இன்னும் முழுமையாக அறிந்திருக்கவில்லை.</p>
                <p>இந்தச் சம்பவத்தில் இயேசு புயலை அடக்கினார். ஆனால் கிறிஸ்தவ விசுவாசம், நமது வாழ்க்கையின் ஒவ்வொரு புயலும் உடனடியாக அடங்கிவிடும் என்று வாக்குக் கொடுப்பதில்லை. சில நேரங்களில் அவர் புயலை அடக்குகிறார்; வேறு சில நேரங்களில், புயலின் வழியாகத் தமது மக்களைத் தாங்கிச் செல்கிறார்.</p>
                <p>ஆனால் இரண்டிலும் ஒரு உண்மை மாறுவதில்லை: <strong>அவர் நம்முடன் இருக்கிறார். நாம் மறக்கப்படவில்லை; நாம் தனியாகவும் இல்லை.</strong></p>

                <h3 className="text-2xl font-black text-primary mt-12 mb-6">அவர்களுடன் நிற்போம் • LET US STAND WITH THEM</h3>
                <p>நேபாளத்திலும் திபெத்திலும் துயரப்படுகிற மக்களுக்குத் தற்போது நமது விளக்கங்களைவிட, நமது ஜெபமும் இரக்கமும் உதவியும் தேவை.</p>
                <div className="bg-stone-50 border-l-4 border-accent p-6 rounded-r-lg my-8 shadow-sm">
                  <p className="italic text-stone-600 mb-2 font-medium">
                    “சீஷர் ஒவ்வொருவரும் தங்கள் தங்கள் திராணிக்குத்தக்கதாக யூதேயாவில் குடியிருக்கிற சகோதரருக்கு உதவி அனுப்பத் தீர்மானித்தார்கள்.”
                  </p>
                  <p className="text-sm font-bold text-accent uppercase tracking-widest">— அப்போஸ்தலர் 11:29</p>
                </div>
                <p>அந்தியோகியா சபைக்கும் யூதேயாவுக்கும் இடையே தூரம் இருந்தது; ஆனால் அந்தத் தூரம் அவர்களின் அன்பைத் தடுக்கவில்லை. அதுபோல, நேபாளமும் திபெத்தும் நமக்குத் தொலைவில் இருந்தாலும், பாதிக்கப்பட்டவர்கள் நமக்கு அந்நியர்கள் அல்ல. அவர்கள் நமது அயலார்; அவர்களுள் இருக்கும் விசுவாசிகள் கிறிஸ்துவுக்குள் நமது சகோதர சகோதரிகள்.</p>
                <p>நாம் தூரத்திலிருந்து செய்திகளைப் பார்ப்பவர்களாக மட்டும் இல்லாமல், ஜெபத்திலும் இரக்கத்திலும் இயன்ற உதவியிலும் அவர்களுடன் நிற்போம்.</p>
                
                <h3 className="text-2xl font-black text-primary mt-12 mb-6">ஜெபக் குறிப்புகள் • PRAYER POINTS</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>உயிரிழந்தவர்களின் குடும்பங்களுக்கு தேவனுடைய ஆறுதல் கிடைக்கும்படி.</li>
                  <li>காணாமல் போனவர்கள் கண்டுபிடிக்கப்படவும், மீட்புக் குழுவினர் பாதுகாக்கப்படவும்.</li>
                  <li>இடம்பெயர்ந்த குடும்பங்களுக்குத் தங்குமிடம், உணவு, சுத்தமான தண்ணீர் மற்றும் மருத்துவ உதவி கிடைக்கும்படி.</li>
                  <li>பாதிக்கப்பட்ட பகுதிகளில் உள்ள சபைகளும் விசுவாசிகளும் நம்பிக்கையுடன் நிலைத்திருக்கும்படி.</li>
                  <li>நிவாரணப் பணிகளுக்கு நமது சபை எவ்வாறு பங்களிக்கலாம் என்பதை அறியும் ஞானத்திற்காக.</li>
                  <li>நேபாளம் மற்றும் திபெத்தில் உறவினர்களைக் கொண்டவர்கள் நம்மிடையே இருந்தால், அவர்கள் இந்தத் துயரத்தைத் தனியாகச் சுமக்காமல் இருக்கும்படி.</li>
                </ul>

                <h3 className="text-2xl font-black text-primary mt-12 mb-6">இறுதி ஜெபம்</h3>
                <p>ஆண்டவரே, நேபாளத்திலும் திபெத்திலும் அழுகிறவர்களுடன் நீர் இரும். தங்கள் அன்பானவர்களை இழந்தவர்களை ஆற்றும். காணாமல் போனவர்களைக் கண்டுபிடிக்க உதவும். மீட்புப் பணியாளர்களைப் பாதுகாத்தருளும். தேவையிலிருப்பவர்களுக்கு உதவுவதற்கான இரக்கமுள்ள இருதயத்தையும் திறந்த கரங்களையும் எங்களுக்குத் தாரும். புயலின் மத்தியிலும், “நான் உன்னுடன் இருக்கிறேன்” என்ற உமது சத்தத்தை அவர்கள் கேட்கச் செய்யும்.</p>
                <p>இயேசுவின் நாமத்தில், ஆமென்.</p>

                <h3 className="text-2xl font-black text-primary mt-12 mb-6">அறிவிப்புகள் / ANNOUNCEMENTS</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <Globe className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <p>புதன் இரவு, “சங்கீத தியானங்களும், ஜெபமும்" நிகழ்வில் (Zoom) தவறாது கலந்து கொள்ளுங்கள். புதிதாக ஜெபத்தில் பங்கு பெற விரும்புவர்கள், கீழே உள்ள இணைப்பில் பதிவு செய்து கொள்ளுங்கள். உங்களுக்கு Zoom கூட்ட அழைப்புகள் அனுப்பி வைக்கப் படும். <br/><Link href="/events/mid-week-online-prayer" className="text-accent hover:underline font-bold">👉 இங்கே பதிவு செய்யவும்</Link></p>
                  </li>
                  <li className="flex gap-3">
                    <CalendarIcon className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <p>கடந்த ஞாயிறு நம்மால் குறித்த நேரத்தில் ஆராதனையை தொடங்க முடிந்தது. ஒத்துழைப்பு கொடுத்த அனைவருக்கும் நன்றி. தொடர்ந்து இதைச் செய்வதற்கு உங்கள் ஒத்துழைப்பைத் தாருங்கள்.</p>
                  </li>
                  <li className="flex gap-3">
                    <Coffee className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <p><strong>Vaarthai Live Kitchen (VLiK):</strong> நம்முடைய ஆராதனைக்குப் பின் நடைபெறும் இந்த ஐக்கியம் எல்லோராலும் உறவுகளைப் பரிமாரிக் கொள்ளும் நேரமாக VLiK இருப்பதில் மிக்க மகிழ்ச்சி!</p>
                  </li>
                </ul>
              </div>

            </div>
          </article>
          
          {/* Sidebar */}
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
