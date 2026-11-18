import React from "react";
import { Calendar as CalendarIcon, FileText, ChevronRight, Leaf } from "lucide-react";
import Link from "next/link";
import { NewsletterForm } from "@/components/NewsletterForm";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  locale: "ta",
  title: "VEC-NL 2026-11 Edition 16 - போதகர் மேசையிலிருந்து",
  description: "முப்பத்து மூன்று ஆண்டுகள்… ஒரே வாரம்! ஆசீர்வாதத்தைக் காப்பது உண்மையுள்ள இருதயமே! — “திரளான ஐசுவரியத்தைப்பார்க்கிலும் நற்கீர்த்தியே தெரிந்துகொள்ளப்படத்தக்கது; பொன் வெள்ளியைப்பார்க்கிலும் தயையே நல்லது.” — நீதிமொழிகள் 22:1",
  path: "/pastors-desk",
  image: "/edition-16-king.jpg",
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
            முப்பத்து மூன்று ஆண்டுகள்… ஒரே வாரம்!
          </h1>
          <p className="text-xl md:text-2xl text-accent font-serif italic mb-8 max-w-2xl mx-auto">
            ஆசீர்வாதத்தைக் காப்பது உண்மையுள்ள இருதயமே!
          </p>
          <div className="flex items-center justify-center gap-4 text-sm font-medium text-stone-300">
            <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">VEC-NL • Edition #016</span>
            <span className="flex items-center gap-1"><CalendarIcon className="w-4 h-4 text-accent" /> நவம்பர் 2026</span>
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
                  <span>VEC-NL 2026-11 · Edition 16</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-900 mb-2 relative z-10 flex items-center gap-2">
                  முப்பத்து மூன்று ஆண்டுகள்… ஒரே வாரம்!
                </h2>
                <p className="text-lg md:text-xl font-serif italic text-primary mb-6 relative z-10">
                  ஆசீர்வாதத்தைக் காப்பது உண்மையுள்ள இருதயமே!
                </p>
                
                <div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg relative z-10 font-serif">

                  <div className="my-6 rounded-xl overflow-hidden shadow-md border-2 border-stone-200">
                    <img 
                      src="/edition-16-king.jpg" 
                      alt="முப்பத்து மூன்று ஆண்டுகள்… ஒரே வாரம்! - A Faithful Heart Guards the Blessing" 
                      width={1024}
                      height={1024}
                      fetchPriority="high"
                      decoding="async"
                      className="w-full h-auto object-cover max-h-[500px]" 
                    />
                  </div>

                  <p>
                    கடந்த வியாழக்கிழமை, நவம்பர் 12 அன்று, உலகையே அதிர வைத்த ஒரு செய்தி வெளியானது. என்விடியா (Nvidia) நிறுவனத்தின் நிறுவனரும் தலைமை நிர்வாக அதிகாரியுமான ஜென்சன் ஹுவாங் (Jensen Huang) பதவி விலகினார்.
                  </p>

                  <p>
                    இன்று நாம் பயன்படுத்தும் செயற்கை நுண்ணறிவின் (AI) பின்னால் இயங்குவது, அவருடைய நிறுவனம் தயாரிக்கும் சில்லுகளே (chips). 1993-ல் ஒரு சிறிய நிறுவனமாகத் தொடங்கி, முப்பத்து மூன்று ஆண்டுகள் உழைத்து, அதை உலகின் மிக மதிப்புமிக்க நிறுவனமாக உயர்த்தினார். ஆசிய நாடுகளில் அவருடைய கையெழுத்தை வாங்க ரசிகர்கள் முண்டியடித்தார்கள்.
                  </p>

                  <p>
                    ஆனால் இந்த மாதத் தொடக்கத்தில், தன் மனைவிக்கு உண்மையற்றவராக நடந்துகொண்டதை அவர் தன் ஊழியர்களிடம் ஒப்புக்கொண்டார். அந்த உறவு, வெளிநாட்டு உளவுத்துறைக்காகச் செயல்பட்டதாகச் சந்தேகிக்கப்படும் ஒருவருடன் இருந்ததாகச் செய்திகள் வெளியானதால், நிறுவனத்தின் இயக்குநர் குழு விசாரணையைத் தொடங்கியது. ஒரே வாரத்திற்குள், முப்பத்து மூன்று ஆண்டுகளாகக் கட்டியெழுப்பிய இடத்தை விட்டு அவர் விலகினார்.
                  </p>

                  <p className="font-medium text-stone-800">
                    தன் ஊழியர்களுக்கு எழுதிய கடிதத்தில் அவர் இப்படி ஒப்புக்கொண்டார்: &ldquo;என் செயல்கள் என் மனைவியையும் பிள்ளைகளையும் காயப்படுத்தின; இதற்கு எந்தச் சாக்குப்போக்கும் இல்லை.&rdquo;
                  </p>

                  <p>
                    நான் இதை யாரையும் கேலி செய்வதற்காகவோ நியாயந்தீர்ப்பதற்காகவோ எழுதவில்லை. ஒரு மனிதனின் வீழ்ச்சி, முதலாவது அவனுடைய குடும்பத்தின் ஆழமான காயம். ஆனால் இந்தச் செய்தி, வேதாகமம் சொல்லும் சில சத்தியங்களை நம் ஒவ்வொருவருக்கும் உரத்த குரலில் நினைவூட்டுகிறது.
                  </p>

                  <p>
                    <strong className="text-primary">மறைவானது வெளிப்படும்.</strong> மோசே இஸ்ரவேலரிடம், &ldquo;உங்கள் பாவம் உங்களைத் தொடர்ந்துபிடிக்கும் என்று நிச்சயமாய் அறியுங்கள்&rdquo; (எண்ணாகமம் 32:23) என்றார். இரகசியமாக இருந்த ஒன்று, சில வாரங்களுக்குள் உலகின் ஒவ்வொரு செய்தித்தாளிலும் வந்தது. கேமராக்கள் இல்லாத இடத்திலும் தேவனுடைய கண்கள் இருக்கின்றன.
                  </p>

                  <p className="font-semibold text-primary">
                    நற்கீர்த்தி ஐசுவரியத்தைவிட மேலானது.
                  </p>

                  <blockquote className="border-l-4 border-accent pl-6 py-2 my-8 bg-stone-50 rounded-r-lg shadow-sm italic text-lg text-stone-800">
                    &ldquo;திரளான ஐசுவரியத்தைப்பார்க்கிலும் நற்கீர்த்தியே தெரிந்துகொள்ளப்படத்தக்கது; பொன் வெள்ளியைப்பார்க்கிலும் தயையே நல்லது.&rdquo;
                    <footer className="text-right text-sm font-bold text-accent mt-4 not-italic">— நீதிமொழிகள் 22:1</footer>
                  </blockquote>

                  <p>
                    உலகின் மிகப் பெரிய பணக்காரர்களில் ஒருவருக்கு எல்லாம் இருந்தது: பணம், புகழ், அதிகாரம். ஆனால் இழந்த நம்பிக்கையை எந்தப் பணத்தாலும் திரும்ப வாங்க முடியவில்லை. நம்பிக்கை பல ஆண்டுகளில் கட்டப்படுகிறது; ஒரு தவறான தீர்மானத்தில் இடிந்து விழுகிறது.
                  </p>

                  <p>
                    <strong className="text-primary">வீழ்ச்சி ஒரே நாளில் நடப்பதில்லை.</strong> தாவீது ராஜாவை நினைத்துப் பாருங்கள். வெற்றியின் உச்சியில் இருந்தார். ராஜாக்கள் யுத்தத்திற்குப் புறப்படும் காலம் வந்தபோது, அவர் எருசலேமிலேயே இருந்துவிட்டார் (2 சாமுவேல் 11:1). உப்பரிகையின்மேல் ஒரு பார்வை; பின் ஒரு தீர்மானம்; அதை மறைக்க இன்னொரு பாவம். கடைசியில் நாத்தான் தீர்க்கதரிசி அவருக்கு முன்பாக நின்று, &ldquo;நீயே அந்த மனுஷன்&rdquo; (2 சாமுவேல் 12:7) என்றார்.
                  </p>

                  <p>
                    பெரிய வீழ்ச்சிகள் பெரும்பாலும் சிறிய சமரசங்களிலிருந்தே தொடங்குகின்றன. யாருக்கும் தெரியாது என்று நினைத்து அனுப்பும் ஒரு செய்தி. அழிக்கப்படும் ஒரு உரையாடல். &ldquo;இதில் தவறொன்றும் இல்லை&rdquo; என்று நம்மை நாமே சமாதானப்படுத்திக்கொள்ளும் ஒரு நட்பு. ஆகவே பவுல் எச்சரிக்கிறார்: &ldquo;தன்னை நிற்கிறவனென்று எண்ணுகிறவன் விழாதபடிக்கு எச்சரிக்கையாயிருக்கக்கடவன்&rdquo; (1 கொரிந்தியர் 10:12).
                  </p>

                  <p>
                    <strong className="text-primary">ஆனால், கதை அங்கே முடிவதில்லை!</strong> தாவீதின் கதை நாத்தானின் வார்த்தையோடு முடியவில்லை. அவர் சாக்குப்போக்கு சொல்லாமல், &ldquo;நான் கர்த்தருக்கு விரோதமாய்ப் பாவஞ்செய்தேன்&rdquo; (2 சாமுவேல் 12:13) என்று ஒப்புக்கொண்டார். அந்த நொறுங்குண்ட இருதயத்திலிருந்துதான் சங்கீதம் 51 பிறந்தது.
                  </p>

                  <p>
                    வெளிப்படுத்தப்படுவதற்கும் அறிக்கையிடுவதற்கும் பெரிய வித்தியாசம் உண்டு. உலகம் நம் பாவத்தை வெளிச்சத்திற்குக் கொண்டுவரும்போது வெட்கம் வருகிறது. நாமே அதைத் தேவனுடைய வெளிச்சத்திற்குக் கொண்டுவரும்போது மன்னிப்பு வருகிறது. &ldquo;தன் பாவங்களை மறைக்கிறவன் வாழ்வடையமாட்டான்; அவைகளை அறிக்கையிட்டு விட்டுவிடுகிறவனோ இரக்கம் பெறுவான்&rdquo; (நீதிமொழிகள் 28:13).
                  </p>

                  <p>
                    மனிதர்களிடம் மன்னிப்புக் கேட்பது அவசியம். ஆனால் நம் ஆழமான தேவை, தேவனோடு ஒப்புரவாவதே. நம்முடைய எல்லாப் பாவத்தையும் வெட்கத்தையும் இயேசு கிறிஸ்து சிலுவையில் சுமந்தார். &ldquo;நம்முடைய பாவங்களை நாம் அறிக்கையிட்டால், பாவங்களை மன்னித்து எல்லா அநியாயத்தையும் நீக்கி நம்மைச் சுத்திகரிப்பதற்கு அவர் உண்மையும் நீதியுமுள்ளவராயிருக்கிறார்&rdquo; (1 யோவான் 1:9).
                  </p>

                  <p>
                    அன்பான வார்த்தை குடும்பமே, நம்மில் யாரும் உலகப் பெரும் நிறுவனத்தை நடத்துவதில்லை. ஆனால் நம் ஒவ்வொருவருக்கும் காக்க வேண்டிய ஒரு குடும்பமும், ஒரு பெயரும், ஒரு சாட்சியும் இருக்கிறது. நம் கைபேசியை நம் வாழ்க்கைத்துணை எடுத்துப் பார்த்தால் நாம் நிம்மதியாக இருப்போமா? வேலையிடத்திலும், பணக் கணக்குகளிலும், உறவுகளிலும், யாரும் பார்க்காதபோதும் ஒரே மனிதராக வாழ்கிறோமா?
                  </p>

                  <p>
                    யாருக்கும் தெரியாத ஒரு போராட்டம் உங்களுக்குள் இருந்தால், அது வெளியே தெரியவரும்வரை காத்திருக்காதீர்கள். இன்றே அதை ஆண்டவரிடம் கொண்டுவாருங்கள். நம்பிக்கைக்குரிய ஒரு முதிர்ந்த விசுவாசியிடமோ போதகரிடமோ மனம்திறந்து பேசுங்கள் (யாக்கோபு 5:16). அறிக்கையிடப்பட்ட பாவம் தன் வல்லமையை இழக்கிறது.
                  </p>

                  <p className="font-medium text-stone-800">
                    இந்த வாரம், காயப்பட்டிருக்கும் அந்தக் குடும்பத்திற்காக ஜெபிப்போம். அவருக்காகவும் ஜெபிப்போம்: மனிதர்களின் மன்னிப்பை மட்டுமல்ல, தேவனுடைய கிருபையையும் அவர் கண்டடையட்டும்.
                  </p>

                  <div className="bg-stone-100 p-6 rounded-xl border-l-4 border-primary my-8 space-y-2">
                    <p className="text-sm font-bold uppercase tracking-wider text-primary m-0">சிந்தனை</p>
                    <p className="text-base md:text-lg font-medium text-stone-800 m-0">
                      நான் யாருக்கும் தெரியாமல் மறைத்துவைத்திருக்கும் ஏதேனும் ஒன்று, ஒருநாள் வெளிப்பட்டால் என் குடும்பத்தையும் சாட்சியையும் காயப்படுத்துமா? அதை இன்றே தேவனுடைய வெளிச்சத்திற்குக் கொண்டுவர நான் எடுக்க வேண்டிய முதல் அடி என்ன?
                    </p>
                  </div>

                  <div className="bg-accent/10 p-6 rounded-xl border border-accent/30 my-8 space-y-2">
                    <p className="text-sm font-bold uppercase tracking-wider text-accent-dark m-0">ஜெபம்</p>
                    <p className="text-base md:text-lg italic text-stone-800 m-0">
                      பரலோகப் பிதாவே, யாரும் பார்க்காதபோதும் நீர் எங்களைப் பார்க்கிறீர். எங்கள் இருதயங்களை ஆராய்ந்து, நாங்கள் மறைத்துவைத்திருக்கும் பாவங்களை எங்களுக்குக் காட்டும். அவைகளை மறைக்காமல் அறிக்கையிட்டு விட்டுவிடப் பெலன் தாரும். நீர் தரும் ஒவ்வொரு ஆசீர்வாதத்தையும் உமது மகிமைக்காகப் பயன்படுத்தி, எல்லாவற்றிற்கும் மேலாக உம்மைக் கனப்படுத்தி வாழ எங்களுக்கு உதவும். இந்த வாரம் செய்திகளில் காயப்பட்ட குடும்பத்திற்கு உமது ஆறுதலைத் தாரும். எங்கள் திருமணங்களையும் குடும்பங்களையும் உண்மையுள்ளவைகளாகக் காத்துக்கொள்ளும். இயேசுவின் நாமத்தில் ஜெபிக்கிறோம். ஆமென்.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-200">
                    <p className="font-bold text-primary mb-1">
                      Ps. Weslyn | வார்த்தை சுவிசேஷ சபை
                    </p>
                    <p className="text-sm font-bold text-accent tracking-wider">
                      கேட்போம் | வாழ்வோம் | பகிர்வோம்
                    </p>
                  </div>

                  <div className="mt-12 rounded-xl overflow-hidden shadow-md border-2 border-stone-200 aspect-video">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/l745NLIneFM" 
                      title="YouTube video player" 
                      loading="lazy"
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
                  <h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mb-2 pl-2">November 2026</h4>
                  <Link href="/pastors-desk" className="group flex items-start gap-2 p-3 rounded-md bg-stone-50 border border-stone-200 hover:border-accent hover:bg-accent/5 transition-colors">
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-900 font-bold group-hover:text-primary transition-colors">Edition 16</p>
                      <p className="text-xs text-stone-500">Nov 2026</p>
                    </div>
                  </Link>

                  <h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mt-6 mb-2 pl-2 border-t border-stone-100 pt-4">October 2026</h4>
                  <Link href="/pastors-desk/archive/october/edition-15" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 group-hover:text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Edition 15</p>
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
