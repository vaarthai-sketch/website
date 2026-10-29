import React from "react";
import { Calendar as CalendarIcon, FileText, ChevronRight, Leaf } from "lucide-react";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "ta",
  title: "VEC-NL 2026-10 Edition 15 - போதகர் மேசையிலிருந்து",
  description: "நேற்றைய கற்பனை… இன்றைய நிஜம்! ஆனால், ஒரு புதிய இருதயம்? — “அப்பொழுது நான் உங்கள்மேல் சுத்தமான ஜலம் தெளிப்பேன்; நீங்கள் சுத்தமாவீர்கள்... உங்களுக்கு நவமான இருதயத்தைக் கொடுத்து, உங்கள் உள்ளத்திலே புதிதான ஆவியைக் கட்டளையிடுவேன்.” — எசேக்கியேல் 36:25–26",
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
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
            நேற்றைய கற்பனை… இன்றைய நிஜம்!
          </h1>
          <p className="text-xl md:text-2xl text-accent font-serif italic mb-8 max-w-2xl mx-auto">
            ஆனால், ஒரு புதிய இருதயம்?
          </p>
          <div className="flex items-center justify-center gap-4 text-sm font-medium text-stone-300">
            <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">VEC-NL • Edition #015</span>
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
                  <span>VEC-NL 2026-10 · Edition 15</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-2 relative z-10 flex items-center gap-2">
                  நேற்றைய கற்பனை… இன்றைய நிஜம்!
                </h2>
                <p className="text-lg md:text-xl font-serif italic text-primary mb-6 relative z-10">
                  ஆனால், ஒரு புதிய இருதயம்?
                </p>
                
                <div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg relative z-10 font-serif">

                  <p>
                    ஒரு காலத்தில், உலகத்தின் மறுமுனையில் இருக்கும் ஒருவரை நேரில் பார்ப்பதுபோலப் பேசுவது வெறும் அறிவியல் புனைகதையாக இருந்தது. அல்லது மாயாஜாலக் கதைகளில், மாயக்கண்ணாடி என்று படித்த நினைவு இருக்கிறது. மனிதர்களுடன் உரையாடும் இயந்திரங்கள், மனிதனைப்போலச் சிந்தித்துச் செயல்படும் செயற்கை நுண்ணறிவு — இவையெல்லாம் கற்பனை உலகில் மட்டுமே இருந்தன.
                  </p>

                  <p className="font-semibold text-primary">
                    ஆனால் இன்று? கற்பனைகள் நிஜங்களாக மாறிக்கொண்டிருக்கின்றன!
                  </p>

                  <p>
                    மருத்துவ அறிவியலும் வியக்கத்தக்க வளர்ச்சியடைந்திருக்கிறது. செயலிழந்த மனித இருதயத்தை அகற்றிவிட்டு, மற்றொரு இருதயத்தைப் பொருத்தி உயிரைக் காப்பாற்ற முடிகிறது.
                  </p>

                  <p>
                    கடந்த மாதம், எங்கள் குடும்ப நண்பர் ஒருவர் தனது புதிய டெஸ்லா (Tesla) காரில் எங்கள் வீட்டிற்கு வந்திருந்தார்.
                  </p>

                  <p>
                    “வாருங்கள், உங்களுக்கு ஒரு விஷயத்தைக் காட்டுகிறேன்!” என்றார்.
                  </p>

                  <p>
                    அருகிலிருந்த ஒரு வணிக வளாகத்தின் முகவரியை காரில் பதிவு செய்துவிட்டு, ஸ்டீயரிங்கிலிருந்து தனது கைகளை எடுத்துவிட்டார்!
                  </p>

                  <p>
                    நாங்கள் ஆச்சரியத்துடன் பார்த்துக்கொண்டிருந்தோம்.
                  </p>

                  <p>
                    குறுகலான சாலையில் எதிரே வந்த வாகனங்களுக்கு வழிவிட்டது. சிவப்பு விளக்கில் நின்றது. சரியாக இலக்கை அடைந்தது. அதுமட்டுமல்ல, காலியாக இருந்த ஓர் இடத்தைக் கண்டுபிடித்து, மிக நேர்த்தியாகத் தானாகவே காரை நிறுத்தியது!
                  </p>

                  <p>
                    ஒரு காலத்தில் அறிவியல் புனைகதைகளில் மட்டுமே பார்த்த காட்சியை, அன்று எங்கள் கண்முன்னே நிஜமாகக் கண்டோம்!
                  </p>

                  <p>
                    அறிவியல் இவ்வளவு முன்னேறிவிட்டதே என்று வியந்தேன்.
                  </p>

                  <div className="bg-stone-100 p-5 rounded-lg border-l-4 border-primary my-6">
                    <p className="text-lg md:text-xl font-bold text-primary m-0">
                      ஆனால், எனக்குள் ஒரு கேள்வி எழுகிறது: மனிதன் ஓட்டும் காரையே மாற்றிவிட்ட அறிவியலால், மனிதனின் உள்ளத்தையும் மாற்ற முடியுமா?
                    </p>
                  </div>

                  <p>
                    வெறுப்பால் நிறைந்த இருதயத்தை அன்பால் நிரப்ப முடியுமா? மன்னிக்க மறுக்கும் மனதை மன்னிக்கும் மனதாக மாற்ற முடியுமா? குற்ற உணர்வால் தவிக்கும் மனிதனுக்குப் புதிய வாழ்க்கையைக் கொடுக்க முடியுமா?
                  </p>

                  <p>
                    இரண்டாயிரத்து ஐந்நூறு ஆண்டுகளுக்கு முன்பே, தேவன் எசேக்கியேல் தீர்க்கதரிசியின் மூலமாக ஓர் அற்புதமான வாக்குத்தத்தத்தைக் கொடுத்தார்.
                  </p>

                  <blockquote className="border-l-4 border-accent pl-6 py-2 my-8 bg-stone-50 rounded-r-lg shadow-sm italic text-lg text-stone-800">
                    &ldquo;அப்பொழுது நான் உங்கள்மேல் சுத்தமான ஜலம் தெளிப்பேன்; நீங்கள் சுத்தமாவீர்கள்... உங்களுக்கு நவமான இருதயத்தைக் கொடுத்து, உங்கள் உள்ளத்திலே புதிதான ஆவியைக் கட்டளையிடுவேன்.&rdquo;
                    <footer className="text-right text-sm font-bold text-accent mt-4 not-italic">— எசேக்கியேல் 36:25–26</footer>
                  </blockquote>

                  <p className="font-semibold text-primary">
                    எவ்வளவு அழகான வாக்குத்தத்தம்!<br/>
                    முதலில் சுத்திகரிப்பு! அதைத் தொடர்ந்து புதிய இருதயம்!
                  </p>

                  <p>
                    தேவன் இங்கே பேசுவது உடலிலுள்ள இருதயத்தை மாற்றுவதைப் பற்றியல்ல. மனிதனுடைய உள்ளத்தில் நிகழும் ஆழமான மாற்றத்தைப் பற்றியே பேசுகிறார்.
                  </p>

                  <p>
                    இந்த வாக்குத்தத்தத்தில் குறிப்பிடப்படும் தண்ணீர், தேவன் அருளும் சுத்திகரிப்பைச் சுட்டிக்காட்டுகிறது. ஞானஸ்நானமும் நம்மைச் சுத்திகரிக்கும் தேவனுடைய கிருபையை நினைவூட்டும் அழகான அடையாளமாக இருக்கிறது. ஆனால் தண்ணீருக்குத் தன்னிலேயே பாவத்தை நீக்கும் வல்லமை இல்லை. இயேசு கிறிஸ்துவே நம்மை இரட்சித்து, நம் உள்ளத்தைப் புதிதாக்குகிறார்.
                  </p>

                  <p>
                    இதைத்தான் இயேசு நிக்கொதேமுவிடம், “ஒருவன் மறுபடியும் பிறவாவிட்டால் தேவனுடைய ராஜ்யத்தைக் காணமாட்டான்” (யோவான் 3:3) என்று விளக்கினார்.
                  </p>

                  <p className="font-medium text-stone-800">
                    இந்த ஞாயிற்றுக்கிழமை, நமது வார்த்தை சுவிசேஷ சபையில் இருவர் ஞானஸ்நானம் பெறவிருக்கிறார்கள். இது நம் அனைவருக்கும் மகிழ்ச்சியான தருணம்!
                  </p>

                  <p>
                    ஞானஸ்நானம் என்பது வெறும் மதச்சடங்கோ, பாரம்பரிய நிகழ்வோ அல்ல. இயேசு கிறிஸ்துவின் மரணத்திலும், அடக்கத்திலும், உயிர்த்தெழுதலிலும் நாம் அவரோடு இணைந்திருக்கிறோம் என்பதை வெளிப்படையாக அறிவிக்கும் விசுவாசத்தின் சாட்சியாகும்.
                  </p>

                  <p>
                    ரோமர் 6:4 நமக்கு நினைவூட்டுவது இதுதான்: கிறிஸ்து உயிர்த்தெழுந்ததுபோல, நாமும் புதிதான ஜீவனுள்ளவர்களாய் நடந்துகொள்ள அழைக்கப்பட்டிருக்கிறோம்.
                  </p>

                  <p>
                    இன்று உலகம் எவ்வளவு மாறிவிட்டது என்று நாம் வியக்கிறோம்.<br/>
                    ஆனால், நம்முடைய உள்ளம் எவ்வளவு மாறியிருக்கிறது என்று சிந்தித்திருக்கிறோமா?
                  </p>

                  <p>
                    நீங்கள் இயேசுவை விசுவாசிக்கிறவராக இருந்தும், இன்னும் ஞானஸ்நானம் பெறாமல் இருக்கிறீர்களா? அப்படியானால், உங்களைத் தடுத்து நிறுத்துவது எது?
                  </p>

                  <p>
                    இந்த ஞாயிற்றுக்கிழமை இருவருடைய விசுவாச அறிக்கையைக் கொண்டாடும்போது, நம்முடைய சொந்த விசுவாசப் பயணத்தையும் சிந்தித்துப் பார்ப்போம்.
                  </p>

                  <p className="font-semibold text-primary">
                    நேற்றைய அறிவியல் கற்பனைகள் இன்று நிஜமாகிவிட்டன.<br/>
                    ஆனால், புதிய இருதயத்தைக் கொடுப்பதாக தேவன் அளித்த வாக்குத்தத்தம்.
                  </p>

                  <div className="bg-accent/10 p-6 rounded-xl border border-accent/30 my-8 space-y-3">
                    <p className="text-base md:text-lg font-medium text-stone-800 m-0">
                      இந்த ஞாயிற்றுக்கிழமை ஞானஸ்நானம் பெறவிருக்கும் இருவரையும் அன்புடன் வாழ்த்துகிறோம்! கர்த்தர் அவர்களுடைய விசுவாசப் பயணத்தை ஆசீர்வதித்து, புதிதான ஜீவனில் நாள்தோறும் வளரச் செய்வாராக!
                    </p>
                    <p className="text-base md:text-lg font-medium text-stone-800 m-0">
                      நம் ஒவ்வொருவருடைய இருதயத்தையும் தேவன் புதுப்பித்து, அவருக்குப் பிரியமான வாழ்க்கை வாழ நம்மை வழிநடத்துவாராக!
                    </p>
                  </div>

                  <p className="pt-4">
                    உங்கள் அனைவருக்கும் என் அன்பான நல்வாழ்த்துகள்!<br/>
                    கிறிஸ்துவின் அன்புடன்,<br/>
                    <strong>போதகர் வெஸ்லின்</strong><br/>
                    வார்த்தை சுவிசேஷ சபை
                  </p>

                  <div className="mt-12 rounded-xl overflow-hidden shadow-md border-2 border-stone-200 aspect-video">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/CUZAOsqsZAA" 
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
                      <p className="text-sm font-medium text-stone-900 font-bold group-hover:text-primary transition-colors">Edition 15</p>
                      <p className="text-xs text-stone-500">Oct 2026</p>
                    </div>
                  </Link>
                  <Link href="/pastors-desk/archive/october/edition-14" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 14</p>
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
