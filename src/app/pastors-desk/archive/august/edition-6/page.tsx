import React from "react";
import { Calendar as CalendarIcon, FileText, ChevronRight, Coffee } from "lucide-react";
import Link from "next/link";

import { NewsletterForm } from "@/components/NewsletterForm";
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  locale: 'ta',
  path: '/pastors-desk/archive/august/edition-6',
  title: "VEC-NL 2026-08 Edition 6 - போதகர் மேசையிலிருந்து | Vaarthai Evangelical Church Inc",
  description: `உங்கள் கோப்பையில் என்ன இருக்கிறது? Life will shake you — what spills out reveals what you have been storing. A reflection on Luke 6:45 and Proverbs 4:23.`,
  image: "/coffee-cup.jpg",
});

export default function TamilPastorsDeskPage() {
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
                  <span>VEC-NL 2026-08 · Edition 6</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-6 relative z-10 flex items-center gap-2">
                  <Coffee className="w-8 h-8 text-stone-700" />
                  உங்கள் கோப்பையில் என்ன இருக்கிறது?
                </h2>
                
                <div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg relative z-10">

                  <div className="my-6 rounded-xl overflow-hidden shadow-md border-2 border-stone-200">
                    <img src="/coffee-cup.jpg" alt="A hand holding a coffee cup, mid-spill" className="w-full h-auto object-cover max-h-[500px]" />
                  </div>

                  <h3 className="text-xl font-bold text-stone-800">கையிலிருந்த கோப்பை</h3>
                  <p>
                    நீங்கள் ஒரு கோப்பை காபியைக் கையில் பிடித்துக்கொண்டு நிற்கிறீர்கள். திடீரென்று ஒருவர் உங்கள்மேல் இடித்துவிடுகிறார் — அல்லது உங்கள் கையை உலுக்கிவிடுகிறார். காபி முழுவதும் தரையில் சிந்திவிடுகிறது.
                  </p>
                  <p>
                    ஏன் காபி சிந்தியது?
                  </p>
                  <p>
                    பொதுவாக் நாம் என்ன சொல்லுவோம்? &quot;ஏனென்றால், ஒருவர் என்மேல் இடித்துவிட்டார்!&quot;
                  </p>
                  <p>
                    அது தவறான பதில்.
                  </p>
                  <p>
                    காபி சிந்தியதற்கு உண்மையான காரணம் — அந்தக் கோப்பையில் காபி இருந்தது. அதில் தேநீர் இருந்திருந்தால், சிந்தியிருப்பது தேநீராகவே இருந்திருக்கும். தண்ணீர் இருந்திருந்தால் தண்ணீர் சிந்தியிருக்கும்.
                  </p>
                  <p>
                    இடித்தவர் கோப்பையின் உள்ளடக்கத்தை மாற்றவில்லை. அவர் செய்ததெல்லாம் ஒன்றுதான் — உள்ளே ஏற்கெனவே இருந்ததை வெளியே கொண்டுவந்தார்.
                  </p>
                  <p className="font-bold text-stone-900">
                    கோப்பைக்குள் என்ன இருக்கிறதோ, அதுவே வெளியே சிந்தும்.
                  </p>

                  <h3 className="text-xl font-bold text-stone-800">உலுக்கல் வரும் — அது நிச்சயம்</h3>
                  <p>
                    கடந்த வாரம் அசைக்கப்படுகிற பூமியைக் குறித்துச் சிந்தித்தோம். இந்த வாரம் இன்னும் அருகில் வருகிறோம் — அசைக்கப்படுகிற நம்மைக் குறித்து.
                  </p>
                  <p>
                    எதிர்பாராத ஒரு தொலைபேசி அழைப்பு. ஒரு மருத்துவ அறிக்கை. ஒரு வேலை செய்கின்ற இடத்தில் ஒரு கூட்டம். போக்குவரத்து நெரிசலில் ஒரு நீண்ட நாள். ஒருவரிடமிருந்து வந்த ஒரு கடினமான வார்த்தை. வீட்டில் ஒரு சிறு தகராறு.
                  </p>
                  <p>
                    அமைதியாக இருக்கும்போது நாம் எல்லோருமே ஆவிக்குரியவர்கள். நடிப்பது (to fake it) எளிது, ஆனால் அது உலுக்கல் வரும் வரைக்கும் மட்டுமே.
                  </p>
                  <p className="font-bold text-stone-900">
                    உலுக்கல் நமது குணத்தை உருவாக்குவதில்லை. அது நமது குணத்தை வெளிப்படுத்துகிறது.
                  </p>

                  <h3 className="text-xl font-bold text-stone-800">இருதயத்தின் நிறைவு</h3>
                  <p>
                    இயேசு இதை நமக்கு முன்பே சொல்லிவிட்டார். அவருடைய வார்த்தைகள் இந்த உவமையைவிட மிகவும் கூர்மையானவை:
                  </p>
                  <blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700">
                    <p>
                      &quot;நல்ல மனுஷன் தன் இருதயமாகிய நல்ல பொக்கிஷத்திலிருந்து நல்லதை எடுத்துக்காட்டுகிறான்; பொல்லாத மனுஷன் தன் இருதயமாகிய பொல்லாத பொக்கிஷத்திலிருந்து பொல்லாததை எடுத்துக்காட்டுகிறான்; இருதயத்தின் நிறைவினால் அவனவன் வாய் பேசும்.&quot;
                    </p>
                    <p className="mt-2 text-right text-sm">— லூக்கா 6:45</p>
                  </blockquote>
                  <p>
                    கிரேக்க மொழியிலே, &quot;நிறைவு&quot; என்ற சொல்லின் நேரடிப் பொருள் — நிரம்பி வழிவது; மிஞ்சி வெளியே வருவது.
                  </p>
                  <p>
                    இயேசு பயன்படுத்திய படம் இதுதான்: இருதயம் ஒரு பாத்திரம். வாய் என்பது அதன் விளிம்பு. உள்ளே நிரப்பப்பட்டது எதுவோ, விளிம்பைத் தாண்டி வெளியே வருவதும் அதுவே.
                  </p>
                  <p>
                    நமது கோபமான வார்த்தைகள் தற்செயலானவை அல்ல. அவை கசிவுகள். ஏற்கெனவே உள்ளே சேமித்து வைத்திருந்தவற்றின் கசிவு.
                  </p>

                  <h3 className="text-xl font-bold text-stone-800">அப்படியானால் கோப்பையைக் காத்துக்கொள்ளுங்கள்</h3>
                  <p>
                    இதனால்தான் நீதிமொழிகள் இப்படிக் கட்டளையிடுகிறது:
                  </p>
                  <blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700">
                    <p>
                      &quot;எல்லாக் காவலோடும் உன் இருதயத்தைக் காத்துக்கொள்; அதினிடத்திலிருந்து ஜீவஊற்று புறப்படும்.&quot;
                    </p>
                    <p className="mt-2 text-right text-sm">— நீதிமொழிகள் 4:23</p>
                  </blockquote>
                  <p>
                    இங்கே &quot;காத்துக்கொள்&quot; என்ற வார்த்தையின் எபிரேய அர்த்தம்— ஒரு கோட்டையைக் காவல் காப்பதுபோல், விழிப்புடன் பாதுகாத்தல்.
                  </p>
                  <p>
                    வேதம் &quot;உன் நடத்தையைக் காத்துக்கொள்&quot; என்று சொல்லவில்லை. &quot;உன் வார்த்தைகளைக் காத்துக்கொள்&quot; என்றும் சொல்லவில்லை. இருதயத்தைக் காத்துக்கொள் என்கிறது — ஏனென்றால் மற்ற எல்லாம் அங்கிருந்துதான் புறப்படுகின்றன.
                  </p>
                  <p>
                    வெளியே வருவதைச் சரிசெய்ய முயற்சிப்பது வீண் வேலை. உள்ளே இருப்பதை மாற்றுங்கள்.
                  </p>

                  <h3 className="text-xl font-bold text-stone-800">யார் கோப்பையை நிரப்புகிறது?</h3>
                  <p>
                    இங்கே ஒரு முக்கியமான வித்தியாசம் உண்டு.
                  </p>
                  <p>
                    &quot;நான் நல்லவனாக இருப்பேன்&quot; என்று தீர்மானிப்பதன் மூலம் இருதயம் மாறிவிடாது. அது வெறும் மனவலிமை (willpower) — அது ஒரு காலை வரைக்கும்தான் நிற்கும்.
                  </p>
                  <p>
                    பவுல் எழுதுகிறார்:
                  </p>
                  <blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700">
                    <p>
                      &quot;...ஆவியினால் நிறைந்திருங்கள்.&quot;
                    </p>
                    <p className="mt-2 text-right text-sm">— எபேசியர் 5:18</p>
                  </blockquote>
                  <p>
                    இதந் பொருள்,  கிரேக்க மொழியிலே எப்படி வருகிறது என்றால், &quot;தொடர்ந்து நிரப்பப்பட்டுக்கொண்டே இருங்கள்.&quot;
                  </p>
                  <p>
                    ஒருமுறை நிரப்பினால் போதும் என்பதல்ல. தினமும். நிரப்புகிறவர் நாம் அல்ல — நிரப்பப்படுவதற்கு நம்மை ஒப்புக்கொடுப்பதே நமது வேலை.
                  </p>
                  <p>
                    நிரப்பப்பட்ட இருதயத்திலிருந்து வெளிவருவது என்ன?
                  </p>
                  <blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700">
                    <p>
                      &quot;ஆவியின் கனியோ, அன்பு, சந்தோஷம், சமாதானம், நீடியபொறுமை, தயவு, நற்குணம், விசுவாசம், சாந்தம், இச்சையடக்கம்;&quot;
                    </p>
                    <p className="mt-2 text-right text-sm">— கலாத்தியர் 5:22-23</p>
                  </blockquote>
                  <p>
                    கவனியுங்கள் — இது &quot;ஆவியின் சாதனைகள்&quot; அல்ல. &quot;ஆவியின் கனி.&quot; கனி முயற்சியால் உண்டாவதில்லை; அது உள்ளிருக்கும் ஜீவனிலிருந்து இயல்பாக வெளிவருகிறது.
                  </p>

                  <h3 className="text-xl font-bold text-stone-800">ஒரு பாதுகாப்பான வார்த்தை</h3>
                  <p>
                    இங்கே நான் ஒரு கவனமான வார்த்தையைச் சொல்ல விரும்புகிறேன்.
                  </p>
                  <p>
                    உங்கள் கோப்பையிலிருந்து சிந்துவது கசப்பாக இருந்தால், அதற்குப் பொருள் நீங்கள் தோல்வியடைந்த கிறிஸ்தவர் என்பதல்ல. சில நேரங்களில் அது ஒரு ஆறாத காயத்தின் அடையாளம்.
                  </p>
                  <p>
                    யாரோ உங்களை ஆழமாகக் காயப்படுத்தியிருக்கலாம். ஒரு துக்கம் இன்னும் பேசப்படாமல் உள்ளே கிடக்கலாம். வருடக்கணக்கான களைப்பு சேர்ந்திருக்கலாம்.
                  </p>
                  <p>
                    அப்படிப்பட்ட நேரங்களில் தேவை &quot;இன்னும் அதிகமாக முயற்சி செய்&quot; என்ற அறிவுரை அல்ல. தேவை சுகமாக்குதல்.
                  </p>
                  <p>
                    கோபத்தை மூடிமறைப்பது கோப்பையை நிரப்புவது அல்ல — அது வெறும் மூடி. மூடி எப்போதும் தாங்காது.
                  </p>
                  <p>
                    தயவுசெய்து பேசுங்கள். என்னிடம் பேசுங்கள். ஒரு நம்பகமான நண்பரிடம், அல்லது ஒரு ஆலோசகரிடம் (counsellor) பேசுங்கள். தனியாகச் சுமக்க வேண்டாம். கர்த்தர் உடைந்த இருதயத்திற்கு அருகில் இருக்கிறார் (சங்கீதம் 34:18).
                  </p>

                  <h3 className="text-xl font-bold text-stone-800">இந்த வாரம் என்ன செய்வோம்?</h3>
                  <ul className="list-decimal pl-5 space-y-3">
                    <li>
                      <strong>காலையில் முதல் ஊற்று.</strong> நாள் ஆரம்பிக்கும் முன்பே கோப்பையை நிரப்புங்கள் — வேதவசனத்தினாலும் ஜெபத்தினாலும். காலை நிரப்பப்படாத கோப்பை மாலையில் காலியாகவே இருக்கும்.
                    </li>
                    <li>
                      <strong>மன்னிப்பை நிலுவையில் வைக்காதீர்கள்.</strong> &quot;சூரியன் அஸ்தமிக்கும்வரைக்கும் உங்கள் கோபம் இருக்கவேண்டாம்&quot; (எபேசியர் 4:26). மன்னிக்கப்படாத ஒவ்வொரு காயமும் கோப்பையில் சேர்ந்துகொண்டே இருக்கிறது.
                    </li>
                    <li>
                      <strong>உலுக்கலைக் கவனியுங்கள்.</strong> இந்த வாரம் ஒருமுறை நீங்கள் உலுக்கப்படும்போது — உடனே பதிலளிக்காமல், மூன்று விநாடிகள் நிறுத்துங்கள். வெளியே வர முயன்றது என்ன? அதுவே உங்கள் கோப்பையின் உள்ளடக்கம்.
                    </li>
                    <li>
                      <strong>நல்ல வார்த்தைகளால் நிரப்புங்கள்.</strong> இந்த வாரம் மூன்று பேருக்கு ஒரு ஊக்கமான வார்த்தை சொல்லுங்கள் (words of affirmation). கொடுப்பதன் மூலமும் கோப்பை நிரம்புகிறது.
                    </li>
                    <li>
                      <strong>நன்றியை எழுதுங்கள்.</strong> ஒவ்வொரு இரவும் மூன்று காரியங்களை எழுதுங்கள். நன்றி என்பது இருதயத்தில் கசப்புக்கு இடமில்லாதபடி செய்யும் ஒரு பயிற்சி.
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold text-stone-800">இந்த வாரத்தின் சிந்தனை</h3>
                  <p>
                    வாழ்க்கை கோப்பையைக் கொடுக்கிறது. உள்ளே எதை நிரப்புவது என்பது நீங்கள் தெரிந்துகொள்ளுவதாய் இருக்கிறது.
                  </p>
                  <p>
                    இன்று உங்களை ஒருவர் உலுக்கினால் — என்ன சிந்தும்?
                  </p>
                  <p>
                    சந்தோஷமா, நன்றியா, சமாதானமா, தாழ்மையா? அல்லது கோபமா, கசப்பா, குற்றஞ்சாட்டுதலா, விட்டுவிடும் மனநிலையா?
                  </p>
                  <p>
                    இந்த வாரம், நமது கோப்பைகளை நன்றியினாலும், மன்னிப்பினாலும், சந்தோஷத்தினாலும், ஊக்கமான வார்த்தைகளாலும், சாந்தத்தினாலும், அன்பினாலும் நிரப்ப முயற்சிப்போம்.
                  </p>
                  <p>
                    ஏனென்றால், இறுதியில் நமது கோப்பையை நிரப்புகிறவர் நமது மேய்ப்பரே:
                  </p>
                  <blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700">
                    <p>
                      &quot;...என் தலையை எண்ணெயால் அபிஷேகம்பண்ணுகிறீர்; என் பாத்திரம் நிரம்பி வழிகிறது.&quot;
                    </p>
                    <p className="mt-2 text-right text-sm">— சங்கீதம் 23:5</p>
                  </blockquote>
                  <p className="font-bold text-stone-900">
                    நிரம்பி வழிகிற பாத்திரம் சிந்துவதற்குப் பயப்படுவதில்லை. ஏனென்றால் அதை நிரப்புகிறவர் ஒருபோதும் ஓய்வதில்லை.
                  </p>

                  <div className="bg-stone-100 border-l-4 border-stone-500 p-6 rounded-r-lg my-8">
                    <h4 className="font-bold text-stone-800 mb-2 text-xl">ஜெபம்</h4>
                    <p className="text-stone-700 m-0">
                      கர்த்தாவே, என் இருதயத்தை நீரே ஆராயும். அதில் நான் அறியாமல் சேமித்து வைத்திருக்கிற கசப்பையும், கோபத்தையும், காயங்களையும் வெளிச்சத்திற்குக் கொண்டுவாரும். என் சொந்த முயற்சியால் நான் மாற முடியாது என்பதை ஒப்புக்கொள்கிறேன். உம்முடைய ஆவியினால் என்னைத் தினமும் நிரப்பும். நான் உலுக்கப்படும்போது, உம்முடைய அன்பும் சாந்தமும் சமாதானமும் என்னிலிருந்து வெளிப்படட்டும். இயேசுவின் நாமத்தில் ஜெபிக்கிறோம், ஆமென்.
                    </p>
                  </div>

                  {/* YouTube Embed */}
                  <div className="my-8 aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-xl shadow-md not-prose border-2 border-stone-200 bg-white">
                    <iframe 
                      src="https://www.youtube.com/embed/8z50_p-wuv0" 
                      title="Sermon Video" 
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

            {/* Sidebar Archive Menu */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-border p-6 sticky top-24 sidebar-placeholder-ta">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent-dark" />
                  பழைய கடிதங்கள் (Archive)
                </h3>
                <div className="space-y-3">
                  <Link href="/pastors-desk" className="group flex items-start gap-2 p-3 rounded-md bg-stone-50 border border-stone-200 hover:border-accent hover:bg-accent/5 transition-colors">
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-stone-900 group-hover:text-primary transition-colors">Edition 6</p>
                      <p className="text-xs text-stone-500">Aug 2026</p>
                    </div>
                  </Link>
                  <Link href="/pastors-desk/archive/august/edition-5" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 mt-0.5 shrink-0 group-hover:text-accent transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 5</p>
                      <p className="text-xs text-stone-500">Aug 2026</p>
                    </div>
                  </Link>
                  <Link href="/pastors-desk/archive/august/edition-4" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 mt-0.5 shrink-0 group-hover:text-accent transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 4</p>
                      <p className="text-xs text-stone-500">Aug 2026</p>
                    </div>
                  </Link>

                  <h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mt-6 mb-2 pl-2 border-t border-stone-100 pt-4">July 2026</h4>
                  <Link href="/pastors-desk/archive/july/edition-3" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 mt-0.5 shrink-0 group-hover:text-accent transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 3</p>
                      <p className="text-xs text-stone-500">Jul 2026</p>
                    </div>
                  </Link>
                  <Link href="/pastors-desk/archive/july/edition-2" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 mt-0.5 shrink-0 group-hover:text-accent transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 2</p>
                      <p className="text-xs text-stone-500">Jul 2026</p>
                    </div>
                  </Link>
                  <Link href="/pastors-desk/archive/july/edition-1" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 mt-0.5 shrink-0 group-hover:text-accent transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 1</p>
                      <p className="text-xs text-stone-500">Jul 2026</p>
                    </div>
                  </Link>
                </div>
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
