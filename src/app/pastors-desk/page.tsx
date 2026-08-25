import React from "react";
import { Calendar as CalendarIcon, FileText, ChevronRight, Leaf, Coffee } from "lucide-react";
import Link from "next/link";

import { NewsletterForm } from "@/components/NewsletterForm";
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: "VEC-NL 2026-08 Edition 7 - போதகர் மேசையிலிருந்து",
  description: "கோடரியைக் கூர்மையாக்குங்கள் (Sharpen the Axe) - Ecclesiastes 10:10",
  path: '/pastors-desk',
  image: '/sharpen-axe.jpg'
});

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
            போதகர் மேசையிலிருந்து
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-stone-200 font-medium">
            போதகரின் வாராந்திர கடிதம் மற்றும் சபையின் செய்திகள்.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Newsletter Content */}
            <div className="lg:col-span-3">
              <div className="bg-gradient-to-br from-stone-50 via-white to-stone-100 rounded-lg shadow-sm border border-stone-200 p-6 md:p-10 mb-8 relative overflow-hidden">
                {/* Decorative Elements */}
                <Coffee className="absolute top-4 right-4 text-stone-200 w-16 h-16 opacity-30" />
                <Coffee className="absolute bottom-10 left-4 text-stone-200 w-24 h-24 opacity-30" />
                
                <div className="flex items-center gap-2 text-sm text-stone-600 font-bold mb-4 relative z-10">
                  <CalendarIcon className="w-4 h-4" />
                  <span>VEC-NL 2026-08 · Edition 7</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-6 relative z-10 flex items-center gap-2">
                  <Coffee className="w-8 h-8 text-stone-700" />
                  கோடரியைக் கூர்மையாக்குங்கள்
                </h2>
                
                <div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg relative z-10">

                  <div className="my-6 rounded-xl overflow-hidden shadow-md border-2 border-stone-200">
                    <img src="/sharpen-axe.jpg" alt="Sharpen the Axe" className="w-full h-auto object-cover max-h-[500px]" />
                  </div>



                <blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700">
                  <p>“ஒரு கோடரி மழுங்கிப் போய் அதன் முனை தீட்டப்படாமல் இருந்தால், அதைக்கொண்டு வெட்ட அதிக பலம் தேவைப்படும். ஆனால் ஞானமோ வெற்றியைக் கொண்டுவரும்..”</p>
                  <p className="mt-2 text-right text-sm">— பிரசங்கி 10:10</p>
                </blockquote>

                <p>அமெரிக்க அதிபர் ஆபிரகாம் லிங்கன் ஒருமுறை சொன்னார்: "ஒரு மரத்தை வெட்ட எனக்கு ஆறு மணி நேரம் தந்தால், நான் முதல் நான்கு மணி நேரத்தைக் கோடரியைக் கூர்மையாக்குவதில் செலவிடுவேன்." இந்த வார்த்தைகள் எளிமையானவை, ஆனால் ஆழமான ஞானத்தை உள்ளடக்கியவை.</p>

                <p>ஒவ்வொரு நாளும் செய்வதற்கு ஏதோ ஒன்று இருக்கிறது. வேலைகள், பொறுப்புகள், சவால்கள் — வெட்டுவதற்கு மரங்கள் எப்போதும் இருக்கின்றன!</p>

                <p>ஆனால் கோடரி மழுங்கியிருந்தால்?</p>

                <blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700">
                  <p>“இரும்பு மழுங்கலாயிருக்க, ஒருவன் அதின் முனையைத் தீட்டாமற்போனால், அதிக பலத்தைப் பிரயோகம்பண்ண வேண்டியதாகும்…”</p>
                  <p className="mt-2 text-right text-sm">— பிரசங்கி 10:10</p>
                </blockquote>

                <p>சில நேரங்களில் பிரச்சனை மரத்தின் அளவில் இல்லை; கோடரியின் நிலையில்தான் இருக்கிறது.</p>

                <p>ஒவ்வொரு நாளும் நான் செய்து முடிக்க வேண்டிய காரியங்கள் இருக்கலாம். ஆனால் அவற்றைத் தொடங்குவதற்கு முன் நான் கேட்க வேண்டிய கேள்வி:</p>

                <p><strong>இன்றைய நாளை எதிர்கொள்ள நான் என்னைத் தீட்டிக்கொண்டேனா?</strong></p>

                <p>ஒரு விசுவாசியைத் தீட்டுகிற மிக முக்கியமான காரியங்களில் ஒன்று தேவனுடைய வார்த்தை.</p>

                <blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700">
                  <p>“உங்கள் மனம் புதிதாகிறதினாலே மறுரூபமாகுங்கள்.”</p>
                  <p className="mt-2 text-right text-sm">— ரோமர் 12:2</p>
                </blockquote>

                <p>ஒவ்வொரு நாளும் ஏதோ ஒன்று நம் மனதை வடிவமைத்துக்கொண்டிருக்கிறது.. செய்திகள், சமூக ஊடகங்கள், கவலைகள், ஏமாற்றங்கள், வாழ்க்கையின் அழுத்தங்கள் எல்லாம் காலையில் எழுந்த உடனேயே நம்மை ஆக்கிரமிக்கத் தொடங்கி விடுகின்றன.</p>

                <p>அதனால்தான், அன்றைய நாளை எதிர்கொள்வதற்கு முன் தேவனுடைய வார்த்தை நம்மை வடிவமைக்க வேண்டும்.</p>

                <p>அவருடைய வார்த்தை நமது சிந்தனையைப் புதுப்பிக்கிறது; பார்வையைச் சரிசெய்கிறது; விசுவாசத்தைப் பலப்படுத்துகிறது; தீர்மானங்களுக்கு ஞானத்தைத் தருகிறது.</p>

                <p>“இன்று நிறைய வேலை இருக்கிறது; வேதம் வாசிக்கவும் ஜெபிக்கவும் நேரமில்லை” என்று நாம் நினைக்கலாம். ஆனால் அது,</p>

                <p><em>“வெட்டுவதற்கு நிறைய மரங்கள் இருக்கின்றன; கோடரியைத் தீட்ட நேரமில்லை!”</em></p>

                <p>என்று சொல்வதைப் போன்றது.</p>

                <p>தேவனோடு செலவிடும் நேரம் வீணான நேரமல்ல. அதுதான் மற்ற அனைத்திற்குமான ஆயத்த நேரம்.</p>

                <p>எனவே, இந்த வாரம் உங்கள் To-Do List-ஐ எடுப்பதற்கு முன், தேவனுடைய வார்த்தையை எடுத்துக்கொள்ளுங்கள்.</p>

                <p>வாசியுங்கள்.</p>
                <p>தியானியுங்கள்.</p>
                <p>ஜெபியுங்கள்.</p>

                <p>செயல்படுவதற்கு முன், அவரோடு இருங்கள்.</p>

                <p>மரத்தை வெட்டுவதற்கு முன், கோடரியைத் தீட்டுங்கள்!</p>

                

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

                <hr className="my-8 border-stone-200" />

                <div className="bg-stone-50 p-6 rounded-xl border border-stone-100">
                  <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                    <Leaf className="w-5 h-5 text-accent" />
                    இந்த வாரத்திற்கான பயிற்சி / THIS WEEK'S PRACTICE
                  </h3>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>தினமும் காலையில் 15 நிமிடங்கள் வேதவாசிப்புக்கு ஒதுக்குங்கள்.</li>
                    <li>வேலை தொடங்கும் முன் ஒரு குறுகிய ஜெபத்துடன் தொடங்குங்கள்.</li>
                    <li>“நான் எதை சாதிக்க வேண்டும்” எனக் கேட்பதற்கு முன், “நான் யாருடன் நடக்கிறேன்” எனக் கேளுங்கள்.</li>
                  </ul>
                </div>

                <div className="bg-stone-50 p-6 rounded-xl border border-stone-100 mt-6">
                  <h3 className="text-xl font-bold text-primary mb-4">ஜெப குறிப்புகள் / PRAYER POINTS</h3>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>நம்முடைய சபையின் இளம் குடும்பங்களுக்காக.</li>
                    <li>மூத்த உறுப்பினர்கள் இளம் தலைமுறையினரை சரியான விதத்தில் வழி நடத்தும்படியான ஞானத்திற்காக.</li>
                    <li>நம சபையின் சிறு பிள்ளைகளும், வாலிபர்களும் தேவனால் தொடப்படும்படியாக.</li>
                  </ul>
                </div>

                <div className="bg-stone-50 p-6 rounded-xl border border-stone-100 mt-6">
                  <h3 className="text-xl font-bold text-primary mb-4">அறிவிப்புகள் / ANNOUNCEMENTS</h3>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>புதன் இரவு, “சங்கீத தியானங்களும், ஜெபமும்" நிகழ்வில் (Zoom) தவறாது கலந்து கொள்ளுங்கள்.</li>
                    <li>ஞாயிறு காலை ஆராதனை, சரியாக 10 மணிக்கு ஆரம்பிப்பதற்கு ஒத்துழைக்குமாறு வேண்டப் படுகிறீர்கள்.</li>
                  </ul>
                </div>
                  
                  <div className="mt-6 pt-6 border-t border-stone-200 flex items-center gap-4 not-prose relative z-10">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-stone-300 shrink-0 shadow-sm bg-white">
                       <img src="/staff-pastor.png" alt="Ps. Jeyakaran Weslyn" className="w-full h-full object-cover object-top" />
                    </div>
                    <div>
                      <p className="font-bold text-stone-800 m-0 text-lg">Ps. Jeyakaran Weslyn</p>
                      <p className="text-sm text-stone-600 m-0">Senior Pastor, Vaarthai Evangelical Church Inc</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            {/* Sidebar Area */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-border p-6 sticky top-24 sidebar-placeholder-ta">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent-dark" />
                  பழைய கடிதங்கள் (Archive)
                </h3>
<div className="space-y-3">
                  <Link href="/pastors-desk" className="group flex items-start gap-2 p-3 rounded-md bg-stone-50 border border-stone-200 hover:border-accent hover:bg-accent/5 transition-colors">
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-900 font-bold group-hover:text-primary transition-colors">Edition 7</p>
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
                
                <div className="mt-8 pt-8 border-t border-stone-200">
                  <h4 className="font-bold text-sm text-primary mb-3">Newsletter பதிவு (Subscribe)</h4>
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
