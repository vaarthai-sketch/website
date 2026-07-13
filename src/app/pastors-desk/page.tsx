import React from "react";
import { Calendar as CalendarIcon, User } from "lucide-react";
import { churchConfig } from "@/data/config";
import { Button } from "@/components/Button";
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
        className="relative text-white py-16 md:py-24 text-center overflow-hidden bg-cover bg-[position:-30%_15%] bg-no-repeat bg-[#0F172A]"
        style={{ backgroundImage: "url('/pastor-hero.png')" }}
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white rounded-lg shadow-sm border border-border p-6 md:p-10 mb-8">
            <div className="flex items-center gap-2 text-sm text-accent-dark font-bold mb-4">
              <CalendarIcon className="w-4 h-4" />
              <span>இந்த வார மடல் (This Week's Letter)</span>
            </div>
            
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">
              புதிய வருட வாழ்த்துக்கள் (New Year Message)
            </h2>
            
            <div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg">
              <p className="font-medium text-stone-900">
                கிறிஸ்துவுக்குள் எனக்கு அன்பானவர்களே, இயேசு கிறிஸ்துவின் மிகுந்த இனிய பெயராலே உங்களுக்கு என்னுடைய அன்பான புதிய வருட வாழ்த்துக்கள்.
              </p>
              <p>
                நாங்கள் குடும்பமாக விடுமுறைக்கு தமிழகம் சென்று வந்தது ஆசீர்வாதமாக இருந்தது. பயணங்களில் தேவன் எங்களைப் பாதுகாத்தார்! தேவனுக்கே எல்லாப் புகழும், கனமும், மகிமையும் உண்டாகட்டும்!
              </p>
              <p>
                சிருஷ்டி கர்த்தராகிய தேவன், இந்த உலகத்தையும், அண்ட சராசரங்களையும் படைத்த சர்வ வல்லமையுள்ள தேவன்! அவர் செயல்கள் ஆச்சரியமானவைகள், நம்முடைய மனித சிந்தனைகளால் புரிந்து கொள்ள முடியாதவைகள்! ஒரு பார்வையிலே தேவனை அப்படிப்பட்ட உயர்வான தேவனாக நாம் பார்க்கிற அதே வேளையில், மற்றொரு பார்வையிலே, அதே தேவன் எனக்கும் உங்களுக்கும் மிகவும் நெருக்கமானவராகவும் இருக்கிறார்! நம்முடைய தகப்பன் அவர்! நாம் அவருடைய பிள்ளைகளாக இருக்கிறோம்.
              </p>
              <p>
                இந்த வருடம் தேவன் நமக்கு மிகவும் நெருக்கமானவர் என்ற புரிதல் உங்களுக்கு உண்டாயிருக்கட்டும். நாம் எப்படிப்பட்ட சூழ்நிலைகளை சந்தித்தாலும் அவர் நம்மோடு கூடவே இருக்கிறார் என்ற சத்தியம் உங்களுக்கு பலனை கொடுக்கட்டும்.
              </p>
              <p>
                லூக்கா 4ம் அதிகாரத்தில், இயேசு கிறிஸ்து ஜெப ஆலயத்திற்குச் சென்று, ஏசாயாவின் தீர்க்கதரிசன புத்தகத்தை எடுத்து இந்த வசனங்களை வாசித்தார்:
              </p>
              
              <blockquote className="bg-accent/5 border-l-4 border-accent p-5 rounded-r-lg text-primary italic font-serif my-6">
                <p className="mb-2">
                  “கர்த்தருடைய ஆவியானவர் என்மேலிருக்கிறார்; தரித்திரருக்குச் சுவிசேஷத்தைப் பிரசங்கிக்கும்படி என்னை அபிஷேகம்பண்ணினார்; இருதயம் நொருங்குண்டவர்களைக் குணமாக்கவும், சிறைப்பட்டவர்களுக்கு விடுதலையையும், குருடருக்குப் பார்வையையும் பிரசித்தப்படுத்தவும், நொறுங்குண்டவர்களை விடுதலையாக்கவும், கர்த்தருடைய அநுக்கிரக வருஷத்தைப் பிரசித்தப்படுத்தவும், என்னை அனுப்பினார்.”
                </p>
                <cite className="block text-right font-sans font-bold text-sm text-accent-dark not-italic mt-2">
                  — லூக்கா 4:18-19
                </cite>
              </blockquote>

              <p>
                இயேசு கிறிஸ்துவை உயிரோடு எழுப்பின, அவர் மீது இருந்த, அதே ஆவியானவர் இன்று நம்மோடும் இருக்கிறார்! இயேசு கிறிஸ்து இந்த உலகத்திலே துவங்கி வைத்த காரியங்களை நாமும் செய்யும்படியாக அழைக்கிறார்! நாம் இந்த கர்த்தருடைய அநுக்கிரக வருடத்திலே நாம் தொடர்ந்து ஆசீர்வதிக்கப்படவும், 18ம் வசனத்திலே சொல்லப்பட்ட காரியங்களை நாம் மற்றவர்களுக்குச் செய்து அவர்களை ஆசீர்வதிக்கவும், உங்கள் யாவரையும் வாழ்த்துகிறேன்!
              </p>
              <p className="pt-2 font-medium text-stone-800">
                அன்புடன்,
              </p>
              
              <div className="mt-6 pt-6 border-t border-stone-200 flex items-center gap-4">
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
          
          <div className="text-center mt-12">
            <h3 className="text-xl font-bold text-primary mb-4">Subscribe to our Weekly Newsletter</h3>
            <p className="text-stone-600 mb-6 max-w-md mx-auto">
              Get the Pastor's weekly letter delivered straight to your inbox every Friday morning.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
