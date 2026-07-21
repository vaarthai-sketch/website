import React from "react";
import { Calendar as CalendarIcon, FileText, ChevronRight } from "lucide-react";
import Link from "next/link";
import { churchConfig } from "@/data/config";
import { NewsletterForm } from "@/components/NewsletterForm";

export const metadata = {
  title: "From the Pastor's Desk",
  description: `Weekly newsletter and updates from the Pastor at ${churchConfig.name}.`,
};

export default function PastorsDeskPage() {
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
                  <span>VEC-NL 2026-07 · Issue #002</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">
                  திருச்சபையின் ஒரே அஸ்திபாரம் இயேசு கிறிஸ்துவே
                </h2>
                
                <div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg">
                  <p className="font-medium text-stone-900">
                    அன்பான வார்த்தை குடும்பமே,
                  </p>
                  <p>
                    இயேசு கிறிஸ்த்துவின் இணையற்ற பெயராலே உங்களை வாழ்த்துகிறேன்!
                  </p>
                  <p>
                    நேற்று இரவு, தேவன் எனக்கு ஒரு பழைய ஞானப்பாடலை நினைவு படுத்தினார்! அதனுடைய வரிகள் இதோ...
                  </p>
                  <blockquote className="bg-stone-50 border-l-4 border-stone-300 p-4 rounded-r-lg italic font-serif">
                    <p className="whitespace-pre-line leading-relaxed text-stone-600">
                      சபையின் அஸ்திபாரம்<br/>
                      நல் மீட்பர் கிறிஸ்துவே<br/>
                      சபையின் ஜன்மாதாரம்<br/>
                      அவரின் வார்த்தையே<br/>
                      தம் மணவாட்டியாக<br/>
                      வந்ததைத் தேடினார்<br/>
                      தமக்குச் சொந்தமாக<br/>
                      மரித்ததைக் கொண்டார்
                    </p>
                  </blockquote>

                  <p>
                    1866-ஆம் ஆண்டு Samuel John Stone என்ற போதகர் ஒரு பாடலை எழுதினார் — "திருச்சபையின் ஒரே அஸ்திபாரம் இயேசு கிறிஸ்து நம் ஆண்டவரே." ஆனால் அது வெற்றியின் மகிழ்ச்சியில் எழுதப்பட்ட பாடல் அல்ல. அந்நாளில் திருச்சபை பிளவுகளாலும், வேதத்தின் அதிகாரத்தைக் குறித்த விவாதங்களாலும் உலுக்கப்பட்டிருந்தது. அந்தப் போராட்டத்தின் மத்தியில் எழுதப்பட்ட ஒரு விசுவாச அறிக்கையே இப்பாடல்.
                  </p>
                  <p>
                    இதன் மைய செய்தி எளிமையானது, ஆனால் ஆழமானது: சபை நிற்பது மனிதனின் பலத்தின்மேல் அல்ல, மனிதர்களின் இணக்கத்தின்மேலும் அல்ல — இயேசு கிறிஸ்துவின்மேல் மட்டுமே.
                  </p>
                  <p className="font-medium text-stone-900">
                    பாடல் நமக்கு நான்கு உண்மைகளை நினைவூட்டுகிறது:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>அஸ்திபாரம் ஒன்றே</strong> — "வேறே அஸ்திபாரத்தை ஒருவனும் போடக்கூடாது" (1 கொரிந்தியர் 3:11). வார்த்தையினால் அவர் தமது மணவாட்டியாகிய சபையை உருவாக்கினார்.
                    </li>
                    <li>
                      <strong>ஐக்கியம் ஒன்றே</strong> — பல தேசங்கள், பல மொழிகள், ஆனால் ஒரே கர்த்தர், ஒரே விசுவாசம், ஒரே ஞானஸ்நானம் (எபேசியர் 4).
                    </li>
                    <li>
                      <strong>போராட்டம் உண்டு, ஆனால் அவர் கைவிடார்</strong> — சபை உபத்திரவப்படலாம்; பரிசுத்தவான்கள் "இந்த அழுகையின் இரவு எப்போது முடியும்?" என்று கேட்கலாம். ஆனாலும் கர்த்தர் தமது சபையைப் பாதுகாக்கிறார்.
                    </li>
                    <li>
                      <strong>நம்பிக்கை நிச்சயம்</strong> — அழுகையின் இரவு முடிந்து, மகிமையின் காலை உதிக்கும். இளைப்பாறுதல் வரும்.
                    </li>
                  </ul>
                  <p>
                    அன்பானவர்களே, இச்செய்தி நமது வார்த்தை சபைக்கு (VEC) மிகவும் பொருத்தமானது. நாமும் ஒரு புதிய பயணத்தைத் தொடங்கியிருக்கிறோம். நமது எதிர்காலம் நம் சொந்த பலத்தின்மேல் அல்ல — கிறிஸ்து என்னும் அசையாத அஸ்திபாரத்தின்மேல் கட்டப்பட்டிருக்கிறது. அதுவே நமது நிச்சயம்.
                  </p>
                  
                  <blockquote className="bg-accent/5 border-l-4 border-accent p-5 rounded-r-lg text-primary italic font-serif my-6">
                    <p className="mb-2 text-lg md:text-xl font-medium">
                      "நான் போடும் அஸ்திபாரம் இயேசுகிறிஸ்துவே; அதை அல்லாமல் வேறே அஸ்திபாரத்தை ஒருவனும் போடக்கூடாது."
                    </p>
                    <cite className="block text-right font-sans font-bold text-sm text-accent-dark not-italic mt-2">
                      — 1 கொரிந்தியர் 3:11
                    </cite>
                  </blockquote>

                  <p>
                    இந்த வாரம், உங்கள் வாழ்க்கை எந்த அஸ்திபாரத்தின்மேல் கட்டப்பட்டிருக்கிறது என்று சிந்தித்துப் பாருங்கள். கிறிஸ்துவே நமது நிலையான கன்மலை.
                  </p>
                  <p>
                    சிங்கப்பூரைச் சேர்ந்த சபை ஒன்று, தமிழ், ஆங்கிலம் மற்றும் சீன மொழியிலே இணைந்து சபையின் அஸ்திபாரம் என்கிற இந்தப் பாடலை, மிக அழகாக பாடியிருக்கிறார்கள். அதைக் இங்கு கேட்டு மகிழுங்கள்.
                  </p>
                  
                  {/* YouTube Embed */}
                  <div className="my-8 aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-xl shadow-md not-prose border border-stone-200">
                    <iframe 
                      src="https://www.youtube.com/embed/DcCYWzrhmJM" 
                      title="The Church's One Foundation" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                      className="w-full h-full min-h-[350px] md:min-h-[450px]"
                    ></iframe>
                  </div>

                  <p className="font-medium text-stone-900 mt-6">
                    தேவன் உங்களை ஆசீர்வதிப்பாராக,
                  </p>
                  <p className="pt-2 font-medium text-stone-800">
                    போதகர் வெஸ்லின்
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-stone-200 flex items-center gap-4 not-prose">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-accent shrink-0 shadow-sm">
                      <img src="/staff-pastor.png" alt="Ps. ஜெயகரன் வெஸ்லின்" className="w-full h-full object-cover object-top" />
                    </div>
                    <div>
                      <p className="font-bold text-primary m-0 text-lg">Ps. ஜெயகரன் வெஸ்லின் (Jeyakaran Weslyn)</p>
                      <p className="text-sm text-stone-500 m-0">Senior Pastor, {churchConfig.name}</p>
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
                  <Link href="/pastors-desk" className="group flex items-start gap-2 p-3 rounded-md bg-stone-50 border border-stone-200 hover:border-accent hover:bg-accent/5 transition-colors">
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-stone-900 group-hover:text-primary transition-colors">Issue #002</p>
                      <p className="text-xs text-stone-500">Jul 2026</p>
                    </div>
                  </Link>
                  <Link href="/pastors-desk/archive/issue-001" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 mt-0.5 shrink-0 group-hover:text-accent transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Issue #001</p>
                      <p className="text-xs text-stone-500">Jul 2026</p>
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
