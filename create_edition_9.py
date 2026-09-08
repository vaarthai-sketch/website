# -*- coding: utf-8 -*-
import os
import re

def create_edition(is_en=False):
    prefix = "src/app/en" if is_en else "src/app"
    page_path = f"{prefix}/pastors-desk/page.tsx"
    
    with open(page_path, "r", encoding="utf-8") as f:
        old_content = f.read()

    # Extract sidebar
    sidebar_match = re.search(r"(<aside.*?</aside>)", old_content, re.DOTALL)
    sidebar = sidebar_match.group(1) if sidebar_match else ""

    # Generate new content
    if is_en:
        new_content = f"""import React from "react";
import {{ Calendar as CalendarIcon, FileText, ChevronRight, Leaf, Globe, Droplet }} from "lucide-react";
import Link from "next/link";
import {{ NewsletterForm }} from "@/components/NewsletterForm";
import {{ buildMetadata }} from "@/lib/seo";

export const metadata = buildMetadata({{
  locale: "en",
  title: "VEC-NL 2026-09 Edition 9 - Pastor's Desk",
  description: "Wounds We Cannot See",
  path: "/en/pastors-desk",
  image: "/pastor-desk-hero.jpg"
}});

export default function PastorsDeskPage() {{
  return (
    <main className="min-h-screen bg-stone-50 py-12">
      <section 
        className="relative text-white py-16 md:py-24 text-center overflow-hidden bg-cover bg-center bg-no-repeat bg-[#0F172A]"
        style={{{{ backgroundImage: "url('/pastor-desk-hero.jpg')" }}}}
      >
        <div className="absolute inset-0 bg-[#0F172A]/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-[#0F172A]/30"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center justify-center gap-2 mb-6">
            <span className="h-px w-8 bg-accent/30"></span>
            <span className="text-accent font-bold tracking-widest uppercase text-sm flex items-center gap-2">
              <FileText className="w-4 h-4" />
              FROM THE PASTOR'S DESK
            </span>
            <span className="h-px w-8 bg-accent/30"></span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Wounds We Cannot See
          </h1>
          <div className="flex items-center justify-center gap-4 text-sm font-medium text-stone-300 mt-8">
            <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">VEC-NL • Edition #009</span>
            <span className="flex items-center gap-1"><CalendarIcon className="w-4 h-4 text-accent" /> September 2026</span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          <article className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
              <div className="p-8 md:p-12 prose prose-stone max-w-none prose-p:leading-relaxed prose-headings:font-serif prose-headings:text-primary">
                
                <p>It is hard to believe that this September 11 marks 25 years since the attacks that shook the world. Writing in New York Magazine, journalist Lukas I. Alpert shares how an email from a former colleague made him reflect on his own life. Both had worked at Ground Zero. Years later, both were diagnosed with thyroid cancer. His friend’s suspicion that the illness might be linked to the toxic air they had breathed there made Alpert realise that the attacks might have affected him in ways he had never recognised.</p>

                <p>The headlines had moved on to other events. But the suffering continued.</p>

                <p>Similarly, people around us may be carrying wounds we cannot see. Behind a smile may be a loss that still aches, fear about an illness, or a family struggle they cannot share with anyone.</p>

                <p><strong>Do not assume that a wound has healed simply because time has passed.</strong></p>

                <div className="bg-stone-50 border-l-4 border-accent p-6 rounded-r-lg my-8 shadow-sm">
                  <p className="italic text-stone-600 mb-2 font-medium">
                    “He heals the brokenhearted and binds up their wounds.”
                  </p>
                  <p className="text-sm font-bold text-accent uppercase tracking-widest">— Psalm 147:3</p>
                </div>

                <p>God sees the pain others overlook. We do not need to hide our hurt from Him or pretend we have recovered from everything. We can come to Him with our broken hearts.</p>

                <p>As His church, we are called to reflect that same love and care. We may not have answers to every question. But when we recognise those who are hurting, we can listen, pray, and continue to stand beside them. Even a caring question—“How are you doing now? Are you managing?”—can open the way for someone to share their burden.</p>

                <p>This week, reach out to someone others may have forgotten to check on. Let them know they are still remembered and loved.</p>

                <p><strong>Lord, help us recognise those who carry their pain quietly. Teach us to listen patiently and stand beside them with steadfast love. Amen.</strong></p>

                <h3 className="text-xl md:text-2xl font-bold text-stone-900 mt-12 mb-6 border-b border-stone-200 pb-2">Worship Song</h3>
                <div className="my-8 aspect-video w-full rounded-xl overflow-hidden shadow-md border-2 border-stone-200 bg-stone-100">
                  <iframe 
                    src="https://www.youtube.com/embed/RNt8Lap9siU" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full border-0"
                  ></iframe>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-stone-900 mt-12 mb-6 border-b border-stone-200 pb-2">ANNOUNCEMENTS</h3>
                <div className="space-y-6">
                  
                  <div className="flex gap-4 p-4 rounded-lg bg-stone-50 border border-stone-100">
                    <Droplet className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="text-stone-700 font-bold mb-1">Baptism in October</p>
                      <p className="text-stone-600 text-sm">We are preparing for baptisms in October. If you would like to be baptised, please register with our church secretary, Mr. Devairakkam Paul. In the coming weeks, we will hold preparation classes exploring the biblical meaning and significance of baptism.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 p-4 rounded-lg bg-stone-50 border border-stone-100">
                    <FileText className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="text-stone-700 font-bold mb-1">A Listening Ear</p>
                      <p className="text-stone-600 text-sm">As this week’s newsletter reminds us, some wounds remain unseen. If you are carrying emotional pain or facing personal struggles, you do not have to walk through them alone. Our pastor, Ps Weslyn, is also a clinical counsellor. If you would like to speak with him, you are warmly welcome to contact him directly to arrange an appointment.</p>
                      <p className="text-stone-600 text-sm mt-2 font-medium">Email: <a href="mailto:weslyn@vaarthai.org.au" className="text-accent hover:underline">weslyn@vaarthai.org.au</a> | Phone: 0485 07 77 11</p>
                    </div>
                  </div>
                  
                </div>

              </div>
            </div>
          </article>
          
          {sidebar}
          
        </div>
      </section>
    </main>
  );
}}
"""
    else:
        new_content = f"""import React from "react";
import {{ Calendar as CalendarIcon, FileText, ChevronRight, Leaf, Globe, Droplet }} from "lucide-react";
import Link from "next/link";
import {{ NewsletterForm }} from "@/components/NewsletterForm";
import {{ buildMetadata }} from "@/lib/seo";

export const metadata = buildMetadata({{
  locale: "ta",
  title: "VEC-NL 2026-09 Edition 9 - போதகர் மேசையிலிருந்து",
  description: "கண்ணுக்குத் தெரியாத காயங்கள் (Wounds We Cannot See)",
  path: "/pastors-desk",
  image: "/pastor-desk-hero.jpg"
}});

export default function PastorsDeskPage() {{
  return (
    <main className="min-h-screen bg-stone-50 py-12">
      <section 
        className="relative text-white py-16 md:py-24 text-center overflow-hidden bg-cover bg-center bg-no-repeat bg-[#0F172A]"
        style={{{{ backgroundImage: "url('/pastor-desk-hero.jpg')" }}}}
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
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            கண்ணுக்குத் தெரியாத காயங்கள்
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 font-serif italic mb-8 max-w-2xl mx-auto">
            Wounds We Cannot See
          </p>
          <div className="flex items-center justify-center gap-4 text-sm font-medium text-stone-300">
            <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">VEC-NL • Edition #009</span>
            <span className="flex items-center gap-1"><CalendarIcon className="w-4 h-4 text-accent" /> செப்டம்பர் 2026</span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          <article className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-sm border border-stone-200 overflow-hidden">
              <div className="p-8 md:p-12 prose prose-stone max-w-none prose-p:leading-relaxed prose-headings:font-serif prose-headings:text-primary">
                
                <p>உலகையே உலுக்கிய செப்டம்பர் 11 தாக்குதல்கள் நடந்து, இந்த செப்டம்பர் 11 அன்று 25 ஆண்டுகள் நிறைவடைகின்றன என்பதை நம்பவே கடினமாக இருக்கிறது. நியூயார்க் இதழில் எழுதிய பத்திரிகையாளர் லூகஸ் ஐ. ஆல்பர்ட், முன்னாள் சக ஊழியர் ஒருவரின் மின்னஞ்சல் தனது வாழ்க்கையைத் திரும்பிப் பார்க்க வைத்ததைப் பகிர்ந்துகொள்கிறார். இருவரும் தாக்குதல் நடந்த இடத்தில் பணியாற்றியவர்கள். பல ஆண்டுகளுக்குப் பிறகு, இருவருக்கும் தைராய்டு புற்றுநோய் இருப்பது கண்டறியப்பட்டது. அங்கு சுவாசித்த நச்சுக் காற்றுக்கும் நோய்க்கும் தொடர்பு இருக்கலாம் என்ற நண்பரின் சந்தேகம், அந்தத் தாக்குதல் தன்னையும் அறியாத விதத்தில் பாதித்திருக்கக்கூடும் என்பதை அவருக்கு உணர்த்தியது.</p>

                <p>செய்திகள் வேறு நிகழ்வுகளுக்குச் சென்றுவிட்டன. ஆனால், வேதனை தொடர்ந்துகொண்டிருந்தது.</p>

                <p>அதைப் போலவே நம்மைச் சுற்றியிருப்பவர்களும் நாம் காணாத காயங்களைச் சுமந்துகொண்டிருக்கலாம். ஒரு புன்னகைக்குப் பின்னால் இன்னும் வலிக்கும் இழப்பு இருக்கலாம். நோயைப் பற்றிய பயம் இருக்கலாம். யாரிடமும் சொல்ல முடியாத குடும்பப் போராட்டம் இருக்கலாம்.</p>

                <p><strong>காலம் கடந்துவிட்டது என்பதால், காயம் ஆறிவிட்டது என்று நினைக்க வேண்டாம்.</strong></p>

                <div className="bg-stone-50 border-l-4 border-accent p-6 rounded-r-lg my-8 shadow-sm">
                  <p className="italic text-stone-600 mb-2 font-medium">
                    “இருதயம் நொறுங்குண்டவர்களைக் குணமாக்குகிறார், அவர்களுடைய காயங்களைக் கட்டுகிறார்.”
                  </p>
                  <p className="text-sm font-bold text-accent uppercase tracking-widest">— சங்கீதம் 147:3</p>
                </div>

                <p>மற்றவர்கள் கவனிக்காத வேதனையையும் தேவன் காண்கிறார். நம் வலியை அவரிடம் மறைக்க வேண்டியதில்லை. எல்லாவற்றிலிருந்தும் மீண்டுவிட்டதுபோல் நடிக்கவும் வேண்டியதில்லை. நொறுங்கிய இருதயத்தோடும் அவரை அணுகலாம்.</p>

                <p>அவருடைய சபையாக, நாமும் அந்த அன்பையும் அக்கறையையும் வெளிப்படுத்த அழைக்கப்பட்டிருக்கிறோம். எல்லாக் கேள்விகளுக்கும் நம்மிடம் பதில் இல்லாமல் இருக்கலாம். ஆனால், நாம் அப்படிப்பட்டவர்களை அடையாளம் காணும்போது, அவர்களுக்குச் செவிகொடுக்கலாம்; ஜெபிக்கலாம்; தொடர்ந்து துணையாக இருக்கலாம். “இப்போது எப்படி இருக்கிறீர்கள்? சமாளிக்க முடிகிறதா?” என்ற அன்பான விசாரிப்புகூட, ஒருவர் தன் பாரத்தைப் பகிர்ந்துகொள்ள வழிகளைத் திறந்து கொடுக்கும்.</p>

                <p>இந்த வாரம், மற்றவர்கள் விசாரிக்க மறந்துபோன ஒருவரைத் தொடர்புகொள்ளுங்கள். அவர்கள் இன்னும் நினைவுகூரப்படுகிறார்கள், அன்புகூரப்படுகிறார்கள் என்பதை உணர்த்துங்கள்.</p>

                <p><strong>ஆண்டவரே, அமைதியாக வேதனையைச் சுமப்பவர்களை அடையாளம் காண எங்களுக்கு உதவும். பொறுமையோடு செவிகொடுக்கவும், மாறாத அன்போடு அவர்களுக்குத் துணையாக இருக்கவும் எங்களுக்குக் கற்றுத்தாரும். ஆமென்.</strong></p>

                <h3 className="text-xl md:text-2xl font-bold text-stone-900 mt-12 mb-6 border-b border-stone-200 pb-2">Worship Song</h3>
                <div className="my-8 aspect-video w-full rounded-xl overflow-hidden shadow-md border-2 border-stone-200 bg-stone-100">
                  <iframe 
                    src="https://www.youtube.com/embed/RNt8Lap9siU" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    className="w-full h-full border-0"
                  ></iframe>
                </div>

                <h3 className="text-xl md:text-2xl font-bold text-stone-900 mt-12 mb-6 border-b border-stone-200 pb-2">அறிவிப்புகள் / ANNOUNCEMENTS</h3>
                <div className="space-y-6">
                  
                  <div className="flex gap-4 p-4 rounded-lg bg-stone-50 border border-stone-100">
                    <Droplet className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="text-stone-700 font-bold mb-1">அக்டோபர் மாதத்தில் ஞானஸ்நானம் / Baptism in October</p>
                      <p className="text-stone-600 text-sm">வரவிருக்கும் அக்டோபர் மாதத்தில் ஞானஸ்நான ஆராதனை நடைபெற உள்ளது. ஞானஸ்நானம் எடுக்க விரும்புகிறவர்கள், தயவுசெய்து நம்முடைய சபை செயலாளர் திரு. தேவையிரக்கம் பால் அவர்களிடம் பதிவு செய்யுமாறு கேட்டுக்கொள்கிறோம். ஞானஸ்நானத்தின் வேதாகம அர்த்தத்தையும் முக்கியத்துவத்தையும் விளக்கும் ஆயத்த வகுப்புகள் இனி வரும் வாரங்களில் நடைபெறும்.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 p-4 rounded-lg bg-stone-50 border border-stone-100">
                    <FileText className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <p className="text-stone-700 font-bold mb-1">A Listening Ear</p>
                      <p className="text-stone-600 text-sm">As this week’s newsletter reminds us, some wounds remain unseen. If you are carrying emotional pain or facing personal struggles, you do not have to walk through them alone. Our pastor, Ps Weslyn, is also a clinical counsellor. If you would like to speak with him, you are warmly welcome to contact him directly to arrange an appointment.</p>
                      <p className="text-stone-600 text-sm mt-2 font-medium">Email: <a href="mailto:weslyn@vaarthai.org.au" className="text-accent hover:underline">weslyn@vaarthai.org.au</a> | Phone: 0485 07 77 11</p>
                    </div>
                  </div>
                  
                </div>

              </div>
            </div>
          </article>
          
          {sidebar}
          
        </div>
      </section>
    </main>
  );
}}
"""
    # Archive Edition 8
    archive_dir = f"{prefix}/pastors-desk/archive/september/edition-8"
    os.makedirs(archive_dir, exist_ok=True)
    os.rename(page_path, f"{archive_dir}/page.tsx")

    # Write Edition 9
    with open(page_path, "w", encoding="utf-8") as f:
        f.write(new_content)

create_edition(is_en=False)
create_edition(is_en=True)
print("done")
