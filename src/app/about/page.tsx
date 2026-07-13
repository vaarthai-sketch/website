import React from "react";
import { Info, ShieldAlert, Check } from "lucide-react";
import { churchConfig } from "@/data/config";
import { StaffCard } from "@/components/Card";
import { staffData } from "@/data/staff";

export const metadata = {
  title: "About Our Church",
  description: `Learn about the story, core beliefs, mission, vision, values, and leadership team of ${churchConfig.name} in Brisbane, QLD, Australia.`,
};

export default function AboutPage() {
  const coreValues = [
    {
      title: "வேதாகமத்தின் அதிகாரம்",
      desc: "பரிசுத்த வேதாகமம் என்பது தேவனால் அருளப்பட்ட, பிழையற்ற, ஆலோசனைகளின் இறுதி வழிகாட்டி என்று நாங்கள் முழுமையாக நம்புகிறோம்."
    },
    {
      title: "கிருபை நிறைந்த ஐக்கியம்",
      desc: "மக்களின் குறைகளைத் தாங்கி, ஒருவருக்கொருவர் மன்னித்து கிறிஸ்துவுக்குள் வளரும் கிருபையுள்ள சூழலை உருவாக்க விரும்புகிறோம்."
    },
    {
      title: "இல்லக் குழுக்கள் (LifeGroups)",
      desc: "விசுவாசம் என்பது தனிப் பயணம் அல்ல. வாராந்திர இல்லக் கூட்டங்கள் மூலம் ஆழமான உறவுகளையும் விசுவாச வளர்ச்சியையும் வளர்க்கிறோம்."
    },
    {
      title: "தியாகமுள்ள சேவை",
      desc: "கிறிஸ்துவைப் பின்பற்றுவது என்பது பிறருக்குச் சேவை செய்வதே. நமது தாலந்துகளையும், நேரத்தையும் பிறர் நன்மைக்காகப் பயன்படுத்துகிறோம்."
    }
  ];

  const statementOfFaith = [
    {
      point: "வேதப்பகுதிகள்",
      text: "பழைய மற்றும் புதிய ஏற்பாடுகள் தேவனால் அருளப்பட்ட பிழையற்ற வார்த்தை என்றும், அதுவே நமது விசுவாசத்தின் இறுதி அதிகாரம் என்றும் நம்புகிறோம்."
    },
    {
      point: "திரியேக தேவன்",
      text: "பிதா, குமாரன், பரிசுத்த ஆவி ஆகிய மூவரில் நித்தியமாக வீற்றிருக்கும் ஒரே தேவனை நாங்கள் விசுவாசிக்கிறோம்."
    },
    {
      point: "இயேசு கிறிஸ்து",
      text: "இயேசு கிறிஸ்துவின் தெய்வீகம், கன்னித்தாய் பிறப்பு, பாவமில்லாத வாழ்க்கை, சிலுவை மரணம், உடலின் உயிர்த்தெழுதல் மற்றும் அவரது மறுவருகையை நம்புகிறோம்."
    },
    {
      point: "இரட்சிப்பு",
      text: "இரட்சிப்பு என்பது தேவனுடைய இலவசக் கிருபை. இயேசு கிறிஸ்துவின் சிலுவை பலியின் மேல் வைக்கும் விசுவாசத்தால் மட்டுமே பாவ மன்னிப்பும் மீட்பும் உண்டாகிறது."
    },
    {
      point: "திருச்சபை",
      text: "கிறிஸ்துவை விசுவாசிக்கும் அனைத்து விசுவாசிகளின் ஆன்மீக உடலே சபை என்றும், அது ஆராதனை மற்றும் ஐக்கியத்தால் வெளிப்படுகிறது என்றும் நம்புகிறோம்."
    }
  ];

  return (
    <div className="pb-20 space-y-16">
      
      {/* 1. Header Banner */}
      <section 
        className="relative text-white py-16 md:py-24 text-center overflow-hidden bg-cover bg-[center_25%] bg-no-repeat"
        style={{ backgroundImage: "url('/about-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0F172A]/75 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-[#0F172A]/50"></div>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <h1 className="font-serif text-4xl md:text-5xl font-black">எங்களைப் பற்றி</h1>
          <p className="text-stone-300 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            {churchConfig.name}-ன் வரலாறு, விசுவாசம் மற்றும் போதகக் குழுவினரைக் குறித்து அறிந்து கொள்ளுங்கள்.
          </p>
        </div>
      </section>



      {/* 2. Our Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs font-bold text-accent uppercase tracking-widest">எங்கள் தொடக்கம்</span>
          <h2 className="font-serif text-3xl md:text-4xl font-black text-primary">
            ஆலயத்தின் நற்செய்தி வரலாறு
          </h2>
          <p className="text-stone-700 leading-relaxed text-base font-semibold">
            நாங்கள் தேவ வசனத்தில் வேரூன்றி, அன்பினால் வளர்ந்து, கிருபையால் ஒன்றுசேர்ந்த ஒரு தமிழ் சபை.
          </p>
        </div>

        {/* Aligned text columns for equal visual weight */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 text-stone-700 leading-relaxed text-sm md:text-base">
          <div className="space-y-5">
            <p>
              நான் வந்ததற்கு காரணம் இல்லையா? இந்த கேள்வியை கேட்டது, தாவீது. தான் மேய்ப்பனாய் இருந்த காலத்தில், கோலியாத்தை முறியடிப்பதற்கு முன்பாக, அவன் கேட்ட கேள்வி இது. எங்களிடம் கேட்கப்பட்ட கேள்வியும் இதுவே. தாவீதை விட நாம் பாக்கியம் பெற்றவர்கள், தாவீது, இஸ்ரவேலுடைய இராணுவங்களின் தேவனாகிய சேனைகளுடைய கர்த்தரின் நாமத்திலே கோலியாத்திடம் போரிடச் சென்றான். ஆனாலும் யுத்த கலம் அவனுக்கு முன்பாக இருந்தது, எதிரி அவனுக்கு எதிராக நின்று கர்ச்சித்துக் கொண்டிருந்தான். 
            </p>
            <p>
              ஆனால், இன்று நம்முடைய எதிரி, ஏற்கனவே, இயேசு கிறிஸ்துவினாலே, சிலுவையிலே, தோற்கடிக்கப் பட்டு விட்டான்! தாவீது, கோலியாத்தை கொன்று போட்ட பின்பு, இஸ்ரவேல் மக்கள் மீதமிருந்த எதிரிகளையும் துரத்தினது மட்டுமல்ல, திரும்பி வந்து, எதிரிகளின் முகாம்களைக் கொள்ளையிட்டார்கள்! இன்று நாங்கள் வெற்றியாளர்கள்! நாங்கள் போரிட்டதனினால் அல்ல, கிறிஸ்து எங்களுக்காக அதை செய்து முடித்ததனாலே!
            </p>
          </div>
          <div className="space-y-5">
            <p>
              வேதத்தில் இருந்து கூறப்பட்ட இந்த வார்த்தைகள், இன்றைக்கும் உயிருள்ளதாகவும், வல்லமை உள்ளதாகவும், வேலை செய்கிறதாகவும் இருக்கிறது. இந்த வார்த்தையைக் கேட்போம்! வார்த்தையின்படி வாழுவோம்! வார்த்தையைச் சுமந்து செல்வோம்!
            </p>
            <p className="font-semibold text-primary bg-accent/10 p-5 rounded-xl border border-accent/30">
              நீங்கள் பிரிஸ்பன் நகரத்தில் வசிப்பவர் என்றால், நீங்களும் வெற்றியாளர்களாக வேண்டும் என்பது எங்கள் விருப்பம். வாருங்கள், வார்த்தையின்படி வெற்றியாளர்களாக இணைந்து தேவனை ஆராதிப்போம்!
            </p>
          </div>
        </div>
      </section>

      {/* Full-width edge-to-edge banner block below the main text */}
      <section className="w-full relative overflow-hidden bg-stone-900 shadow-xl border-y border-stone-800">
        <div className="relative w-full h-[400px] md:h-[480px] max-h-[500px] overflow-hidden flex items-center justify-center">
          <img 
            src="/church-history.jpg" 
            alt="Church Family & History Banner" 
            className="w-full h-full object-cover object-top transform hover:scale-[1.01] transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"></div>
        </div>
      </section>

      {/* 3. Leadership / About Pastor Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl border border-border shadow-md overflow-hidden p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Framed, rounded-rectangle photo featuring a subtle background */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl p-4 md:p-5 bg-gradient-to-br from-stone-100 via-stone-50 to-stone-200 border border-stone-200/80 shadow-inner overflow-hidden group">
                {/* Subtle background pattern */}
                <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#0F172A_1px,transparent_1px)] [background-size:12px_12px]"></div>
                
                <div className="relative rounded-xl overflow-hidden bg-white shadow-md border border-white aspect-[4/5]">
                  <img 
                    src="/pastor-about.jpg" 
                    alt="Pastor Weslyn" 
                    className="w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-500" 
                  />
                </div>
              </div>
            </div>

            {/* Pastor Biography */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-accent uppercase tracking-widest">தலைமைத்துவம்</span>
                <h2 className="font-serif text-3xl md:text-4xl font-black text-primary">
                  எங்கள் போதகரைப் பற்றி
                </h2>
              </div>

              <div className="space-y-4 text-stone-700 leading-relaxed text-sm md:text-base">
                <p>
                  2007-ல் Ps வெஸ்லின் முதன்முதலில் ஆஸ்திரேலியாவுக்கு வந்தபோது, பிரிஸ்பேனில் உள்ள தமிழ் மக்கள் மத்தியில் ஊழியம் செய்ய வேண்டும் என்ற தெளிவான தரிசனத்தை தேவன் அவருக்கு கொடுத்தார். ரீமா பிரிஸ்பேன் ஐக்கியம் மற்றும் சிட்டிபாயிண்ட் தமிழ் சபையில் 20 ஆண்டுகளாக ஊழியம் செய்தார்.
                </p>
                <p>
                  இவர் பொது மற்றும் குடும்ப ஆலோசகராகவும் (Clinical Counsellor) பணி புரிந்து வருகிறார். இவர் மனைவி Dr அறிவு வெஸ்லின், பொது மருத்துவராக (General Practitioner) பணி செய்கிறார்கள். தேவன் இவர்களுக்கு, இரட்டிப்பான ஆசீர்வாதமாக, Jeremy & Timmy என்ற இரட்டையர்களை கொடுத்துள்ளார். பள்ளி இறுதி ஆண்டுகளிலே இவர்கள் படித்துக் கொண்டிருக்கிறார்கள்!
                </p>
                <p>
                  பிரிஸ்பேன் தமிழர்களுக்கு இவர் அறிமுகமானவர். தமிழ் மக்கள், கிறிஸ்து தருகின்ற உண்மையான விடுதலையை அனுபவிக்க வேண்டும் என்கிற பெரிய தரிசனம் அவருக்கு உண்டு. அதே தரிசனத்தோடு இருக்கிற குடும்பங்கள் அவரோடு இணைந்ததின் விளைவாக, “வார்த்தை சுவிசேட திருச்சபை” பிறந்தது.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Mission & Vision */}
      <section className="bg-neutral-light/50 border-y border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="bg-white border border-border p-8 rounded-xl space-y-4 shadow-sm">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                <Compass className="w-6 h-6" />
              </span>
              <h2 className="font-serif text-2xl font-black text-primary">எங்கள் நோக்கம் (Mission)</h2>
              <p className="text-stone-700 leading-relaxed text-sm">
                இயேசு கிறிஸ்துவுக்கு சாட்சியாக, ஆராதனைகளிலும், இல்லங்களிலும், சுற்றுப்புறங்களிலும், சமுதாயத்திலும், நாம் சொல்வதின்படி வாழ்வதே எங்கள் நோக்கம். நற்செய்தி விசுவாசக் கூட்டமைப்பாகச் செயல்பட்டு ஆத்துமாக்களை வழிநடத்துகிறோம்.
              </p>
            </div>

            <div className="bg-white border border-border p-8 rounded-xl space-y-4 shadow-sm">
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                <svg className="w-6 h-6 fill-current text-primary" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </span>
              <h2 className="font-serif text-2xl font-black text-primary">எங்கள் இலக்கு (Vision)</h2>
              <p className="text-stone-700 leading-relaxed text-sm">
                ஒவ்வொரு விசுவாசியும் தங்களது ஆவிக்குரிய தாலந்துகளைக் கண்டறிந்து திருச்சபையிலும் சமுதாயத்திலும் பயன்படுத்த வேண்டும். குடும்பங்கள் கட்டப்படவும், சமுதாயம் கிறிஸ்துவின் அன்பினால் மாற்றமடையவும் வழிகாட்டுகிறோம்.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-accent uppercase tracking-widest">நாங்கள் நடக்கும் வழி</span>
          <h2 className="font-serif text-3xl font-black text-primary mt-1">எங்கள் விசுவாசப் பண்புகள்</h2>
          <p className="text-sm text-stone-500 mt-2">நமது ஊழியங்களையும் முடிவுகளையும் வழிநடத்தும் ஒழுக்கங்கள்.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreValues.map((value, idx) => (
            <div key={idx} className="flex gap-4">
              <span className="w-6 h-6 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center shrink-0 text-accent-dark text-xs font-bold">
                {idx + 1}
              </span>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-stone-900">{value.title}</h3>
                <p className="text-sm text-stone-600 leading-relaxed">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Statement of Faith */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="bg-neutral-light/50 border border-border p-8 sm:p-12 rounded-xl">
          <div className="max-w-3xl mx-auto space-y-8">
            
            <div className="text-center space-y-2">
              <h2 className="font-serif text-3xl font-black text-primary">விசுவாச அறிக்கை (Statement of Faith)</h2>
              <p className="text-sm text-stone-600">
                நாங்கள் உறுதியாக விசுவாசிக்கும் வேதாகமக் கோட்பாடுகளின் தொகுப்பு.
              </p>
            </div>

            <div className="space-y-6">
              {statementOfFaith.map((faith, idx) => (
                <div key={idx} className="border-b border-border/80 pb-4 last:border-0 last:pb-0 flex gap-4 items-start">
                  <div className="w-5 h-5 rounded bg-primary flex items-center justify-center text-white mt-1 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="font-serif font-bold text-stone-900">{faith.point}</h3>
                    <p className="text-sm text-stone-600 leading-relaxed">{faith.text}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 7. Leadership / Staff Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold text-accent uppercase tracking-widest">ஆலயத் தலைவர்கள்</span>
          <h2 className="font-serif text-3xl font-black text-primary mt-1">திருச்சபை ஊழியர்கள்</h2>
          <p className="text-sm text-stone-500 mt-2">
            எங்களது சபையை வழிநடத்தும் மற்றும் பராமரிக்கும் போதகக் குழுவினரைச் சந்தியுங்கள்.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {staffData.map((staff) => (
            <StaffCard key={staff.id} staff={staff} />
          ))}
        </div>
      </section>

    </div>
  );
}

const Compass: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
  </svg>
);
