import React from "react";
import { Calendar as CalendarIcon, FileText, ChevronRight, Globe, Leaf } from "lucide-react";
import Link from "next/link";
import { churchConfig } from "@/data/config";
import { NewsletterForm } from "@/components/NewsletterForm";
import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  locale: 'ta',
  path: '/pastors-desk',
  title: "VEC-NL 2026-08 Edition 5 - போதகர் மேசையிலிருந்து | Vaarthai Evangelical Church",
  description: `Weekly newsletter and updates from the Pastor at ${churchConfig.name}.`,
  image: "/colombia-earthquake.jpg",
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
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-stone-200">
            எங்கள் திருச்சபையின் போதகரிடமிருந்து வாராந்திர செய்திகள் மற்றும் கட்டுரைகள்.
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
                <Globe className="absolute top-4 right-4 text-stone-200 w-16 h-16 opacity-30" />
                <Globe className="absolute bottom-10 left-4 text-stone-200 w-24 h-24 opacity-30" />
                
                <div className="flex items-center gap-2 text-sm text-stone-600 font-bold mb-4 relative z-10">
                  <CalendarIcon className="w-4 h-4" />
                  <span>VEC-NL 2026-08 · Edition 5</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-6 relative z-10 flex items-center gap-2">
                  <Globe className="w-8 h-8 text-stone-700" />
                  நீங்கள் நிற்கிற தரை அசைந்தால்?
                </h2>
                
                <div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg relative z-10">
                  
                  <div className="my-6 rounded-xl overflow-hidden shadow-md border-2 border-stone-200">
                    <img src="/colombia-earthquake.jpg" alt="Colombia Earthquake" className="w-full h-auto object-cover max-h-[500px]" />
                  </div>

                  <h3 className="text-xl font-bold text-stone-800">கொலம்பியா நிலநடுக்கம்!</h3>
                  <p>
                    செய்தியை வாசித்தபோது என் உடல் நடுங்கியது. ஆகஸ்ட் 10, திங்கட்கிழமை காலை, மேற்கு கொலம்பியாவை 7.4 அளவுள்ள நிலநடுக்கம் உலுக்கியது. செவ்வாய்க்கிழமை காலை (ஆஸ்திரேலியாவில்) நிலவரப்படி 111 உயிர்களை இழந்ததாக அரசாங்கக் குறிப்புகள் தெரிவிக்கின்றன; ஆயிரத்து அறுநூறுக்கும் மேற்பட்ட கட்டடங்கள் சேதமடைந்துள்ளன. கடந்த பத்து வருடங்களில் அந்நாட்டில் பதிவான மிகப் பெரிய நிலநடுக்கம் இதுவே.
                  </p>
                  <p>
                    லிஃப்டை விட்டு வெளியே வந்தவுடன் கட்டடம் அசைக்கப்படுவதை உணர்ந்ததாக ஒருவர் தெரிவிக்கிறார். அதன்பின்பு அவர் பார்த்ததெல்லாம் கீழே விழுந்து கொண்டிருந்தவைகளே; பூமி பிளக்கிற சத்தத்தையே தான் கேட்டதாகவும் அவர் குறிப்பிடுகிறார். எல்லாமே ஏறக்குறைய ஐம்பது விநாடிகள்தான் இருந்தது — ஆனால் அந்த அனுபவம் நித்தியத்தைப் போல் இருந்ததாக அவர் சொல்லுகிறார்.
                  </p>

                  <h3 className="text-xl font-bold text-stone-800">உங்கள் மனதில் என்ன உணர்ந்தீர்கள்?</h3>
                  <p>
                    என்னுடைய அருமையான நண்பர்களே, நீங்கள் கொலம்பியா நிலநடுக்கச் செய்தியைத் தொலைக்காட்சியில் கண்ட, அல்லது செய்திகளில் வாசித்த தருணத்தில் உங்கள் மனதில் என்ன உணர்ந்தீர்கள்? உங்களுடைய உணர்வுகள் உங்களுக்குச் சங்கடத்தைக் கொடுத்தனவா? அல்லது, உலகில் எங்கோ ஒரு மூலையில் நடந்த நிகழ்வு என்று கடந்து போக முடிந்ததா?
                  </p>
                  <p>
                    அநேக நேரங்களில் நாம் அப்படி எண்ணித்தான் கடந்து போகிறோம். அப்படிப்பட்ட நிகழ்வுகள் நமக்கு அருகில் நடக்கும்போது வேறுவிதமாக நம்மால் உணர முடிகிறது; தப்பித்து விட்டோம் என்று நிம்மதிப் பெருமூச்சு விடலாம், அல்லது ஒருவிதமான பயம் நம்மைப் பிடித்துக் கொள்ளலாம்.
                  </p>
                  <p>
                    இந்த இரண்டு பதில்களுமே — உதாசீனமும் பயமும் — கிறிஸ்துவின் சீஷனுக்கு உரியவை அல்ல. இன்றைய செய்தியில் உங்களைத் திடப்படுத்த விரும்புகிறேன்: நாம் பயம் கொள்ளத் தேவையில்லை. &quot;நீங்கள் சொல்வதைத் தெரிந்துதான் சொல்லுகிறீர்களா?&quot; என்று நீங்கள் கேட்பது எனக்குத் தெரிகிறது. வேதத்தின் வார்த்தையை வையுங்கள்.
                  </p>

                  <h3 className="text-xl font-bold text-stone-800">கர்த்தர் இதை முன்னறிவித்தார்</h3>
                  <p className="font-bold text-stone-800">மத்தேயு 24:6–8</p>
                  <blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700">
                    <p>
                      ⁶ யுத்தங்களையும் யுத்தங்களின் செய்திகளையும் கேள்விப்படுவீர்கள்; கலங்காதபடி எச்சரிக்கையாயிருங்கள்; இவைகளெல்லாம் சம்பவிக்கவேண்டியதே; ஆனாலும், முடிவு உடனே வராது.
                    </p>
                    <p>
                      ⁷ ஜனத்துக்கு விரோதமாய் ஜனமும், ராஜ்யத்துக்கு விரோதமாய் ராஜ்யமும் எழும்பும்; பஞ்சங்களும், கொள்ளைநோய்களும், பூமியதிர்ச்சிகளும் பல இடங்களில் உண்டாகும்.
                    </p>
                    <p>
                      ⁸ இவைகளெல்லாம் வேதனைகளுக்கு ஆரம்பம்.
                    </p>
                  </blockquote>
                  <p>
                    இங்கே கவனியுங்கள். கர்த்தர் இந்தச் செய்திகளை மறைக்கவில்லை; முன்கூட்டியே சொல்லிவிட்டார். ஏன்? நாம் கலங்காதிருக்கும்படி. தேவன் ஏற்கெனவே சொன்னது நடக்கிறது.
                  </p>
                  <p>
                    இன்னும் ஒரு வார்த்தை — &quot;வேதனைகளுக்கு ஆரம்பம்&quot; (v.8). இது பிரசவ வேதனையைக் குறிக்கும் சொல். பிரசவ வேதனை மரணத்தின் அடையாளம் அல்ல; பிறப்பின் அடையாளம். உலகம் அசைகிறது, ஆனால் அது முடிவை நோக்கி அல்ல — புதிய சிருஷ்டியை நோக்கி.
                  </p>

                  <h3 className="text-xl font-bold text-stone-800">இது அவர்கள்மேல் வந்த நியாயத்தீர்ப்பா?</h3>
                  <p>
                    இல்லை. இந்தக் கேள்வியை இயேசுவே ஒருமுறை நேரடியாக எதிர்கொண்டார். சீலோவாமிலே கோபுரம் விழுந்து பதினெட்டுப் பேரைக் கொன்றபோது, &quot;எருசலேமில் குடியிருந்த மனுஷர் எல்லாரிலும் அவர்கள் குற்றவாளிகளாயிருந்தார்கள் என்று நினைக்கிறீர்களோ? அல்லவென்று உங்களுக்குச் சொல்லுகிறேன்&quot; (லூக்கா 13:4–5) என்று அவர் பதிலளித்தார்.
                  </p>
                  <p>
                    ஆகவே கொலம்பியாவின்மேல் விரல் நீட்ட நமக்கு உரிமை இல்லை. மாறாக, அந்த விரல் நம்மையே திருப்பிக் காட்டுகிறது: &quot;நீங்கள் மனந்திரும்பாமற்போனால்...&quot; ஒவ்வொரு துயரச் செய்தியும் ஒரு தீர்ப்பு அல்ல; அது ஒரு அழைப்பு.
                  </p>

                  <h3 className="text-xl font-bold text-stone-800">அசைகிற பூமி, அசையாத தேவன்</h3>
                  <p className="font-bold text-stone-800">சங்கீதம் 46:1–2</p>
                  <blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700">
                    <p>
                      ¹ தேவன் நமக்கு அடைக்கலமும் பலமும், ஆபத்துக்காலத்தில் அனுகூலமான துணையுமானவர்.
                    </p>
                    <p>
                      ² ஆகையால் பூமி நிலைமாறினாலும், மலைகள் நடுச்சமுத்திரத்தில் சாய்ந்துபோனாலும், நாம் பயப்படோம்.
                    </p>
                  </blockquote>
                  <p>
                    சங்கீதக்காரன் &quot;பூமி நிலைமாறாது&quot; என்று சொல்லவில்லை. பூமி நிலைமாறும் என்பதை அவன் ஒப்புக்கொள்கிறான். ஆனாலும் &quot;நாம் பயப்படோம்&quot; என்கிறான். ஏன்? அசைகிற பூமியின்மேல் அவன் நிற்கவில்லை; அசையாத தேவனின்மேல் நிற்கிறான்.
                  </p>
                  <p>
                    எபிரெயர் நிருபம் இதை இன்னும் தெளிவாக்குகிறது. &quot;இன்னும் ஒருதரம் நான் பூமியை மாத்திரமல்ல, வானத்தையும் அசையப்பண்ணுவேன்&quot; (எபி. 12:26). அசைக்கப்படக்கூடிய எல்லாம் ஒருநாள் அசைக்கப்படும் — கட்டடங்கள், பொருளாதாரங்கள், அரசாங்கங்கள், நம் திட்டங்கள். ஆனால் அதன் நோக்கம் என்ன? &quot;அசைக்கப்படாதவைகள் நிலைத்திருக்கும்படிக்கே&quot; (v.27).
                  </p>
                  <blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700">
                    <p>
                      &quot;ஆதலால், அசைவில்லாத ராஜ்யத்தைப் பெறுகிறவர்களாகிய நாம் ... கிருபையைப் பற்றிக்கொள்ளக்கடவோம்.&quot; (எபிரெயர் 12:28)
                    </p>
                  </blockquote>
                  <p>
                    பிரியமானவர்களே — நமக்குக் கொடுக்கப்பட்டிருக்கிற ராஜ்யம் அசைவில்லாதது. நிலநடுக்கத்தால் விழக்கூடியது அல்ல. அதனால்தான் நாம் பயப்பட வேண்டியதில்லை.
                  </p>

                  <h3 className="text-xl font-bold text-stone-800">அப்படியானால் நாம் என்ன செய்வோம்?</h3>
                  <ul className="list-decimal pl-5 space-y-3">
                    <li>
                      <strong>பயத்திற்குப் பதிலாகத் திடன் கொள்ளுங்கள்.</strong> &quot;நீ பயப்படாதே, நான் உன்னுடனே இருக்கிறேன்&quot; (ஏசாயா 41:10). பயம் நம்மைச் சுருக்குகிறது; விசுவாசம் நம்மை நிமிர்த்துகிறது.
                    </li>
                    <li>
                      <strong>உதாசீனத்திற்குப் பதிலாக இரக்கம் காட்டுங்கள்.</strong> &quot;அழுகிறவர்களுடனே அழுங்கள்&quot; (ரோமர் 12:15). கொலம்பியாவின் குடும்பங்களுக்காக ஜெபியுங்கள் — இடிபாடுகளுக்குள் தேடுகிற மீட்புப் படையினருக்காக, குழந்தைகளை இழந்த தாய்மார்களுக்காக, அந்த நாட்டின் சபைகளுக்காக. உங்கள் வீட்டு ஜெபத்தில் இந்த வாரம் அவர்களுக்கு ஓர் இடம் கொடுங்கள்.
                    </li>
                    <li>
                      <strong>ஆயத்தமாயிருங்கள்.</strong> ஐம்பது விநாடிகள் — அந்த மனிதனுக்கு நித்தியமாக இருந்தது. உண்மையில் நம் ஒவ்வொருவருடைய வாழ்க்கையும் அவ்வளவு குறுகியதே (யாக்கோபு 4:14). கர்த்தர் இச்செய்திகளை நமக்குச் சொன்னது நம்மைப் பயமுறுத்த அல்ல — நம்மை விழிப்பாயிருக்கச் செய்யவே.
                    </li>
                  </ul>

                  <div className="bg-stone-100 border-l-4 border-stone-500 p-6 rounded-r-lg my-8">
                    <h4 className="font-bold text-stone-800 mb-2 text-xl">ஜெபம்</h4>
                    <p className="text-stone-700 m-0">
                      கர்த்தாவே, கொலம்பியாவின் மக்கள்மேல் இரக்கமாயிரும். இழந்தவர்களுக்கு ஆறுதலையும், சிக்கியிருக்கிறவர்களுக்கு விடுதலையையும், பயந்திருக்கிறவர்களுக்குச் சமாதானத்தையும் தாரும். எங்கள் இருதயங்களை உதாசீனத்திலிருந்து காத்து, இரக்கத்தால் நிரப்பும். அசைகிற இந்த உலகத்தில், அசைவில்லாத உம்முடைய ராஜ்யத்தில் எங்கள் நம்பிக்கையை உறுதியாய் வையும். இயேசுவின் நாமத்தில் ஜெபிக்கிறோம், ஆமென்.
                    </p>
                  </div>

                  {/* YouTube Embed */}
                  <div className="my-8 aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-xl shadow-md not-prose border-2 border-stone-200 bg-white">
                    <iframe 
                      src="https://www.youtube.com/embed/mxZHqx5XLOE?start=8" 
                      title="Colombia Earthquake Video" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                      className="w-full h-full min-h-[350px] md:min-h-[450px]"
                    ></iframe>
                  </div>

                  <p className="font-medium text-stone-900 mt-6">
                    கிறிஸ்துவுக்குள் உங்கள்,
                  </p>
                  <p className="pt-2 font-medium text-stone-800">
                    போதகர் வெஸ்லின்
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-stone-200 flex items-center gap-4 not-prose relative z-10">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-stone-300 shrink-0 shadow-sm bg-white">
                      <img src="/staff-pastor.png" alt="Ps. ஜெயகரன் வெஸ்லின்" className="w-full h-full object-cover object-top" />
                    </div>
                    <div>
                      <p className="font-bold text-stone-800 m-0 text-lg">Ps. ஜெயகரன் வெஸ்லின் (Jeyakaran Weslyn)</p>
                      <p className="text-sm text-stone-600 m-0">Senior Pastor, {churchConfig.name}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar Archive Menu */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-border p-6 sticky top-24 sidebar-placeholder">
                <h3 className="text-lg font-bold text-primary mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent-dark" />
                  Past Editions
                </h3>
                <div className="space-y-3">
                  <Link href="/pastors-desk" className="group flex items-start gap-2 p-3 rounded-md bg-stone-50 border border-stone-200 hover:border-accent hover:bg-accent/5 transition-colors">
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                    <div>
                      <p className="text-sm font-bold text-stone-900 group-hover:text-primary transition-colors">Edition 5</p>
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
