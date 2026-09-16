# -*- coding: utf-8 -*-
import os

tamil_html = """
<div className="my-6">
  <div className="rounded-xl overflow-hidden shadow-md border-2 border-stone-200 bg-white">
    <img src="/edition-11-joe-marino.jpg" alt="Photograph: Joe Marino" className="w-full h-auto object-cover max-h-[500px]" />
  </div>
  <p className="text-right text-xs text-stone-400 mt-2 italic">
    Photograph: Joe Marino
  </p>
</div>

<p className="mb-4">இந்த வாரம் உலகின் கவனத்தை ஈர்த்த ஒரு முக்கிய அறிவிப்பு வெளியானது. விண்வெளியில் செயல்படக்கூடிய ஆயுதங்களை அமெரிக்கா நிலைநிறுத்தியிருப்பதாக அந்நாட்டின் விமானப்படைச் செயலாளர் முதன்முறையாக வெளிப்படையாக அறிவித்தார். அந்த ஆயுதங்கள் என்ன, அவை எவ்வாறு செயல்படுகின்றன என்ற விவரங்கள் வெளியிடப்படவில்லை. ஆனால் பூமியிலுள்ள தேசங்களின் போட்டியும் பதற்றமும் விண்வெளிவரை சென்றுவிட்டதா என்ற கேள்வியை இது எழுப்பியுள்ளது.</p>

<p className="mb-4">ஒருகாலத்தில் விண்வெளி மனிதனுடைய ஆச்சரியம், அறிவியல் ஆராய்ச்சி மற்றும் புதிய கண்டுபிடிப்புகளின் அடையாளமாக இருந்தது. இன்று அது பாதுகாப்பு, அதிகாரம் மற்றும் ஆயுதப் போட்டியைப் பற்றிய உரையாடலின் ஒரு பகுதியாக மாறியிருக்கிறது.</p>

<p className="mb-4 font-bold text-stone-900 text-lg">மனிதன் வானங்களை எட்டிவிட்டான்; ஆனால் மனித இதயம் இன்னும் சமாதானத்தை அடையவில்லையா?</p>

<p className="mb-4">“வானங்கள் தேவனுடைய மகிமையை வெளிப்படுத்துகிறது; ஆகாயவிரிவு அவருடைய கரங்களின் கிரியையை அறிவிக்கிறது” என்று சங்கீதம் 19:1 கூறுகிறது. தாவீது வானங்களைப் பார்த்தபோது, தேவனுடைய மகிமையைக் கண்டார். ஆனால் மனிதன் அதே வானங்களைப் பார்க்கும்போது, அங்கே தனது அதிகாரத்தை எவ்வாறு நிலைநாட்டலாம் என்றும், எதிரிகளிடமிருந்து எவ்வாறு தன்னைப் பாதுகாத்துக்கொள்ளலாம் என்றும் சிந்திக்கத் தொடங்கியிருக்கிறான்.</p>

<p className="mb-4">தேவன் தமது மகிமையை வெளிப்படுத்திய இடத்திற்குக்கூட மனிதன் தனது பயத்தையும் பகையையும் எடுத்துச் செல்கிறான். வானங்கள் மாறவில்லை; மனித இதயம்தான் மாற வேண்டியுள்ளது.</p>

<p className="mb-4">மனிதகுலம் அறிவியலிலும் தொழில்நுட்பத்திலும் நம்பமுடியாத அளவிற்கு முன்னேறியுள்ளது. ஆனால் அறிவியல் வளர்ச்சி நமது சுயநலம், பெருமை, பயம் மற்றும் அதிகார ஆசையைத் தானாக மாற்றிவிடுவதில்லை.</p>

<p className="mb-4">“உங்களுக்குள்ளே யுத்தங்களும் சண்டைகளும் எதினாலே வருகிறது? உங்கள் அவயவங்களில் போர்செய்கிற இச்சைகளினாலல்லவா?” என்று யாக்கோபு 4:1 கேட்கிறது. வேதாகமம் யுத்தத்தை தேசங்களுக்கிடையிலான ஒரு பிரச்சினையாக மட்டும் பார்க்கவில்லை; அதன் வேர்கள் மனித இதயத்திற்குள்ளும் இருப்பதாகக் காண்பிக்கிறது.</p>

<p className="mb-4">தொழில்நுட்பம், அதை இயக்குகிற மனிதனுடைய இதயத்தில் இருப்பதையே பெரிதாக்குகிறது. அன்புள்ள இதயத்தில் அது உயிர்களைக் காப்பாற்றும். பயமும் பகையும் நிறைந்த இதயத்தில் அதே தொழில்நுட்பம் அழிவின் கருவியாக மாறக்கூடும்.</p>

<p className="mb-4 font-bold text-stone-900 text-lg">புதிய தொழில்நுட்பம் மனிதனுக்குப் புதிய திறன்களைக் கொடுக்கலாம்; ஆனால் புதிய இருதயத்தைத் தர இயேசு கிறிஸ்துவால் மட்டுமே முடியும்.</p>

<p className="mb-4">அதிகமான வல்லமையும் பாதுகாப்பும் இருந்தால் சமாதானம் கிடைக்கும் என்று உலகம் நம்புகிறது. தேசங்களுக்குப் பாதுகாப்பு தேவை என்பதையும், தலைவர்கள் சிக்கலான முடிவுகளை எடுக்க வேண்டியிருக்கிறது என்பதையும் நாம் மறுப்பதில்லை. ஆனால் ஆயுதங்கள் சில தாக்குதல்களைத் தடுக்கலாம்; மனித இதயத்திலுள்ள பகையை அவைகளால் அகற்ற முடியாது.</p>

<p className="mb-4">அதனால்தான் இயேசு,</p>

<blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700 mb-6">
  <p>“சமாதானத்தை உங்களுக்கு வைத்துப்போகிறேன், என்னுடைய சமாதானத்தையே உங்களுக்குக் கொடுக்கிறேன்; உலகம் கொடுக்கிறபிரகாரம் நான் உங்களுக்குக் கொடுக்கிறதில்லை. உங்கள் இருதயம் கலங்காமலும் பயப்படாமலும் இருப்பதாக” என்றார்.</p>
  <p className="mt-2 text-right text-sm">— யோவான் 14:27</p>
</blockquote>

<p className="mb-4">இயேசு தரும் சமாதானம் எந்தப் பிரச்சினையும் இல்லாத வாழ்க்கை என்று பொருளல்ல. அது தேவனுடன் ஒப்புரவாக்கப்பட்ட உறவிலிருந்து பிறக்கும் சமாதானம். அது நமது பயத்தை ஆளுகிறது, கோபத்தைத் தணிக்கிறது, பகையை மன்னிப்பாக மாற்றுகிறது. அதனால்தான் எபேசியர் 2:14, “அவரே நம்முடைய சமாதானமாயிருக்கிறார்” என்று கூறுகிறது.</p>

<p className="mb-4 font-bold text-stone-900 text-lg">சமாதானம் என்பது ஒரு கொள்கை மட்டுமல்ல; அது ஒரு நபர்—இயேசு கிறிஸ்து.</p>

<p className="mb-4">தேவனுடைய ராஜ்யத்தின் எதிர்காலத்தைப் பற்றி ஏசாயா ஒரு அழகான காட்சியைத் தருகிறார்:</p>

<blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700 mb-6">
  <p>“அவர்கள் தங்கள் பட்டயங்களை மண்வெட்டிகளாகவும், தங்கள் ஈட்டிகளை அரிவாள்களாகவும் அடிப்பார்கள்; ஒரு ஜாதிக்கு விரோதமாய் மறுஜாதி பட்டயம் எடுப்பதில்லை; இனி அவர்கள் யுத்தத்தைக் கற்பதுமில்லை.”</p>
  <p className="mt-2 text-right text-sm">— ஏசாயா 2:4</p>
</blockquote>

<p className="mb-4">பட்டயம் மண்வெட்டியாக மாறுகிறது. அழிப்பதற்குப் பயன்படுத்தப்பட்டது, வளர்ப்பதற்குப் பயன்படுத்தப்படுகிறது. மரணத்தை ஏற்படுத்திய கருவி, உயிரை வளர்க்கும் கருவியாக மாறுகிறது. இதுதான் கிறிஸ்துவின் ராஜ்யம் கொண்டுவரும் மாற்றம்.</p>

<p className="mb-4">விண்வெளியில் தேசங்கள் என்ன செய்கின்றன என்பதை நம்மால் தீர்மானிக்க முடியாது. ஆனால் நமது வீட்டிலும், சபையிலும், உறவுகளிலும் சமாதானத்தை வளர்ப்பதற்கு நாம் தீர்மானிக்க முடியும்.</p>

<p className="mb-4">“சமாதானம்பண்ணுகிறவர்கள் பாக்கியவான்கள்” என்று இயேசு கூறினார் (மத்தேயு 5:9). சமாதானம் செய்கிறவர்கள் பிரச்சினைகளைத் தவிர்ப்பவர்கள் அல்ல. அவர்கள் உண்மையை அன்புடன் பேசுகிறார்கள்; மன்னிக்க முன்வருகிறார்கள்; உடைந்த உறவுகளைச் சரிசெய்ய முயலுகிறார்கள்.</p>

<p className="mb-4">எனவே, தேசங்களுக்கிடையே சமாதானம் வேண்டும் என்று ஜெபிப்பதற்கு முன்பு, நம்மையே ஒரு கேள்வி கேட்டுக்கொள்வோம்:</p>

<p className="font-bold text-lg text-center text-stone-800 border-y border-stone-200 py-4 my-6">நான் யாருடன் சமாதானம் செய்ய வேண்டும்?</p>

<p className="mb-4">ஒருவரை அழைக்க வேண்டுமா? மன்னிப்புக் கேட்க வேண்டுமா? நீண்ட நாட்களாக வைத்திருக்கும் கோபத்தை விட்டுவிட வேண்டுமா? உடைந்துபோன உறவைச் சரிசெய்ய முதல் அடியை எடுக்க வேண்டுமா?</p>

<p className="mb-4">மனிதன் வானங்களை எட்டிவிட்டான்; ஆனால் சமாதானத்திற்கான வழியை இன்னும் தேடிக்கொண்டிருக்கிறான். இயேசு அந்த வழியை நமக்குக் காண்பித்தவர் மட்டுமல்ல—அவரே நமது சமாதானமாக வந்தார்.</p>

<p className="mb-4">உலகம் விண்வெளியில் ஆயுதங்களை வைக்கும்போது, சபை பூமியில் சமாதானத்தின் விதைகளை விதைக்கட்டும்.</p>

<h3 className="text-xl md:text-2xl font-bold text-stone-900 mt-10 mb-4 border-b border-stone-200 pb-2">ஜெபக் குறிப்புகள் • PRAYER POINTS</h3>
<ul className="list-disc pl-6 space-y-2 text-stone-700 mb-8">
  <li>உலகத் தலைவர்கள் ஞானத்துடனும் பொறுப்புடனும் செயல்படும்படி.</li>
  <li>விண்வெளி புதிய யுத்தக்களமாக மாறாமல், மனிதகுலத்தின் நன்மைக்காகப் பயன்படுத்தப்படும்படி.</li>
  <li>யுத்தம் மற்றும் அரசியல் பதற்றத்தால் பாதிக்கப்பட்ட மக்களுக்குப் பாதுகாப்பும் ஆறுதலும் கிடைக்கும்படி.</li>
  <li>நமது குடும்பங்கள், சபை மற்றும் சமுதாயத்தில் உடைந்த உறவுகள் சீர்படுத்தப்படும்படி.</li>
  <li>நாம் சமாதானத்தைப் பற்றிப் பேசுகிறவர்களாக மட்டுமல்லாமல், சமாதானம் செய்கிறவர்களாகவும் இருக்கும்படி.</li>
</ul>

<h3 className="text-xl md:text-2xl font-bold text-stone-900 mt-10 mb-4 border-b border-stone-200 pb-2">இறுதி ஜெபம்</h3>
<p className="mb-4">சமாதானத்தின் தேவனே, வானங்களும் பூமியும் உம்முடையவை. உலகத் தலைவர்களுக்கு ஞானத்தையும் பொறுப்புணர்வையும் தாரும். யுத்தங்களாலும் அச்சுறுத்தல்களாலும் பாதிக்கப்பட்ட மக்களைப் பாதுகாத்தருளும்.</p>

<p className="mb-4">ஆண்டவராகிய இயேசுவே, நீரே எங்கள் சமாதானம். எங்கள் இதயங்களிலுள்ள பெருமை, கோபம், பயம் மற்றும் பகையை அகற்றும். எங்களைச் சமாதானத்தைப் பேசுகிறவர்களாக மட்டுமல்லாமல், சமாதானத்தை உருவாக்குகிறவர்களாகவும் மாற்றும்.</p>

<p className="mb-4">எங்கள் வீடுகளிலும், சபையிலும், சமுதாயத்திலும் உமது சமாதானத்தை விதைக்க எங்களைப் பயன்படுத்தும். எங்கள் நம்பிக்கை மனித வல்லமையில் அல்ல; சமாதானப் பிரபுவாகிய உம்மிலேயே இருக்கச் செய்யும்.</p>

<p className="mb-8">இயேசுவின் நாமத்தில், ஆமென்.</p>

<div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl mt-8 mb-8 shadow-md border-2 border-stone-200">
  <iframe 
    className="absolute top-0 left-0 w-full h-full" 
    src="https://www.youtube.com/embed/2xoqMtOyiR8" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen>
  </iframe>
</div>
"""

english_html = """
<div className="my-6">
  <div className="rounded-xl overflow-hidden shadow-md border-2 border-stone-200 bg-white">
    <img src="/edition-11-joe-marino.jpg" alt="Photograph: Joe Marino" className="w-full h-auto object-cover max-h-[500px]" />
  </div>
  <p className="text-right text-xs text-stone-400 mt-2 italic">
    Photograph: Joe Marino
  </p>
</div>

<p className="mb-4">This week, a significant announcement captured international attention. The United States publicly confirmed for the first time that it has deployed weapons capable of operating in space. The announcement described them as “on-orbit space control weapons,” but did not disclose what the weapons are or how they operate. It has nevertheless raised an important question: Have the competition and tensions among nations on Earth now extended into space?</p>

<p className="mb-4">Space once represented humanity’s wonder, scientific exploration and desire to discover the unknown. Today, it is increasingly becoming part of conversations about defence, power and military competition.</p>

<p className="mb-4 font-bold text-stone-900 text-lg">Humanity has reached the heavens—but has the human heart found peace?</p>

<p className="mb-4">Psalm 19:1 declares, “The heavens declare the glory of God; and the firmament shows His handiwork.” When David looked at the heavens, he saw the glory of God. Yet when humanity looks at those same heavens, we can begin to ask how we might establish our power there or defend ourselves against our enemies.</p>

<p className="mb-4">Even into the place where God displays His glory, humanity carries its fears and conflicts. The heavens have not changed; it is the human heart that needs to change.</p>

<p className="mb-4">Humanity has made extraordinary progress in science and technology. Yet scientific advancement does not automatically remove selfishness, pride, fear or the desire for power.</p>

<p className="mb-4">James 4:1 asks, “Where do wars and fights come from among you? Do they not come from your desires for pleasure that war in your members?” The Bible does not treat war merely as a problem between nations; it also reveals its roots within the human heart.</p>

<p className="mb-4">Technology magnifies what is already present within the hearts of those who use it. In loving hands, it can preserve life. In hearts governed by fear and hostility, the same technology can become an instrument of destruction.</p>

<p className="mb-4 font-bold text-stone-900 text-lg">New technology may give humanity new abilities, but only Jesus Christ can give us a new heart.</p>

<p className="mb-4">The world often believes that peace can be secured through greater power and stronger defences. We do not deny that nations require protection or that leaders must make complex decisions. Weapons may deter certain attacks, but they cannot remove hostility from the human heart.</p>

<p className="mb-4">This is why Jesus said:</p>

<blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700 mb-6">
  <p>“Peace I leave with you, My peace I give to you; not as the world gives do I give to you. Let not your heart be troubled, neither let it be afraid.”</p>
  <p className="mt-2 text-right text-sm">— John 14:27</p>
</blockquote>

<p className="mb-4">The peace Jesus gives does not mean a life without difficulties. It is born from being reconciled to God. His peace governs our fears, quietens our anger and transforms hostility into forgiveness. This is why Ephesians 2:14 says, “For He Himself is our peace.”</p>

<p className="mb-4 font-bold text-stone-900 text-lg">Peace is not merely a policy or an idea; peace is a Person—Jesus Christ.</p>

<p className="mb-4">The prophet Isaiah presents a beautiful picture of the future under God’s reign:</p>

<blockquote className="bg-stone-100 border-l-4 border-stone-400 p-4 rounded-r-lg italic font-serif text-stone-700 mb-6">
  <p>“They shall beat their swords into ploughshares, and their spears into pruning hooks; nation shall not lift up sword against nation, neither shall they learn war anymore.”</p>
  <p className="mt-2 text-right text-sm">— Isaiah 2:4</p>
</blockquote>

<p className="mb-4">The sword becomes a ploughshare. What was used to destroy is used to cultivate. What once produced death becomes an instrument that sustains life. This is the transformation promised under Christ's reign.</p>

<p className="mb-4">We may not determine what nations place in space. But we can decide to cultivate peace within our homes, our church and our relationships.</p>

<p className="mb-4">Jesus said, “Blessed are the peacemakers” (Matthew 5:9). Peacemakers are not people who avoid difficult issues. They speak the truth in love, take the initiative to forgive and seek to restore broken relationships.</p>

<p className="mb-4">Before we pray for peace among the nations, let us ask ourselves:</p>

<p className="font-bold text-lg text-center text-stone-800 border-y border-stone-200 py-4 my-6">With whom do I need to make peace?</p>

<p className="mb-4">Is there a telephone call we need to make? Do we need to ask someone for forgiveness? Is there resentment we need to release? Do we need to take the first step towards repairing a broken relationship?</p>

<p className="mb-4">Humanity has reached the heavens, yet it continues to search for the way to peace. Jesus did not merely show us that way—He came to be our peace.</p>

<p className="mb-4">While the world places weapons in the heavens, may the Church sow seeds of peace upon the earth.</p>

<h3 className="text-xl md:text-2xl font-bold text-stone-900 mt-10 mb-4 border-b border-stone-200 pb-2">PRAYER POINTS</h3>
<ul className="list-disc pl-6 space-y-2 text-stone-700 mb-8">
  <li>Pray that world leaders will act with wisdom, restraint and responsibility.</li>
  <li>Pray that space will not become another battlefield but will be used for the good of humanity.</li>
  <li>Pray for people affected by war and international conflict.</li>
  <li>Pray for reconciliation within broken families, churches and communities.</li>
  <li>Pray that we will not merely speak about peace but actively become peacemakers.</li>
</ul>

<h3 className="text-xl md:text-2xl font-bold text-stone-900 mt-10 mb-4 border-b border-stone-200 pb-2">CLOSING PRAYER</h3>
<p className="mb-4">God of peace, the heavens and the earth belong to You. Give wisdom and responsibility to the leaders of the nations. Protect those whose lives are affected by war, threats and conflict.</p>

<p className="mb-4">Lord Jesus, You are our peace. Remove the pride, anger, fear and hostility within our hearts. Make us not merely people who speak about peace, but people who create peace.</p>

<p className="mb-4">Use us to sow Your peace in our homes, our church and our community. May our confidence rest not in human power, but in You—the Prince of Peace.</p>

<p className="mb-8">In Jesus’ name, amen.</p>

<div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl mt-8 mb-8 shadow-md border-2 border-stone-200">
  <iframe 
    className="absolute top-0 left-0 w-full h-full" 
    src="https://www.youtube.com/embed/2xoqMtOyiR8" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowFullScreen>
  </iframe>
</div>
"""

sidebar_html = """
              <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6">
                <h3 className="font-bold text-lg text-stone-900 mb-4 pb-2 border-b border-stone-100 flex items-center gap-2">
                  <Globe className="w-5 h-5 text-accent" />
                  மொழி / Language
                </h3>
                <div className="flex flex-col gap-3">
                  <Link href="/pastors-desk" className="flex items-center justify-between p-3 rounded-lg border border-stone-200 hover:border-accent hover:bg-accent/5 transition-all group">
                    <span className="font-medium text-stone-700 group-hover:text-accent">தமிழ் (Tamil)</span>
                    <span className="text-xs bg-stone-100 px-2 py-1 rounded text-stone-500">தற்போதைய</span>
                  </Link>
                  <Link href="/en/pastors-desk" className="flex items-center justify-between p-3 rounded-lg border border-stone-200 hover:border-accent hover:bg-accent/5 transition-all group">
                    <span className="font-medium text-stone-700 group-hover:text-accent">English</span>
                  </Link>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6">
                <h3 className="font-bold text-lg text-stone-900 mb-4 pb-2 border-b border-stone-100 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent" />
                  முந்தைய வெளியீடுகள்
                </h3>
                <div className="space-y-3">
                  <h4 className="font-bold text-xs text-stone-400 uppercase tracking-wider mb-2 pl-2">September 2026</h4>
                  <Link href="/pastors-desk" className="group flex items-start gap-2 p-3 rounded-md bg-stone-50 border border-stone-200 hover:border-accent hover:bg-accent/5 transition-colors">
                    <ChevronRight className="w-4 h-4 text-accent mt-0.5 shrink-0 transition-colors" />
                    <div>
                      <p className="text-sm font-medium text-stone-900 font-bold group-hover:text-primary transition-colors">Edition 11</p>
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
"""

english_sidebar_html = sidebar_html.replace('href="/pastors-desk', 'href="/en/pastors-desk')
english_sidebar_html = english_sidebar_html.replace('தமிழ் (Tamil)', 'Tamil')
english_sidebar_html = english_sidebar_html.replace('தற்போதைய', 'Current')
english_sidebar_html = english_sidebar_html.replace('முந்தைய வெளியீடுகள்', 'Previous Editions')

def build_page(lang, title, subtitle, edition_num, edition_image, html_content, sidebar_content):
    if lang == "ta":
        metadata_title = f"VEC-NL 2026-09 Edition {edition_num} - போதகர் மேசையிலிருந்து"
        path = "/pastors-desk"
        badge = "போதகர் மேசையிலிருந்து"
    else:
        metadata_title = f"VEC-NL 2026-09 Edition {edition_num} - From the Pastor's Desk"
        path = "/en/pastors-desk"
        badge = "From the Pastor's Desk"

    return f"""import React from "react";
import {{ Calendar as CalendarIcon, FileText, ChevronRight, Globe }} from "lucide-react";
import Link from "next/link";
import {{ NewsletterForm }} from "@/components/NewsletterForm";
import {{ buildMetadata }} from "@/lib/seo";

export const metadata = buildMetadata({{
  locale: "{lang}",
  title: "{metadata_title}",
  description: "{subtitle}",
  path: "{path}",
  image: "{edition_image}"
}});

export default function PastorsDeskPage() {{
  return (
    <main className="min-h-screen bg-stone-50 py-12">
      <section 
        className="relative text-white py-16 md:py-24 text-center overflow-hidden bg-cover bg-center bg-no-repeat bg-[#0F172A]"
        style={{{{ backgroundImage: "url('/pastor-desk-hero.jpg')" }}}}
      >
        <div className="absolute inset-0 bg-[#0F172A]/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-[#0F172A]/30"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center justify-center gap-2 mb-6">
            <span className="h-px w-8 bg-accent/30"></span>
            <span className="text-accent font-bold tracking-widest uppercase text-sm flex items-center gap-2">
              <FileText className="w-4 h-4" />
              {badge}
            </span>
            <span className="h-px w-8 bg-accent/30"></span>
          </div>
          <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-stone-300 font-serif italic mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="flex items-center justify-center gap-4 text-sm font-medium text-stone-300">
            <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">VEC-NL • Edition #0{edition_num}</span>
            <span className="flex items-center gap-1"><CalendarIcon className="w-4 h-4 text-accent" /> செப்டம்பர் 2026</span>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6 md:p-10 text-stone-800">
              <div className="prose prose-stone max-w-none text-stone-700 space-y-6 leading-relaxed text-base md:text-lg relative z-10">
                {html_content}
              </div>
            </div>
          </div>
          
          <aside className="lg:col-span-4 space-y-8">
{sidebar_content}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-200 p-6">
              <NewsletterForm />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}}
"""

tamil_page = build_page(
    lang="ta",
    title="வானங்களை எட்டினோம்; சமாதானத்தை அடைந்தோமா?",
    subtitle="We Have Reached the Heavens—But Have We Found Peace?",
    edition_num=11,
    edition_image="/edition-11-joe-marino.jpg",
    html_content=tamil_html,
    sidebar_content=sidebar_html
)

english_page = build_page(
    lang="en",
    title="WE HAVE REACHED THE HEAVENS—BUT HAVE WE FOUND PEACE?",
    subtitle="Have the competition and tensions among nations on Earth now extended into space?",
    edition_num=11,
    edition_image="/edition-11-joe-marino.jpg",
    html_content=english_html,
    sidebar_content=english_sidebar_html
)

with open("src/app/pastors-desk/page.tsx", "w") as f:
    f.write(tamil_page)

with open("src/app/en/pastors-desk/page.tsx", "w") as f:
    f.write(english_page)

print("Pages regenerated successfully!")
