"use client";

import React from "react";
import { 
  Heart, ShieldCheck, Mail, Smartphone, ArrowRight, DollarSign, Check, Info, FileText
} from "lucide-react";
import { churchConfig } from "@/data/config";

export default function GivePage() {

  return (
    <div className="pb-20 space-y-16">
      
      {/* 1. Header Banner */}
      <section className="bg-primary text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-3">
          <h1 className="font-serif text-4xl md:text-5xl font-black">ஆன்லைன் காணிக்கை (Giving)</h1>
          <p className="text-stone-300 text-base md:text-lg max-w-xl mx-auto font-light leading-relaxed">
            நமது சபையின் ஊழியங்கள், நற்பணிகள் மற்றும் மிஷனரி திட்டங்களை உங்கள் காணிக்கைகள் மூலம் தாங்குங்கள்.
          </p>
        </div>
      </section>

      {/* 2. Intro & Giving Portal Mockup */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Biblical and Financial Context */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="font-serif text-2xl md:text-3xl font-black text-primary">
              ஆராதனையின் ஒரு பகுதி காணிக்கை
            </h2>
            <p className="text-stone-700 leading-relaxed text-sm">
              நமது சபையின் காணிக்கைகள் மற்றும் கொடைகள் அனைத்தும் தேவனுடைய சுவிசேஷப் பணிகளுக்கும், சிறுவர் மற்றும் இளைஞர் ஊழியங்களுக்கும், ஏழை எளிய மக்களுக்கான நற்பணிகளுக்கும் முழுமையாகப் பயன்படுத்தப்படுகின்றன. உங்கள் தாராள மனப்பான்மைக்காகத் தேவனுக்கு நன்றி செலுத்துகிறோம்.
            </p>

            {/* Quote block */}
            <div className="bg-neutral-light/50 border-l-4 border-accent p-5 rounded-r-lg">
              <p className="text-xs italic text-stone-700 leading-relaxed">
                \"அவனவன் விசனமாயுமல்ல, கட்டாயமாயுமல்ல, தன் மனதில் தீர்மானித்தபடியே கொடுக்கக்கடவன்; உற்சாகமாய்க் கொடுக்கிறவனிடத்தில் தேவன் பிரியமாயிருக்கிறார்.\"
              </p>
              <span className="block text-[10px] font-bold text-accent-dark tracking-widest uppercase mt-1">
                — 2 கொரிந்தியர் 9:7 (ESV)
              </span>
            </div>

            {/* Financial Transparency panel */}
            <div className="border border-border p-6 rounded-lg bg-white space-y-3 shadow-sm">
              <h3 className="font-serif font-bold text-primary flex items-center gap-1.5">
                <ShieldCheck className="w-5 h-5 text-accent" />
                நிதி வெளிப்படைத்தன்மை மற்றும் கணக்குப்பொறுப்பு
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                எங்கள் திருச்சபையின் நிதி மேலாண்மை முழுமையான வெளிப்படைத்தன்மையுடன்Elder குழு மற்றும் வெளிப்புற ஆடிட்டர்களால் கண்காணிக்கப்படுகிறது. வருடாந்திர நிதி அறிக்கைகள் சபை மக்களுக்கு சமர்ப்பிக்கப்படுகின்றன.
              </p>
            </div>
          </div>

          {/* Secure Live Giving Portal Embed */}
          <div className="lg:col-span-5 bg-white border border-border rounded-xl p-4 sm:p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div>
                <h3 className="font-serif text-lg font-bold text-primary flex items-center gap-2">
                  <span>காணிக்கை தளம் (Online Giving)</span>
                </h3>
                <p className="text-[11px] text-stone-500">
                  பாதுகாப்பான மற்றும் நேரடி ஆன்லைன் காணிக்கை தளம்.
                </p>
              </div>
              <span className="text-[9px] font-bold uppercase tracking-widest text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span> நேரலை (Live)
              </span>
            </div>

            <div className="w-full bg-stone-50 rounded-lg overflow-hidden border border-border aspect-[4/5] min-h-[650px] relative">
              <iframe
                src="https://vaarthai.churchcenter.com/giving?embed=true"
                title="Vaarthai Church Online Giving Portal"
                className="w-full h-full border-0 absolute inset-0"
                allow="payment"
              />
            </div>

            <div className="pt-2 text-center">
              <a
                href={churchConfig.links.give}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 text-xs font-bold text-primary hover:text-accent underline transition-colors"
              >
                காணிக்கை செலுத்துவதில் சிரமம் உள்ளதா? தனிப் பக்கத்தில் காணிக்கை தளத்தைத் திறக்க <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Other Ways to Give Section */}
      <section className="bg-neutral-light/50 border-y border-border py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-black text-primary">வேறு வழிகளில் காணிக்கை செலுத்த</h2>
            <p className="text-xs text-stone-500 mt-1">ஆன்லைன் தவிர மாற்று வழிகளிலும் நீங்கள் காணிக்கை செலுத்தலாம்.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Cash & Checks */}
            <div className="bg-white p-6 border border-border rounded-lg shadow-sm flex gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                <FileText className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-stone-900">ஞாயிறு ஆராதனைகளில்</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  ஞாயிறு ஆராதனைகளில் ஆலயப் பின்புறம் உள்ள காணிக்கைப் பெட்டிகளில் செக் அல்லது ரொக்கமாகக் காணிக்கை செலுத்தலாம்.
                </p>
              </div>
            </div>

            {/* Mailing checks */}
            <div className="bg-white p-6 border border-border rounded-lg shadow-sm flex gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-stone-900">அஞ்சல் மூலம் செக் அனுப்ப</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  செக்குகளை எங்கள் ஆலய முகவரிக்கு அஞ்சல் மூலம் அனுப்பி வைக்கலாம்: <br />
                  <strong>Vaarthai Evangelical Church, Attn: Finance, {churchConfig.contact.address.street}, {churchConfig.contact.address.city}, {churchConfig.contact.address.state} {churchConfig.contact.address.zip}</strong>
                </p>
              </div>
            </div>

            {/* Bank Transfers / Text */}
            <div className="bg-white p-6 border border-border rounded-lg shadow-sm flex gap-4">
              <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent shrink-0">
                <Smartphone className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif font-bold text-stone-900">வங்கி நேரடிப் பரிமாற்றம்</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  வங்கி நெட் பேங்கிங் மூலம் நேரடியாகக் காணிக்கை செலுத்த எங்களது நிதி அலுவலகத்தைத் தொடர்பு கொண்டு விவரங்களைப் பெறவும்.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Giving FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-1">
          <h2 className="font-serif text-2xl md:text-3xl font-black text-primary">காணிக்கை பற்றிய சந்தேகங்கள் (FAQ)</h2>
          <p className="text-xs text-stone-500">காணிக்கை மற்றும் வரிவிலக்கு சான்றிதழ் தொடர்பான கேள்விகள்.</p>
        </div>

        <div className="space-y-4">
          <div className="border border-border p-5 rounded-lg bg-white space-y-2">
            <h3 className="font-serif font-bold text-stone-900">எனது காணிக்கைகளுக்கு வரிவிலக்கு சான்றிதழ் கிடைக்குமா?</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              ஆம். எங்களது சபை ஒரு பதிவு செய்யப்பட்ட அறக்கட்டளை ஆகும். வருடாந்திரக் காணிக்கை விவரங்களின் அடிப்படையில் ஒவ்வொரு ஆண்டும் ஜனவரி மாதத்தில் வரிவிலக்கு சான்றிதழ்கள் வழங்கப்படும்.
            </p>
          </div>
          <div className="border border-border p-5 rounded-lg bg-white space-y-2">
            <h3 className="font-serif font-bold text-stone-900">ஆன்லைன் காணிக்கைச் செலுத்தும்போது கூடுதல் கட்டணம் பிடிக்கப்படுமா?</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              ஆன்லைன் கார்டு பரிவர்த்தனைகளுக்கு 2% முதல் 3% வரை கார்டு நிறுவனங்களால் கட்டணம் வசூலிக்கப்படலாம். அத்தகைய கட்டணங்களைத் தவிர்க்க நீங்கள் நெட் பேங்கிங் அல்லது நேரடியாக ஆலயத்தில் காணிக்கைச் செலுத்தலாம்.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
