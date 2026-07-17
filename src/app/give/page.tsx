"use client";

import React from "react";
import { 
  Heart, ShieldCheck, Mail, Smartphone, ArrowRight, DollarSign, Check, Info, FileText, ExternalLink
} from "lucide-react";
import { churchConfig } from "@/data/config";

export default function GivePage() {

  return (
    <div className="pb-20 space-y-16">
      
      {/* 1. Header Banner */}
      <section 
        className="relative text-white py-16 md:py-24 text-center overflow-hidden bg-cover bg-[center_35%] bg-no-repeat shadow-md"
        style={{ backgroundImage: "url('/giving-hero.jpg')" }}
      >
        <div className="absolute inset-0 bg-[#0F172A]/75 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-[#0F172A]/50"></div>
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] mix-blend-overlay"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <h1 className="font-serif text-4xl md:text-5xl font-black tracking-tight drop-shadow-sm">ஆன்லைன் காணிக்கை (Giving)</h1>
          <p className="text-stone-200 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed drop-shadow-sm">
            நமது சபையின் ஊழியங்கள், நற்பணிகள் மற்றும் மிஷனரி திட்டங்களை உங்கள் காணிக்கைகள் மூலம் தாங்குங்கள்.
          </p>
        </div>
      </section>

      {/* 2. Biblical Foundation & Financial Transparency (Top Row) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          <div className="bg-white border border-border p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col justify-between h-full space-y-4">
            <div className="space-y-3">
              <h2 className="font-serif text-xl sm:text-2xl font-black text-primary">
                ஆராதனையின் ஒரு பகுதி காணிக்கை
              </h2>
              <p className="text-stone-700 leading-relaxed text-sm">
                நமது சபையின் காணிக்கைகள் மற்றும் கொடைகள் அனைத்தும் தேவனுடைய சுவிசேஷப் பணிகளுக்கும், சிறுவர் மற்றும் இளைஞர் ஊழியங்களுக்கும், ஏழை எளிய மக்களுக்கான நற்பணிகளுக்கும் முழுமையாகப் பயன்படுத்தப்படுகின்றன. உங்கள் தாராள மனப்பான்மைக்காகத் தேவனுக்கு நன்றி செலுத்துகிறோம்.
              </p>
            </div>
            
            <div className="bg-neutral-light/50 border-l-4 border-accent p-4 rounded-r-lg mt-auto">
              <p className="text-xs italic text-stone-700 leading-relaxed">
                \"அவனவன் விசனமாயுமல்ல, கட்டாயமாயுமல்ல, தன் மனதில் தீர்மானித்தபடியே கொடுக்கக்கடவன்; உற்சாகமாய்க் கொடுக்கிறவனிடத்தில் தேவன் பிரியமாயிருக்கிறார்.\"
              </p>
              <span className="block text-[10px] font-bold text-accent-dark tracking-widest uppercase mt-1">
                — 2 கொரிந்தியர் 9:7 (ESV)
              </span>
            </div>
          </div>

          <div className="bg-white border border-border p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col justify-between h-full space-y-4">
            <div className="space-y-3">
              <h3 className="font-serif text-xl sm:text-2xl font-black text-primary flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-accent shrink-0" />
                <span>நிதி வெளிப்படைத்தன்மை மற்றும் கணக்குப்பொறுப்பு</span>
              </h3>
              <p className="text-stone-700 leading-relaxed text-sm">
                எங்கள் திருச்சபையின் நிதி மேலாண்மை முழுமையான வெளிப்படைத்தன்மையுடன்Elder குழு மற்றும் வெளிப்புற ஆடிட்டர்களால் கண்காணிக்கப்படுகிறது. வருடாந்திர நிதி அறிக்கைகள் சபை மக்களுக்கு சமர்ப்பிக்கப்படுகின்றன.
              </p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mt-auto">
              <p className="text-xs text-emerald-800 leading-relaxed font-medium">
                ✓ அனைத்து நிதி பரிவர்த்தனைகளும் 100% நேர்மையோடும் தேவ பயத்தோடும் கையாளப்படுகின்றன.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Half & Half Giving Portals (Online & Offline/Other Ways - Bottom Row) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Box 1: Secure Online Giving Card */}
          <div className="bg-[#F4F1E8] border border-[#E0DBCB] text-stone-900 rounded-2xl p-6 sm:p-8 shadow-md flex flex-col justify-between relative overflow-hidden h-full space-y-6">
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>
            
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between border-b border-stone-300/80 pb-4">
                <div>
                  <span className="text-xs font-bold text-accent-dark uppercase tracking-widest block">SECURE ONLINE GIVING</span>
                  <h3 className="font-serif text-xl sm:text-2xl font-black text-primary flex items-center gap-2 mt-0.5">
                    <span>வார்த்தை தசமபாகம் & காணிக்கைகள்</span>
                  </h3>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-800 bg-emerald-100 border border-emerald-300 px-2.5 py-1 rounded-full flex items-center gap-1.5 shrink-0 shadow-2xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span> 100% Secure
                </span>
              </div>

              <p className="text-sm sm:text-base text-stone-700 leading-relaxed font-normal">
                உங்கள் தாராளமான தசமபாகமும் காணிக்கைகளும் வார்த்தை சுவிசேஷ திருச்சபையின் தொடர் ஊழியங்களுக்கும் மிஷனரி பணிகளுக்கும் பேருதவியாக உள்ளன. உங்கள் மன அமைதிக்காக அனைத்து ஆன்லைன் காணிக்கைகளும் 100% முழு பாதுகாப்போடு நிர்வகிக்கப்படுகின்றன. உங்கள் Credit/Debit Card, Apple Pay அல்லது Google Pay மூலம் மிக எளிதாகக் காணிக்கை செலுத்தலாம்.
              </p>

              <div className="bg-white/80 border border-[#E0DBCB] rounded-xl p-4 space-y-2 text-xs text-stone-700 shadow-2xs">
                <div className="flex items-center gap-2 text-primary font-bold">
                  <Check className="w-4 h-4 shrink-0 text-accent-dark" />
                  <span>மாதாந்திர தசமபாகம் (Automated Recurring Giving)</span>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  உங்கள் பாதுகாப்பான ஆன்லைன் கணக்கு மூலமாக மாதாந்திர அல்லது வாராந்திர காணிக்கையை (Recurring Giving) தானாகச் செலுத்தும்படி எளிதாக அமைத்துக் கொள்ளவும், உங்கள் வருடாந்திர காணிக்கை ரசீதுகளை (Annual Tax Receipts) எந்த நேரத்திலும் பதிவிறக்கம் செய்யவும் முடியும்.
                </p>
              </div>
            </div>

            {/* Launch CTA Button */}
            <div className="relative z-10 pt-4 space-y-3 mt-auto">
              <a
                href={churchConfig.links.give}
                data-open-in-church-center-modal="true"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-bold text-base sm:text-lg shadow-md hover:scale-[1.01] transition-all duration-200 text-center cursor-pointer"
              >
                <span>தசமபாகம் & காணிக்கை செலுத்த</span>
                <ExternalLink className="w-5 h-5 shrink-0" />
              </a>
              <p className="text-[11px] text-stone-500 text-center italic">
                * இந்தப் பொத்தானை அழுத்தியதும் பாதுகாப்பான காணிக்கை தளம் (Church Center Modal) உடனுக்குடன் திறக்கும்.
              </p>
            </div>
          </div>

          {/* Box 2: Other Ways to Give Card */}
          <div className="bg-[#F4F1E8] border border-[#E0DBCB] text-stone-900 rounded-2xl p-6 sm:p-8 shadow-md flex flex-col justify-between relative overflow-hidden h-full space-y-6">
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none"></div>

            <div className="relative z-10 space-y-4 flex-grow flex flex-col">
              <div className="flex items-center justify-between border-b border-stone-300/80 pb-4">
                <div>
                  <span className="text-xs font-bold text-accent-dark uppercase tracking-widest block">OFFLINE & DIRECT GIVING</span>
                  <h3 className="font-serif text-xl sm:text-2xl font-black text-primary flex items-center gap-2 mt-0.5">
                    <span>வேறு வழிகளில் காணிக்கை செலுத்த</span>
                  </h3>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary bg-stone-200/80 border border-stone-300 px-2.5 py-1 rounded-full flex items-center gap-1.5 shrink-0 shadow-2xs">
                  In-Person / EFT
                </span>
              </div>

              <div className="space-y-4 my-auto py-2">
                {/* Cash & Checks */}
                <div className="bg-white/80 border border-[#E0DBCB] p-4 rounded-xl flex gap-3.5 items-start shadow-2xs">
                  <div className="w-9 h-9 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent-dark shrink-0 mt-0.5">
                    <FileText className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="font-serif font-bold text-primary text-sm sm:text-base">ஞாயிறு ஆராதனைகளில்</h4>
                    <p className="text-xs text-stone-600 leading-relaxed">
                      ஞாயிறு ஆராதனைகளில் ஆலயப் பின்புறம் உள்ள காணிக்கைப் பெட்டிகளில் செக் அல்லது ரொக்கமாகக் காணிக்கை செலுத்தலாம்.
                    </p>
                  </div>
                </div>

                {/* Bank Transfers with Account Details */}
                <div className="bg-white/80 border border-[#E0DBCB] p-4 sm:p-5 rounded-xl space-y-3 shadow-2xs">
                  <div className="flex gap-3.5 items-start">
                    <div className="w-9 h-9 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent-dark shrink-0 mt-0.5">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <h4 className="font-serif font-bold text-primary text-sm sm:text-base">வங்கி நேரடிப் பரிமாற்றம் (Direct Bank Transfer)</h4>
                      <p className="text-xs text-stone-600 leading-relaxed">
                        வங்கி நெட் பேங்கிங் மூலம் நேரடியாகக் காணிக்கை செலுத்த கீழ்க்கண்ட வங்கி விவரங்களைப் பயன்படுத்தவும்:
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#ECE8DF] border border-[#DDD6C8] rounded-lg p-3.5 space-y-2 text-xs text-stone-900 font-mono">
                    <div className="flex justify-between items-center border-b border-stone-300/80 pb-1.5">
                      <span className="text-stone-600 font-sans font-medium">Account Name:</span>
                      <span className="font-bold text-primary tracking-wide">Vaarthai Evangelical Church</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-stone-300/80 pb-1.5">
                      <span className="text-stone-600 font-sans font-medium">BSB:</span>
                      <span className="font-bold text-accent-dark tracking-wider text-sm">064-173</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-stone-600 font-sans font-medium">Account Number:</span>
                      <span className="font-bold text-primary tracking-wider text-sm font-mono">10857732</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 pt-4 border-t border-stone-300/80 mt-auto">
              <p className="text-[11px] text-stone-500 text-center italic">
                * ஏதேனும் உதவி அல்லது வங்கி விவரங்கள் தேவைப்பட்டால் எங்கள் நிதி அலுவலகத்தைத் தொடர்பு கொள்ளவும்.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
