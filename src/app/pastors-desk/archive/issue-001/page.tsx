import React from "react";
import { Calendar as CalendarIcon, FileText, ChevronRight } from "lucide-react";
import Link from "next/link";
import { churchConfig } from "@/data/config";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata = {
  title: "VEC-NL 2026-08 Issue 001 - From the Pastor's Desk",
  description: `Weekly newsletter and updates from the Pastor at ${churchConfig.name}.`,
};

export default function PastorsDeskArchive1Page() {
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
            From the Pastor's Desk
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
              <div className="bg-white rounded-lg shadow-sm border border-border p-6 md:p-10 mb-8">
                <div className="flex items-center gap-2 text-sm text-accent-dark font-bold mb-4">
                  <CalendarIcon className="w-4 h-4" />
                  <span>VEC-NL 2026-08 · Issue #001</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">
                  வார்த்தை திருச்சபையின் தொடக்க ஆராதனை மடல் (Inaugural Service Message)
                </h2>
                
                <div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg">
                  <p className="font-medium text-stone-900">
                    அன்பான வார்த்தை திருச்சபை குடும்பத்தினருக்கு, இயேசு கிறிஸ்துவின் இணையற்ற நாமத்திலே வாழ்த்துக்கள்!
                  </p>
                  <p>
                    மிகவும் சிறப்பான மற்றும் வெற்றிகரமான தொடக்க ஆராதனையை ஜூலை 5ம் தேதி (2026 ), நாம் பெற்றோம்! உங்கள் ஒவ்வொருவருக்கும் என் மனமார்ந்த வாழ்த்துகள்! இந்த புதிய தொடக்கமானது, இந்த சபையை ஒன்றிணைத்த விசுவாசம், அர்ப்பணிப்பு மற்றும் தொலைநோக்கு பார்வைக்கு ஒரு வலிமையான சான்றாகும்.
                  </p>
                  <p>
                    இந்தப் புதிய அத்தியாயத்தில் நாம் அடியெடுத்து வைக்கும் இந்த வேளையில், நம் திருச்சபையின் பெயரின் அர்த்தமான ‘வார்த்தை’ என்பதை மையமாக வைத்து ஒரு சிறு உற்சாக வார்த்தையை உங்களுடன் பகிர்ந்துகொள்ள விரும்புகிறேன்:
                  </p>
                  
                  <blockquote className="bg-accent/5 border-l-4 border-accent p-5 rounded-r-lg text-primary italic font-serif my-6">
                    <p className="mb-2 text-lg md:text-xl font-medium">
                      "உம்முடைய வசனம் என் கால்களுக்குத் தீபமும், என் பாதைக்கு வெளிச்சமுமாயிருக்கிறது."
                    </p>
                    <cite className="block text-right font-sans font-bold text-sm text-accent-dark not-italic mt-2">
                      — சங்கீதம் 119:105
                    </cite>
                  </blockquote>

                  <p>
                    ஒரு விளக்கு எப்படி இருளை அகற்றி முன்னோக்கிச் செல்ல வழிகாட்டுகிறதோ, அதேபோல தேவனுடைய வார்த்தையானது வாழ்க்கையின் ஒவ்வொரு சூழ்நிலைக்கும் தெளிவு, ஆறுதல் மற்றும் நிலையான வழிகாட்டுதலை வழங்குகிறது. இந்தப் புதிய சபையானது சமூகத்தில் ஒரு நிலையான வெளிச்சமாகத் திகழவும், பிரகாசமாக ஒளிரவும், ஆவிக்குரிய வளர்ச்சிக்கு ஒரு பாதுகாப்பான இடமாக அமையவும் ஜெபிக்கிறேன்.
                  </p>
                  <p>
                    ஒரு வலுவான அடித்தளம் உறுதியாக அமைக்கப்பட்டுள்ளது என்பதை அறிந்து, நீங்கள் தொடர்ந்து முழு நம்பிக்கையுடன் முன்னேற வாழ்த்துகிறேன். நாம் ஒன்றாக இணைந்து வளர்ந்து சேவை செய்யும்போது, நமக்கு பரிபூரண ஆசீர்வாதங்களும் எல்லையில்லா மகிழ்ச்சியும் கிடைக்கட்டும்!
                  </p>
                  <p>
                    நம்முடைய தொடக்க ஆராதனையின் செய்தியிலிருந்து ஒரு காரியத்தை உங்களுக்கு நினைவூட்ட விரும்புகிறேன்! “வாயிலிருந்து உலகத்தின் கடைசி வரை” என்ற நமது நோக்கத்தை யோசுவா மற்றும் அப்போஸ்தலர் 1:8 லிருந்து நாம் தியானித்தோம்!
                  </p>
                  <p>
                    இந்த வாரம், தேவன் உங்களோடு பேசுவதற்கு இடம் கொடுங்கள்! காலைதோறும் வார்த்தையைத் தியானியுங்கள்! சில வருடங்களுக்கு முன் “காலைதோறும் இயேசுவோடு" என்ற தின தியானங்களை செய்து வந்தோம். தியானங்களுக்கு முன்பதாக ஒலிப்பதற்காக, ஒரு சிறிய பாடல் ஒன்றை நான் எழுதியிருந்தேன். அந்தப் பாடலை இங்கு இணைத்திருக்கிறேன். உங்களுக்கும் ஆசீர்வாதமாக இருக்கும் என்று நம்புகிறேன்!
                  </p>

                  {/* Attached Song Audio Card */}
                  <div className="my-6 bg-accent/10 border border-accent/30 rounded-xl p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-4 shadow-sm not-prose">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center shrink-0 text-primary shadow-md">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
                      </svg>
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <h4 className="font-bold text-primary text-base sm:text-lg m-0">காலை தோறும் இயேசுவே - தின தியானப் பாடல்</h4>
                      <p className="text-xs sm:text-sm text-stone-600 m-0 mt-1">பாடல் & இயக்கம்: Ps. ஜெயகரன் வெஸ்லின் (Morning Meditation Song)</p>
                    </div>
                    <div className="w-full sm:w-auto mt-2 sm:mt-0">
                      <audio controls preload="metadata" className="w-full sm:w-64 h-10 rounded-lg">
                        <source src="/kaalai-thorum-yesuve.mp3" type="audio/mpeg" />
                        <source src="/kalai-thorum-yesuve.mp3" type="audio/mpeg" />
                        <source src="/meditation-song.mp3" type="audio/mpeg" />
                        உங்கள் உலாவி (Browser) இந்த ஆடியோவை ஆதரிக்கவில்லை.
                      </audio>
                    </div>
                  </div>

                  <p className="font-medium text-stone-900">
                    நீங்கள் ஆசீர்வதிக்கப்பட்டவர்கள்!
                  </p>
                  <p className="pt-2 font-medium text-stone-800">
                    அன்புடன்,
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-stone-200 flex items-center gap-4 not-prose">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-accent shrink-0 shadow-sm">
                      <img src="/staff-pastor.png" alt="Ps. ஜெயகரன் வெஸ்லின்" className="w-full h-full object-cover object-top" />
                    </div>
                    <div>
                      <p className="font-bold text-primary m-0 text-lg">Ps. ஜெயகரன் வெஸ்லின் (Jeyakaran Weslyn)</p>
                      <p className="text-sm text-stone-500 m-0">போதகர் (Senior Pastor), {churchConfig.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Archive Menu */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-border p-6 sticky top-24">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent-dark" />
                  Past Issues
                </h3>
                <div className="space-y-3">
                  <Link href="/pastors-desk" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 mt-0.5 shrink-0 group-hover:text-accent transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Issue #002</p>
                      <p className="text-xs text-stone-500">Jul 2026</p>
                    </div>
                  </Link>
                  <Link href="/pastors-desk/archive/issue-001" className="group flex items-start gap-2 p-3 rounded-md bg-stone-50 border border-stone-200 hover:border-accent hover:bg-accent/5 transition-colors">
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-stone-900 group-hover:text-primary transition-colors">Issue #001</p>
                      <p className="text-xs text-stone-500">Aug 2026</p>
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
