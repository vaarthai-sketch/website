import React from "react";
import { Calendar as CalendarIcon, FileText, ChevronRight, Gift, Snowflake } from "lucide-react";
import Link from "next/link";
import { churchConfig } from "@/data/config";
import { NewsletterForm } from "@/components/NewsletterForm";

import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  locale: 'ta',
  path: '/pastors-desk',
  title: "VEC-NL 2026-07 Issue 003 - From the Pastor's Desk | Vaarthai Evangelical Church",
  description: `Weekly newsletter and updates from the Pastor at ${churchConfig.name}.`,
  image: '/pastor-desk-hero.jpg',
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
            From the Pastor&apos;s Desk
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
              <div className="bg-gradient-to-br from-emerald-50 via-white to-green-100 rounded-lg shadow-sm border border-emerald-300 p-6 md:p-10 mb-8 relative overflow-hidden">
                {/* Decorative Elements */}
                <Snowflake className="absolute top-4 right-4 text-red-200 w-16 h-16 opacity-30" />
                <Snowflake className="absolute bottom-10 left-4 text-emerald-200 w-24 h-24 opacity-30" />
                
                <div className="flex items-center gap-2 text-sm text-red-700 font-bold mb-4 relative z-10">
                  <CalendarIcon className="w-4 h-4" />
                  <span>VEC-NL 2026-07 · Issue #003</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-emerald-800 mb-6 relative z-10 flex items-center gap-2">
                  <Gift className="w-8 h-8 text-emerald-600" />
                  வார்த்தை மாம்சமானார்
                </h2>
                
                <div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg relative z-10">
                  <p className="font-medium text-stone-900">
                    கிறிஸ்துவுக்குள் பிரியமானவர்களே,
                  </p>
                  <p>
                    உங்கள் ஒவ்வொருவரையும் வாழ்த்துகிறேன்! ஜூலை மாதத்தின் கடைசி வாரத்தில் இருக்கிறோம்! 2026ம் ஆண்டின், 7 மாதங்களை முடிக்கப் போகிறோம்.
                  </p>
                  <p>
                    ஆஸ்திரேலிய தேசத்திலே, நாம் வசிக்கும் பிரிஸ்பன் நகரிலே, ஜூன் மற்றும் ஜூலை மாதங்கள்தான் குளிர் காலங்கள். டிசம்பர் மாதமோ கோடை காலம். இந்த தேசத்திற்கு 20 ஆண்டுகளுக்கு முன்பு வந்தபோது, கிறிஸ்மஸ் காலங்களை கோடை காலத்தில் கொண்டாடுவது விசித்திரமாக இருந்தது. தமிழகத்திலே குளிர் காலம் என்பது இல்லையென்றாலும், டிசம்பர் மாதத்தில் வெயில் தாங்கக் கூடிய அளவிலே இருக்கும். ஆனால் இங்கு தகிக்கிற வெயிலிலே கேரல்ஸ் பாடவேண்டும். கிறிஸ்மஸ் சூழ்நிலையை அனுபவிப்பதற்காக, இங்கு ஜூலை மாதத்தில் கிறிஸ்மஸ் (Christmas in July) என்று ஜூலை 25ம் தேதியிலே கொண்டாடுவார்கள். பொதுவாக இது வணிகர்கள் தங்களது வியாபாரத்திற்காக ஏற்படுத்தியது என்று சொல்லலாம். சரி அப்படியென்றால், டிசம்பர் மாதம் 25ம் தேதியைக் கொண்டாடுவது சரியானதா? ஒரு சிலர்கள் அதையும் தவறு, அதனால் கிறிஸ்மஸ் கொண்டாடக் கூடாது என்று வாதாடுவார்கள்.
                  </p>
                  <p>
                    முதலாவதாக, வேதத்திலே கிறிஸ்மஸ் கொண்டாட வேண்டும், அல்லது கூடாது என்று எதுவுமே சொல்லப் படவில்லை. பின்பு ஏன் கொண்டாடுகிறோம்? வேதம் பண்டிகை நாட்களை அனுசரிக்கச் சொல்லுகிறது (எ.கா யாத்திராகமம் 23:14). ஆகவே நாம் ஒரு குறிப்பிட்ட நாளை கிறிஸ்து பிறப்பின் நாளாக நியமித்துக் கொண்டு, இயேசுவை இன்னும் அதிகமாக நினைவுகூருவதில் தவறேதும் இருப்பதாக எனக்குத் தெரியவில்லை.
                  </p>
                  <p>
                    இதை உறுதிப்படுத்த வேதத்திலிருந்து இரண்டு காட்சிகளை உங்களோடு பகிர்ந்துகொள்ள விரும்புகிறேன்.
                  </p>
                  <p>
                    <strong>முதல் காட்சி — பெர்சிய அரண்மனை.</strong> ஒரு இளம் யூதப் பெண், மரண தண்டனையை குறித்துப் பயப்படாமல், அழைக்கப்படாமலேயே அரசனுக்கு முன் நிற்கிறாள். ஏனெனில் அவளுடைய இனத்தை அழிக்கத் தீட்டிய உத்தரவு ஏற்கனவே கையெழுத்தாகிவிட்டது. &quot;இப்படிப்பட்ட காலத்திற்கேதானே நீ ராஜரிக பட்டத்திற்கு வந்தாயோ, யாருக்குத் தெரியும்?&quot; என்று சகோதரனாகிய (Cousin) மொர்தெகாய் அவளிடம் சொன்னான் (எஸ்தர் 4:14). அந்த நாள் தேவனுடைய அற்புத தலையீட்டால் மீட்பின் நாளாக மாறியது. ஆமான் என்பவன் சீட்டுப் போட்டு அழிவின் நாளைத் தீர்மானித்திருந்தான்; தேவன் அதையே ஜெயத்தின் நாளாக மாற்றினார். மொர்தெகாயும் எஸ்தரும் அந்த நாளை தலைமுறை தலைமுறையாக அனுசரிக்கப்பட வேண்டிய பண்டிகையாக நியமித்தார்கள் (எஸ்தர் 9:20-28) — வேதத்தில் முன்பே கட்டளையிடப்படாத ஒரு புதிய பண்டிகை.
                  </p>
                  <p>
                    <strong>இரண்டாம் காட்சி — நூற்றுக்கணக்கான ஆண்டுகளுக்குப் பின், அதே எருசலேம் தேவாலயம்.</strong> கி.மு. 2ம் நூற்றாண்டில் யூத தேசத்தில் வாழ்ந்த ஒரு குடும்பம் மக்காபேயர் குடும்பம். அவர்கள் அந்நிய கிரேக்க-சிரிய ஆட்சிக்கு எதிராகக் கிளர்ச்சி செய்து யூதர்களை விடுவித்தவர்கள். மக்காபேயர் புத்தகங்களில் பதிவுசெய்யப்பட்டுள்ள வரலாற்றின்படி, அந்நிய அரசன் அந்தியோகு தேவாலயத்தைத் தீட்டுப்படுத்தினான்; மக்காபேயரின் தியாகத்தால் அது மீண்டும் சுத்திகரிக்கப்பட்டு பிரதிஷ்டை செய்யப்பட்டது. அதை நினைவுகூர இஸ்ரவேலர் எட்டு நாள் பண்டிகையை உண்டாக்கினார்கள்— யூத பாரம்பரியத்தில் இது &quot;விளக்குகளின் பண்டிகை&quot; என்றும் அழைக்கப்படுகிறது, இருளை வெளிச்சம் வென்றெடுத்த நினைவாக. இதுவும் மோசேயின் நியாயப்பிரமாணத்தில் இல்லாத பண்டிகையே. இதன் ஆதாரம் யோவான் 10:22-23-ல் இருக்கிறது: &quot;எருசலேமிலே பிரதிஷ்டைப் பண்டிகை நடந்தது... இயேசு தேவாலயத்திலே சாலொமோன் மண்டபத்திலே உலாவிக்கொண்டிருந்தார்.&quot; இயேசு அந்த மனிதனால் நியமிக்கப்பட்ட பண்டிகையைத் தவிர்க்கவில்லை; அதிலே தம்மைக் காண்பித்தார்.
                  </p>
                  <p>
                    எஸ்தர் சரித்திரத்தில் இருள் நடுவே மீட்பு வந்தது. பிரதிஷ்டைப் பண்டிகையில் இருள் நடுவே வெளிச்சம் வந்தது. இரண்டுமே, தேவனுடைய மக்கள் தாங்களே நியமித்த நாட்கள் — ஆனாலும் தேவனுடைய கிருபையை பிரதிபலிக்கும் நாட்கள்.
                  </p>
                  <p>
                    அப்படியானால், கிறிஸ்மஸும் அப்படித்தானே? இருள் நடுவே, &quot;நீதியின் சூரியன்&quot; (மல்கியா 4:2) உதித்த நாளாக, சபை ஒரு நாளைத் தெரிந்தெடுத்தது. டிசம்பர் 25 குறித்து சிலர், &quot;இது ரோம சூரிய தேவனை வழிபடும் பண்டிகையின் நாளுடன் ஒத்துப்போகிறதே&quot; என்று ஆட்சேபிக்கிறார்கள். வரலாற்றில் இரு விளக்கங்கள் உண்டு: ஆரம்பகால கிறிஸ்தவர்கள் இயேசுவின் கர்ப்பந்தரிப்பை மார்ச் 25 எனக் கணக்கிட்டு ஒன்பது மாதம் கூட்டியதன் விளைவே இந்த தேதி எனச் சிலர் சொல்கிறார்கள்; இருண்ட காலத்தின் நடுவே ஒளியைப் பறைசாற்ற சபை இதைத் தெரிந்தெடுத்தது என்று மற்றவர்கள் சொல்கிறார்கள். எது எப்படி இருந்தாலும், இதைக் கொண்டாட தெரிந்தெடுத்த நாள் மனிதத் தீர்மானமே — தேவனுடைய திட்டவட்டமான கட்டளை அல்ல. அதனால்தான் அதை &quot;தவறு&quot; என்றும் சொல்லமுடியாது, &quot;ஒரே சரியான வழி&quot; என்றும் வலியுறுத்தமுடியாது.
                  </p>
                  <p>
                    பிரியமானவர்களே, கிறிஸ்மஸ் தேதியில் இல்லை — இருதயத்தில் இருக்கிறது. நாம் தகிக்கிற டிசம்பர் வெயிலில் கேரல்ஸ் பாடினாலும், ஜூலை மாத குளிரிலே பாடினாலும் — நம் நோக்கம் ஒன்றே: &quot;வார்த்தை மாம்சமாகி, நமக்குள்ளே வாசம்பண்ணினார்&quot; (யோவான் 1:14) என்பதைப் பிரகடனப்படுத்துவதே. இந்த ஜூலை மாத கடைசி நாட்களில், &quot;ஜூலையில் கிறிஸ்மஸ்&quot; கொண்டாடினாலும் இல்லையென்றாலும், ஒவ்வொரு நாளும் இயேசுவை நினைவுகூரும் நாளாக மாறட்டும்.
                  </p>
                  <p>
                    இந்த இருள்-ஒளிச் சித்திரத்தை, பல நூற்றாண்டுகளாகச் சபை பாடிவரும் ஒரு பழைய கீதம் அழகாக வெளிப்படுத்துகிறது (மூலப் பாடல்: 8-9ம் நூற்றாண்டு லத்தீன் &quot;O Antiphons&quot;; இசைப்பாடலாக்கம் 12ம் நூற்றாண்டு; ஆங்கில மொழிபெயர்ப்பு — John Mason Neale, 1851):
                  </p>
                  
                  <blockquote className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg italic font-serif">
                    <p className="whitespace-pre-line leading-relaxed text-stone-700">
                      அருணோதயமே, ஆ, வாருமே,<br/>
                      வந்தெங்கள் நெஞ்சை ஆற்றித் தேற்றுமே;<br/>
                      மந்தார ராவின் மேகம் நீக்கிடும்,<br/>
                      இருண்ட சாவின் நிழல் ஓட்டிடும்.<br/>
                      மகிழ்! மகிழ்! சீயோனின் சபையே,<br/>
                      இம்மானுவேலின் நாள் சமீபமே.
                    </p>
                  </blockquote>

                  <p>
                    இப்பாடலின் வீடியோவை இங்கு கொடுத்துள்ளேன், கேட்டு மகிழுங்கள்.
                  </p>
                  
                  {/* YouTube Embed Tamil */}
                  <div className="my-8 aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-xl shadow-md not-prose border-2 border-emerald-200 bg-white">
                    <iframe 
                      src="https://www.youtube.com/embed/nTmEXLWGw3Y" 
                      title="O Come, O Come, Emmanuel (Tamil)" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                      className="w-full h-full min-h-[350px] md:min-h-[450px]"
                    ></iframe>
                  </div>

                  <p className="font-medium text-stone-900 mt-6">
                    தேவன் உங்களை ஆசீர்வதிப்பாராக!
                  </p>
                  <p className="pt-2 font-medium text-stone-800">
                    போதகர் வெஸ்லின்
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-emerald-300 flex items-center gap-4 not-prose relative z-10">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-emerald-500 shrink-0 shadow-sm bg-white">
                      <img src="/staff-pastor.png" alt="Ps. ஜெயகரன் வெஸ்லின்" className="w-full h-full object-cover object-top" />
                    </div>
                    <div>
                      <p className="font-bold text-emerald-800 m-0 text-lg">Ps. ஜெயகரன் வெஸ்லின் (Jeyakaran Weslyn)</p>
                      <p className="text-sm text-stone-600 m-0">Senior Pastor, {churchConfig.name}</p>
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
                      <p className="text-sm font-bold text-stone-900 group-hover:text-primary transition-colors">Issue #003</p>
                      <p className="text-xs text-stone-500">Jul 2026</p>
                    </div>
                  </Link>
                  <Link href="/pastors-desk/archive/issue-002" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 mt-0.5 shrink-0 group-hover:text-accent transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Issue #002</p>
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
