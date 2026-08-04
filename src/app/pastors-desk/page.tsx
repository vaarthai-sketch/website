import React from "react";
import { Calendar as CalendarIcon, FileText, ChevronRight, Gift, Snowflake, Leaf } from "lucide-react";
import Link from "next/link";
import { churchConfig } from "@/data/config";
import { NewsletterForm } from "@/components/NewsletterForm";

import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  locale: 'ta',
  path: '/pastors-desk',
  title: "VEC-NL 2026-08 Issue 003 - From the Pastor's Desk | Vaarthai Evangelical Church",
  description: `Weekly newsletter and updates from the Pastor at ${churchConfig.name}.`,
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
              <div className="bg-gradient-to-br from-yellow-50 via-white to-amber-50 rounded-lg shadow-sm border border-amber-200 p-6 md:p-10 mb-8 relative overflow-hidden">
                {/* Decorative Elements */}
                <Leaf className="absolute top-4 right-4 text-amber-200 w-16 h-16 opacity-30" />
                <Leaf className="absolute bottom-10 left-4 text-amber-200 w-24 h-24 opacity-30" />
                
                <div className="flex items-center gap-2 text-sm text-amber-700 font-bold mb-4 relative z-10">
                  <CalendarIcon className="w-4 h-4" />
                  <span>VEC-NL 2026-08 · Issue #003</span>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-amber-900 mb-6 relative z-10 flex items-center gap-2">
                  <Leaf className="w-8 h-8 text-amber-600" />
                  மண்ணுக்கு அடியில் விதை உறங்குவதில்லை
                </h2>
                
                <div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg relative z-10">
                  
                  {/* Wattle Trees Image */}
                  <div className="my-6 rounded-xl overflow-hidden shadow-md border-2 border-amber-100">
                    <img src="/wattle-trees.jpg" alt="வாட்டில் மரங்கள்" className="w-full h-auto object-cover max-h-[500px]" />
                  </div>

                  <h3 className="text-xl font-bold text-amber-800">ஆகஸ்ட் மாதத் தோட்டம்</h3>
                  <p>
                    பிரிஸ்பேனில் ஆகஸ்ட் மாதக் காலைகள் குளிராக இருக்கின்றன. பெரும்பாலான காலைகள் ஒற்றைப் படை எண்களான 5 அல்லது 6 டிகிரி செல்ஷியசில் காணப்படுகின்றன! வெளியே தோட்டத்தைப் பார்த்தால், எல்லாம் முடிந்துபோனதுபோல் தோன்றும். இலைகள் உதிர்ந்துவிட்டன. கிளைகள் வெறுமையாக நிற்கின்றன. மண் இறுகிக் கிடக்கிறது. &quot;இங்கே ஒன்றும் நடக்கவில்லை&quot; என்று நமது கண் சொல்கிறது.
                  </p>
                  <p>
                    ஆனால் கண் சொல்வது முழு உண்மையல்ல.
                  </p>
                  <p>
                    அதே நேரத்தில், அந்த மண்ணுக்கு அடியில் வேர்கள் அமைதியாக நீண்டுகொண்டிருக்கின்றன. கிழங்குகள் பிரிந்து பெருகுகின்றன. கடந்த இலையுதிர் காலத்தில் உருவான மொட்டுகள் மெல்ல மெல்லப் பருத்துக்கொண்டிருக்கின்றன. வாட்டில் மரங்கள் ஏற்கெனவே மஞ்சளாகப் பூக்கத் தொடங்கிவிட்டன.
                  </p>
                  <p>
                    வேலை நடந்துகொண்டுதான் இருக்கிறது. நமக்குத் தெரியவில்லை — அவ்வளவுதான்.
                  </p>

                  <h3 className="text-xl font-bold text-amber-800">குளிரைக் கடந்து அல்ல — குளிரின் வழியாக</h3>
                  <p>
                    இது வெறும் உவமை அல்ல; இது தாவரவியல் உண்மை.
                  </p>
                  <p>
                    கோதுமை, ஆப்பிள், டூலிப், செர்ரி — இவை போன்ற பல தாவரங்கள், ஒரு குறிப்பிட்ட காலம் குளிரை அனுபவிக்காமல் பூக்கவே பூக்காது. அவற்றை எப்போதும் வெதுவெதுப்பாக வைத்திருந்தால், அவை வளரும், பச்சையாக இருக்கும் — ஆனால் பூக்காது. விஞ்ஞானிகள் இதற்கு vernalisation என்று பெயரிட்டிருக்கிறார்கள்.
                  </p>
                  <p>
                    குளிர் என்பது பூப்பதற்குத் தடை அல்ல; அது பூப்பதற்கான முன்நிபந்தனை.
                  </p>
                  <p>
                    அந்தச் செடி குளிரைத் தாண்டிப் பூக்கவில்லை. குளிரின் வழியாகவே பூக்கிறது.
                  </p>

                  <h3 className="text-xl font-bold text-amber-800">தானாய் விளையும் பூமி</h3>
                  <p>
                    இயேசு சொன்ன உவமைகளில் ஒன்று மாற்கு நற்செய்தியில் மட்டுமே காணப்படுகிறது. அது இதுதான்:
                  </p>
                  <blockquote className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg italic font-serif">
                    <p className="whitespace-pre-line leading-relaxed text-stone-700">
                      &quot;ஒரு மனுஷன் நிலத்தில் விதையை விதைத்துவிட்டு, இரவும் பகலும் தூங்கியும் விழித்தும் இருக்கிறான்; அந்த விதை, அவனுக்குத் தெரியாத விதமாக முளைத்து வளருகிறது. பூமியானது தானாய்ப் பயிரை முளைப்பிக்கும்.&quot;
                      <br/>
                      <span className="font-bold text-sm mt-2 block text-right">— மாற்கு 4:26-28</span>
                    </p>
                  </blockquote>
                  <p>
                    இந்த வசனத்தில் &quot;தானாய்&quot; என்று மொழிபெயர்க்கப்பட்ட கிரேக்கச் சொல் αὐτομάτη (automatē). ஆங்கிலத்தில் automatic என்னும் சொல் இதிலிருந்தே பிறந்தது.
                  </p>
                  <p>
                    இந்த உவமையில் விவசாயி என்ன செய்கிறார்? விதைக்கிறார். பிறகு தூங்குகிறார். எழுந்திருக்கிறார். மறுபடியும் தூங்குகிறார்.
                  </p>
                  <p>
                    அவர் பார்த்துக்கொண்டிருப்பதால் விதை முளைப்பதில்லை. அவர் கவலைப்படுவதால் அது வேகமாக வளர்வதுமில்லை. அவருடைய பதற்றம் அந்த வளர்ச்சிக்கு ஒன்றையும் சேர்ப்பதில்லை.
                  </p>
                  <p>
                    வளர்ச்சி நடக்கிறது — ஆனால் அது அவருடைய வேலை அல்ல.
                  </p>

                  <h3 className="text-xl font-bold text-amber-800">மறைவான வேலை — வேதத்தின் சாட்சி</h3>
                  <p>
                    வேதம் முழுவதும் இந்த முறை திரும்பத் திரும்ப வருகிறது.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <strong>யோபு 14:7-9</strong> — &quot;ஒரு மரத்தைக்குறித்தாவது நம்பிக்கையுண்டு; அது வெட்டிப்போடப்பட்டாலும் திரும்பத் தழைக்கும், அதின் இளங்கிளைகள் துளிர்க்கும்; அதின் வேர் தரையிலே பழையதாகி, அதின் அடிக்கட்டை மண்ணிலே செத்தாலும், தண்ணீரின் வாசனையினால் அது துளிர்த்து, இளமரம்போலக் கிளைவிடும்.&quot;
                    </li>
                    <li>
                      <strong>கொலோசெயர் 3:3</strong> — &quot;ஏனென்றால், நீங்கள் மரித்தீர்கள், உங்கள் ஜீவன் கிறிஸ்துவுடனே தேவனுக்குள் மறைந்திருக்கிறது.&quot; இங்கே கிரேக்கச் சொல் κέκρυπται — ஒருமுறை மறைக்கப்பட்டு, இப்போதும் மறைந்தே இருக்கிறது என்று பொருள். மறைவு என்பது குறைபாடு அல்ல; அது ஒரு நிலை.
                    </li>
                    <li>
                      <strong>ஏசாயா 43:19</strong> — &quot;இதோ, நான் புதிய காரியத்தைச் செய்கிறேன்; இப்பொழுதே அது தோன்றும்; நீங்கள் அதை அறியீர்களா? நான் வனாந்தரத்திலே வழியையும், அவாந்தரவெளியிலே ஆறுகளையும் உண்டாக்குவேன்.&quot;
                    </li>
                    <li>
                      <strong>லூக்கா 2:52</strong> — &quot;இயேசுவானவர் ஞானத்திலும், வளர்த்தியிலும், தேவகிருபையிலும், மனுஷர் தயவிலும் அதிகமதிகமாய் விருத்தியடைந்தார்.&quot; நசரேத்தில் முப்பது வருடங்கள். மூன்று வருட ஊழியத்திற்கு முன்பு முப்பது வருட மௌனம். கர்த்தருடைய வாழ்க்கையிலேயே மறைவான காலம் பத்து மடங்கு நீளமானது.
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold text-amber-800">நடுவிலிருக்கிற பருவம்</h3>
                  <p>
                    நம்மில் பலருக்கு இது நன்கு தெரிந்த இடம்.
                  </p>
                  <p>
                    ஆறு மாதங்கள் ஆகிவிட்டன — துக்கம் இன்னும் விலகவில்லை. வருடக்கணக்காக ஜெபித்துவிட்டோம் — பதில் இன்னும் வரவில்லை. திருமணத்தில் குளிர் இன்னும் இருக்கிறது. பிள்ளை இன்னும் தூரமாகவே இருக்கிறது. வேலை இன்னும் கிடைக்கவில்லை. உடல்நலம் இன்னும் திரும்பவில்லை.
                  </p>
                  <p>
                    இந்த இடத்தில் வரும் பெரிய சோதனை இதுதான்: தெரியவில்லை என்பதால் நடக்கவில்லை என்று முடிவு செய்துவிடுவது.
                  </p>
                  <p>
                    கவுன்சலிங் (Counselling) ஊழியத்தில் நான் கண்ட ஒரு அறியப்பட்ட உண்மை உண்டு. மக்கள் பெரும்பாலும் ஆரம்பத்தில் விலகுவதில்லை; முடிவிலும் விலகுவதில்லை. நடுவில்தான் விலகுகிறார்கள் — முதல் நம்பிக்கை தேய்ந்துபோய், வெளியே தெரியும் முன்னேற்றம் நின்றுபோனதுபோல் தோன்றும் அந்தத் தருணத்தில். ஆனால் பெரும்பாலும் அந்தத் தருணம்தான் உள்ளுக்குள் உண்மையான வேலை நடக்கும் தருணம்.
                  </p>
                  <p>
                    தோட்டத்தைப் போலவே.
                  </p>

                  <h3 className="text-xl font-bold text-amber-800">காத்திருத்தல் வேறு; தவிர்த்தல் வேறு</h3>
                  <p>
                    இங்கே ஒரு எச்சரிக்கை அவசியம்.
                  </p>
                  <p>
                    மேலிருந்து பார்க்கும்போது, உறங்கும் விதைக்கும் இறந்த விதைக்கும் வித்தியாசம் தெரியாது. இரண்டும் ஒரேமாதிரிதான் இருக்கும். எனவே நாம் இரண்டையும் பிரித்து அறிய வேண்டும்.
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li><strong>காத்திருத்தல்</strong> — கடவுள் வேலை செய்துகொண்டிருக்கிறார் என்ற நம்பிக்கையில் நிற்பது.</li>
                    <li><strong>தவிர்த்தல்</strong> — கவனிக்காமல் விட்டுவிட்டால் தானாகச் சரியாகிவிடும் என்று எதிர்பார்ப்பது.</li>
                  </ul>
                  <p>
                    சில நேரங்களில் விசுவாசமான பதில் பொறுமை அல்ல — உதவியைப் பெற்றுக் கொள்வது. போதகரை அனுகலாம். மருத்துவர், அல்லது ஆலோசகரை அனுகலாம். அப்படிப்பட்ட தருணங்களில் உங்களுக்குத் தேவை ஒரு பாதுகாப்பான இடம்.
                  </p>
                  <p>
                    &quot;பொறுத்திருங்கள்&quot; என்பது எப்போதும் ஆவிக்குரிய பதில் அல்ல. சில நேரங்களில் அது தப்பித்தல்.
                  </p>
                  <p>
                    நீங்கள் இருப்பது உறக்கமா, அல்லது ஏதோ ஒன்று உண்மையிலேயே இறந்துகொண்டிருக்கிறதா என்று உங்களுக்குத் தெரியவில்லை என்றால் — தயவுசெய்து பேசுங்கள். எங்களிடம் பேசுங்கள். தனியாக முடிவு செய்யவேண்டாம்.
                  </p>

                  <h3 className="text-xl font-bold text-amber-800">நமது சபையும் இதே பருவத்தில்தான்</h3>
                  <p>
                    வார்த்தை சுவிசேஷ சபை இன்னும் இளமையானது. வெளியிலிருந்து பார்ப்பவர்களுக்கு இது மெதுவாகத் தெரியலாம்.
                  </p>
                  <p>
                    ஆனால் வேர்கள் இறங்கிக்கொண்டிருக்கின்றன — யாரும் எண்ணிப் பார்க்க முடியாத இடத்தில்.
                  </p>
                  <p>
                    நாம் அவசரப்பட வேண்டியதில்லை. விதைத்தவரும் நாம் அல்ல; வளர்ப்பவரும் நாம் அல்ல.
                  </p>

                  <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8">
                    <h4 className="font-bold text-amber-800 mb-2">இந்த மாதத்தின் சிந்தனை</h4>
                    <p className="text-stone-700 m-0">
                      இப்போது உங்களுக்குள் — யாருக்கும் தெரியாமல் — என்ன வளர்ந்துகொண்டிருக்கிறது?
                      <br/><br/>
                      இந்த வாரம் ஒரு நாள், அமைதியாக உட்கார்ந்து இதை எழுதிப் பாருங்கள். வெளியே காட்ட வேண்டியதில்லை. கடவுளுக்கும் உங்களுக்கும் இடையில் மட்டும்.
                    </p>
                  </div>

                  <p>
                    ஆகஸ்ட் நமது குளிர்காலத்தின் கடைசி மாதம். செப்டம்பர் ஒன்றாம் தேதி வசந்தம் தொடங்குகிறது.
                  </p>
                  <p>
                    நாம் இருப்பது முடிவில் அல்ல — திருப்பத்தில்.
                  </p>

                  <blockquote className="bg-stone-50 border-l-4 border-stone-300 p-4 rounded-r-lg italic font-serif">
                    <p className="whitespace-pre-line leading-relaxed text-stone-700">
                      &quot;இதோ, மாரிகாலம் சென்றது, மழைபெய்து ஒழிந்தது. பூமியிலே புஷ்பங்கள் காணப்படுகிறது; குருவிகள் பாடுங்காலம் வந்தது, காட்டுப்புறாவின் சத்தம் நமது தேசத்தில் கேட்கப்படுகிறது.&quot;
                      <br/>
                      <span className="font-bold text-sm mt-2 block text-right">— உன்னதப்பாட்டு 2:11-12</span>
                    </p>
                  </blockquote>

                  <p>
                    நம்முடைய தோட்டங்கள் இன்னும் அதைக் காட்டவில்லை. ஆனால் அது ஏற்கெனவே உண்மை. நீங்கள் ஆசீர்வதிக்கப் பட்டவர்கள்!
                  </p>

                  {/* YouTube Embeds */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8 not-prose">
                    <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-xl shadow-md border-2 border-amber-100 bg-white">
                      <iframe 
                        src="https://www.youtube.com/embed/sQufX7mW0nM?start=90" 
                        title="Tamil Song" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                        className="w-full h-full min-h-[250px]"
                      ></iframe>
                    </div>
                    <div className="aspect-w-16 aspect-h-9 w-full overflow-hidden rounded-xl shadow-md border-2 border-amber-100 bg-white">
                      <iframe 
                        src="https://www.youtube.com/embed/Vb1i_FpDRic" 
                        title="English Version" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                        className="w-full h-full min-h-[250px]"
                      ></iframe>
                    </div>
                  </div>

                  <p className="font-medium text-stone-900 mt-6">
                    தேவன் உங்களை ஆசீர்வதிப்பாராக!
                  </p>
                  <p className="pt-2 font-medium text-stone-800">
                    போதகர் வெஸ்லின்
                  </p>
                  
                  <div className="mt-6 pt-6 border-t border-amber-200 flex items-center gap-4 not-prose relative z-10">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-amber-500 shrink-0 shadow-sm bg-white">
                      <img src="/staff-pastor.png" alt="Ps. ஜெயகரன் வெஸ்லின்" className="w-full h-full object-cover object-top" />
                    </div>
                    <div>
                      <p className="font-bold text-amber-800 m-0 text-lg">Ps. ஜெயகரன் வெஸ்லின் (Jeyakaran Weslyn)</p>
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
                      <p className="text-xs text-stone-500">Aug 2026</p>
                    </div>
                  </Link>
                  <Link href="/pastors-desk/archive/jul/issue-003" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 mt-0.5 shrink-0 group-hover:text-accent transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Issue #003</p>
                      <p className="text-xs text-stone-500">Jul 2026</p>
                    </div>
                  </Link>
                  <Link href="/pastors-desk/archive/jul/issue-002" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
                    <ChevronRight className="w-4 h-4 text-stone-400 mt-0.5 shrink-0 group-hover:text-accent transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-700 group-hover:text-primary transition-colors">Issue #002</p>
                      <p className="text-xs text-stone-500">Jul 2026</p>
                    </div>
                  </Link>
                  <Link href="/pastors-desk/archive/jul/issue-001" className="group flex items-start gap-2 p-3 rounded-md hover:bg-stone-50 transition-colors">
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
